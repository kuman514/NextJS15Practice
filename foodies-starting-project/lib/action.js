'use server';

import { redirect } from 'next/navigation';

import { saveMeal } from './meals';

function isInvalidText(text) {
  return !text || text.trim() === '';
}

export async function shareMealAction(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creatorEmail: formData.get('email'),
  };

  /**
   * Simply implemented validation.
   * We should do it better than this in our real applications.
   */
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creatorEmail) ||
    !meal.creatorEmail.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid input.',
    };
  }

  await saveMeal(meal);
  redirect('/meals');
}
