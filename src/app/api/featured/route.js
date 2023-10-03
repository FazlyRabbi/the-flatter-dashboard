import { createEdgeRouter } from "next-connect";
import {
  postFeatured,
  getFeatured,
  dltFeatured,
} from "@/app/controllers/featured.cont";

const router = createEdgeRouter();
router.post(postFeatured).get(getFeatured).put(dltFeatured);

export async function GET(request, ctx) {
  return router.run(request, ctx);
}

export async function PUT(request, ctx) {
  return router.run(request, ctx);
}

export async function POST(request, ctx) {
  return router.run(request, ctx);
}
export async function DELETE(request, ctx) {
  return router.run(request, ctx);
}


