import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-navy-dark abbo-footer">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Link className="abbo-footer-brand" href="https://abbo-law.netlify.app/">
            {siteConfig.name}
          </Link>
          <p className="abbo-footer-copyright">© {year} {siteConfig.name}. All rights reserved.</p>
          <div className="abbo-footer-legal" id="legal-disclaimer">
            <p>
              <strong>Attorney Advertising.</strong> Abbo Law accepts personal injury inquiries
              involving matters arising in Florida and Michigan. Abbo Law attorneys are licensed in
              Florida and Michigan. Personal injury matters obtained through this website will be
              referred to other attorneys or law firms for evaluation and representation. Contacting
              Abbo Law or submitting information through this website does not create an
              attorney-client relationship.
            </p>
            <p>
              Abbo Law | Troy, Michigan | Patrick Abbo, Esq. | Licensed in FL and MI | {" "}
              <a href="mailto:mycase@abbolaw.com">mycase@abbolaw.com</a> | {" "}
              <a href="#full-legal-disclaimer">Legal Disclaimer</a>
            </p>
          </div>
        </div>
      </footer>

      <section id="full-legal-disclaimer" className="abbo-disclaimer-overlay" role="dialog" aria-modal="true" aria-labelledby="abbo-disclaimer-title" tabIndex={-1}>
        <div className="abbo-disclaimer-paper">
          <a className="abbo-disclaimer-close" href="#legal-disclaimer" aria-label="Close legal disclaimer">
            Close ×
          </a>
          <h1 id="abbo-disclaimer-title">Legal Disclaimer</h1>
          <h2>Attorney Advertising</h2>
          <p>Abbo Law accepts inquiries concerning personal injury matters arising in Florida and Michigan. Abbo Law attorneys are licensed to practice law in Florida and Michigan. Abbo Law maintains its office in Troy, Michigan.</p>
          <h2>Referral of Personal Injury Matters</h2>
          <p>Personal injury matters obtained through this website will be referred to other attorneys or law firms for evaluation and representation, including matters arising in Florida and Michigan.</p>
          <p>The attorney or law firm receiving a referred matter may be independent from Abbo Law and will determine whether to accept the representation.</p>
          <p>Where permitted by applicable law and professional-conduct rules, Abbo Law may receive a portion of the attorney fee from the attorney or law firm handling a referred matter. Any division of attorney fees will comply with applicable law and ethical requirements, including any required client disclosure or consent.</p>
          <h2>No Attorney-Client Relationship</h2>
          <p>Visiting this website, submitting an online form, calling, emailing, uploading information, or otherwise communicating with Abbo Law does not by itself create an attorney-client relationship with Abbo Law or with any attorney or law firm to whom a matter may be referred.</p>
          <p>An attorney-client relationship begins only after an attorney or law firm agrees to accept the matter and any required representation agreement is executed.</p>
          <h2>General Information — Not Legal Advice</h2>
          <p>Information on this website is provided for general informational purposes only and does not constitute legal advice. The application of law depends upon the particular facts and circumstances of each matter.</p>
          <p>You should not rely on information on this website as a substitute for legal advice concerning your particular situation.</p>
          <h2>Legal Deadlines</h2>
          <p>Personal injury claims are subject to statutes of limitation, statutes of repose, notice requirements, and other legal deadlines.</p>
          <p>Contacting Abbo Law or submitting information through this website does not stop, extend, toll, or satisfy any applicable deadline. You should not delay seeking legal advice concerning your rights.</p>
          <h2>No Guarantee of Case Acceptance</h2>
          <p>Submitting information to Abbo Law does not guarantee that Abbo Law, or any attorney or law firm to whom a matter may be referred, will accept the case.</p>
          <h2>No Guarantee of Results</h2>
          <p>Past results, settlements, verdicts, testimonials, or other case information do not guarantee or predict the outcome of any other matter. Every case depends upon its own facts, circumstances, applicable law, available evidence, damages, insurance coverage, and other factors.</p>
          <h2>Geographic Scope</h2>
          <p>Abbo Law&apos;s current personal injury advertising through this website concerns matters arising in Florida and Michigan. Abbo Law does not represent that it maintains an office in Florida.</p>
          <h2>Abbo Law</h2>
          <p>Attorneys Licensed in Florida and Michigan<br />Office: Troy, Michigan<br />Responsible Attorney: Patrick Abbo, Esq. | Licensed in FL and MI<br />Contact: <a href="mailto:mycase@abbolaw.com">mycase@abbolaw.com</a></p>
        </div>
      </section>
    </>
  );
}
