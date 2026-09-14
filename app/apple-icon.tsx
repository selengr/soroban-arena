import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e0c0b",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            width: 112,
            height: 128,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 0",
            background: "#4a2f1c",
            borderRadius: 16,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 999,
              background: "#e23a28",
            }}
          />
          <div
            style={{
              width: 120,
              height: 10,
              background: "#c9b08a",
              borderRadius: 4,
            }}
          />
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 999,
              background: "#e6b35a",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
