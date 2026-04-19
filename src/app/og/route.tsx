import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const title = searchParams.get("title") ?? "Raman Pokhrel";
  const subtitle = searchParams.get("subtitle") ?? "Game Developer";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px",
          backgroundColor: "#0b1020",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 60,
            fontWeight: 900,
            lineHeight: 1.1,
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: 26,
            marginTop: 20,
            opacity: 0.7,
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      // 🔥 CRITICAL FIX
      emoji: "twemoji",
    }
  );
}