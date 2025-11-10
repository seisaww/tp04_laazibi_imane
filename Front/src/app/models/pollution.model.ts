export interface Pollution {
  id: number; // L'ID sera généré par le backend mocké
  titre: string;
  type_pollution: string;
  description: string;
  date_observation: string; // Harmonisé avec le formulaire
  lieu: string;
  latitude: number;
  longitude: number;
  photo_url?: string;
}