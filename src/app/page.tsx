import { Hero } from "@/components/Hero";
import { TrustStats } from "@/components/TrustStats";
import { PracticeAreas } from "@/components/PracticeAreas";
import { Commitment } from "@/components/Commitment";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Steps } from "@/components/Steps";
import { ComprehensiveSupport } from "@/components/ComprehensiveSupport";
import { StatBanner } from "@/components/StatBanner";
import { ReviewsPress } from "@/components/ReviewsPress";
import { CaseWorth } from "@/components/CaseWorth";
import { WrongfulDeath } from "@/components/WrongfulDeath";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <PracticeAreas />
      <Commitment />
      <WhyUs />
      <Testimonials />
      <Steps />
      <ComprehensiveSupport />
      <StatBanner />
      <ReviewsPress />
      <CaseWorth />
      <WrongfulDeath />
      <Faq />
      <FinalCta />
    </>
  );
}
