import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesTabsSection } from "@/components/sections/FeaturesTabsSection";
import { VoiceAISection } from "@/components/sections/VoiceAISection";
import { ScreenshotsSection } from "@/components/sections/ScreenshotsSection";
import { SharedListsSection } from "@/components/sections/SharedListsSection";
import { PremiumPlansSection } from "@/components/sections/PremiumPlansSection";
import { MultiLangCurrencySection } from "@/components/sections/MultiLangCurrencySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesTabsSection />
        <VoiceAISection />
        <ScreenshotsSection />
        <SharedListsSection />
        <PremiumPlansSection />
        <MultiLangCurrencySection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
