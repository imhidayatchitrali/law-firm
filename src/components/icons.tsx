import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconAlertTriangle(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3.5 2.5 20h19L12 3.5Z" />
      <path d="M12 10v4.5" />
      <path d="M12 17.5h.01" />
    </Base>
  );
}

export function IconTruck(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M2 7h11v9H2z" />
      <path d="M13 10h4l3 3v3h-7z" />
      <circle cx="6.5" cy="17.5" r="1.75" />
      <circle cx="16.5" cy="17.5" r="1.75" />
    </Base>
  );
}

export function IconMotorcycle(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="5.5" cy="17" r="2.5" />
      <circle cx="18.5" cy="17" r="2.5" />
      <path d="M8 17h7l-2-6h-4l-1 3" />
      <path d="M13 11l2-3h3" />
      <path d="M9 8h3" />
    </Base>
  );
}

export function IconStethoscope(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 3v6a4 4 0 0 0 8 0V3" />
      <path d="M10 13v2a5 5 0 0 0 10 0v-1.5" />
      <circle cx="20" cy="11.5" r="1.5" />
      <path d="M6 3H4.5M10 3H8.5" />
    </Base>
  );
}

export function IconWalking(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="13" cy="4.5" r="1.75" />
      <path d="M10.5 21l1.5-6-2-2 .5-4.5 3 1 1.5 3H17" />
      <path d="M11 13l-3.5 2.5" />
      <path d="M12.5 15L15 21" />
    </Base>
  );
}

export function IconHelmet(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 16a8 8 0 0 1 16 0" />
      <path d="M3 16h18v2H3z" />
      <path d="M12 8v-3" />
    </Base>
  );
}

export function IconDollar(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 2v20" />
      <path d="M16.5 6.5c0-1.7-2-3-4.5-3s-4.5 1.3-4.5 3 2 2.6 4.5 3 4.5 1.3 4.5 3-2 3-4.5 3-4.5-1.3-4.5-3" />
    </Base>
  );
}

export function IconHeartPulse(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 20.5S3 14.7 3 8.8A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 9 1.8c0 5.9-9 11.7-9 11.7Z" />
      <path d="M6 11h2.5l1.5-3 2 5 1.5-2.5H18" />
    </Base>
  );
}

export function IconHome(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-6h4v6" />
    </Base>
  );
}

export function IconClock(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </Base>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </Base>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6.5 3.5h3l1.5 4-2 2a12 12 0 0 0 5.5 5.5l2-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    </Base>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3.5 6.5h17" />
      <path d="M3.5 12h17" />
      <path d="M3.5 17.5h17" />
    </Base>
  );
}

export function IconClose(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 5l14 14" />
      <path d="M19 5L5 19" />
    </Base>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5.5 8.5 12 15l6.5-6.5" />
    </Base>
  );
}

export function IconStar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.5l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 20.5 7 13.7l-5-4.9 6.9-1z" />
    </svg>
  );
}

export function IconShieldCheck(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3l7 3v5.5c0 4.6-3 7.9-7 9.5-4-1.6-7-4.9-7-9.5V6l7-3Z" />
      <path d="M9 12l2 2 4-4.5" />
    </Base>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 8.2a3 3 0 1 1 0 5.8" />
      <path d="M15.5 13.7c2.4.4 4.2 1.9 5 3.1" />
    </Base>
  );
}

export function IconScale(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3v18" />
      <path d="M7 21h10" />
      <path d="M4 7h6M14 7h6" />
      <path d="M4 7l-2.5 5A3 3 0 0 0 4 13a3 3 0 0 0 2.5-1L4 7Z" />
      <path d="M20 7l-2.5 5a3 3 0 0 0 2.5 1 3 3 0 0 0 2.5-1L20 7Z" />
    </Base>
  );
}

export function IconDocument(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6.5 3h7L18 6.5V21h-11.5z" />
      <path d="M13.5 3v3.5H17" />
      <path d="M9 12h6M9 15.5h6M9 8.5h2" />
    </Base>
  );
}

export function IconCamera(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 8h3.5L9 5.5h6L16.5 8H20v11H4z" />
      <circle cx="12" cy="13.5" r="3.25" />
    </Base>
  );
}

export function IconArrowCircle(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 8.5l4 3.5-4 3.5" />
    </Base>
  );
}

export function IconBuilding(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 21V5.5L12 3l7 2.5V21" />
      <path d="M5 21h14" />
      <path d="M9 8h.01M12 8h.01M15 8h.01M9 12h.01M12 12h.01M15 12h.01" />
      <path d="M10 21v-4h4v4" />
    </Base>
  );
}
