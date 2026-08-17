export type Dessert = {
  id: string;
  name: string;
  country: string;
  image: string;
  category: "baked" | "fried" | "chilled" | "cake" | "pastry";
  scale: number;
};

const dessert = (
  id: string,
  name: string,
  country: string,
  category: Dessert["category"],
  scale: number,
): Dessert => ({ id, name, country, category, scale, image: `/desserts/${id}.png` });

export const dessertData: Dessert[] = [
  dessert("donut", "PINK DONUT", "United States", "fried", 0.58),
  dessert("macaron", "MACARON", "France", "baked", 0.46),
  dessert("mochi", "DAIFUKU MOCHI", "Japan", "chilled", 0.5),
  dessert("egg-tart", "EGG TART", "Hong Kong", "pastry", 0.54),
  dessert("waffle", "BELGIAN WAFFLE", "Belgium", "baked", 0.68),
  dessert("pancakes", "PANCAKES", "United States", "baked", 0.67),
  dessert("cookie", "CHOCOLATE COOKIE", "United States", "baked", 0.54),
  dessert("iced-cookie", "ICED COOKIE", "United Kingdom", "baked", 0.56),
  dessert("brownie", "BROWNIE", "United States", "cake", 0.57),
  dessert("canele", "CANELÉ", "France", "baked", 0.5),
  dessert("madeleine", "MADELEINE", "France", "cake", 0.56),
  dessert("eclair", "CHOCOLATE ÉCLAIR", "France", "pastry", 0.7),
  dessert("cream-puff", "CREAM PUFF", "France", "pastry", 0.54),
  dessert("fruit-tart", "FRUIT TART", "France", "pastry", 0.63),
  dessert("strawberry-tart", "STRAWBERRY TART", "France", "pastry", 0.64),
  dessert("lemon-tart", "LEMON TART", "France", "pastry", 0.62),
  dessert("apple-pie", "APPLE PIE", "United States", "pastry", 0.64),
  dessert("croissant", "CROISSANT", "France", "pastry", 0.7),
  dessert("cinnamon-roll", "CINNAMON ROLL", "Sweden", "baked", 0.61),
  dessert("dorayaki", "DORAYAKI", "Japan", "cake", 0.59),
  dessert("taiyaki", "TAIYAKI", "Japan", "baked", 0.68),
  dessert("mooncake", "MOONCAKE", "China", "baked", 0.56),
  dessert("cheesecake", "CHEESECAKE", "United States", "cake", 0.67),
  dessert("nata", "PASTEL DE NATA", "Portugal", "pastry", 0.54),
];
