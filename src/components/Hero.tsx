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
      <Container className="relative z-10 pt-8 pb-16 text-center md:pt-10 md:pb-20">
        {/* w-fit sizes this wrapper to the headline, so self-start lands on the headline's left edge */}
        <div className="mx-auto flex w-fit max-w-full flex-col items-center gap-6">
          {/* Sized to the container width so it stays on one line; divisor ≈ the line's width in em */}
          <h1 className="font-serif text-4xl leading-tight font-bold text-navy md:whitespace-nowrap md:text-[calc(min(100vw-3rem,69rem)/22.5)]">
            {/* {siteConfig.state} Personal Injury Attorneys */}
            Personal Injury Help in Florida & Michigan
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed  text-navy md:text-xl">
            {siteConfig.name} helps connect injury victims with attorneys for evaluation and
            representation. Personal injury matters obtained through this website will be referred
            to other attorneys or law firms.
          </p>

          <div className="flex flex-col gap-2">
            <p className="font-serif text-2xl leading-snug font-bold md:text-3xl">
               Millions Recovered.
              <br />
              No Fees Until We Win.
            </p>
          </div>

          <div className="flex flex-col gap-2 self-start text-left">
            <p className="font-serif text-2xl leading-tight font-bold text-navy md:text-3xl">
              Injured?
            </p>
            <p className="text-lg leading-relaxed text-navy md:text-xl">
              Email us to get YOUR CASE started with an Attorney.
            </p>
            <Button href="mailto:mycase@abbolaw.com" variant="outline-dark" className="mt-2 self-start">
              mycase@abbolaw.com
            </Button>
          </div>

          {/* <div className="flex max-w-3xl flex-col gap-3 text-navy/80">
            <p>
              A dedicated attorney gives you the guidance and advocacy you need to pursue full
              compensation. At {siteConfig.name}, we examine every detail of your case in pursuit
              of justice &mdash; and we don&apos;t get paid unless you do.
            </p> */}
            {/* <p className="font-bold text-navy">
              We&apos;ve recovered more than millions for our clients.
            </p> */}
          {/* </div> */}

          {/* <div className="flex flex-wrap justify-center gap-4 pt-1">
            <Button href="#contact" variant="accent">
              <IconArrowCircle className="h-4 w-4 text" />
              Get a Free Evaluation
            </Button>
            <Button href={siteConfig.phoneHref} variant="outline-dark">
              <IconPhone className="h-4 w-4" />
              Call {siteConfig.phoneDisplay}
            </Button>
          </div> */}

          {/* <div className="relative -mb-16 h-100 self-end pt-10 md:-mb-20 md:h-110 md:pt-14">
            <Image
              src="/images/lawyers.png"
              alt={`${siteConfig.name} attorneys`}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain object-bottom"
            />
          </div> */}
        </div>
      </Container>
    </section>
  );
}
