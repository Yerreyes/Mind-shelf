import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const modules = await prisma.module.findMany();

    // Agrupar los módulos por categoría
    const groupedModules = modules.reduce((acc, module) => {
      if (!acc[module.category]) {
        acc[module.category] = [];
      }
      acc[module.category].push(module);
      return acc;
    }, {});

    return Response.json(groupedModules);
  } catch (error) {
    return Response.json(
      { error: "Error procesando la solicitud" },
      { status: 500 }
    );
  }
}
