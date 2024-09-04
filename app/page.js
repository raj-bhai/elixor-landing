"use client";

import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ObjectiveSection from "./components/ObjectiveSection";
import LearningJourneySection from "./components/LearningJourneySection";
import ResultsSection from "./components/ResultsSection";
import CoachingFeaturesSection from "./components/CoachingFeaturesSection";
import FeaturesSection from "./components/FeaturesSection";
import ProgressSection from "./components/ProgressSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import CurriculumSection from "./components/CurriculumSection";
import PricingSection from "./components/PricingSection";
import Schedule from "./components/Schedule";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home() {
  return (
    <main className="flex bg-black overflow-x-hidden min-h-screen flex-col items-center justify-between px-24 pt-[80px]">
      <Header />
      <LandingSection />
      <ObjectiveSection />
      <LearningJourneySection />
      <ResultsSection />
      <CoachingFeaturesSection/>
      <CurriculumSection/>
      <Elements stripe={stripePromise} >
      <PricingSection/>
      </Elements>
      <Schedule/>
      {/* <FeaturesSection/> */}
      {/* <ProgressSection/> */}
      <FAQSection/>
      <Footer/>
    </main>
  );
}
