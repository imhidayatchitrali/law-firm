import Image from "next/image";
import { ScrollBackdrop } from "@/components/ScrollBackdrop";
import "./home.css";

const practiceAreas = [
  {
    title: "Wrongful Death Claims",
    desc: "With a wrongful death, compensation is not simply about covering expenses — it's about honoring what was lost and securing your family's future.",
    paths: ["M12 21s-8-4.7-8-10.3A4.7 4.7 0 0 1 12 7.2a4.7 4.7 0 0 1 8 3.5C20 16.3 12 21 12 21Z"],
  },
  {
    title: "Auto Accidents",
    desc: "Serious Injuries from Collisions involving cars and motor vehicles can bring medical bills, missed work, and questions about insurance coverage.",
    paths: ["M4 11.5 12 4l8 7.5", "M6 10v10h12V10", "M10 20v-6h4v6"],
  },
  {
    title: "Truck Accidents",
    desc: "Serious Injuries due to Collisions involving commercial and freight vehicles.",
    paths: ["M2 7h11v9H2z", "M13 10h4l3 3v3h-7z"],
    circles: [[6.5, 17.5, 1.75], [16.5, 17.5, 1.75]],
  },
  {
    title: "Motorcycle Injury",
    desc: "A motorcycle Collision may involve Serious Injuries and disputes about how it happened",
    paths: ["M8 17h7l-2-6h-4l-1 3", "M13 11l2-3h3", "M9 8h3"],
    circles: [[5.5, 17, 2.5], [18.5, 17, 2.5]],
  },
  {
    title: "Trip & Fall",
    desc: "Serious Injuries due to unsafe or poorly maintained property.",
    paths: ["M12 3.5 2.5 20h19L12 3.5Z", "M12 10v4.5", "M12 17.5h.01"],
  },
  {
    title: "Pedestrian Accidents",
    desc: "Serious Injuries to pedestrians Struck by vehicles.",
    paths: ["M10.5 21l1.5-6-2-2 .5-4.5 3 1 1.5 3H17", "M11 13l-3.5 2.5", "M12.5 15L15 21"],
    circles: [[13, 4.5, 1.75]],
  },
];

const guideSteps = [
  { num: "01", title: "Check Yourself and Others for Injuries", desc: "Your safety and health come first, before anything else." },
  { num: "02", title: "Report the Incident", desc: "File a police or incident report as soon as possible." },
  { num: "03", title: "Document Everything You Can", desc: "Photos, witness names, and details strengthen your claim." },
  { num: "04", title: "Do Not Admit Fault", desc: "Avoid statements that could be used against your case." },
  { num: "05", title: "Do Not Speak to Insurance Alone", desc: "Insurers protect their bottom line, not your interests." },
  { num: "06", title: "Contact Abbo Law", desc: "The sooner we start, the stronger your case becomes." },
];

const testimonials = [
  { quote: "They handled everything and kept me informed every step of the way. I couldn't have asked for a better team.", caseType: "Motor Vehicle Accident" },
  { quote: "From the first call, I felt like a priority, not just another case file.", caseType: "Slip & Fall" },
  { quote: "Professional, responsive, and they fought hard for the outcome I deserved.", caseType: "Workplace Injury" },
];

export default function Home() {

  return (
    <>
      <ScrollBackdrop />

      <section className="relative overflow-hidden abbo-hero">
        <div className="abbo-hero-content">
          <h1>Personal Injury Help in Florida &amp; Michigan</h1>
          <div className="abbo-hero-description">
            <p className="abbo-hero-lead">ABBO LAW is not your typical Personal Injury Firm.</p>
            <ul className="abbo-hero-points">
              <li>We specialize in finding you THE BEST ATTORNEYS for your case, because finding GREAT Personal Injury Attorneys is not easy to do today.</li>
              <li>We will then connect you to them for evaluation and representation.</li>
              <li>When you contact us, your case is referred to our NETWORK OF ATTORNEYS so that they will handle your case.</li>
              <li>Send us a brief email about the incident and where it happened to get started.</li>
            </ul>
          </div>
          <div className="abbo-hero-support">
            <p className="abbo-hero-callout">Millions Recovered for our Clients.<br />No Fees Until We Win.</p>
            <div className="abbo-hero-next">
              <p className="abbo-hero-callout">Injured?<br />Email us to connect with an attorney for evaluation.</p>
              <div className="abbo-hero-action">
                <a className="abbo-email-button abbo-email-outline" href="mailto:mycase@abbolaw.com">
                  <span className="abbo-email-address">mycase@abbolaw.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="practice-areas" className="bg-cream-alt py-20 md:py-24 abbo-accident">
        <div className="mx-auto w-full max-w-6xl px-6 abbo-accident-content">
          <div className="flex max-w-xl flex-col gap-3 abbo-practice-intro">
            <span className="text-sm font-bold tracking-[0.14em] uppercase text-accent" style={{ fontSize: 20 }}>Practice Areas</span>
            <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl" style={{ fontSize: 40 }}>What Is a Personal Injury Case?</h2>
            <p className="text-ink-soft abbo-practice-one-line" style={{ fontSize: 24 }}>
              In Florida and Michigan, personal injury claims cover a wide range of accidents caused by negligence.
            </p>
            <p className="text-ink-soft" style={{ fontSize: 24 }}>Our Network of Attorneys handle:</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2" style={{ fontSize: 20 }}>
            {practiceAreas.map((area) => (
              <div key={area.title} className="flex gap-4 rounded-2xl border border-line bg-panel p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-dark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                    {area.paths.map((d) => (
                      <path key={d} d={d} />
                    ))}
                    {area.circles?.map(([cx, cy, r]) => (
                      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
                    ))}
                  </svg>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-lg font-semibold text-navy" style={{ fontSize: 20 }}>{area.title}</h3>
                  <p className="text-sm text-ink-soft" style={{ fontSize: 24 }}>{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="commitment" className="py-20 md:py-24 abbo-consultation-section abbo-commitment">
        <div className="mx-auto w-full max-w-6xl px-6 grid items-center gap-14 md:grid-cols-2 abbo-commitment-content">
          <figure className="order-2 md:order-1 abbo-consultation-figure">
            <div className="h-80 md:h-100 overflow-hidden rounded-2xl abbo-consultation-frame">
              <Image
                src="/images/consultation.webp"
                alt="Illustrative image of an injured person seated with a leg cast and crutches while an attorney stands with a hand on his shoulder"
                width={1200}
                height={900}
                className="abbo-consultation-photo"
              />
            </div>
            <figcaption className="abbo-consultation-disclosure">For illustrative purposes.</figcaption>
          </figure>
          <div className="order-1 flex flex-col gap-5 md:order-2">
            <span className="text-sm font-bold tracking-[0.14em] uppercase text-accent" style={{ fontSize: 20 }}>Our Commitment</span>
            <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">We Take It Personally. Because It Is.</h2>
            <div className="flex flex-col gap-5" style={{ color: "#142b3e", fontSize: 24, lineHeight: 1.5 }}>
              <p className="text-ink-soft">Serious injuries change lives. That&apos;s why we treat every client like family, NOT a case number.</p>
              <p className="text-ink-soft">From the moment YOU contact us, we get YOUR case to our Attorneys.</p>
              <p className="text-ink-soft">
                We&apos;re in your corner, handling the insurance companies and legal complexity so you can focus on getting better.
              </p>
            </div>
            <a className="abbo-email-button abbo-email-outline self-start" href="mailto:mycase@abbolaw.com">
              <span className="abbo-email-heading">Reach Out Today!</span>
              <span className="abbo-email-address">mycase@abbolaw.com</span>
            </a>
          </div>
        </div>
      </section>

      <section id="injury-guide" className="bg-cream-alt py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex max-w-3xl flex-col gap-3">
            <span className="text-sm font-bold tracking-[0.14em] uppercase text-accent" style={{ fontSize: 20 }}>Know Your Rights</span>
            <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">What to Do After an Injury</h2>
            <p className="text-ink-soft" style={{ fontSize: 24 }}>
              The moments after an accident are overwhelming. These steps protect you and your case.
            </p>
          </div>
          <ol className="abbo-guide-steps mt-12 grid list-none gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {guideSteps.map((step) => (
              <li key={step.num} className="flex flex-col gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-serif font-bold text-white">{step.num}</div>
                <h3 className="font-serif text-lg font-semibold text-navy" style={{ fontSize: 20 }}>{step.title}</h3>
                <p className="text-sm text-ink-soft" style={{ fontSize: 20 }}>{step.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-11 text-center">
            <a className="abbo-email-button" href="mailto:mycase@abbolaw.com">
              <span className="abbo-email-heading">Contact Us Now!</span>
              <span className="abbo-email-address">mycase@abbolaw.com</span>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-panel py-20 md:py-24" style={{ fontSize: 20 }}>
        <div className="mx-auto w-full max-w-6xl px-6 grid items-start gap-14 md:grid-cols-2">
          <div className="abbo-about-left">
            <div className="abbo-founder-mark" role="img" aria-label="Patrick A. Abbo, founding attorney">
              <div className="abbo-founder-initials">PA</div>
              <div className="abbo-founder-mark-text">
                <strong>Patrick A. Abbo</strong>
                <span>Founding Attorney</span>
              </div>
            </div>
            <div className="abbo-mini-stories">
              <span className="abbo-mini-kicker">Testimonials</span>
              <h3>Real Client Stories</h3>
              {testimonials.map((t) => (
                <figure key={t.caseType} className="abbo-mini-story">
                  <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption>— Client · {t.caseType}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5" style={{ fontSize: 14 }}>
            <span className="text-sm font-bold tracking-[0.14em] uppercase text-accent" style={{ fontSize: 20 }}>Meet the founding Attorney</span>
            <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">Patrick A. Abbo</h2>
            <p className="text-sm font-bold tracking-wide text-accent uppercase" style={{ fontSize: 14 }}>Member, Florida Bar and michigan bar</p>
            <div className="abbo-founder-bio">
              <p>Patrick Abbo BATTLES against the insurance companies every day. He KNOWS that all THEY care about are their RECORD PROFITS. They don&apos;t care about YOU.</p>
              <p>His experience has taught him how to FIND the type of Attorneys it takes to FIGHT the insurance companies so that YOU, can get the highest payment that YOU, deserve.</p>
              <p>He has built a Network of Skilled and Passionate Attorneys that care about one thing: getting JUSTICE for YOU!</p>
              <p>That&apos;s why he&apos;s bringing these Attorneys TO YOU!</p>
            </div>
            <div className="mt-2 flex flex-col gap-1 border-t border-line pt-5">
              <p className="text-sm text-ink-soft">
                <span className="abbo-jd-desktop">
                  <span className="font-bold text-navy">Juris Doctor</span> — Barry University School of Law, Orlando, FL
                </span>
                <span className="abbo-jd-mobile">
                  <span className="font-bold text-navy abbo-jd-label">Juris Doctor</span>
                  <span className="abbo-jd-school">Barry University School of Law</span>
                  <span className="abbo-jd-location">Orlando, Florida</span>
                </span>
              </p>
              <p className="text-sm text-ink-soft">
                <span className="abbo-ba-desktop">
                  <span className="font-bold text-navy">B.A., Liberal Studies</span> — Barry University, Miami, FL
                </span>
                <span className="abbo-ba-mobile">
                  <span className="font-bold text-navy abbo-degree-label">B.A., Liberal Studies</span>
                  <span className="abbo-degree-school">Barry University</span>
                  <span className="abbo-degree-location">Miami, Florida</span>
                </span>
              </p>
            </div>
            <figure className="abbo-fl-mi-figure">
              <Image src="/images/fl-mi-skyline.webp" alt="Illustrative Miami Beach and Detroit skyline" width={1200} height={480} />
              <figcaption>Florida • Michigan</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-navy py-20 md:py-24">
        <div className="mx-auto w-full max-w-xl px-6 flex flex-col items-center gap-5 text-center">
          <span className="text-sm font-bold tracking-[0.14em] uppercase text-gold" style={{ fontSize: 20 }}>Get Started Today</span>
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">Honest Answers From Day One</h2>
          <p className="text-white/80" style={{ fontSize: 20 }}>
            A legal team that puts you first, every step of the way — strategy built around what matters to you, and moving forward with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-1">
            <a className="abbo-email-button" href="mailto:mycase@abbolaw.com">
              <span className="abbo-email-heading">Email Us to Get Started!</span>
              <span className="abbo-email-address">mycase@abbolaw.com</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
