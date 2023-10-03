import { createEdgeRouter } from "next-connect";
import { getRepoByInfinite, getSearchSuggestion } from "@/app/controllers/repo";

const router = createEdgeRouter();
router.put(getRepoByInfinite).post(getSearchSuggestion);

export async function GET(request, ctx) {
  return router.run(request, ctx);
}

export async function PUT(request, ctx) {
  return router.run(request, ctx);
}

export async function POST(request, ctx) {
  return router.run(request, ctx);
}
