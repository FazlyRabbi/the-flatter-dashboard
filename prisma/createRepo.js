import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const CreateRepo = async (data) => {
  const response = await prisma.Repos.create({
    data: data,
  });

  return response;
};

export async function getAllRepo(page) {
  // const pageData = parseInt(page);

  const records = await prisma.Repos.findMany({
    // skip: page * 6,
    // take: pageData,
    include: {
      category: true,
    },
  });

  return records;
  // } else {
  //   const records = await prisma.Repos.findMany({
  //     // skip: page * 6,
  //     take: pageData,
  //     include: {
  //       category: true,
  //     },
  //   });
  //   return records;
  // }
}

export async function getRepoByCondition(query) {
  const products = await prisma.Repos.findMany({
    where: {
      tags: {
        contains: query,
      },
    },
  });

  return products;
}

export async function getRepoByCategory(query) {
  console.log(query);
  const products = await prisma.Repos.findMany({
    where: {
      category: {
        name: query.data,
      },
    },
  });

  return products;
}

export async function getLetest18Repo() {
  const products = await prisma.Repos.findMany({
    take: 18,
    orderBy: {
      createdAt: "desc",
    },
  });

  return products;
}

export async function makePrivetRepo(id) {
  const records = await prisma.Repos.update({
    where: {
      id: id,
    },
    data: {
      isPublished: false,
    },
  });

  return records;
}
