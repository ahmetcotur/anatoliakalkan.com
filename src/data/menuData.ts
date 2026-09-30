// Transcribed from RestoranMenu/lunch1.jpg, lunch2.jpg, Dinnermenu.pdf and icecekmenusu.pdf.
// Prices are intentionally omitted. Descriptions only include source information.
// Keep lunch and dinner variants separate. All text fields are required in Turkish, English and Russian.
export type MenuText = { tr: string; en: string; ru: string };
export type MenuId = 'lunch' | 'dinner' | 'drinks';
export interface RestaurantMenuItem { id: string; name: MenuText; description: MenuText }
export interface RestaurantMenuGroup { id: string; title: MenuText; note?: MenuText; items: RestaurantMenuItem[] }
export interface RestaurantMenu { id: MenuId; title: MenuText; subtitle: MenuText; groups: RestaurantMenuGroup[] }
export const RESTAURANT_MENUS: RestaurantMenu[] = [
  {
    "id": "lunch",
    "title": {
      "tr": "Kahvaltı & Lunch",
      "en": "Breakfast & Lunch",
      "ru": "Завтрак и обед"
    },
    "subtitle": {
      "tr": "Güne güzel bir başlangıç, öğleye lezzetli bir mola.",
      "en": "A lovely start to the day, a delicious pause for lunch.",
      "ru": "Прекрасное начало дня и вкусный перерыв на обед."
    },
    "groups": [
      {
        "id": "breakfast",
        "title": {
          "tr": "Kahvaltılar",
          "en": "Breakfasts",
          "ru": "Завтраки"
        },
        "items": [
          {
            "name": {
              "tr": "İngiliz Kahvaltısı",
              "en": "English Breakfast",
              "ru": "Английский завтрак"
            },
            "description": {
              "tr": "Pastırma, sosis, mantar, domates, sahanda yumurta, fasulye, kızarmış ekmek.",
              "en": "Bacon, sausages, mushrooms, tomatoes, fried eggs, beans, toasted bread.",
              "ru": "Бекон, сосиски, грибы, помидоры, яичница, фасоль, тосты."
            },
            "id": "lunch-breakfast-1"
          },
          {
            "name": {
              "tr": "Türk Kahvaltısı",
              "en": "Turkish Breakfast",
              "ru": "Турецкий завтрак"
            },
            "description": {
              "tr": "Yumurta, domates, salatalık, peynir, zeytin, bal, reçel, salam.",
              "en": "Eggs, tomatoes, cucumbers, cheese, olives, honey, jam, salami.",
              "ru": "Яйца, помидоры, огурцы, сыр, оливки, мёд, джем, салями."
            },
            "id": "lunch-breakfast-2"
          },
          {
            "name": {
              "tr": "Kızarmış Ekmek Üzerinde Yumurta",
              "en": "Fried Egg on Toast",
              "ru": "Тост с яичницей"
            },
            "description": {
              "tr": "Dilimlenmiş kızarmış ekmek, sahanda yumurta, yeşillikler.",
              "en": "Sliced toasted bread, fried eggs, greens.",
              "ru": "Поджаренный хлеб, яичница, зелень."
            },
            "id": "lunch-breakfast-3"
          },
          {
            "name": {
              "tr": "Kızarmış Ekmek Üzerinde Çırpılmış Yumurta",
              "en": "Scrambled Egg on Toast",
              "ru": "Тост с яичницей-болтуньей"
            },
            "description": {
              "tr": "Kızarmış ekmek, çırpılmış yumurta, domates, yeşillik.",
              "en": "Toasted bread, scrambled eggs, tomatoes, greens.",
              "ru": "Тосты, яичница-болтунья, помидоры, зелень."
            },
            "id": "lunch-breakfast-4"
          },
          {
            "name": {
              "tr": "BLT Sandviç",
              "en": "BLT Sandwich",
              "ru": "Сэндвич BLT"
            },
            "description": {
              "tr": "Domates, pastırma, marul.",
              "en": "Tomatoes, bacon, lettuce.",
              "ru": "Помидоры, бекон, салат."
            },
            "id": "lunch-breakfast-5"
          },
          {
            "name": {
              "tr": "Kızarmış Ekmek Üzeri Fasulye",
              "en": "Beans on Toast",
              "ru": "Тост с фасолью"
            },
            "description": {
              "tr": "Fasulye, kızarmış ekmek.",
              "en": "Beans, toasted bread.",
              "ru": "Фасоль, тосты."
            },
            "id": "lunch-breakfast-6"
          },
          {
            "name": {
              "tr": "Kızarmış Ekmek Üzeri Avokado",
              "en": "Avocado on Toast",
              "ru": "Тост с авокадо"
            },
            "description": {
              "tr": "Labne, avokado, kızarmış ekmek.",
              "en": "Mild cream cheese, avocado, toasted bread.",
              "ru": "Нежный сливочный сыр, авокадо, тосты."
            },
            "id": "lunch-breakfast-7"
          }
        ]
      },
      {
        "id": "omelettes",
        "title": {
          "tr": "Omletler",
          "en": "Omelettes",
          "ru": "Омлеты"
        },
        "items": [
          {
            "name": {
              "tr": "Klasik Omlet",
              "en": "Classic Omelette",
              "ru": "Классический омлет"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "lunch-omelettes-1"
          },
          {
            "name": {
              "tr": "Peynir & Domatesli Omlet",
              "en": "Cheese & Tomato Omelette",
              "ru": "Омлет с сыром и помидорами"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "lunch-omelettes-2"
          },
          {
            "name": {
              "tr": "Mantar & Peynirli Omlet",
              "en": "Mushroom & Cheese Omelette",
              "ru": "Омлет с грибами и сыром"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "lunch-omelettes-3"
          },
          {
            "name": {
              "tr": "Sucuklu Omlet",
              "en": "Turkish Sausage Omelette",
              "ru": "Омлет с суджуком"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "lunch-omelettes-4"
          },
          {
            "name": {
              "tr": "Pastırmalı Omlet",
              "en": "Bacon Omelette",
              "ru": "Омлет с беконом"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "lunch-omelettes-5"
          },
          {
            "name": {
              "tr": "Sucuk & Peynirli Omlet",
              "en": "Turkish Sausage & Cheese Omelette",
              "ru": "Омлет с суджуком и сыром"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "lunch-omelettes-6"
          },
          {
            "name": {
              "tr": "Menemen",
              "en": "Menemen",
              "ru": "Менемен"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "lunch-omelettes-7"
          }
        ]
      },
      {
        "id": "crepes",
        "title": {
          "tr": "Krepler",
          "en": "Crepes",
          "ru": "Блинчики"
        },
        "items": [
          {
            "name": {
              "tr": "Limon Şekerli Krep",
              "en": "Lemon Sugar Crepes",
              "ru": "Блинчики с лимоном и сахаром"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "lunch-crepes-1"
          },
          {
            "name": {
              "tr": "Ballı Muzlu Krep",
              "en": "Honey Banana Crepes",
              "ru": "Блинчики с мёдом и бананом"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "lunch-crepes-2"
          },
          {
            "name": {
              "tr": "Çikolatalı Muzlu Krep",
              "en": "Chocolate Banana Crepes",
              "ru": "Блинчики с шоколадом и бананом"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "lunch-crepes-3"
          },
          {
            "name": {
              "tr": "Çilekli Muzlu Krep",
              "en": "Strawberry Banana Crepes",
              "ru": "Блинчики с клубникой и бананом"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "lunch-crepes-4"
          }
        ]
      },
      {
        "id": "pasta-wraps",
        "title": {
          "tr": "Makarna & Dürümler",
          "en": "Pasta & Wraps",
          "ru": "Паста и дюрюм"
        },
        "items": [
          {
            "name": {
              "tr": "Penne Arrabbiata",
              "en": "Penne Arrabbiata",
              "ru": "Пенне арраббьята"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "lunch-pasta-wraps-1"
          },
          {
            "name": {
              "tr": "Spaghetti Bolognese",
              "en": "Spaghetti Bolognese",
              "ru": "Спагетти болоньезе"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "lunch-pasta-wraps-2"
          },
          {
            "name": {
              "tr": "Fettuccine Alfredo",
              "en": "Fettuccine Alfredo",
              "ru": "Феттучине альфредо"
            },
            "description": {
              "tr": "Tavuk, soğan, krema, mantar.",
              "en": "Chicken, onions, cream, mushroom.",
              "ru": "Курица, лук, сливки, грибы."
            },
            "id": "lunch-pasta-wraps-3"
          },
          {
            "name": {
              "tr": "Deniz Ürünlü Fettuccine",
              "en": "Fettuccine with Seafood",
              "ru": "Феттучине с морепродуктами"
            },
            "description": {
              "tr": "Karides, kalamar, mantar, sarımsak, krema.",
              "en": "Prawns, calamari, mushroom, garlic, cream.",
              "ru": "Креветки, кальмары, грибы, чеснок, сливки."
            },
            "id": "lunch-pasta-wraps-4"
          },
          {
            "name": {
              "tr": "Spaghetti Carbonara",
              "en": "Spaghetti Carbonara",
              "ru": "Спагетти карбонара"
            },
            "description": {
              "tr": "Dana jambon, soğan, maydanoz, krema, yumurta sarısı.",
              "en": "Beef ham, onion, parsley, cream, egg yolk.",
              "ru": "Говяжья ветчина, лук, петрушка, сливки, яичный желток."
            },
            "id": "lunch-pasta-wraps-5"
          },
          {
            "name": {
              "tr": "Tavuk Dürüm",
              "en": "Chicken Wrap",
              "ru": "Дюрюм с курицей"
            },
            "description": {
              "tr": "Soğan, domates, turşu, marul, kokteyl sos.",
              "en": "Onions, tomatoes, pickle, lettuce, cocktail sauce.",
              "ru": "Лук, помидоры, маринованные огурцы, салат, коктейльный соус."
            },
            "id": "lunch-pasta-wraps-6"
          },
          {
            "name": {
              "tr": "Köfte Dürüm",
              "en": "Meatball Wrap",
              "ru": "Дюрюм с кёфте"
            },
            "description": {
              "tr": "Soğan, domates, turşu, marul, kokteyl sos.",
              "en": "Onions, tomatoes, pickle, lettuce, cocktail sauce.",
              "ru": "Лук, помидоры, маринованные огурцы, салат, коктейльный соус."
            },
            "id": "lunch-pasta-wraps-7"
          }
        ]
      },
      {
        "id": "fresh-green",
        "title": {
          "tr": "Taze & Yeşillikler",
          "en": "Fresh & Green",
          "ru": "Свежие салаты"
        },
        "items": [
          {
            "name": {
              "tr": "Hellim Salata",
              "en": "Halloumi Salad",
              "ru": "Салат с халлуми"
            },
            "description": {
              "tr": "Hellim peyniri, marul, roka, domates, salatalık, kırmızı soğan, maydanoz, mısır.",
              "en": "Halloumi cheese, lettuce, rocket, tomatoes, cucumbers, red onions, parsley, corn.",
              "ru": "Сыр халлуми, салат, руккола, помидоры, огурцы, красный лук, петрушка, кукуруза."
            },
            "id": "lunch-fresh-green-1"
          },
          {
            "name": {
              "tr": "Avokado Salatası",
              "en": "Avocado Salad",
              "ru": "Салат с авокадо"
            },
            "description": {
              "tr": "Avokado, marul, roka, kırmızı soğan, salatalık, çeri domates, mısır.",
              "en": "Avocado, lettuce, rocket, red onions, cucumbers, cherry tomatoes, corn.",
              "ru": "Авокадо, салат, руккола, красный лук, огурцы, помидоры черри, кукуруза."
            },
            "id": "lunch-fresh-green-2"
          },
          {
            "name": {
              "tr": "Yunan Salata",
              "en": "Greek Salad",
              "ru": "Греческий салат"
            },
            "description": {
              "tr": "Domates, salatalık, beyaz peynir, zeytin, kırmızı yapraklı marul.",
              "en": "Tomatoes, cucumbers, white cheese, olives, red leaf lettuce.",
              "ru": "Помидоры, огурцы, белый сыр, оливки, краснолистный салат."
            },
            "id": "lunch-fresh-green-3"
          },
          {
            "name": {
              "tr": "Deniz Ürünleri Salata",
              "en": "Seafood Salad",
              "ru": "Салат с морепродуктами"
            },
            "description": {
              "tr": "Enginar, kırmızı yapraklı marul, soğan, roka, marul, karides.",
              "en": "Artichoke, red leaf lettuce, onion, rocket, lettuce, prawns.",
              "ru": "Артишок, краснолистный салат, лук, руккола, салат, креветки."
            },
            "id": "lunch-fresh-green-4"
          }
        ]
      },
      {
        "id": "house-salads",
        "title": {
          "tr": "Salatalar",
          "en": "House Salads",
          "ru": "Салаты"
        },
        "items": [
          {
            "name": {
              "tr": "Roka Salatası",
              "en": "Rocket Salad",
              "ru": "Салат с рукколой"
            },
            "description": {
              "tr": "Roka, domates, soğan, parmesan peyniri, ceviz, nar.",
              "en": "Rocket, tomatoes, onions, parmesan cheese, walnut, pomegranate.",
              "ru": "Руккола, помидоры, лук, пармезан, грецкий орех, гранат."
            },
            "id": "lunch-house-salads-1"
          },
          {
            "name": {
              "tr": "Ton Balıklı Salata",
              "en": "Tuna Salad",
              "ru": "Салат с тунцом"
            },
            "description": {
              "tr": "Ton balığı, marul, domates, mısır, salatalık, roka, turşu, soğan.",
              "en": "Tuna, lettuce, tomatoes, corn, cucumbers, rocket, pickles, onions.",
              "ru": "Тунец, салат, помидоры, кукуруза, огурцы, руккола, маринованные огурцы, лук."
            },
            "id": "lunch-house-salads-2"
          },
          {
            "name": {
              "tr": "Tavuklu Salata",
              "en": "Chicken Salad",
              "ru": "Салат с курицей"
            },
            "description": {
              "tr": "Marul, kırmızı biber, soğan, zeytinyağı, portakal sosu.",
              "en": "Lettuce, red pepper, onions, olive oil, orange sauce.",
              "ru": "Салат, красный перец, лук, оливковое масло, апельсиновый соус."
            },
            "id": "lunch-house-salads-3"
          },
          {
            "name": {
              "tr": "Çoban Salata",
              "en": "Shepherd Salad",
              "ru": "Салат «Чобан»"
            },
            "description": {
              "tr": "Domates, salatalık, soğan, yeşil biber, maydanoz.",
              "en": "Tomatoes, cucumbers, onions, green pepper, parsley.",
              "ru": "Помидоры, огурцы, лук, зелёный перец, петрушка."
            },
            "id": "lunch-house-salads-4"
          }
        ]
      },
      {
        "id": "classic-pizza",
        "title": {
          "tr": "Klasik Pizzalar",
          "en": "Classic Pizza",
          "ru": "Классическая пицца"
        },
        "items": [
          {
            "name": {
              "tr": "4 Peynirli Pizza",
              "en": "Four Cheese Pizza",
              "ru": "Пицца «Четыре сыра»"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "lunch-classic-pizza-1"
          },
          {
            "name": {
              "tr": "Margherita",
              "en": "Pizza Margherita",
              "ru": "Пицца «Маргарита»"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "lunch-classic-pizza-2"
          },
          {
            "name": {
              "tr": "Akdeniz Pizza",
              "en": "Pizza Akdeniz",
              "ru": "Пицца «Акдениз»"
            },
            "description": {
              "tr": "Beyaz peynir, domates, yeşil ve kırmızı biber, zeytin, maydanoz.",
              "en": "White cheese, tomatoes, green & red pepper, olives, parsley.",
              "ru": "Белый сыр, помидоры, зелёный и красный перец, оливки, петрушка."
            },
            "id": "lunch-classic-pizza-3"
          },
          {
            "name": {
              "tr": "Hawai Pizza",
              "en": "Hawaiian Pizza",
              "ru": "Гавайская пицца"
            },
            "description": {
              "tr": "Ananas, dana jambon.",
              "en": "Pineapple, beef ham.",
              "ru": "Ананас, говяжья ветчина."
            },
            "id": "lunch-classic-pizza-4"
          },
          {
            "name": {
              "tr": "Meksika Usulü Pizza",
              "en": "Mexican Pizza",
              "ru": "Мексиканская пицца"
            },
            "description": {
              "tr": "Dana kıyma, acılı sosis, acı biber, mısır.",
              "en": "Beef mince, spicy sausages, chilli pepper, corn.",
              "ru": "Говяжий фарш, острые колбаски, перец чили, кукуруза."
            },
            "id": "lunch-classic-pizza-5"
          },
          {
            "name": {
              "tr": "Tavuklu Pizza",
              "en": "Chicken Pizza",
              "ru": "Пицца с курицей"
            },
            "description": {
              "tr": "Tavuk, domates, yeşil biber, mısır.",
              "en": "Chicken, tomatoes, green pepper, corn.",
              "ru": "Курица, помидоры, зелёный перец, кукуруза."
            },
            "id": "lunch-classic-pizza-6"
          }
        ]
      },
      {
        "id": "house-pizza",
        "title": {
          "tr": "Spesiyal Pizzalar",
          "en": "House Selection Pizzas",
          "ru": "Фирменная пицца"
        },
        "items": [
          {
            "name": {
              "tr": "Deniz Ürünlü Pizza",
              "en": "Pizza with Seafood",
              "ru": "Пицца с морепродуктами"
            },
            "description": {
              "tr": "Karides, kalamar, sarımsak.",
              "en": "Prawns, calamari, garlic.",
              "ru": "Креветки, кальмары, чеснок."
            },
            "id": "lunch-house-pizza-1"
          },
          {
            "name": {
              "tr": "Ton Balıklı Pizza",
              "en": "Tuna Pizza",
              "ru": "Пицца с тунцом"
            },
            "description": {
              "tr": "Kırmızı soğan, zeytin.",
              "en": "Red onions, olives.",
              "ru": "Красный лук, оливки."
            },
            "id": "lunch-house-pizza-2"
          },
          {
            "name": {
              "tr": "Mantarlı Pizza",
              "en": "Mushroom Pizza",
              "ru": "Пицца с грибами"
            },
            "description": {
              "tr": "Mantar, soğan.",
              "en": "Mushrooms, onion.",
              "ru": "Грибы, лук."
            },
            "id": "lunch-house-pizza-3"
          },
          {
            "name": {
              "tr": "Karışık Pizza",
              "en": "Mixed Pizza",
              "ru": "Пицца «Ассорти»"
            },
            "description": {
              "tr": "Salam, sosis, zeytin, mısır, kırmızı biber, yeşil biber, soğan, mantar.",
              "en": "Salami, sausages, olives, corn, red pepper, green pepper, onion, mushrooms.",
              "ru": "Салями, сосиски, оливки, кукуруза, красный и зелёный перец, лук, грибы."
            },
            "id": "lunch-house-pizza-4"
          },
          {
            "name": {
              "tr": "Etli Pizza",
              "en": "Meaty Pizza",
              "ru": "Мясная пицца"
            },
            "description": {
              "tr": "Salam, Türk sucuğu, sosis.",
              "en": "Salami, Turkish sausages, sausages.",
              "ru": "Салями, суджук, сосиски."
            },
            "id": "lunch-house-pizza-5"
          }
        ]
      },
      {
        "id": "beef-burgers",
        "title": {
          "tr": "Köfte Burgerler",
          "en": "Beef Burgers",
          "ru": "Бургеры с говядиной"
        },
        "items": [
          {
            "name": {
              "tr": "Hamburger",
              "en": "Hamburger",
              "ru": "Гамбургер"
            },
            "description": {
              "tr": "120 g dana köfte, domates, marul, turşu, cips.",
              "en": "120 g beef patty, tomatoes, lettuce, pickles, chips.",
              "ru": "Говяжья котлета 120 г, помидоры, салат, маринованные огурцы, картофель фри."
            },
            "id": "lunch-beef-burgers-1"
          },
          {
            "name": {
              "tr": "Peynirli Burger",
              "en": "Cheeseburger",
              "ru": "Чизбургер"
            },
            "description": {
              "tr": "120 g dana köfte, domates, marul, turşu, çedar peyniri, cips.",
              "en": "120 g beef patty, tomatoes, lettuce, pickles, cheddar cheese, chips.",
              "ru": "Говяжья котлета 120 г, помидоры, салат, маринованные огурцы, сыр чеддер, картофель фри."
            },
            "id": "lunch-beef-burgers-2"
          },
          {
            "name": {
              "tr": "Pastırmalı Hamburger",
              "en": "Hamburger with Bacon",
              "ru": "Гамбургер с беконом"
            },
            "description": {
              "tr": "120 g dana köfte, domates, marul, turşu, bacon, patates kızartması.",
              "en": "120 g beef patty, tomatoes, lettuce, pickles, bacon, chips.",
              "ru": "Говяжья котлета 120 г, помидоры, салат, маринованные огурцы, бекон, картофель фри."
            },
            "id": "lunch-beef-burgers-3"
          },
          {
            "name": {
              "tr": "Pastırmalı Peynirli Burger",
              "en": "Cheeseburger with Bacon",
              "ru": "Чизбургер с беконом"
            },
            "description": {
              "tr": "120 g dana köfte, domates, marul, turşu, çedar peyniri, bacon, cips.",
              "en": "120 g beef patty, tomatoes, lettuce, pickles, cheddar cheese, bacon, chips.",
              "ru": "Говяжья котлета 120 г, помидоры, салат, маринованные огурцы, сыр чеддер, бекон, картофель фри."
            },
            "id": "lunch-beef-burgers-4"
          },
          {
            "name": {
              "tr": "Meksika Usulü Hamburger",
              "en": "Mexican Hamburger",
              "ru": "Мексиканский гамбургер"
            },
            "description": {
              "tr": "120 g dana köfte, domates, marul, turşu, acı sos, patates kızartması.",
              "en": "120 g beef patty, tomatoes, lettuce, pickles, chilli sauce, chips.",
              "ru": "Говяжья котлета 120 г, помидоры, салат, маринованные огурцы, соус чили, картофель фри."
            },
            "id": "lunch-beef-burgers-5"
          },
          {
            "name": {
              "tr": "Meksika Usulü Peynirli Burger",
              "en": "Mexican Cheeseburger",
              "ru": "Мексиканский чизбургер"
            },
            "description": {
              "tr": "120 g dana köfte, domates, marul, turşu, çedar peyniri, acı sos, patates kızartması.",
              "en": "120 g beef patty, tomatoes, lettuce, pickles, cheddar cheese, chilli sauce, chips.",
              "ru": "Говяжья котлета 120 г, помидоры, салат, маринованные огурцы, сыр чеддер, соус чили, картофель фри."
            },
            "id": "lunch-beef-burgers-6"
          }
        ]
      },
      {
        "id": "chicken-burgers",
        "title": {
          "tr": "Tavuk Burgerler",
          "en": "Chicken Burgers",
          "ru": "Бургеры с курицей"
        },
        "items": [
          {
            "name": {
              "tr": "Tavuk Burger",
              "en": "Chicken Burger",
              "ru": "Куриный бургер"
            },
            "description": {
              "tr": "120 g tavuk köftesi, domates, marul, turşu, cips.",
              "en": "120 g chicken patty, tomatoes, lettuce, pickles, chips.",
              "ru": "Куриная котлета 120 г, помидоры, салат, маринованные огурцы, картофель фри."
            },
            "id": "lunch-chicken-burgers-1"
          },
          {
            "name": {
              "tr": "Tavuk Peynirli Burger",
              "en": "Chicken Cheeseburger",
              "ru": "Куриный чизбургер"
            },
            "description": {
              "tr": "120 g tavuk köftesi, domates, marul, turşu, çedar peyniri, cips.",
              "en": "120 g chicken patty, tomatoes, lettuce, pickles, cheddar cheese, chips.",
              "ru": "Куриная котлета 120 г, помидоры, салат, маринованные огурцы, сыр чеддер, картофель фри."
            },
            "id": "lunch-chicken-burgers-2"
          },
          {
            "name": {
              "tr": "Pastırmalı Tavuk Burger",
              "en": "Chicken Burger with Bacon",
              "ru": "Куриный бургер с беконом"
            },
            "description": {
              "tr": "120 g tavuk köftesi, domates, marul, turşu, bacon, patates kızartması.",
              "en": "120 g chicken patty, tomatoes, lettuce, pickles, bacon, chips.",
              "ru": "Куриная котлета 120 г, помидоры, салат, маринованные огурцы, бекон, картофель фри."
            },
            "id": "lunch-chicken-burgers-3"
          }
        ]
      }
    ]
  },
  {
    "id": "dinner",
    "title": {
      "tr": "Dinner · Akşam Menüsü",
      "en": "Dinner",
      "ru": "Ужин"
    },
    "subtitle": {
      "tr": "Mezelerden ızgaralara, Akdeniz’den sofranıza.",
      "en": "From small plates to the grill, from the Mediterranean to your table.",
      "ru": "От закусок до блюд на гриле — Средиземноморье на вашем столе."
    },
    "groups": [
      {
        "id": "starters",
        "title": {
          "tr": "Başlangıçlar",
          "en": "Cold & Hot Starters",
          "ru": "Холодные и горячие закуски"
        },
        "items": [
          {
            "name": {
              "tr": "Tavuk Köri Çorbası",
              "en": "Chicken Curry Soup",
              "ru": "Куриный суп с карри"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-starters-1"
          },
          {
            "name": {
              "tr": "Domates Çorbası",
              "en": "Tomato Soup",
              "ru": "Томатный суп"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-starters-2"
          },
          {
            "name": {
              "tr": "Haydari",
              "en": "Haydari",
              "ru": "Хайдари"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-starters-3"
          },
          {
            "name": {
              "tr": "Humus",
              "en": "Hummus",
              "ru": "Хумус"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-starters-4"
          },
          {
            "name": {
              "tr": "Atom",
              "en": "Atom",
              "ru": "Атом"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-starters-5"
          },
          {
            "name": {
              "tr": "Kalamar Tava",
              "en": "Deep-fried Calamari",
              "ru": "Жареные кальмары"
            },
            "description": {
              "tr": "Tartar sos, yeşillikler.",
              "en": "Tartar sauce, greens.",
              "ru": "Соус тартар, зелень."
            },
            "id": "dinner-starters-6"
          },
          {
            "name": {
              "tr": "Sigara Böreği",
              "en": "Cheese Rolls",
              "ru": "Сигара-бёрек с сыром"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-starters-7"
          },
          {
            "name": {
              "tr": "Şakşuka",
              "en": "Shakshuka",
              "ru": "Шакшука"
            },
            "description": {
              "tr": "Kızarmış patlıcan, domates sosu.",
              "en": "Fried aubergine, tomato sauce.",
              "ru": "Жареные баклажаны, томатный соус."
            },
            "id": "dinner-starters-8"
          },
          {
            "name": {
              "tr": "Mücver",
              "en": "Zucchini Patties",
              "ru": "Мюджвер — оладьи из кабачков"
            },
            "description": {
              "tr": "Yumurta, un ve domates soslu kızarmış kabak mücveri.",
              "en": "Fried zucchini patties with egg, flour and tomato sauce.",
              "ru": "Жареные оладьи из кабачков с яйцом, мукой и томатным соусом."
            },
            "id": "dinner-starters-9"
          },
          {
            "name": {
              "tr": "Sarımsaklı Karides",
              "en": "Garlic Prawns",
              "ru": "Креветки с чесноком"
            },
            "description": {
              "tr": "Acı biber, baharatlar, tereyağı, sarımsak.",
              "en": "Chilli pepper, seasonings, butter, garlic.",
              "ru": "Перец чили, специи, сливочное масло, чеснок."
            },
            "id": "dinner-starters-10"
          },
          {
            "name": {
              "tr": "Kızarmış Hellim Peyniri",
              "en": "Fried Halloumi Cheese",
              "ru": "Жареный сыр халлуми"
            },
            "description": {
              "tr": "Hellim, tereyağı, acı biber.",
              "en": "Halloumi, butter, chilli pepper.",
              "ru": "Халлуми, сливочное масло, перец чили."
            },
            "id": "dinner-starters-11"
          },
          {
            "name": {
              "tr": "Sarımsaklı Dolgulu Mantar",
              "en": "Stuffed Garlic Mushroom",
              "ru": "Фаршированные грибы с чесноком"
            },
            "description": {
              "tr": "Eritilmiş peynir, mantar, sarımsak, tereyağı.",
              "en": "Melted cheese, mushroom, garlic, butter.",
              "ru": "Расплавленный сыр, грибы, чеснок, сливочное масло."
            },
            "id": "dinner-starters-12"
          },
          {
            "name": {
              "tr": "Karışık Meze Tabağı",
              "en": "Mixed Meze Plate",
              "ru": "Ассорти мезе"
            },
            "description": {
              "tr": "Mücver, humus, atom, sigara böreği, şakşuka.",
              "en": "Mücver, hummus, atom, cheese rolls, shakshuka.",
              "ru": "Мюджвер, хумус, атом, сигара-бёрек с сыром, шакшука."
            },
            "id": "dinner-starters-13"
          }
        ]
      },
      {
        "id": "chicken",
        "title": {
          "tr": "Tavuklar",
          "en": "Chicken",
          "ru": "Блюда из курицы"
        },
        "items": [
          {
            "name": {
              "tr": "Tavuk Şiş",
              "en": "Chicken Shish",
              "ru": "Куриный шашлык"
            },
            "description": {
              "tr": "Izgara sebze, dip sos ve pilav ile servis edilir.",
              "en": "Served with grilled vegetables, dip sauce and rice.",
              "ru": "Подаётся с овощами на гриле, дип-соусом и рисом."
            },
            "id": "dinner-chicken-1"
          },
          {
            "name": {
              "tr": "Köri Soslu Tavuk",
              "en": "Chicken Curry",
              "ru": "Курица с карри"
            },
            "description": {
              "tr": "Köri, krema, mantar, soğan, kırmızı ve yeşil biber, pilav.",
              "en": "Curry, cream, mushrooms, onion, red & green pepper, rice.",
              "ru": "Карри, сливки, грибы, лук, красный и зелёный перец, рис."
            },
            "id": "dinner-chicken-2"
          },
          {
            "name": {
              "tr": "Tavuk Şnitzel",
              "en": "Chicken Schnitzel",
              "ru": "Куриный шницель"
            },
            "description": {
              "tr": "Cips, tereyağı ve ızgara sebzelerle servis edilir.",
              "en": "Served with chips, butter and grilled vegetables.",
              "ru": "Подаётся с картофелем фри, сливочным маслом и овощами на гриле."
            },
            "id": "dinner-chicken-3"
          },
          {
            "name": {
              "tr": "Tavuk Fajita",
              "en": "Chicken Fajita",
              "ru": "Фахита с курицей"
            },
            "description": {
              "tr": "Biber, soğan, pirinç, beyaz şaraplı sos.",
              "en": "Pepper, onion, rice, sauce with white wine.",
              "ru": "Перец, лук, рис, соус с белым вином."
            },
            "id": "dinner-chicken-4"
          },
          {
            "name": {
              "tr": "Kayısılı Tavuk",
              "en": "Apricot Chicken",
              "ru": "Курица с абрикосами"
            },
            "description": {
              "tr": "Kayısı, bal, kırmızı biber, soğan, mantar ve pilav ile servis edilir.",
              "en": "Served with apricot, honey, red pepper, onion, mushroom and rice.",
              "ru": "Подаётся с абрикосами, мёдом, красным перцем, луком, грибами и рисом."
            },
            "id": "dinner-chicken-5"
          },
          {
            "name": {
              "tr": "Tavuk Dolma",
              "en": "Anatolian Stuffed Chicken",
              "ru": "Фаршированная курица по-анатолийски"
            },
            "description": {
              "tr": "Kırmızı biber, turşu, soğan, krema sosu, eritilmiş peynir, mantar.",
              "en": "Red pepper, pickles, onions, cream sauce, melted cheese, mushrooms.",
              "ru": "Красный перец, маринованные огурцы, лук, сливочный соус, расплавленный сыр, грибы."
            },
            "id": "dinner-chicken-6"
          }
        ]
      },
      {
        "id": "salads",
        "title": {
          "tr": "Salatalar",
          "en": "Salads",
          "ru": "Салаты"
        },
        "items": [
          {
            "name": {
              "tr": "Hellim Salata",
              "en": "Halloumi Salad",
              "ru": "Салат с халлуми"
            },
            "description": {
              "tr": "Hellim peyniri, marul, roka, domates, salatalık, kırmızı soğan, maydanoz, mısır.",
              "en": "Halloumi cheese, lettuce, rocket, tomatoes, cucumbers, red onions, parsley, corn.",
              "ru": "Сыр халлуми, салат, руккола, помидоры, огурцы, красный лук, петрушка, кукуруза."
            },
            "id": "dinner-salads-1"
          },
          {
            "name": {
              "tr": "Avokado Salatası",
              "en": "Avocado Salad",
              "ru": "Салат с авокадо"
            },
            "description": {
              "tr": "Avokado, marul, roka, kırmızı soğan, salatalık, çeri domates, mısır.",
              "en": "Avocado, lettuce, rocket, red onions, cucumbers, cherry tomatoes, corn.",
              "ru": "Авокадо, салат, руккола, красный лук, огурцы, помидоры черри, кукуруза."
            },
            "id": "dinner-salads-2"
          },
          {
            "name": {
              "tr": "Yunan Salata",
              "en": "Greek Salad",
              "ru": "Греческий салат"
            },
            "description": {
              "tr": "Domates, salatalık, beyaz peynir, zeytin, soğan.",
              "en": "Tomatoes, cucumbers, white cheese, olives, onion.",
              "ru": "Помидоры, огурцы, белый сыр, оливки, лук."
            },
            "id": "dinner-salads-3"
          },
          {
            "name": {
              "tr": "Deniz Ürünleri Salata",
              "en": "Seafood Salad",
              "ru": "Салат с морепродуктами"
            },
            "description": {
              "tr": "Enginar, kırmızı yapraklı marul, domates, soğan, roka, marul, karides.",
              "en": "Artichoke, red leaf lettuce, tomato, onion, rocket, lettuce, prawns.",
              "ru": "Артишок, краснолистный салат, помидоры, лук, руккола, салат, креветки."
            },
            "id": "dinner-salads-4"
          },
          {
            "name": {
              "tr": "Roka Salatası",
              "en": "Rocket Salad",
              "ru": "Салат с рукколой"
            },
            "description": {
              "tr": "Roka, domates, soğan, parmesan peyniri, ceviz.",
              "en": "Rocket, tomatoes, onions, parmesan cheese, walnut.",
              "ru": "Руккола, помидоры, лук, пармезан, грецкий орех."
            },
            "id": "dinner-salads-5"
          },
          {
            "name": {
              "tr": "Ton Balıklı Salata",
              "en": "Tuna Salad",
              "ru": "Салат с тунцом"
            },
            "description": {
              "tr": "Ton balığı, marul, domates, mısır, salatalık, roka, turşu, soğan.",
              "en": "Tuna, lettuce, tomatoes, corn, cucumbers, rocket, pickles, onions.",
              "ru": "Тунец, салат, помидоры, кукуруза, огурцы, руккола, маринованные огурцы, лук."
            },
            "id": "dinner-salads-6"
          },
          {
            "name": {
              "tr": "Tavuklu Salata",
              "en": "Chicken Salad",
              "ru": "Салат с курицей"
            },
            "description": {
              "tr": "Marul, kırmızı biber, soğan, zeytinyağı, portakal sosu.",
              "en": "Lettuce, red pepper, onions, olive oil, orange sauce.",
              "ru": "Салат, красный перец, лук, оливковое масло, апельсиновый соус."
            },
            "id": "dinner-salads-7"
          },
          {
            "name": {
              "tr": "Çoban Salata",
              "en": "Shepherd Salad",
              "ru": "Салат «Чобан»"
            },
            "description": {
              "tr": "Domates, salatalık, soğan, yeşil biber, maydanoz.",
              "en": "Tomatoes, cucumbers, onions, green pepper, parsley.",
              "ru": "Помидоры, огурцы, лук, зелёный перец, петрушка."
            },
            "id": "dinner-salads-8"
          }
        ]
      },
      {
        "id": "grills",
        "title": {
          "tr": "Izgaralar & Ana Yemekler",
          "en": "Grills & Main Courses",
          "ru": "Гриль и основные блюда"
        },
        "items": [
          {
            "name": {
              "tr": "Köfte",
              "en": "Meatballs",
              "ru": "Кёфте"
            },
            "description": {
              "tr": "Pilav, cips ve ızgara sebzeler ile servis edilir.",
              "en": "Served with rice, chips and grilled vegetables.",
              "ru": "Подаётся с рисом, картофелем фри и овощами на гриле."
            },
            "id": "dinner-grills-1"
          },
          {
            "name": {
              "tr": "Kuzu Şiş",
              "en": "Lamb Shish",
              "ru": "Шашлык из ягнятины"
            },
            "description": {
              "tr": "Pilav, cips ve ızgara sebzeler ile servis edilir.",
              "en": "Served with rice, chips and grilled vegetables.",
              "ru": "Подаётся с рисом, картофелем фри и овощами на гриле."
            },
            "id": "dinner-grills-2"
          },
          {
            "name": {
              "tr": "Kuzu Pirzola",
              "en": "Lamb Chops",
              "ru": "Рёбрышки ягнёнка"
            },
            "description": {
              "tr": "4 pirzola; pilav, cips ve ızgara sebzeler ile servis edilir.",
              "en": "4 chops; served with rice, chips and grilled vegetables.",
              "ru": "4 рёбрышка; подаются с рисом, картофелем фри и овощами на гриле."
            },
            "id": "dinner-grills-3"
          },
          {
            "name": {
              "tr": "Karışık Izgara (1 Kişilik)",
              "en": "Mixed Grill (for 1 person)",
              "ru": "Ассорти гриль (на 1 человека)"
            },
            "description": {
              "tr": "1 pirzola, 1 tavuk, 2 köfte ve dilimlenmiş bonfile.",
              "en": "1 lamb chop, 1 chicken, 2 meatballs, and sliced steak.",
              "ru": "1 ребрышко ягнёнка, 1 порция курицы, 2 кёфте и нарезанный стейк."
            },
            "id": "dinner-grills-4"
          },
          {
            "name": {
              "tr": "Patlıcanlı Musakka",
              "en": "Aubergine Moussaka",
              "ru": "Мусака с баклажанами"
            },
            "description": {
              "tr": "Patlıcan, kıyma ve domates sosu. Güveçte servis edilir.",
              "en": "Aubergine, mince & tomato sauce. Served in a casserole.",
              "ru": "Баклажаны, мясной фарш и томатный соус. Подаётся в горшочке."
            },
            "id": "dinner-grills-5"
          },
          {
            "name": {
              "tr": "Acılı Con Carne",
              "en": "Chilli Con Carne",
              "ru": "Чили кон карне"
            },
            "description": {
              "tr": "Barbunya, dana kıyma, domates, tatlı mısır, kimyon, acı biber, soğan, sarımsak.",
              "en": "Red beans, beef mince, tomatoes, sweet corn, cumin, chilli pepper, onion, garlic.",
              "ru": "Красная фасоль, говяжий фарш, помидоры, сладкая кукуруза, кумин, перец чили, лук, чеснок."
            },
            "id": "dinner-grills-6"
          },
          {
            "name": {
              "tr": "Et Fajita",
              "en": "Beef Fajita",
              "ru": "Фахита с говядиной"
            },
            "description": {
              "tr": "Biber, soğan, pirinç, beyaz şaraplı sos.",
              "en": "Pepper, onion, rice, sauce with white wine.",
              "ru": "Перец, лук, рис, соус с белым вином."
            },
            "id": "dinner-grills-7"
          },
          {
            "name": {
              "tr": "Dana Stroganoff",
              "en": "Beef Stroganoff",
              "ru": "Бефстроганов"
            },
            "description": {
              "tr": "Pilav ve ızgara sebzeler ile servis edilir.",
              "en": "Served with rice and grilled vegetables.",
              "ru": "Подаётся с рисом и овощами на гриле."
            },
            "id": "dinner-grills-8"
          },
          {
            "name": {
              "tr": "Kuzu İncik",
              "en": "Lamb Shank",
              "ru": "Голень ягнёнка"
            },
            "description": {
              "tr": "Buharda pişirilmiş sebzeler, patates püresi ve sos ile servis edilir.",
              "en": "Served with steamed vegetables, mashed potatoes and sauce.",
              "ru": "Подаётся с овощами на пару, картофельным пюре и соусом."
            },
            "id": "dinner-grills-9"
          }
        ]
      },
      {
        "id": "pasta",
        "title": {
          "tr": "Makarna",
          "en": "Pasta",
          "ru": "Паста"
        },
        "items": [
          {
            "name": {
              "tr": "Penne Arrabbiata",
              "en": "Penne Arrabbiata",
              "ru": "Пенне арраббьята"
            },
            "description": {
              "tr": "Acılı domates sosu.",
              "en": "Chilli tomato sauce.",
              "ru": "Острый томатный соус."
            },
            "id": "dinner-pasta-1"
          },
          {
            "name": {
              "tr": "Spaghetti Bolognese",
              "en": "Spaghetti Bolognese",
              "ru": "Спагетти болоньезе"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-pasta-2"
          },
          {
            "name": {
              "tr": "Fettuccine Alfredo",
              "en": "Fettuccine Alfredo",
              "ru": "Феттучине альфредо"
            },
            "description": {
              "tr": "Tavuk, soğan, krema, mantar.",
              "en": "Chicken, onions, cream, mushroom.",
              "ru": "Курица, лук, сливки, грибы."
            },
            "id": "dinner-pasta-3"
          },
          {
            "name": {
              "tr": "Deniz Ürünlü Fettuccine",
              "en": "Seafood Fettuccine",
              "ru": "Феттучине с морепродуктами"
            },
            "description": {
              "tr": "Karides, kalamar, mantar, sarımsak, krema.",
              "en": "Prawns, calamari, mushroom, garlic, cream.",
              "ru": "Креветки, кальмары, грибы, чеснок, сливки."
            },
            "id": "dinner-pasta-4"
          },
          {
            "name": {
              "tr": "Spaghetti Carbonara",
              "en": "Spaghetti Carbonara",
              "ru": "Спагетти карбонара"
            },
            "description": {
              "tr": "Dana jambon, soğan, maydanoz, krema, yumurta sarısı.",
              "en": "Beef ham, onion, parsley, cream, egg yolk.",
              "ru": "Говяжья ветчина, лук, петрушка, сливки, яичный желток."
            },
            "id": "dinner-pasta-5"
          }
        ]
      },
      {
        "id": "steaks",
        "title": {
          "tr": "Bonfileler · 230 g",
          "en": "Steaks · 230 g",
          "ru": "Стейки из вырезки · 230 г"
        },
        "items": [
          {
            "name": {
              "tr": "Sade Bonfile",
              "en": "Plain Fillet Steak",
              "ru": "Стейк из вырезки"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-steaks-1"
          },
          {
            "name": {
              "tr": "Biberli Bonfile",
              "en": "Pepper Steak",
              "ru": "Стейк с перцем"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-steaks-2"
          },
          {
            "name": {
              "tr": "Mantarlı Bonfile",
              "en": "Mushroom Steak",
              "ru": "Стейк с грибами"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-steaks-3"
          },
          {
            "name": {
              "tr": "Rokfor Peynirli Bonfile",
              "en": "Blue Cheese Steak",
              "ru": "Стейк с голубым сыром"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-steaks-4"
          }
        ],
        "note": {
          "tr": "Buharda pişirilmiş sebzeler, patates püresi ve sos ile servis edilir.",
          "en": "Served with steamed vegetables, mashed potatoes and sauce.",
          "ru": "Подаётся с овощами на пару, картофельным пюре и соусом."
        }
      },
      {
        "id": "seafood",
        "title": {
          "tr": "Balık & Deniz Ürünleri",
          "en": "Fish & Seafood",
          "ru": "Рыба и морепродукты"
        },
        "items": [
          {
            "name": {
              "tr": "Levrek Fileto",
              "en": "Fillet Sea Bass",
              "ru": "Филе сибаса"
            },
            "description": {
              "tr": "Haşlanmış patates, yeşillikler, balık sosu.",
              "en": "Boiled potatoes, greens, fish sauce.",
              "ru": "Отварной картофель, зелень, рыбный соус."
            },
            "id": "dinner-seafood-1"
          },
          {
            "name": {
              "tr": "Çipura Fileto",
              "en": "Filleted Sea Bream",
              "ru": "Филе дорады"
            },
            "description": {
              "tr": "Haşlanmış patates ve yeşilliklerle servis edilir.",
              "en": "Served with boiled potatoes, greens.",
              "ru": "Подаётся с отварным картофелем и зеленью."
            },
            "id": "dinner-seafood-2"
          },
          {
            "name": {
              "tr": "Karides Güveci",
              "en": "Prawn Casserole",
              "ru": "Креветки в горшочке"
            },
            "description": {
              "tr": "Karides, mantar, domates, sarımsak, krema, eritilmiş peynir ve pilav ile servis edilir.",
              "en": "Served with prawns, mushrooms, tomatoes, garlic, cream, melted cheese and rice.",
              "ru": "Подаётся с креветками, грибами, помидорами, чесноком, сливками, расплавленным сыром и рисом."
            },
            "id": "dinner-seafood-3"
          },
          {
            "name": {
              "tr": "Beyaz Orfoz",
              "en": "White Grouper",
              "ru": "Белый групер"
            },
            "description": {
              "tr": "Haşlanmış patates, yeşillikler, soğan ve balık sosu. Pilav ile servis edilir.",
              "en": "Boiled potatoes, greens, onions, fish sauce. Served with rice.",
              "ru": "Отварной картофель, зелень, лук, рыбный соус. Подаётся с рисом."
            },
            "id": "dinner-seafood-4"
          },
          {
            "name": {
              "tr": "Anatolia Usulü Levrek Dolma",
              "en": "Anatolian Sea Bass",
              "ru": "Фаршированный сибас по-анатолийски"
            },
            "description": {
              "tr": "Karides, mantar, domates, krema sosu.",
              "en": "Prawns, mushrooms, tomatoes, cream sauce.",
              "ru": "Креветки, грибы, помидоры, сливочный соус."
            },
            "id": "dinner-seafood-5"
          },
          {
            "name": {
              "tr": "Somon",
              "en": "Salmon",
              "ru": "Лосось"
            },
            "description": {
              "tr": "Haşlanmış patates, yeşillikler ve dereotu sosu ile servis edilir.",
              "en": "Served with boiled potatoes, dill sauce and greens.",
              "ru": "Подаётся с отварным картофелем, укропным соусом и зеленью."
            },
            "id": "dinner-seafood-6"
          }
        ]
      },
      {
        "id": "kids",
        "title": {
          "tr": "Çocuk Menüsü",
          "en": "Kids Menu",
          "ru": "Детское меню"
        },
        "items": [
          {
            "name": {
              "tr": "Spaghetti Bolognese",
              "en": "Spaghetti Bolognese",
              "ru": "Спагетти болоньезе"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-kids-1"
          },
          {
            "name": {
              "tr": "Sade Penne",
              "en": "Plain Penne",
              "ru": "Пенне без соуса"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-kids-2"
          },
          {
            "name": {
              "tr": "Köfte ve Cips",
              "en": "Meatball & Chips",
              "ru": "Кёфте с картофелем фри"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-kids-3"
          },
          {
            "name": {
              "tr": "Tavuk ve Cips",
              "en": "Chicken & Chips",
              "ru": "Курица с картофелем фри"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-kids-4"
          },
          {
            "name": {
              "tr": "Sosis ve Cips",
              "en": "Sausage & Chips",
              "ru": "Сосиски с картофелем фри"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-kids-5"
          }
        ]
      },
      {
        "id": "sides",
        "title": {
          "tr": "Yan Lezzetler",
          "en": "Side Orders",
          "ru": "Гарниры"
        },
        "items": [
          {
            "name": {
              "tr": "Porsiyon Cips",
              "en": "Portion Chips",
              "ru": "Порция картофеля фри"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-sides-1"
          },
          {
            "name": {
              "tr": "Pilav",
              "en": "Rice",
              "ru": "Рис"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-sides-2"
          },
          {
            "name": {
              "tr": "Patates Püresi",
              "en": "Mashed Potato",
              "ru": "Картофельное пюре"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-sides-3"
          }
        ]
      },
      {
        "id": "desserts",
        "title": {
          "tr": "Tatlılar",
          "en": "Desserts",
          "ru": "Десерты"
        },
        "items": [
          {
            "name": {
              "tr": "Limonlu Cheesecake",
              "en": "Lemon Cheesecake",
              "ru": "Лимонный чизкейк"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-desserts-1"
          },
          {
            "name": {
              "tr": "San Sebastian Cheesecake",
              "en": "San Sebastian Cheesecake",
              "ru": "Чизкейк «Сан-Себастьян»"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-desserts-2"
          },
          {
            "name": {
              "tr": "Brownie",
              "en": "Brownie",
              "ru": "Брауни"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-desserts-3"
          },
          {
            "name": {
              "tr": "Dondurma Tabağı",
              "en": "Ice Cream Cup",
              "ru": "Ассорти мороженого"
            },
            "description": {
              "tr": "Vanilya, çilek ve çikolata.",
              "en": "Vanilla, strawberry and chocolate.",
              "ru": "Ванильное, клубничное и шоколадное."
            },
            "id": "dinner-desserts-4"
          },
          {
            "name": {
              "tr": "Baklava",
              "en": "Baklava",
              "ru": "Пахлава"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-desserts-5"
          },
          {
            "name": {
              "tr": "Krep Çeşitleri",
              "en": "Crepe Choices",
              "ru": "Блинчики на выбор"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-desserts-6"
          },
          {
            "name": {
              "tr": "Meyve Tabağı",
              "en": "Fruit Plate",
              "ru": "Фруктовая тарелка"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "dinner-desserts-7"
          }
        ],
        "note": {
          "tr": "Tüm tatlılar ev yapımıdır.",
          "en": "All desserts are homemade.",
          "ru": "Все десерты домашнего приготовления."
        }
      }
    ]
  },
  {
    "id": "drinks",
    "title": {
      "tr": "İçecekler",
      "en": "Drinks",
      "ru": "Напитки"
    },
    "subtitle": {
      "tr": "Kahveden kokteyle, sofraya eşlik eden seçkimiz.",
      "en": "From coffee to cocktails, a selection for every occasion.",
      "ru": "От кофе до коктейлей — напитки для любого случая."
    },
    "groups": [
      {
        "id": "soft",
        "title": {
          "tr": "Meşrubatlar",
          "en": "Soft Drinks",
          "ru": "Безалкогольные напитки"
        },
        "items": [
          {
            "name": {
              "tr": "Coca-Cola",
              "en": "Coca-Cola",
              "ru": "Coca-Cola"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-soft-1"
          },
          {
            "name": {
              "tr": "Coca-Cola Zero",
              "en": "Coca-Cola Zero",
              "ru": "Coca-Cola Zero"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-soft-2"
          },
          {
            "name": {
              "tr": "Fanta",
              "en": "Fanta",
              "ru": "Fanta"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-soft-3"
          },
          {
            "name": {
              "tr": "Sprite",
              "en": "Sprite",
              "ru": "Sprite"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-soft-4"
          },
          {
            "name": {
              "tr": "Ice Tea (Şeftali / Limon)",
              "en": "Ice Tea (Peach / Lemon)",
              "ru": "Холодный чай (персик / лимон)"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-soft-5"
          },
          {
            "name": {
              "tr": "Küçük Su",
              "en": "Small Water",
              "ru": "Вода, маленькая бутылка"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-soft-6"
          },
          {
            "name": {
              "tr": "Büyük Su",
              "en": "Large Water",
              "ru": "Вода, большая бутылка"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-soft-7"
          },
          {
            "name": {
              "tr": "Soda",
              "en": "Mineral Water",
              "ru": "Минеральная вода"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-soft-8"
          },
          {
            "name": {
              "tr": "Tonik",
              "en": "Tonic",
              "ru": "Тоник"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-soft-9"
          },
          {
            "name": {
              "tr": "Taze Portakal Suyu",
              "en": "Fresh Orange Juice",
              "ru": "Свежевыжатый апельсиновый сок"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-soft-10"
          },
          {
            "name": {
              "tr": "Limonata",
              "en": "Lemonade",
              "ru": "Лимонад"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-soft-11"
          },
          {
            "name": {
              "tr": "Meyve Suyu",
              "en": "Fruit Juice",
              "ru": "Фруктовый сок"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-soft-12"
          },
          {
            "name": {
              "tr": "Red Bull",
              "en": "Red Bull",
              "ru": "Red Bull"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-soft-13"
          },
          {
            "name": {
              "tr": "Ginger Ale",
              "en": "Ginger Ale",
              "ru": "Имбирный эль"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-soft-14"
          },
          {
            "name": {
              "tr": "Büyük Maden Suyu",
              "en": "Large Sparkling Water",
              "ru": "Газированная вода, большая бутылка"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-soft-15"
          }
        ]
      },
      {
        "id": "coffee",
        "title": {
          "tr": "Sıcak & Soğuk Kahveler",
          "en": "Hot & Iced Coffee",
          "ru": "Горячий и холодный кофе"
        },
        "items": [
          {
            "name": {
              "tr": "Espresso",
              "en": "Espresso",
              "ru": "Эспрессо"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-coffee-1"
          },
          {
            "name": {
              "tr": "Americano",
              "en": "Americano",
              "ru": "Американо"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-coffee-2"
          },
          {
            "name": {
              "tr": "Cappuccino",
              "en": "Cappuccino",
              "ru": "Капучино"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-coffee-3"
          },
          {
            "name": {
              "tr": "Latte",
              "en": "Latte",
              "ru": "Латте"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-coffee-4"
          },
          {
            "name": {
              "tr": "Türk Kahvesi",
              "en": "Turkish Coffee",
              "ru": "Кофе по-турецки"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-coffee-5"
          },
          {
            "name": {
              "tr": "Ice Americano",
              "en": "Ice Americano",
              "ru": "Айс-американо"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-coffee-6"
          },
          {
            "name": {
              "tr": "Ice Latte",
              "en": "Ice Latte",
              "ru": "Айс-латте"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-coffee-7"
          },
          {
            "name": {
              "tr": "Ice Anatolian Latte",
              "en": "Ice Anatolian Latte",
              "ru": "Айс-латте Anatolia"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-coffee-8"
          }
        ]
      },
      {
        "id": "frozen",
        "title": {
          "tr": "Frozenlar",
          "en": "Frozens",
          "ru": "Фрозены"
        },
        "items": [
          {
            "name": {
              "tr": "Limonata",
              "en": "Lemonade",
              "ru": "Лимонад"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-frozen-1"
          },
          {
            "name": {
              "tr": "Karpuz",
              "en": "Watermelon",
              "ru": "Арбуз"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-frozen-2"
          },
          {
            "name": {
              "tr": "Çilek",
              "en": "Strawberry",
              "ru": "Клубника"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-frozen-3"
          },
          {
            "name": {
              "tr": "Kivi",
              "en": "Kiwi",
              "ru": "Киви"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-frozen-4"
          },
          {
            "name": {
              "tr": "Karışık Orman Meyveleri",
              "en": "Mixed Berries",
              "ru": "Лесные ягоды"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-frozen-5"
          }
        ]
      },
      {
        "id": "milkshakes",
        "title": {
          "tr": "Milkshake’ler",
          "en": "Milkshakes",
          "ru": "Молочные коктейли"
        },
        "items": [
          {
            "name": {
              "tr": "Çilek",
              "en": "Strawberry",
              "ru": "Клубника"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-milkshakes-1"
          },
          {
            "name": {
              "tr": "Muz",
              "en": "Banana",
              "ru": "Банан"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-milkshakes-2"
          },
          {
            "name": {
              "tr": "Çikolata",
              "en": "Chocolate",
              "ru": "Шоколад"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-milkshakes-3"
          },
          {
            "name": {
              "tr": "Oreo",
              "en": "Oreo",
              "ru": "Oreo"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-milkshakes-4"
          },
          {
            "name": {
              "tr": "Vanilya",
              "en": "Vanilla",
              "ru": "Ваниль"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-milkshakes-5"
          }
        ]
      },
      {
        "id": "signature",
        "title": {
          "tr": "İmza Kokteyller",
          "en": "Signature Cocktails",
          "ru": "Авторские коктейли"
        },
        "items": [
          {
            "name": {
              "tr": "Kuytu Sunset",
              "en": "Kuytu Sunset",
              "ru": "Kuytu Sunset"
            },
            "description": {
              "tr": "Gordon cin, salatalık, kavun, limon suyu, nane.",
              "en": "Gordon’s Gin, cucumber, melon, lemon juice, mint.",
              "ru": "Джин Gordon’s, огурец, дыня, лимонный сок, мята."
            },
            "id": "drinks-signature-1"
          },
          {
            "name": {
              "tr": "Anatolia Sunset",
              "en": "Anatolia Sunset",
              "ru": "Anatolia Sunset"
            },
            "description": {
              "tr": "Cin, bergamot, nar, limon, soda.",
              "en": "Gin, bergamot, pomegranate, lemon, mineral water.",
              "ru": "Джин, бергамот, гранат, лимон, минеральная вода."
            },
            "id": "drinks-signature-2"
          },
          {
            "name": {
              "tr": "Mediterranean Breeze",
              "en": "Mediterranean Breeze",
              "ru": "Mediterranean Breeze"
            },
            "description": {
              "tr": "Vodka, mürver çiçeği, salatalık, lime, soda.",
              "en": "Vodka, elderflower, cucumber, lime, mineral water.",
              "ru": "Водка, бузина, огурец, лайм, минеральная вода."
            },
            "id": "drinks-signature-3"
          },
          {
            "name": {
              "tr": "Thyme Garden",
              "en": "Thyme Garden",
              "ru": "Thyme Garden"
            },
            "description": {
              "tr": "Tekila, kekik şurubu, lime, agave.",
              "en": "Tequila, thyme syrup, lime, agave.",
              "ru": "Текила, сироп тимьяна, лайм, агава."
            },
            "id": "drinks-signature-4"
          },
          {
            "name": {
              "tr": "Fig & Oat",
              "en": "Fig & Oat",
              "ru": "Fig & Oat"
            },
            "description": {
              "tr": "Bourbon, incir şurubu, Angostura, portakal bitter.",
              "en": "Bourbon, fig syrup, Angostura, orange bitter.",
              "ru": "Бурбон, инжирный сироп, Angostura, апельсиновый биттер."
            },
            "id": "drinks-signature-5"
          },
          {
            "name": {
              "tr": "Anatolian Gold",
              "en": "Anatolian Gold",
              "ru": "Anatolian Gold"
            },
            "description": {
              "tr": "Cin, safran, bal, limon, köpüklü şarap.",
              "en": "Gin, saffron, honey, lemon, sparkling wine.",
              "ru": "Джин, шафран, мёд, лимон, игристое вино."
            },
            "id": "drinks-signature-6"
          },
          {
            "name": {
              "tr": "Relax Orange",
              "en": "Relax Orange",
              "ru": "Relax Orange"
            },
            "description": {
              "tr": "Tanqueray Sevilla, tekila, portakal suyu, limon, Sprite.",
              "en": "Tanqueray Sevilla, tequila, orange juice, lemon, Sprite.",
              "ru": "Tanqueray Sevilla, текила, апельсиновый сок, лимон, Sprite."
            },
            "id": "drinks-signature-7"
          }
        ]
      },
      {
        "id": "classic",
        "title": {
          "tr": "Klasik Kokteyller",
          "en": "Classic Cocktails",
          "ru": "Классические коктейли"
        },
        "items": [
          {
            "name": {
              "tr": "Long Island Ice Tea",
              "en": "Long Island Ice Tea",
              "ru": "Лонг-Айленд айс ти"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-classic-1"
          },
          {
            "name": {
              "tr": "Espresso Martini",
              "en": "Espresso Martini",
              "ru": "Эспрессо мартини"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-classic-2"
          },
          {
            "name": {
              "tr": "Mojito",
              "en": "Mojito",
              "ru": "Мохито"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-classic-3"
          },
          {
            "name": {
              "tr": "Pornstar Martini",
              "en": "Pornstar Martini",
              "ru": "Порнстар мартини"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-classic-4"
          },
          {
            "name": {
              "tr": "Aperol Spritz",
              "en": "Aperol Spritz",
              "ru": "Апероль спритц"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-classic-5"
          },
          {
            "name": {
              "tr": "Margarita",
              "en": "Margarita",
              "ru": "Маргарита"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-classic-6"
          },
          {
            "name": {
              "tr": "Whiskey Sour",
              "en": "Whiskey Sour",
              "ru": "Виски сауэр"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-classic-7"
          },
          {
            "name": {
              "tr": "Negroni",
              "en": "Negroni",
              "ru": "Негрони"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-classic-8"
          },
          {
            "name": {
              "tr": "Pina Colada",
              "en": "Pina Colada",
              "ru": "Пина колада"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-classic-9"
          },
          {
            "name": {
              "tr": "Amaretto Sour",
              "en": "Amaretto Sour",
              "ru": "Амаретто сауэр"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-classic-10"
          },
          {
            "name": {
              "tr": "Fresh Fruit Daiquiri",
              "en": "Fresh Fruit Daiquiri",
              "ru": "Дайкири со свежими фруктами"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-classic-11"
          },
          {
            "name": {
              "tr": "Sex on the Beach",
              "en": "Sex on the Beach",
              "ru": "Секс на пляже"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-classic-12"
          },
          {
            "name": {
              "tr": "Gin Fizz",
              "en": "Gin Fizz",
              "ru": "Джин физз"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-classic-13"
          },
          {
            "name": {
              "tr": "Orgasm",
              "en": "Orgasm",
              "ru": "Оргазм"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-classic-14"
          }
        ]
      },
      {
        "id": "beers",
        "title": {
          "tr": "Biralar",
          "en": "Beers",
          "ru": "Пиво"
        },
        "items": [
          {
            "name": {
              "tr": "Efes",
              "en": "Efes",
              "ru": "Efes"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-beers-1"
          },
          {
            "name": {
              "tr": "Tuborg",
              "en": "Tuborg",
              "ru": "Tuborg"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-beers-2"
          },
          {
            "name": {
              "tr": "Efes Malt",
              "en": "Efes Malt",
              "ru": "Efes Malt"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-beers-3"
          },
          {
            "name": {
              "tr": "Efes Özel Seri",
              "en": "Efes Özel Seri",
              "ru": "Efes Özel Seri"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-beers-4"
          },
          {
            "name": {
              "tr": "Miller 330 ml",
              "en": "Miller 330 ml",
              "ru": "Miller 330 ml"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-beers-5"
          },
          {
            "name": {
              "tr": "Beck’s",
              "en": "Beck’s",
              "ru": "Beck’s"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-beers-6"
          },
          {
            "name": {
              "tr": "Bomonti Filtresiz",
              "en": "Bomonti Filtresiz",
              "ru": "Bomonti Filtresiz"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-beers-7"
          },
          {
            "name": {
              "tr": "Carlsberg",
              "en": "Carlsberg",
              "ru": "Carlsberg"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-beers-8"
          },
          {
            "name": {
              "tr": "Cider",
              "en": "Cider",
              "ru": "Сидр"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-beers-9"
          },
          {
            "name": {
              "tr": "Heineken",
              "en": "Heineken",
              "ru": "Heineken"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-beers-10"
          },
          {
            "name": {
              "tr": "Stella Artois",
              "en": "Stella Artois",
              "ru": "Stella Artois"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-beers-11"
          },
          {
            "name": {
              "tr": "Corona",
              "en": "Corona",
              "ru": "Corona"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-beers-12"
          },
          {
            "name": {
              "tr": "Alkolsüz Bira",
              "en": "Non Alcohol Beer",
              "ru": "Безалкогольное пиво"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-beers-13"
          }
        ]
      },
      {
        "id": "vodka",
        "title": {
          "tr": "Votkalar",
          "en": "Vodka",
          "ru": "Водка"
        },
        "items": [
          {
            "name": {
              "tr": "Yerli Votka",
              "en": "Local Vodka",
              "ru": "Местная водка"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-vodka-1"
          },
          {
            "name": {
              "tr": "Smirnoff",
              "en": "Smirnoff",
              "ru": "Smirnoff"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-vodka-2"
          },
          {
            "name": {
              "tr": "Absolut",
              "en": "Absolut",
              "ru": "Absolut"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-vodka-3"
          },
          {
            "name": {
              "tr": "Grey Goose",
              "en": "Grey Goose",
              "ru": "Grey Goose"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-vodka-4"
          },
          {
            "name": {
              "tr": "Belvedere",
              "en": "Belvedere",
              "ru": "Belvedere"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-vodka-5"
          }
        ]
      },
      {
        "id": "gin",
        "title": {
          "tr": "Cinler",
          "en": "Gin",
          "ru": "Джин"
        },
        "items": [
          {
            "name": {
              "tr": "Gordon’s",
              "en": "Gordon’s",
              "ru": "Gordon’s"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-gin-1"
          },
          {
            "name": {
              "tr": "Gordon’s Pink",
              "en": "Gordon’s Pink",
              "ru": "Gordon’s Pink"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-gin-2"
          },
          {
            "name": {
              "tr": "Tanqueray",
              "en": "Tanqueray",
              "ru": "Tanqueray"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-gin-3"
          },
          {
            "name": {
              "tr": "Tanqueray Sevilla",
              "en": "Tanqueray Sevilla",
              "ru": "Tanqueray Sevilla"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-gin-4"
          },
          {
            "name": {
              "tr": "Hendrick’s",
              "en": "Hendrick’s",
              "ru": "Hendrick’s"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-gin-5"
          },
          {
            "name": {
              "tr": "Bombay",
              "en": "Bombay",
              "ru": "Bombay"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-gin-6"
          }
        ]
      },
      {
        "id": "rum",
        "title": {
          "tr": "Romlar",
          "en": "Rum",
          "ru": "Ром"
        },
        "items": [
          {
            "name": {
              "tr": "Bacardi",
              "en": "Bacardi",
              "ru": "Bacardi"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-rum-1"
          },
          {
            "name": {
              "tr": "Captain Morgan",
              "en": "Captain Morgan",
              "ru": "Captain Morgan"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-rum-2"
          },
          {
            "name": {
              "tr": "Captain Morgan Black",
              "en": "Captain Morgan Black",
              "ru": "Captain Morgan Black"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-rum-3"
          },
          {
            "name": {
              "tr": "Captain Morgan Spiced Gold",
              "en": "Captain Morgan Spiced Gold",
              "ru": "Captain Morgan Spiced Gold"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-rum-4"
          }
        ]
      },
      {
        "id": "shots",
        "title": {
          "tr": "Shotlar",
          "en": "Shots",
          "ru": "Шоты"
        },
        "items": [
          {
            "name": {
              "tr": "Olmeca Silver",
              "en": "Olmeca Silver",
              "ru": "Olmeca Silver"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-shots-1"
          },
          {
            "name": {
              "tr": "Olmeca Gold",
              "en": "Olmeca Gold",
              "ru": "Olmeca Gold"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-shots-2"
          },
          {
            "name": {
              "tr": "Don Julio",
              "en": "Don Julio",
              "ru": "Don Julio"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-shots-3"
          },
          {
            "name": {
              "tr": "Jägermeister",
              "en": "Jägermeister",
              "ru": "Jägermeister"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-shots-4"
          }
        ]
      },
      {
        "id": "liqueurs",
        "title": {
          "tr": "Likörler",
          "en": "Liqueurs",
          "ru": "Ликёры"
        },
        "items": [
          {
            "name": {
              "tr": "Kahlua",
              "en": "Kahlua",
              "ru": "Kahlua"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-liqueurs-1"
          },
          {
            "name": {
              "tr": "Cointreau",
              "en": "Cointreau",
              "ru": "Cointreau"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-liqueurs-2"
          },
          {
            "name": {
              "tr": "Baileys",
              "en": "Baileys",
              "ru": "Baileys"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-liqueurs-3"
          },
          {
            "name": {
              "tr": "Tia Maria",
              "en": "Tia Maria",
              "ru": "Tia Maria"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-liqueurs-4"
          },
          {
            "name": {
              "tr": "Archers",
              "en": "Archers",
              "ru": "Archers"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-liqueurs-5"
          },
          {
            "name": {
              "tr": "Campari",
              "en": "Campari",
              "ru": "Campari"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-liqueurs-6"
          },
          {
            "name": {
              "tr": "Southern Comfort",
              "en": "Southern Comfort",
              "ru": "Southern Comfort"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-liqueurs-7"
          },
          {
            "name": {
              "tr": "Sambuca",
              "en": "Sambuca",
              "ru": "Sambuca"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-liqueurs-8"
          }
        ]
      },
      {
        "id": "whiskey",
        "title": {
          "tr": "Viskiler",
          "en": "Whiskey",
          "ru": "Виски"
        },
        "items": [
          {
            "name": {
              "tr": "J&B",
              "en": "J&B",
              "ru": "J&B"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-whiskey-1"
          },
          {
            "name": {
              "tr": "Jameson",
              "en": "Jameson",
              "ru": "Jameson"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-whiskey-2"
          },
          {
            "name": {
              "tr": "Jack Daniel’s",
              "en": "Jack Daniel’s",
              "ru": "Jack Daniel’s"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-whiskey-3"
          },
          {
            "name": {
              "tr": "Chivas Regal 12",
              "en": "Chivas Regal 12",
              "ru": "Chivas Regal 12"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-whiskey-4"
          },
          {
            "name": {
              "tr": "Glenfiddich 12",
              "en": "Glenfiddich 12",
              "ru": "Glenfiddich 12"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-whiskey-5"
          },
          {
            "name": {
              "tr": "The Macallan 12",
              "en": "The Macallan 12",
              "ru": "The Macallan 12"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-whiskey-6"
          },
          {
            "name": {
              "tr": "Red Label",
              "en": "Red Label",
              "ru": "Red Label"
            },
            "description": {
              "tr": "",
              "en": "",
              "ru": ""
            },
            "id": "drinks-whiskey-7"
          }
        ]
      },
      {
        "id": "red-wines",
        "title": {
          "tr": "Kırmızı Şaraplar",
          "en": "Red Wines",
          "ru": "Красные вина"
        },
        "items": [
          {
            "name": {
              "tr": "House Wine",
              "en": "House Wine",
              "ru": "Домашнее вино"
            },
            "description": {
              "tr": "Baharatlı ve topraksı, hafif gövdeli; hafif yeşil dolmalık biber nüansları taşır. Baharatlı veya hafif acılı kırmızı etlerle iyi eşleşir.",
              "en": "Spicy and earthy, light bodied, with subtle hints of green bell pepper. Pairs well with seasoned or mildly spicy red meat.",
              "ru": "Пряное, с землистыми нотами, лёгкое тело и тонкие оттенки зелёного сладкого перца. Сочетается с красным мясом с пряностями или лёгкой остротой."
            },
            "id": "drinks-red-wines-1"
          },
          {
            "name": {
              "tr": "Quattro Red",
              "en": "Quattro Red",
              "ru": "Quattro Red"
            },
            "description": {
              "tr": "Öküzgözü, Boğazkere ve Kalecik Karası. Burunda erik, kiraz ve biber. Sek, hafif tanenli ve uzun bitişli. Özellikle peynir, baharatlı veya ızgara dana ve kuzu eti, yahni ve güveçle iyi eşleşir.",
              "en": "Öküzgözü, Boğazkere and Kalecik Karası. On the nose plum, cherry and pepper. Dry, with mild tannins and a long finish. Pairs especially well with cheese, spicy/grilled beef or lamb and stew/casserole.",
              "ru": "Öküzgözü, Boğazkere и Kalecik Karası. В аромате слива, вишня и перец. Сухое, с мягкими танинами и долгим послевкусием. Особенно хорошо сочетается с сыром, пряной или приготовленной на гриле говядиной и ягнятиной, рагу и блюдами в горшочке."
            },
            "id": "drinks-red-wines-11"
          },
          {
            "name": {
              "tr": "Angora Red",
              "en": "Angora Red",
              "ru": "Angora Red"
            },
            "description": {
              "tr": "Cabernet Sauvignon, Öküzgözü, Alicante ve Merlot. Kırmızı meyveler, böğürtlen ve vişne. Tatlı baharat nüanslarıyla kalıcı meyve aromaları. Yumuşak tanenli ve dengeli. Şarküteri, hafif soslu veya ızgara kırmızı etle iyi eşleşir.",
              "en": "Cabernet Sauvignon, Öküzgözü, Alicante and Merlot. Red fruits, blackberry and sour cherry. Persistent fruit aromas, with hints of sweet spices. Soft tannins, balanced. Pairs well with charcuterie, and red meat with a light sauce or from the grill.",
              "ru": "Cabernet Sauvignon, Öküzgözü, Alicante и Merlot. Красные ягоды, ежевика и кислая вишня. Стойкие фруктовые ароматы с оттенками сладких пряностей. Мягкие танины, сбалансированный вкус. Сочетается с мясными деликатесами и красным мясом под лёгким соусом или на гриле."
            },
            "id": "drinks-red-wines-6"
          },
          {
            "name": {
              "tr": "Vinkara Syrah",
              "en": "Vinkara Syrah",
              "ru": "Vinkara Syrah"
            },
            "description": {
              "tr": "Syrah. Ahududu, çok koyu böğürtlen, olgun erik ve hafif karabiber kokuları. Damakta yoğun kırmızı ve siyah meyve aromaları ve yumuşak tanenlerle meyvemsi ve sulu. Makarna, pizza ve kırmızı etle iyi eşleşir.",
              "en": "Syrah. Scents of raspberry, almost black blackberry, ripe plum and a hint of black pepper. On the palate fruity and juicy with intense aromas of red and black fruits and soft tannins. Great combination with pasta, pizza and red meat.",
              "ru": "Syrah. Ароматы малины, почти чёрной ежевики, спелой сливы и лёгкие оттенки чёрного перца. Сочный, фруктовый вкус с насыщенными нотами красных и тёмных ягод и мягкими танинами. Хорошо сочетается с пастой, пиццей и красным мясом."
            },
            "id": "drinks-red-wines-10"
          },
          {
            "name": {
              "tr": "Vinkara Kalecik Karası",
              "en": "Vinkara Kalecik Karası",
              "ru": "Vinkara Kalecik Karası"
            },
            "description": {
              "tr": "Kalecik Karası. İncir, tütün ve hafif is kokuları. Damakta kiraz, ahududu ve kırmızı frenk üzümü gibi kırmızı ve siyah meyvelerle oldukça meyvemsi. Yumuşak, zengin ve uzun bitişli. Olgun peynirler, hafif makarnalar, dana ve kuzu etiyle çok iyi eşleşir.",
              "en": "Kalecik Karası. Scents of fig, tobacco and a hint of smoke. On the palate very fruity with red and black fruits like cherry, raspberry and redcurrant. Smooth and rich with a long finish. Pairs very well with matured cheese, light pasta dishes, beef and lamb.",
              "ru": "Kalecik Karası. Ароматы инжира, табака и лёгкого дымка. Яркий фруктовый вкус с красными и тёмными ягодами: вишней, малиной и красной смородиной. Мягкое и насыщенное, с долгим послевкусием. Прекрасно сочетается с выдержанными сырами, лёгкой пастой, говядиной и ягнятиной."
            },
            "id": "drinks-red-wines-3"
          },
          {
            "name": {
              "tr": "Vinkara Öküzgözü Boğazkere",
              "en": "Vinkara Öküzgözü Boğazkere",
              "ru": "Vinkara Öküzgözü Boğazkere"
            },
            "description": {
              "tr": "Öküzgözü ve Boğazkere. Kiraz, kırmızı erik ve baharat notaları. Hafif tanenler ve uzun bitişle dolgun gövdeli. Olgun peynirler, etli salatalar, makarna, pizza ve ızgara etlerle iyi eşleşir.",
              "en": "Öküzgözü and Boğazkere. Cherry, red plum and some spice. Full bodied with mild tannins and a long finish. Great pairing with matured cheese, salads with meat, pasta, pizza and (grilled) meat.",
              "ru": "Öküzgözü и Boğazkere. Вишня, красная слива и пряности. Полное тело, мягкие танины и долгое послевкусие. Хорошо сочетается с выдержанными сырами, мясными салатами, пастой, пиццей и мясом на гриле."
            },
            "id": "drinks-red-wines-4"
          },
          {
            "name": {
              "tr": "Yakut Red",
              "en": "Yakut Red",
              "ru": "Yakut Red"
            },
            "description": {
              "tr": "Öküzgözü, Boğazkere, Carignan ve Alicante. Menekşe nüanslarıyla taze kırmızı meyve aromaları. Kalıcı meyve aromaları ve olgun tanenlerle dolgun ve dengeli. Şarküteri, kırmızı et, makarna ve pizzayla iyi eşleşir.",
              "en": "Öküzgözü, Boğazkere, Carignan and Alicante. Fresh red fruits aromas with hints of violet. Full and balanced with persistent fruit aromas and ripe tannins. Pairs well with charcuterie, red meat, pasta, and pizza.",
              "ru": "Öküzgözü, Boğazkere, Carignan и Alicante. Свежие ароматы красных ягод с оттенками фиалки. Полное и сбалансированное, со стойким фруктовым ароматом и зрелыми танинами. Сочетается с мясными деликатесами, красным мясом, пастой и пиццей."
            },
            "id": "drinks-red-wines-8"
          },
          {
            "name": {
              "tr": "Chateau Elize Cabernet Sauvignon (Vinaria din Vale, Moldova)",
              "en": "Chateau Elize Cabernet Sauvignon (Vinaria din Vale, Moldova)",
              "ru": "Chateau Elize Cabernet Sauvignon (Vinaria din Vale, Moldova)"
            },
            "description": {
              "tr": "Cabernet Sauvignon. Burunda ve damakta kırmızı orman meyveleri ve baharat notaları. Sek, güçlü tanenlere sahip. Özellikle domates, biber veya mantar bazlı yemekler ve ızgara kırmızı etle iyi eşleşir.",
              "en": "Cabernet Sauvignon. On the nose and palate red forest fruits and some spice. Dry, with strong tannins. Pairs especially well with tomato, pepper or mushroom based dishes, and (grilled) red meat.",
              "ru": "Cabernet Sauvignon. В аромате и вкусе красные лесные ягоды и пряности. Сухое, с выраженными танинами. Особенно хорошо сочетается с блюдами на основе помидоров, перца или грибов и с красным мясом на гриле."
            },
            "id": "drinks-red-wines-2"
          },
          {
            "name": {
              "tr": "Barone Montalto Due Mondi Cabernet Sauvignon Nero d’Avola (Italy)",
              "en": "Barone Montalto Due Mondi Cabernet Sauvignon Nero d’Avola (Italy)",
              "ru": "Barone Montalto Due Mondi Cabernet Sauvignon Nero d’Avola (Italy)"
            },
            "description": {
              "tr": "Cabernet Sauvignon ve Nero d’Avola. Kısmen Fransız meşesinde ve çelik tankta 4 ay olgunlaştırılmıştır. Baharatlar, koyu meyveler ve karamel dokunuşlarıyla zengin, fenolik bir buket. Zarif yapı, yumuşak tanenler ve tatlı vanilya. Olgun peynirler, şarküteri, ızgara et, makarna ve pizzayla mükemmel eşleşir.",
              "en": "Cabernet Sauvignon and Nero d’Avola. Partially aged in French oak and steel for 4 months. Phenolic with a rich bouquet of spices, dark fruits and touches of caramel. Elegant structure, soft tannins and sweet vanilla. Excellent pairing with aged cheese, charcuterie, grilled meat, pasta, and pizza.",
              "ru": "Cabernet Sauvignon и Nero d’Avola. Частичная выдержка во французском дубе и стальных ёмкостях в течение 4 месяцев. Фенольное, с богатым букетом пряностей, тёмных ягод и оттенками карамели. Элегантная структура, мягкие танины и сладкая ваниль. Прекрасно сочетается с выдержанными сырами, мясными деликатесами, мясом на гриле, пастой и пиццей."
            },
            "id": "drinks-red-wines-7"
          },
          {
            "name": {
              "tr": "7 Coline Saperavi & Malbec (Vinaria din Vale, Moldova)",
              "en": "7 Coline Saperavi & Malbec (Vinaria din Vale, Moldova)",
              "ru": "7 Coline Saperavi & Malbec (Vinaria din Vale, Moldova)"
            },
            "description": {
              "tr": "Saperavi ve Malbec. Gürcü üzümü Saperavi yapı ve canlılık katarken Malbec yumuşaklık ve meyvemsi zenginlik sağlar. Böğürtlen, siyah erik, kakao, baharat ve vanilya gibi meşe aromaları. Orta-dolgun gövdeli, dengeli tanenler, koyu meyveler ve uzun bitiş. Peynirler, her türlü ızgara et, yahni, domates bazlı yemekler ve pizzayla iyi eşleşir.",
              "en": "Saperavi and Malbec. The Georgian grape Saperavi adds structure and vibrancy, while the Malbec gives softness and fruity richness. Scents of blackberry, black plum, cacao, spices and oaky flavours like vanilla. Medium-full bodied, well balanced tannins and rich, with dark fruits and a lingering finish. Great pairing with cheese, all kinds of (grilled) meat, stews, tomato based dishes and pizza.",
              "ru": "Saperavi и Malbec. Грузинский сорт Saperavi придаёт структуру и яркость, Malbec — мягкость и фруктовую насыщенность. Ароматы ежевики, чёрной сливы, какао, пряностей и дубовые ноты, например ваниль. Среднее или полное тело, сбалансированные танины, насыщенный вкус тёмных ягод и долгое послевкусие. Сочетается с сыром, любым мясом на гриле, рагу, блюдами на основе помидоров и пиццей."
            },
            "id": "drinks-red-wines-5"
          },
          {
            "name": {
              "tr": "Porta Caeli Ament Blend",
              "en": "Porta Caeli Ament Blend",
              "ru": "Porta Caeli Ament Blend"
            },
            "description": {
              "tr": "Cabernet Sauvignon, Cabernet Franc ve Merlot. Meşe fıçılarda fermente edilmiş ve olgunlaştırılmış, filtre edilmeden şişelenmiştir. Siyah orman meyveleri ve tatlı baharatlardan zengin aromalar. Damakta yuvarlak, lezzetli ve uzun bitişli. Olgun peynirler, ızgara kırmızı et veya av etiyle güzel eşleşir.",
              "en": "Cabernet Sauvignon, Cabernet Franc and Merlot. Fermented and aged in oak barrels, bottled without filtration. Rich aromas of black forest fruits, sweet spices. Round and tasty on the palate with a long finish. Delicious with matured cheese and (grilled) red or game meat.",
              "ru": "Cabernet Sauvignon, Cabernet Franc и Merlot. Ферментация и выдержка в дубовых бочках, розлив без фильтрации. Богатые ароматы тёмных лесных ягод и сладких пряностей. Округлый, приятный вкус и долгое послевкусие. Хорошо сочетается с выдержанными сырами, красным мясом и дичью на гриле."
            },
            "id": "drinks-red-wines-9"
          }
        ],
        "note": {
          "tr": "Kadeh ve şişe seçenekleri.",
          "en": "By the glass or bottle.",
          "ru": "По бокалам или бутылкам."
        }
      },
      {
        "id": "white-wines",
        "title": {
          "tr": "Beyaz Şaraplar",
          "en": "White Wines",
          "ru": "Белые вина"
        },
        "items": [
          {
            "name": {
              "tr": "House Wine",
              "en": "House Wine",
              "ru": "Домашнее вино"
            },
            "description": {
              "tr": "Beyaz meyveler ve narenciye. Canlı, hafif keskin asiditeyle hafif içimli. Başlangıçlar, balık ve beyaz etlerle iyi eşleşir.",
              "en": "White fruits and citrus. Light, with a lively, bit sharp acidity. Pairs well with appetisers, fish and white meats.",
              "ru": "Белые фрукты и цитрусовые. Лёгкое, с живой, немного острой кислотностью. Сочетается с закусками, рыбой и белым мясом."
            },
            "id": "drinks-white-wines-1"
          },
          {
            "name": {
              "tr": "Vinkara Quattro White",
              "en": "Vinkara Quattro White",
              "ru": "Vinkara Quattro White"
            },
            "description": {
              "tr": "Narince, Hasandede ve Emir. Güçlü asiditesiyle ferahlatıcı; meyvemsi, zengin ve kolay içimli. Aperitif olarak veya salata, peynir, balık ve deniz ürünleri, kümes hayvanları ve kremalı makarnayla iyi eşleşir.",
              "en": "Narince, Hasandede and Emir. Fruity, rich and easy drinking with a strong acidity, making it very refreshing. Great as an aperitif or with salad, cheese, fish/seafood, poultry and creamy pasta.",
              "ru": "Narince, Hasandede и Emir. Фруктовое, насыщенное, легко пьётся; выраженная кислотность делает его освежающим. Хорошо как аперитив, а также с салатами, сыром, рыбой и морепродуктами, птицей и пастой со сливочным соусом."
            },
            "id": "drinks-white-wines-2"
          },
          {
            "name": {
              "tr": "Angora White",
              "en": "Angora White",
              "ru": "Angora White"
            },
            "description": {
              "tr": "Emir, Narince ve Sultaniye. Çekirdekli meyveler ve narenciye; kalıcı meyve tatları ve orta asiditeyle dengeli. Taze peynirler, deniz ürünlü salata, ızgara balık veya tavuk ve makarnayla iyi eşleşir.",
              "en": "Emir, Narince and Sultaniye. Stone fruit and citrus, with persistent fruit flavours and well balanced with a moderate acidity. Good pairing with fresh cheese, seafood salad, grilled fish or chicken, and pasta.",
              "ru": "Emir, Narince и Sultaniye. Косточковые фрукты и цитрусовые, стойкие фруктовые оттенки, хороший баланс с умеренной кислотностью. Сочетается со свежими сырами, салатами с морепродуктами, рыбой или курицей на гриле и пастой."
            },
            "id": "drinks-white-wines-6"
          },
          {
            "name": {
              "tr": "Chateau Elize Sauvignon Blanc (Vinaria din Vale, Moldova)",
              "en": "Chateau Elize Sauvignon Blanc (Vinaria din Vale, Moldova)",
              "ru": "Chateau Elize Sauvignon Blanc (Vinaria din Vale, Moldova)"
            },
            "description": {
              "tr": "Sauvignon Blanc. Burunda ve damakta narenciye ve kivi. Ferahlatıcı asiditeyle hafif, kolay içimli. Yumuşak peynirler, salatalar, tavuk, hindi, kremalı yemekler ve hafif Asya mutfağıyla iyi eşleşir.",
              "en": "Sauvignon Blanc. On the nose and palate citrus and kiwi. Light and easy drinking, with a refreshing acidity. Great with soft cheese, salads, chicken, turkey, creamy dishes and light Asian cuisine.",
              "ru": "Sauvignon Blanc. В аромате и вкусе цитрусовые и киви. Лёгкое, легко пьётся, с освежающей кислотностью. Сочетается с мягкими сырами, салатами, курицей, индейкой, блюдами со сливочным соусом и лёгкими блюдами азиатской кухни."
            },
            "id": "drinks-white-wines-3"
          },
          {
            "name": {
              "tr": "Chateau Elize Chardonnay (Vinaria din Vale, Moldova)",
              "en": "Chateau Elize Chardonnay (Vinaria din Vale, Moldova)",
              "ru": "Chateau Elize Chardonnay (Vinaria din Vale, Moldova)"
            },
            "description": {
              "tr": "Chardonnay. Canlı asidite ve mineral notalarla hafif, meyvemsi ve taze. Özellikle yumuşak peynirler, taze salatalar, ızgara sebzeler, balık ve deniz ürünleriyle iyi eşleşir.",
              "en": "Chardonnay. Light, fruity and fresh, with crisp acidity and mineral notes. Pairs especially well with soft cheese, fresh salads and (grilled) vegetables, fish and seafood.",
              "ru": "Chardonnay. Лёгкое, фруктовое и свежее, с живой кислотностью и минеральными нотами. Особенно хорошо сочетается с мягкими сырами, свежими салатами, овощами на гриле, рыбой и морепродуктами."
            },
            "id": "drinks-white-wines-4"
          },
          {
            "name": {
              "tr": "Vinkara Narince",
              "en": "Vinkara Narince",
              "ru": "Vinkara Narince"
            },
            "description": {
              "tr": "Narince. Tropikal meyveler, kayısı ve çiçeklerle sek ve dolgun gövdeli. Dengeli asidite ve uzun bitiş. Taze peynirler, ızgara sebzeler, balık, deniz ürünleri veya kümes hayvanları ve Asya yemekleriyle önerilir.",
              "en": "Narince. Dry and full bodied with tropical fruits, apricot and flowers. Well balanced acidity and a long finish. Recommended with fresh cheeses, and (grilled) vegetables, fish, seafood or poultry, and Asian dishes.",
              "ru": "Narince. Сухое, полнотелое, с ароматами тропических фруктов, абрикоса и цветов. Сбалансированная кислотность и долгое послевкусие. Рекомендуется к свежим сырам, овощам на гриле, рыбе, морепродуктам, птице и азиатским блюдам."
            },
            "id": "drinks-white-wines-5"
          },
          {
            "name": {
              "tr": "Çankaya White",
              "en": "Çankaya White",
              "ru": "Çankaya White"
            },
            "description": {
              "tr": "Emir, Narince ve Sultaniye. Çekirdekli meyveler ve narenciye; kalıcı meyve tatları ve orta asiditeyle dengeli. Taze peynirler, deniz ürünlü salata, ızgara balık veya tavuk ve makarnayla iyi eşleşir.",
              "en": "Emir, Narince and Sultaniye. Stone fruit and citrus, with persistent fruit flavours and well balanced with a moderate acidity. Good pairing with fresh cheese, seafood salad, grilled fish or chicken, and pasta.",
              "ru": "Emir, Narince и Sultaniye. Косточковые фрукты и цитрусовые, стойкие фруктовые оттенки, хороший баланс с умеренной кислотностью. Сочетается со свежими сырами, салатами с морепродуктами, рыбой или курицей на гриле и пастой."
            },
            "id": "drinks-white-wines-7"
          },
          {
            "name": {
              "tr": "Pinot Grigio (Italy)",
              "en": "Pinot Grigio (Italy)",
              "ru": "Pinot Grigio (Italy)"
            },
            "description": {
              "tr": "Pinot Grigio. Burunda ve damakta armut, yeşil elma ve beyaz şeftaliyle taze ve temiz. Damaktaki ferahlatıcı narenciye asiditesi denge sağlar. Başlangıçlar, balık ve deniz ürünleri, risottoyla iyi eşleşir.",
              "en": "Pinot Grigio. Fresh and clean on the nose and palate with pear, green apple, white peach. The refreshing acidity of citrus on the palate makes it well balanced. Great pairing with appetisers, fish/seafood, risotto.",
              "ru": "Pinot Grigio. В аромате и вкусе груша, зелёное яблоко и белый персик; свежее и чистое. Освежающая цитрусовая кислотность создаёт хороший баланс. Сочетается с закусками, рыбой и морепродуктами, ризотто."
            },
            "id": "drinks-white-wines-8"
          }
        ],
        "note": {
          "tr": "Kadeh ve şişe seçenekleri.",
          "en": "By the glass or bottle.",
          "ru": "По бокалам или бутылкам."
        }
      },
      {
        "id": "rose-wines",
        "title": {
          "tr": "Roze Şaraplar",
          "en": "Rosé Wines",
          "ru": "Розовые вина"
        },
        "items": [
          {
            "name": {
              "tr": "House Wine",
              "en": "House Wine",
              "ru": "Домашнее вино"
            },
            "description": {
              "tr": "Hafif, meyvemsi ve ferahlatıcı. Hafif başlangıçlar, atıştırmalıklar ve meyvelerle iyi eşleşir.",
              "en": "Light, fruity and refreshing. Pairs well with light appetisers, snacks and fruit.",
              "ru": "Лёгкое, фруктовое и освежающее. Сочетается с лёгкими закусками, снеками и фруктами."
            },
            "id": "drinks-rose-wines-1"
          },
          {
            "name": {
              "tr": "Vinkara Quattro Rose",
              "en": "Vinkara Quattro Rose",
              "ru": "Vinkara Quattro Rose"
            },
            "description": {
              "tr": "Kalecik Karası ve Aleatico. Aleatico’dan gelen gül ve lime kokuları; çilek ve kiraz gibi canlı kırmızı meyve tatları, greyfurt, mango ve kivi nüanslarıyla sek. Aperitif olarak, sebzeler, balık ve deniz ürünleri ve kümes hayvanlarıyla mükemmel eşleşir.",
              "en": "Kalecik Karası and Aleatico. Dry with scents of rose and lime from the Aleatico and lively flavours of red fruits such as strawberry, cherry as well as hints of grapefruit, mango and kiwi. Perfect as an aperitif, with vegetables, fish/seafood and poultry.",
              "ru": "Kalecik Karası и Aleatico. Сухое, с ароматами розы и лайма от сорта Aleatico, яркими оттенками красных ягод — клубники и вишни — и нотами грейпфрута, манго и киви. Прекрасно как аперитив, с овощами, рыбой и морепродуктами, птицей."
            },
            "id": "drinks-rose-wines-2"
          },
          {
            "name": {
              "tr": "Angora Rose",
              "en": "Angora Rose",
              "ru": "Angora Rose"
            },
            "description": {
              "tr": "Öküzgözü ve Çalkarası. Çilek, şekerlenmiş kiraz ve nektarin. Meyvemsi, yuvarlak ve dengeli. Salata, ızgara balık veya tavuk ve hafif makarnayla iyi eşleşir.",
              "en": "Öküzgözü and Çalkarası. Strawberry, candied cherry and nectarine. Fruity, round and balanced. Pairs well with salad, grilled fish or chicken, and light pasta.",
              "ru": "Öküzgözü и Çalkarası. Клубника, засахаренная вишня и нектарин. Фруктовое, округлое и сбалансированное. Сочетается с салатами, рыбой или курицей на гриле и лёгкой пастой."
            },
            "id": "drinks-rose-wines-5"
          },
          {
            "name": {
              "tr": "Chateau Elize Blush (Vinaria din Vale, Moldova)",
              "en": "Chateau Elize Blush (Vinaria din Vale, Moldova)",
              "ru": "Chateau Elize Blush (Vinaria din Vale, Moldova)"
            },
            "description": {
              "tr": "Merlot. Güzel, soluk somon rengi. Çilek, ahududu ve kirazla taze ve kolay içimli. Peynir, şarküteri, balık, deniz ürünleri, salatalar, hafif ana yemekler ve ızgaralarla çok iyi eşleşir.",
              "en": "Merlot. Beautiful, pale salmon colour. Fresh and easy drinking, with strawberry, raspberry and cherry. Pairs very well with cheese, charcuterie, fish, seafood, salads, light mains and grilled dishes.",
              "ru": "Merlot. Красивый бледно-лососевый цвет. Свежее, легко пьётся, с нотами клубники, малины и вишни. Прекрасно сочетается с сыром, мясными деликатесами, рыбой, морепродуктами, салатами, лёгкими основными блюдами и блюдами на гриле."
            },
            "id": "drinks-rose-wines-3"
          },
          {
            "name": {
              "tr": "Vinkara Minoj Rose",
              "en": "Vinkara Minoj Rose",
              "ru": "Vinkara Minoj Rose"
            },
            "description": {
              "tr": "Kalecik Karası. Burunda kırmızı orman meyveleri ve çiçekler. Damakta güçlü asiditeyle dolgun ve dengeli. Aperitif olarak veya peynir, sebzeler, suşi, ızgara et ve baharatlı yemeklerle iyi eşleşir.",
              "en": "Kalecik Karası. On the nose red forest fruits and flowers. On the palate full and well balanced, with a strong acidity. Great as an aperitif, with cheese, vegetables, sushi, (grilled) meat and spicy dishes.",
              "ru": "Kalecik Karası. В аромате красные лесные ягоды и цветы. Полный, сбалансированный вкус с выраженной кислотностью. Хорошо как аперитив, с сыром, овощами, суши, мясом на гриле и пряными блюдами."
            },
            "id": "drinks-rose-wines-4"
          },
          {
            "name": {
              "tr": "Pinot Grigio Blush (Italy)",
              "en": "Pinot Grigio Blush (Italy)",
              "ru": "Pinot Grigio Blush (Italy)"
            },
            "description": {
              "tr": "Pinot Grigio. Çok soluk somon rengi. Çilek, ahududu ve armut kokuları. İyi asiditeyle dengelenen canlı ve aromatik yapı, ferahlatıcı bir içim sağlar. Aperitif olarak veya peynir, şarküteri, salata, ızgara sebzeler, balık, deniz ürünleri ve kümes hayvanlarıyla idealdir.",
              "en": "Pinot Grigio. Very pale salmon colour. Scents of strawberry, raspberry and pear. Vivid and aromatic, balanced by a good acidity making it very refreshing. Ideal as an aperitif wine or with cheese, charcuterie, salad, and (grilled) vegetables, fish, seafood or poultry.",
              "ru": "Pinot Grigio. Очень бледный лососевый цвет. Ароматы клубники, малины и груши. Яркое и ароматное, сбалансированная кислотность делает его освежающим. Идеально как аперитив или с сыром, мясными деликатесами, салатами, овощами на гриле, рыбой, морепродуктами и птицей."
            },
            "id": "drinks-rose-wines-6"
          },
          {
            "name": {
              "tr": "Lal Rose",
              "en": "Lal Rose",
              "ru": "Lal Rose"
            },
            "description": {
              "tr": "Çalkarası. Çilek ve ahududu gibi kırmızı meyveler. Taze, dengeli ve kalıcı. Balık, tavuk, pizza ve makarnayla iyi eşleşir.",
              "en": "Çalkarası. Red fruits like strawberry and raspberry. Fresh, balanced and persistent. Pairs well with fish, chicken, pizza and pasta.",
              "ru": "Çalkarası. Красные ягоды — клубника и малина. Свежее, сбалансированное и стойкое. Сочетается с рыбой, курицей, пиццей и пастой."
            },
            "id": "drinks-rose-wines-7"
          }
        ],
        "note": {
          "tr": "Kadeh ve şişe seçenekleri.",
          "en": "By the glass or bottle.",
          "ru": "По бокалам или бутылкам."
        }
      },
      {
        "id": "sparkling-wines",
        "title": {
          "tr": "Köpüklü Şaraplar",
          "en": "Sparkling Wines",
          "ru": "Игристые вина"
        },
        "items": [
          {
            "name": {
              "tr": "Colossae",
              "en": "Colossae",
              "ru": "Colossae"
            },
            "description": {
              "tr": "Şampanya mantarlı, yarı köpüklü Sultaniye ve Narince. Ferahlatıcı narenciye notalarıyla hafif ve meyvemsi. Aperitif olarak; hafif peynirler, salata, ızgara balık ve deniz ürünleri ve kümes hayvanlarıyla iyi eşleşir.",
              "en": "Semi sparkling Sultaniye and Narince, with champagne cork. Light and fruity, with refreshing citrus notes. Great as aperitif wine, but also with light cheese, salad, (grilled) fish/seafood and poultry.",
              "ru": "Полуигристое вино из Sultaniye и Narince, с шампанской пробкой. Лёгкое и фруктовое, с освежающими цитрусовыми нотами. Хорошо как аперитив, а также с нежными сырами, салатами, рыбой и морепродуктами на гриле, птицей."
            },
            "id": "drinks-sparkling-wines-1"
          },
          {
            "name": {
              "tr": "Smyrna Glitz Prosecco DOC Vino Frizzante (Italy)",
              "en": "Smyrna Glitz Prosecco DOC Vino Frizzante (Italy)",
              "ru": "Smyrna Glitz Prosecco DOC Vino Frizzante (Italy)"
            },
            "description": {
              "tr": "Yarı köpüklü Glera. Sarı elma, narenciye ve hafif çiçek aromalarıyla zarif, inci benzeri kabarcıklar. Ferahlatıcı aperitif olarak veya hafif başlangıçlar, peynir, şarküteri, balık, deniz ürünleri, kümes hayvanları, risotto ve kremalı makarnayla idealdir.",
              "en": "Semi sparkling Glera. Delicate, pearl-like bubbles with aromas of yellow apple, citrus, and subtle floral tones. Ideal as a refreshing aperitif wine, or with light starters, cheese, charcuterie, fish, seafood, poultry, risotto, and creamy pasta.",
              "ru": "Полуигристое вино из Glera. Нежные пузырьки, похожие на жемчужины, с ароматами жёлтого яблока, цитрусовых и лёгкими цветочными оттенками. Идеально как освежающий аперитив или с лёгкими закусками, сыром, мясными деликатесами, рыбой, морепродуктами, птицей, ризотто и пастой со сливочным соусом."
            },
            "id": "drinks-sparkling-wines-2"
          },
          {
            "name": {
              "tr": "Itinera Prosecco DOC Brut Spumante (Italy)",
              "en": "Itinera Prosecco DOC Brut Spumante (Italy)",
              "ru": "Itinera Prosecco DOC Brut Spumante (Italy)"
            },
            "description": {
              "tr": "Köpüklü Glera. İnce, kalıcı kabarcıklar. Yeşil elma, armut, narenciye ve çiçek kokuları. Damakta elma, şeftali, limon kabuğu ve mineraller. Ferahlatıcı, canlı ve dengeli. Hafif başlangıçlar, kremalı peynirler, salatalar, sebzeler, balık, deniz ürünleri, kümes hayvanları, risotto ve kremalı makarnayla iyi eşleşir.",
              "en": "Sparkling Glera. Fine, persistent bubbles. Scents of green apple, pear, citrus and flowers. Apple, peach, lemon zest and minerals on the palate. Refreshing, crisp and well balanced. Goes well with light appetisers, creamy cheese, salads, vegetables, fish, seafood, poultry, risotto and creamy pasta.",
              "ru": "Игристое вино из Glera. Мелкие, стойкие пузырьки. Ароматы зелёного яблока, груши, цитрусовых и цветов. Во вкусе яблоко, персик, лимонная цедра и минералы. Освежающее, живое и сбалансированное. Сочетается с лёгкими закусками, сливочными сырами, салатами, овощами, рыбой, морепродуктами, птицей, ризотто и пастой со сливочным соусом."
            },
            "id": "drinks-sparkling-wines-3"
          }
        ],
        "note": {
          "tr": "Kadeh ve şişe seçenekleri.",
          "en": "By the glass or bottle.",
          "ru": "По бокалам или бутылкам."
        }
      }
    ]
  }
];
