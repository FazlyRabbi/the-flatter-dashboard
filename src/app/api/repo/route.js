import { createEdgeRouter } from "next-connect";
import { getRepo, postRepo, privetRepo } from "@/app/controllers/repo";
const router = createEdgeRouter();

router.get(getRepo).post(postRepo).put(privetRepo);

export async function GET(request, ctx) {
  return router.run(request, ctx);
}

export async function PUT(request, ctx) {
  return router.run(request, ctx);
}

export async function POST(request, ctx) {
  return router.run(request, ctx);
}
