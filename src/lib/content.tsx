import type { ReactNode } from "react";
import {
  IconAlertTriangle,
  IconTruck,
  IconMotorcycle,
  IconWalking,
  IconDollar,
  IconHeartPulse,
  IconHome,
  IconClock,
  IconCheck,
  IconDocument,
  IconCamera,
} from "@/components/icons";

export type PracticeArea = { title: string; desc: string; icon: ReactNode };

export const practiceAreas: PracticeArea[] = [
  {
    title: "Trip & Fall",
    desc: "Injuries from unsafe or poorly maintained property.",
    icon: <IconAlertTriangle className="h-6 w-6" />,
  },
  {
    title: "Truck Accidents",
    desc: "Collisions involving commercial and freight vehicles.",
    icon: <IconTruck className="h-6 w-6" />,
  },
  {
    title: "Motorcycle Injury",
    desc: "Serious injuries from motorcycle collisions.",
    icon: <IconMotorcycle className="h-6 w-6" />,
  },
  {
    title: "Pedestrian Accidents",
    desc: "Injuries to pedestrians struck by vehicles.",
    icon: <IconWalking className="h-6 w-6" />,
  },
];

export type Step = { num: string; title: string; desc: string; icon: ReactNode };

export const steps: Step[] = [
  {
    num: "01",
    title: "Check Yourself and Others for Injuries",
    desc: "Your safety and health come first, before anything else.",
    icon: <IconHeartPulse className="h-5 w-5" />,
  },
  {
    num: "02",
    title: "Report the Incident",
    desc: "File a police or incident report as soon as possible.",
    icon: <IconDocument className="h-5 w-5" />,
  },
  {
    num: "03",
    title: "Document Everything You Can",
    desc: "Photos, witness names, and details strengthen your claim.",
    icon: <IconCamera className="h-5 w-5" />,
  },
  {
    num: "04",
    title: "Do Not Admit Fault",
    desc: "Avoid statements that could be used against your case.",
    icon: <IconAlertTriangle className="h-5 w-5" />,
  },
  {
    num: "05",
    title: "Do Not Speak to Insurance Alone",
    desc: "Insurers protect their bottom line, not your interests.",
    icon: <IconCheck className="h-5 w-5" />,
  },
  {
    num: "06",
    title: "Call Abbo Law",
    desc: "The sooner we start, the stronger your case becomes.",
    icon: <IconCheck className="h-5 w-5" />,
  },
];

export type WorthFactor = { title: string; desc: string; icon: ReactNode };

export const worthFactors: WorthFactor[] = [
  {
    title: "Medical Expenses",
    desc: "Past and future costs related to treatment and recovery.",
    icon: <IconDollar className="h-6 w-6" />,
  },
  {
    title: "Lost Income",
    desc: "Wages and earning capacity lost due to your injury.",
    icon: <IconDollar className="h-6 w-6" />,
  },
  {
    title: "Pain & Suffering",
    desc: "Compensation for physical and emotional impact.",
    icon: <IconHeartPulse className="h-6 w-6" />,
  },
  {
    title: "Property Damage",
    desc: "Repair or replacement costs for damaged property.",
    icon: <IconHome className="h-6 w-6" />,
  },
  {
    title: "Future Impact",
    desc: "Long-term effects on your health, work, and daily life.",
    icon: <IconClock className="h-6 w-6" />,
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How long do I have to file a personal injury claim in Florida?",
    a: "Filing deadlines vary by state and case type. Waiting can hurt your case, so it's best to speak with an attorney early to confirm your deadline.",
  },
  {
    q: "Can I still recover compensation if I was partially at fault?",
    a: "In many states, yes — you can still recover damages even if you share some fault, as long as you are not majority responsible. Rules vary by state.",
  },
  {
    q: "How much does it cost to hire Abbo Law?",
    a: "Nothing up front. We work on a contingency basis, so you pay no fees unless we win your case.",
  },
  {
    q: "Will my case go to trial?",
    a: "Most cases settle before trial, but we prepare every case as if it will go to court to maximize your leverage.",
  },
  {
    q: "How long will my case take to resolve?",
    a: "Timelines vary depending on the complexity of your case and the severity of your injuries.",
  },
  {
    q: "What should I bring to my free consultation?",
    a: "Any documents related to the incident: photos, reports, medical records, and insurance correspondence, if available.",
  },
];

export type Testimonial = { id:string,quote: string; name: string };

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "They handled everything and kept me informed every step of the way. I couldn't have asked for a better team.",
    name: "Client — Motor Vehicle Accident",
  },
  { 
    id: "2",
    quote: "From the first call, I felt like a priority, not just another case file.",
    name: "Client — Slip & Fall",
  },
  {
    id: "3",
    quote: "Professional, responsive, and they fought hard for the outcome I deserved.",
    name: "Client — Workplace Injury",
  },
];

export const shortReviews: Testimonial[] = [
  {
    id: "1",
    quote: "Excellent communication and a fair, honest process from start to finish.",
    name: "Verified Client",
  },
  {
    id: "2",
    quote: "They made a stressful situation manageable and got results.",
    name: "Verified Client",
  },
  {
    id: "3",
    quote: "Highly recommend this team to anyone who needs real representation.",
    name: "Verified Client",
  },
];

export const pressLogos: string[] = ["[Press Logo]", "[Press Logo]", "[Press Logo]", "[Press Logo]"];

export type AttorneyBio = {
  name: string;
  credential: string;
  summary: string;
  education: { degree: string; school: string }[];
};

export const attorneyBio: AttorneyBio = {
  name: "Patrick A. Abbo",
  credential: "Member, Florida Bar",
  summary:
    "Patrick Abbo has built his career on skilled negotiation, thorough research, and persuasive writing — the trait that will get you the best settlement possible.",
  education: [
    { degree: "Juris Doctor", school: "Barry University School of Law, Orlando, FL" },
    { degree: "B.A., Liberal Studies", school: "Barry University, Miami, FL" },
  ],
};
