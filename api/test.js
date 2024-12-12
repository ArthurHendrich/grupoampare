import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function test() {
  try {
    // Criar um usuário inicial para a coleção "User"
    await prisma.user.create({
      data: {
        name: "John Doe",
        birthdate: "1990-01-01",
        gender: "Male",
      },
    });

    // Consultar todos os usuários
    const users = await prisma.user.findMany();
    console.log("Usuários encontrados:", users);
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  } finally {
    await prisma.$disconnect();
  }
}

test();
