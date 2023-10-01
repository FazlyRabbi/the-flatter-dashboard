import { createEdgeRouter } from "next-connect";
import { getSearch } from "@/app/controllers/search.cont";
const router = createEdgeRouter();

router.get(getSearch);

export async function GET(request, ctx) {
  return router.run(request, ctx);
}

export async function PUT(request, ctx) {
  return router.run(request, ctx);
}

export async function POST(request, ctx) {
  return router.run(request, ctx);
}
