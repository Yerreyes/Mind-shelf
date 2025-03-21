import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
    if (req.method === "POST") {
      const { title, category, fields } = req.body;
      try {
        const module = await prisma.module.create({
          data: { title, category, fields },
        });
        res.status(200).json(module);
      } catch (error) {
        res.status(500).json({ error: "Error creando módulo" });
      }
    }
  }