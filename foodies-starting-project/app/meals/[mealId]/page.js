import Link from 'next/link';

export default function MealInfoPage({ params }) {
  return (
    <main>
      <h1>Meal Info</h1>
      <p>{params.mealId}</p>
      <p>
        <Link href="/meals/share">Share!</Link>
      </p>
    </main>
  );
}
