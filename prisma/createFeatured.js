import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const CreateFeatured = async (data) => {
  const response = await prisma.Featured.create({
    data: data,
  });

  return response;
};

export const GetFeatured = async (data) => {
  const response = await prisma.Featured.findMany();

  return response;
};

export const deleteFeatured = async (id) => {
  const deletedItem = await prisma.Featured.delete({
    where: {
      id: parseInt(id), // Assuming id is passed as a query parameter and parsed to an integer
    },
  });
  return deletedItem;
};
