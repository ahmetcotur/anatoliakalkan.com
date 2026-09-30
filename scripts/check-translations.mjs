import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const menuSource = readFileSync(new URL('src/data/menuData.ts', root), 'utf8');
const menus = JSON.parse(menuSource.split('export const RESTAURANT_MENUS: RestaurantMenu[] = ')[1].trim().replace(/;$/, ''));
const uiSource = readFileSync(new URL('src/i18n.ts', root), 'utf8');
const messages = JSON.parse(uiSource.split('export const UI_MESSAGES = ')[1].split(' as const;')[0]);
const languages = ['tr', 'en', 'ru'];
const placeholders = (value) => [...value.matchAll(/\{(\w+)\}/g)].map((match) => match[1]).sort();
function verify(text, label, allowEmpty = false) {
  for (const language of languages) {
    assert.equal(typeof text[language], 'string', `${label}: missing ${language}`);
    if (!allowEmpty) assert(text[language].trim(), `${label}: empty ${language}`);
    assert.deepEqual(placeholders(text[language]), placeholders(text.en), `${label}: inconsistent placeholders in ${language}`);
  }
  if (text.en && allowEmpty) assert(/[А-Яа-яЁё]/.test(text.ru), `${label}: untranslated Russian description`);
}
for (const [key, text] of Object.entries(messages)) verify(text, key);
const ids = [];
for (const menu of menus) {
  verify(menu.title, menu.id);
  verify(menu.subtitle, menu.id + ' subtitle');
  for (const group of menu.groups) {
    verify(group.title, group.id);
    if (group.note) verify(group.note, group.id + ' note');
    for (const item of group.items) {
      verify(item.name, item.id);
      verify(item.description, item.id + ' description', true);
      assert(!('price' in item), `Unexpected price in ${item.id}`);
      ids.push(item.id);
    }
  }
}
assert.deepEqual(menus.map((menu) => menu.groups.reduce((total, group) => total + group.items.length, 0)), [53, 66, 130]);
assert.equal(new Set(ids).size, 249);
assert(!menuSource.includes('₺'));
console.log(`PASS: ${Object.keys(messages).length} UI messages and 249 menu records complete in TR / EN / RU; placeholders match; Russian descriptions translated; no prices.`);
