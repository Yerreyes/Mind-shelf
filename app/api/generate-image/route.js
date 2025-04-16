import { createCanvas } from "canvas";

const color = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Imagen Generada";

  const width = 600;
  const height = 300;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Fondo
  ctx.fillStyle = color;

  ctx.fillRect(0, 0, width, height);

  // Texto
  ctx.fillStyle = "#333";
  ctx.font = "30px Arial";
  ctx.textAlign = "center";
  ctx.fillText(title, width / 2, height / 2);

  // Convertir a buffer PNG
  const buffer = canvas.toBuffer("image/png");

  // Convertir el buffer a Base64
  const base64Image = buffer.toString("base64");

  return new Response(JSON.stringify(base64Image), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store", // Evita que se guarde en caché
    },
  });
}
