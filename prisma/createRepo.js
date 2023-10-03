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
}

export async function getSearchSuggestions(keyword) {
  // Sanitize the input: trim spaces and convert to lowercase
  const sanitizedKeyword = keyword.trim().toLowerCase();

  // Check if the sanitized keyword is blank, return empty array if true
  if (sanitizedKeyword === "") {
    return [];
  }

  const suggestions = await prisma.Repos.findMany({
    where: {
      title: {
        contains: sanitizedKeyword, // You can also use 'contains' for more flexibility
      },
    },
    select: {
      title: true,
    },
  });

  return suggestions;
}

export async function getAllRepoForIfinite(page) {
  const pageData = parseInt(page);

  const records = await prisma.Repos.findMany({
    skip: pageData * 18,
    take: 18,
    include: {
      category: true,
    },
  });
  return records;
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
