import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const title = searchParams.get("title") || "Raman Pokhrel";
  const subtitle = searchParams.get("subtitle") || "Game Developer Portfolio";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a, #020617)",
          color: "white",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto",
        }}
      >
        {/* Main Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: "-1px",
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            opacity: 0.8,
          }}
        >
          {subtitle}
        </div>

        {/* Bottom Tag */}
        <div
          style={{
            marginTop: 40,
            fontSize: 20,
            opacity: 0.6,
          }}
        >
          raman.dev
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}