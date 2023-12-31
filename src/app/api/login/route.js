import { login } from "../../controllers/login.cont";
import { createEdgeRouter } from "next-connect";


const router = createEdgeRouter();

router

  .post(login);

export async function GET(request, ctx) {
  return router.run(request, ctx);
}

export async function PUT(request, ctx) {
  return router.run(request, ctx);
}

export async function POST(request, ctx) {
  return router.run(request, ctx);
}
