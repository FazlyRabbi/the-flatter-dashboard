import { createEdgeRouter } from "next-connect";
import { getRepobyConditions } from "@/app/controllers/getReposByCondition";

const router = createEdgeRouter();

router.post(getRepobyConditions);

export async function GET(request, ctx) {
  return router.run(request, ctx);
}

export async function PUT(request, ctx) {
  return router.run(request, ctx);
}

export async function POST(request, ctx) {
  return router.run(request, ctx);
}
