'use client';
import BlackFridayBanner from "../components/BlackFridayBanner";
import ErrorPage from '../pages/ErrorPage';
import { ThemeToggle } from '@/components/ThemeToggle';
import TopHeader from "@/components/header/Header";
import MiddleHeader from "@/components/header/MiddleHeader";
import BottomHeader from "@/components/header/BottomHeader";
import WidgetSection from "@/components/WidgetSection";
import FeaturesBar from "@/components/featuresbar"

export default function HomePage() {
  return (
    <main>
 
      <BlackFridayBanner />
      <TopHeader />
      <BottomHeader />
      <WidgetSection />
      < FeaturesBar />
      <h1 className="text-3xl font-bold mt-10"></h1>
      
      
    </main>
  );
}