import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function test() {
  try {
    const users = await prisma.user.findMany();
    console.log("Usuários encontrados:", users);
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  } finally {
    await prisma.$disconnect();
  }
}

test();
