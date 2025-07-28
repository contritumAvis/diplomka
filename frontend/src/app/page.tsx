import BlackFridayBanner from "../components/BlackFridayBanner";



export default function HomePage() {
  return (
    <main>
      <BlackFridayBanner />
      <h1 className="text-3xl font-bold mt-10"></h1>
      {/* сюда добавляй каталог, карточки товаров и т.д. */}
    </main>
  );
}