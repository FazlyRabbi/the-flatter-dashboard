import { createEdgeRouter } from "next-connect";
import { getRepo, postRepo } from "@/app/controllers/repo";
const router = createEdgeRouter();

router
  // .use(imgMiddleware)
  .get(getRepo)
  .post(postRepo);

export async function GET(request, ctx) {
  return router.run(request, ctx);
}

export async function PUT(request, ctx) {
  return router.run(request, ctx);
}

export async function POST(request, ctx) {
  return router.run(request, ctx);
}
