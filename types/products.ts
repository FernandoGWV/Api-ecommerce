export type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: { id: number; name: string; image: string };
  image: [string];
};
