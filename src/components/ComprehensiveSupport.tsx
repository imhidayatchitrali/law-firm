import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { IconDocument } from "@/components/icons";

export function ComprehensiveSupport() {
  return (
    <section className="py-20 md:py-24">
      <Container className="grid items-center gap-14 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <Eyebrow>After an Injury</Eyebrow>
          <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">
            Comprehensive Legal Support After an Injury
          </h2>
          <p className="text-ink-soft">
            Recovering after an accident is not just about legal paperwork — it&apos;s about
            protecting your future. From negotiating with insurance companies to representing you
            in court, our team manages every detail of your claim so nothing is left to chance.
          </p>
          <p className="text-ink-soft">
            Developing a strong claim starts with a full understanding of what happened, the
            impact it has had on your life, and the compensation you&apos;re rightfully owed.
          </p>
        </div>
        <PlaceholderPhoto
          label="Case Review Photo"
          icon={<IconDocument className="h-10 w-10" />}
          className="h-72 md:h-96"
        />
      </Container>
    </section>
  );
}
