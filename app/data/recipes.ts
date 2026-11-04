export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza", title: "Margherita Pizza", emoji: "\u{1F355}", minutes: 35, difficulty: "Medium", cuisine: "Italian",
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Basil"],
    steps: ["Stretch the dough into a round base.", "Spread the sauce and add mozzarella.", "Bake hot until the crust blisters, then top with basil."],
  },
  {
    id: "veg-biryani", title: "Veg Biryani", emoji: "\u{1F35B}", minutes: 50, difficulty: "Hard", cuisine: "Indian",
    ingredients: ["Basmati rice", "Mixed vegetables", "Yogurt", "Biryani masala", "Onions"],
    steps: ["Parboil the rice with whole spices.", "Cook the vegetables with yogurt and masala.", "Layer rice over the vegetables and steam on low heat."],
  },
  {
    id: "avocado-toast", title: "Avocado Toast", emoji: "\u{1F951}", minutes: 10, difficulty: "Easy", cuisine: "American",
    ingredients: ["Bread slices", "Ripe avocado", "Lemon juice", "Salt and pepper"],
    steps: ["Toast the bread until crisp.", "Mash the avocado with lemon, salt and pepper.", "Spread on the toast and serve."],
  },
  {
    id: "veg-tacos", title: "Veg Tacos", emoji: "\u{1F32E}", minutes: 25, difficulty: "Easy", cuisine: "Mexican",
    ingredients: ["Taco shells", "Beans", "Corn", "Lettuce", "Salsa"],
    steps: ["Warm the beans and corn with spices.", "Fill the taco shells with the mix.", "Top with lettuce and salsa."],
  },
  {
    id: "pasta-primavera", title: "Pasta Primavera", emoji: "\u{1F35D}", minutes: 30, difficulty: "Easy", cuisine: "Italian",
    ingredients: ["Pasta", "Bell peppers", "Zucchini", "Olive oil", "Parmesan"],
    steps: ["Boil the pasta until al dente.", "Saute the vegetables in olive oil.", "Toss everything together and top with parmesan."],
  },
  {
    id: "masala-dosa", title: "Masala Dosa", emoji: "\u{1F95E}", minutes: 45, difficulty: "Medium", cuisine: "Indian",
    ingredients: ["Dosa batter", "Potatoes", "Onions", "Mustard seeds", "Curry leaves"],
    steps: ["Cook the potato filling with onions and spices.", "Spread the batter thin on a hot pan.", "Add the filling, fold and serve with chutney."],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
