'use server';

import { saveMeal } from './meals';

export async function shareMealAction(formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creatorEmail: formData.get('email'),
  };

  await saveMeal(meal);
}
