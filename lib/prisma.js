
import { PrismaClient } from "@prisma/client";

// Instanciamos PrismaClient una sola vez
let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // En desarrollo, reutilizamos la instancia para evitar muchas conexiones
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
