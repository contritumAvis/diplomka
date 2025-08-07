'use client';
import BlackFridayBanner from "../components/BlackFridayBanner";
import ErrorPage from '../pages/ErrorPage';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function HomePage() {
  return (
    <main>
 
      <BlackFridayBanner />
      <h1 className="text-3xl font-bold mt-10"></h1>
      <ThemeToggle />
      
    </main>
  );
}