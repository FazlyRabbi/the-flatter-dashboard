import { createEdgeRouter } from "next-connect";
import { postCategory, fetchCategory } from "@/app/controllers/category.cont";

const router = createEdgeRouter();

router.get(fetchCategory).post(postCategory);

export async function GET(request, ctx) {
  return router.run(request, ctx);
}

export async function PUT(request, ctx) {
  return router.run(request, ctx);
}

export async function POST(request, ctx) {
  return router.run(request, ctx);
}
