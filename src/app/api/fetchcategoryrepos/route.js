import { createEdgeRouter } from "next-connect";
import { getReposByCategory } from "@/app/controllers/getReposbyCategory.cont";

const router = createEdgeRouter();

router.post(getReposByCategory);

export async function GET(request, ctx) {
  return router.run(request, ctx);
}

export async function PUT(request, ctx) {
  return router.run(request, ctx);
}

export async function POST(request, ctx) {
  return router.run(request, ctx);
}
