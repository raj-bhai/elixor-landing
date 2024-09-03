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

export default function Home() {
  return (
    <main className="flex bg-black overflow-x-hidden min-h-screen flex-col items-center justify-between px-24 pt-[80px]">
      <Header />
      <LandingSection />
      <ObjectiveSection />
      <LearningJourneySection />
      <ResultsSection />
      <CoachingFeaturesSection/>
      <FeaturesSection/>
      <ProgressSection/>
      <FAQSection/>
      <Footer/>
    </main>
  );
}
