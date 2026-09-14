import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "#0e0c0b",
          color: "#f3ead8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, color: "#e23a28" }}>
          DIGITAL SOROBAN
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          SOROBAN
        </div>
        <div style={{ marginTop: 28, fontSize: 36, color: "#8a7f74", maxWidth: 760 }}>
          Move the beads. Make the number. Race a friend.
        </div>
      </div>
    ),
    { ...size },
  );
}
