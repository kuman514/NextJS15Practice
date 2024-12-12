import sql from 'better-sqlite3';

const database = sql('meals.db');

export async function getMeals() {
  // Intentional delay
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return database.prepare('SELECT * FROM meals').all();
}
