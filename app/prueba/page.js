import Image from "next/image";

export default function Home() {
  const title = "Hola Next.js";

  return (
    <div>
      <h1>Generador de Imágenes</h1>
      <Image
        src={`/api/generate-image?title=${encodeURIComponent(title)}`}
        alt="Imagen generada"
        width={600}
        height={300}
      />
    </div>
  );
}
