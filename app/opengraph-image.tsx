import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Детский коррекционный центр «Ньютон» — Алматы";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(ellipse 60% 40% at 15% 10%, rgba(232, 181, 137, 0.45), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 40%, rgba(168, 217, 188, 0.30), transparent 60%), #0A0F0E",
          fontFamily: "Inter, system-ui, sans-serif",
          color: "#F4EBDC",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #E8B589 0%, #D4A86A 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 36,
              color: "#1A0F08",
            }}
          >
            Н
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 26, fontWeight: 700 }}>Ньютон</span>
            <span
              style={{
                fontSize: 16,
                color: "#8E948B",
                marginTop: 4,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Алматы · Детский центр
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span
            style={{
              fontSize: 78,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            Помогаем детям расти{" "}
            <span style={{ color: "#E8B589" }}>спокойно</span>
          </span>
          <span style={{ fontSize: 28, color: "#DCD3C2", maxWidth: 900 }}>
            АВА · Логопед · Сенсорная интеграция · Камеры онлайн · Зона ожидания
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(244, 235, 220, 0.18)",
            paddingTop: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              padding: "16px 24px",
              borderRadius: 999,
              background:
                "linear-gradient(180deg, #F2C29B 0%, #E8B589 60%, #D49B6F 100%)",
              color: "#1A0F08",
              fontWeight: 700,
              fontSize: 24,
            }}
          >
            Диагностика 5 000 ₸ — акция
          </div>
          <span style={{ fontSize: 22, color: "#8E948B" }}>neuton.kz</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
