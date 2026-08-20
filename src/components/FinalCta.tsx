import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section id="contact" className="bg-navy py-20 md:py-24">
      <Container className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
        <Eyebrow onDark>Get Started Today</Eyebrow>
        <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
          Honest Answers From Day One
        </h2>
        <p className="text-white/80">
          A legal team that puts you first, every step of the way — strategy built around what
          matters to you, and moving forward with confidence.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-1">
          <Button href={siteConfig.phoneHref} variant="accent">
            Call Us: {siteConfig.phoneDisplay}
          </Button>
          <Button href="#contact" variant="outline">
            Free Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}
