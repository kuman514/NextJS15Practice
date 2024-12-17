'use server';

export async function shareMealAction(formData) {
  'use server';

  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creatorEmail: formData.get('email'),
    mealId: 'wiener-schnitzel',
  };

  console.log(meal);
}
