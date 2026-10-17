import type { Character } from '../types/game';

export const CHARACTERS: Character[] = [
  {
    id: 'merchant',
    name: 'El Mercader',
    role: 'Comercio, Tasación y Rutas',
    description: 'Experto en precios, valor de las monedas, márgenes de ganancia y acuerdos comerciales entre ciudades distantes.',
    perspectiveText: 'Tus ojos buscan las balanzas, el valor de las telas finas y los acuerdos que permiten mover mercancías a través de continentes.',
    avatarIcon: 'merchant',
    avatarImage: '/images/char_merchant.jpg',
    motifs: ['Bolsa de dinares', 'Balanza de precisión', 'Seda de Chang\'an', 'Libro de cuentas']
  },
  {
    id: 'traveler',
    name: 'La Viajera',
    role: 'Caminos, Lenguas y Hospitalidad',
    description: 'Exploradora incansable que domina dialectos, rutas de montaña, mapas de caravanas y la convivencia entre pueblos.',
    perspectiveText: 'Tu curiosidad te guía hacia las tabernas de caravaneros, las palabras en dialectos desconocidos y las historias de quienes recorren el mundo.',
    avatarIcon: 'traveler',
    avatarImage: '/images/char_traveler.jpg',
    motifs: ['Cuaderno de itinerario', 'Brújula de navegación', 'Caminos del desierto', 'Posadas de caravanas']
  },
  {
    id: 'medic',
    name: 'El Aprendiz de Médico',
    role: 'Salud, Botánica y Farmacopea',
    description: 'Formado en botánica y observación clínica; busca plantas curativas, higiene en los campamentos y defensa ante epidemias.',
    perspectiveText: 'Observás las hierbas que se venden en los zocos, los ungüentos de los boticarios y cómo los pueblos cuidan la salud de sus viajeros.',
    avatarIcon: 'medic',
    avatarImage: '/images/char_medic.jpg',
    motifs: ['Mortero de piedra', 'Hierbas curativas', 'Tratados médicos', 'Aceites balsámicos']
  },
  {
    id: 'scholar',
    name: 'El Estudioso',
    role: 'Ciencia, Cifras y Traducciones',
    description: 'Erudito fascinado por las matemáticas indoarábigas, los astrolabios, la fabricación del papel y el debate filosófico.',
    perspectiveText: 'Te fascinan las bibliotecas, las reglas matemáticas traídas de la India y las técnicas con las que los artesanos transforman la materia.',
    avatarIcon: 'scholar',
    avatarImage: '/images/char_scholar.jpg',
    motifs: ['Pluma de oca y tintero', 'Manuscrito astronómico', 'Cifras y astrolabios', 'Papel de trapo']
  }
];
