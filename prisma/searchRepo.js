import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const searchRepo = async (query) => {
  const response = await prisma.Repos.findMany({
    where: {
      title: {
        contains: query,
      },
    },
  });

  return response;
};
