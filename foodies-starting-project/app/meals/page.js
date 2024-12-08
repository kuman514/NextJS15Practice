import Link from 'next/link';

export default function MealsPage() {
  return (
    <main>
      <h1>Meals</h1>
      <p>
        <Link href="/meals/koishi-pasta">Koishi Pasta</Link>
      </p>
      <p>
        <Link href="/meals/yasuo-pizza">Yasuo Pizza</Link>
      </p>
      <p>
        <Link href="/meals/hoshino-whale-chocolate">
          Hoshino Whale Chocolate
        </Link>
      </p>
    </main>
  );
}
