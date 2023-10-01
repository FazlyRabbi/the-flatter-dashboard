import { createEdgeRouter } from "next-connect";
import { getLetestRepo } from "@/app/controllers/getReposByCondition";
const router = createEdgeRouter();

router.get(getLetestRepo);

export async function GET(request, ctx) {
  return router.run(request, ctx);
}

export async function PUT(request, ctx) {
  return router.run(request, ctx);
}

export async function POST(request, ctx) {
  return router.run(request, ctx);
}
