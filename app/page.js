import Image from "next/image";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";

export default function Home() {
  return (
    <main className="flex overflow-x-hidden min-h-screen flex-col items-center justify-between px-24">
      <Header />
      <LandingSection/>
    </main>
  );
}
