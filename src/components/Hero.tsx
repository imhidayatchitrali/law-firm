import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { IconArrowCircle, IconPhone } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden ">
      {/* Drop your background photo at public/images/hero-bg.jpg (or .png/.webp) */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="scale-110 object-cover"
      />
      <div className="absolute inset-0 " />
      {/* <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/90 to-navy/70" /> */}
      <Container className="relative z-10 grid items-center gap-14 py-16 md:grid-cols-2 md:py-20">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-4xl leading-tight font-bold text-navy md:text-5xl">
              {siteConfig.state} Personal Injury Attorneys
            </h1>
            <p className="font-serif text-2xl leading-snug font-bold text-gold md:text-3xl">
              Over $[X] Million+ Recovered.
              <br />
              No Fees Until We Win.
            </p>
          </div>

          <div className="flex max-w-lg flex-col gap-3 text-navy/80">
            <p>
              A dedicated attorney gives you the guidance and advocacy you need to pursue full
              compensation. At {siteConfig.name}, we examine every detail of your case in pursuit
              of justice &mdash; and we don&apos;t get paid unless you do.
            </p>
            <p className="font-bold text-navy">
              We&apos;ve recovered more than $[X] million for our clients.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-1">
            <Button href="#contact" variant="accent">
              <IconArrowCircle className="h-4 w-4" />
              Get a Free Evaluation
            </Button>
            <Button href={siteConfig.phoneHref} variant="outline">
              <IconPhone className="h-4 w-4" />
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </div>

        <div className="relative -mb-16 h-100 self-end pt-10 md:-mb-20 md:h-110 md:pt-14">
          <Image
            src="/images/lawyers.png"
            alt={`${siteConfig.name} attorneys`}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain object-bottom"
          />
        </div>
      </Container>
    </section>
  );
}
