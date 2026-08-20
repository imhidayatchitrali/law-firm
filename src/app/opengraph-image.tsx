import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#1c2333",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#f4c98a",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 64,
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            color: "#ffffff",
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          Injured? We Fight So You Don&apos;t Have To.
        </div>
        <div style={{ marginTop: 28, fontSize: 26, color: "rgba(255,255,255,0.75)" }}>
          Free Consultation · No Fees Unless We Win
        </div>
      </div>
    ),
    { ...size }
  );
}
