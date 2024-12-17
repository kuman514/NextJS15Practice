import sql from 'better-sqlite3';
import fs from 'node:fs';
import slugify from 'slugify';
import xss from 'xss';

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

export async function saveMeal(meal) {
  meal.mealId = slugify(meal.title, {
    lower: true,
  });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.mealId}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Failed to save image.');
    }
  });

  meal.image = `/images/${fileName}`;

  database
    .prepare(
      `
    INSERT INTO meals (title, summary, instructions, creator, creatorEmail, image, mealId)  
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creatorEmail,
      @image,
      @mealId
    )
  `
    )
    .run(meal);
}
