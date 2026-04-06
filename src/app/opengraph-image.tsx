import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BetterBrain — Production AI in Weeks, Not Months";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f0a1a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 16,
            background: "rgba(124, 58, 237, 0.15)",
            border: "2px solid rgba(124, 58, 237, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
            fontSize: 40,
          }}
        >
          🧠
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#f0eef4",
            marginBottom: 16,
            letterSpacing: -1,
          }}
        >
          BetterBrain
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#9ca3af",
            maxWidth: 600,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Production AI in weeks, not months
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#7c3aed",
            marginTop: 24,
            fontWeight: 600,
          }}
        >
          betterbrain.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
