import sql from 'better-sqlite3';

const database = sql('meals.db');

export async function getMeals() {
  // Intentional delay
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  // throw new Error('Failed to fetch meals');
  return database.prepare('SELECT * FROM meals').all();
}

export function getMealInfo(mealId) {
  return database.prepare('SELECT * FROM meals WHERE mealId = ?').get(mealId);
}
