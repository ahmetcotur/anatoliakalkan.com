export type Language = 'tr' | 'en' | 'ru';

export interface ReservationData {
  fullName: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'terrace' | 'indoor' | 'any';
  specialRequests?: string;
}
