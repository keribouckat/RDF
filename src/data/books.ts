export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  fullDescription: string;
  price: string;
  priceValue: number;
  coverImage: string;
  color: string;
  pages?: number;
  year?: number;
}

export const books: Book[] = [
  {
    id: 1,
    title: "La Restauration des Familles",
    author: "Prophète Philippe Mukoma Wetu",
    description: "Un guide pratique pour reconstruire et fortifier les liens familiaux selon les principes bibliques.",
    fullDescription: "Dans cet ouvrage fondamental, le Prophète Philippe Mukoma Wetu partage les clés bibliques pour restaurer et fortifier les liens familiaux. A travers des enseignements profonds et des témoignages touchants, découvrez comment Dieu peut transformer votre famille et la rétablir dans son dessein originel. Ce livre est un appel à l'unité, à la réconciliation et à l'amour au sein de nos foyers.",
    price: "10 000 FCFA",
    priceValue: 10000,
    coverImage: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=600&auto=format&fit=crop",
    color: "from-rdf-red to-rdf-red-dark",
    pages: 180,
    year: 2020,
  },
  {
    id: 2,
    title: "Le Mariage selon Dieu",
    author: "Prophète Philippe Mukoma Wetu",
    description: "Découvrez les secrets d'un mariage heureux et durable ancré dans la Parole de Dieu.",
    fullDescription: "Le mariage est une institution divine qui mérite d'être vécue selon les principes établis par Dieu. Dans ce livre, le Prophète Philippe Mukoma Wetu nous révèle les fondements d'un mariage épanoui : la communication, le respect mutuel, l'intimité spirituelle et la fidélité. Un guide indispensable pour les couples qui désirent bâtir un foyer solide et béni.",
    price: "8 000 FCFA",
    priceValue: 8000,
    coverImage: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?q=80&w=600&auto=format&fit=crop",
    color: "from-rdf-red to-rdf-red-dark",
    pages: 150,
    year: 2019,
  },
  {
    id: 3,
    title: "La Joie en Partage",
    author: "Prophète Philippe Mukoma Wetu",
    description: "Apprenez à vivre une vie de générosité et de compassion envers les autres.",
    fullDescription: "La générosité est au coeur de l'Évangile. Dans 'La Joie en Partage', le Prophète Philippe Mukoma Wetu nous invite à découvrir la joie qui découle du don de soi et du partage avec les plus démunis. À travers des récits inspirants et des enseignements pratiques, apprenez comment la compassion peut transformer non seulement la vie des autres, mais aussi la vôtre.",
    price: "7 000 FCFA",
    priceValue: 7000,
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop",
    color: "from-rdf-gold-dark to-rdf-gold",
    pages: 120,
    year: 2021,
  },
  {
    id: 4,
    title: "Prières pour la Famille",
    author: "Prophète Philippe Mukoma Wetu",
    description: "Un recueil de prières puissantes pour couvrir votre famille spirituellement.",
    fullDescription: "Ce recueil de prières est un outil spirituel puissant pour chaque famille chrétienne. Le Prophète Philippe Mukoma Wetu a compilé des prières couvrant tous les aspects de la vie familiale : protection, provision, unité, guérison des relations, bénédiction des enfants, et bien plus encore. Chaque prière est accompagnée de versets bibliques pour fortifier votre foi.",
    price: "5 000 FCFA",
    priceValue: 5000,
    coverImage: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=600&auto=format&fit=crop",
    color: "from-purple-500 to-purple-700",
    pages: 100,
    year: 2022,
  },
  {
    id: 5,
    title: "Éduquer dans la Foi",
    author: "Prophète Philippe Mukoma Wetu",
    description: "Comment élever vos enfants selon les valeurs chrétiennes dans le monde moderne.",
    fullDescription: "Élever des enfants dans la foi au milieu d'un monde en constante évolution est un défi majeur pour les parents chrétiens. Ce livre offre des conseils pratiques et bibliques pour transmettre les valeurs de l'Évangile à la nouvelle génération. Découvrez comment créer un environnement familial propice à la croissance spirituelle de vos enfants.",
    price: "9 000 FCFA",
    priceValue: 9000,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
    color: "from-green-500 to-green-700",
    pages: 160,
    year: 2021,
  },
  {
    id: 6,
    title: "La Guérison Intérieure",
    author: "Prophète Philippe Mukoma Wetu",
    description: "Un chemin vers la délivrance et la restauration de votre âme.",
    fullDescription: "Beaucoup de personnes portent des blessures invisibles qui affectent leur vie quotidienne et leurs relations. Dans 'La Guérison Intérieure', le Prophète Philippe Mukoma Wetu nous guide sur le chemin de la délivrance et de la restauration de l'âme. Découvrez comment Dieu peut guérir vos traumatismes passés et vous libérer pour vivre pleinement.",
    price: "8 500 FCFA",
    priceValue: 8500,
    coverImage: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=600&auto=format&fit=crop",
    color: "from-rdf-red-dark to-indigo-700",
    pages: 140,
    year: 2023,
  },
];

export function getBookById(id: number): Book | undefined {
  return books.find((book) => book.id === id);
}
