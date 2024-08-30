import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ObjectiveSection from "./components/ObjectiveSection";
import LearningJourneySection from "./components/LearningJourneySection";
import AdvancedJourneySection from "./components/AdvancedJourneySection";
import ResultsSection from "./components/ResultsSection";

export default function Home() {
  return (
    <main className="flex bg-black overflow-x-hidden min-h-screen flex-col items-center justify-between px-24 pt-[80px]">
      <Header />
      <LandingSection />
      <ObjectiveSection />
      <LearningJourneySection />
      <AdvancedJourneySection />
      <ResultsSection />
    </main>
  );
}
