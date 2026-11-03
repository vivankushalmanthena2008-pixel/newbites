export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  { id: "margherita-pizza", title: "Margherita Pizza", emoji: "🍕", minutes: 35, difficulty: "Medium", cuisine: "Italian" },
  { id: "veg-biryani", title: "Veg Biryani", emoji: "🍛", minutes: 50, difficulty: "Hard", cuisine: "Indian" },
  { id: "avocado-toast", title: "Avocado Toast", emoji: "🥑", minutes: 10, difficulty: "Easy", cuisine: "American" },
  { id: "veg-tacos", title: "Veg Tacos", emoji: "🌮", minutes: 25, difficulty: "Easy", cuisine: "Mexican" },
  { id: "pasta-primavera", title: "Pasta Primavera", emoji: "🍝", minutes: 30, difficulty: "Easy", cuisine: "Italian" },
  { id: "masala-dosa", title: "Masala Dosa", emoji: "🥞", minutes: 45, difficulty: "Medium", cuisine: "Indian" },
];
