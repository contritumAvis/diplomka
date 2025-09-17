'use client';
import BlackFridayBanner from "../components/BlackFridayBanner";
import ErrorPage from '../pages/ErrorPage';
import { ThemeToggle } from '@/components/ThemeToggle';
import TopHeader from "@/components/header/Header";
import MiddleHeader from "@/components/header/MiddleHeader";
import BottomHeader from "@/components/header/BottomHeader";
import WidgetSection from "@/components/WidgetSection";
import FeaturesBar from "@/components/featuresbar"
import Footer from "@/components/Footer";
import BestDealsSection from "@/components/home/BestDealsSection";
import ShopCategories from "@/components/ShopCategories";
import FeaturedSection from "@/components/FeaturedSection";
import PromoBanners from "@/components/PromoBanners";
import AccessoriesSection from "@/components/AccessoriesSection";
import RavdanBanner from "@/components/RavdanBanner";
import ProductRecommendationSectionSec from "@/components/ProductRecommendationSectionSec";
import SubscribeSection from "@/components/SubscribeSection";
export default function HomePage() {
  return (
    <main>
 
      <BlackFridayBanner />
      <TopHeader />
      <BottomHeader />
      <WidgetSection />
      < FeaturesBar />
      <BestDealsSection />
      <ShopCategories/>
      <FeaturedSection />
      <PromoBanners/>
       <AccessoriesSection/>
       <RavdanBanner />
       <ProductRecommendationSectionSec />
       <SubscribeSection/>
      < Footer />
      
      <h1 className="text-3xl font-bold mt-10"></h1>
      
      
    </main>
  );
}