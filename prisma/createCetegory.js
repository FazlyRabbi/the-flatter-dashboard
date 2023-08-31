import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const CreateCetegory = async (data) => {
  const response = await prisma.Category.create({
    data: data,
  });

  return response;
};

export async function getCetegory() {
  const records = await prisma.Category.findMany();
  return records;
}
