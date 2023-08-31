import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const CreateRepo= async (data) => {
  const response = await prisma.Repos.create({
    data: data,
  });

  return response;
};

export async function getAllRepo() {
  const records = await prisma.Repos.findMany();
  return records;
}
