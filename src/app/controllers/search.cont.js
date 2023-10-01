import { searchRepo } from "../../../prisma/searchRepo";

export async function getSearch(req) {
  try {
    const url = new URL(req.url);
    const query = url.searchParams.get("q");

    const result = await searchRepo(query.toLocaleLowerCase());

    const responseData = {
      ok: true,
      message: "Repo get successfully!",
      data: result,
    };

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (err) {
    const responseData = {
      ok: false,
      message: err.message,
    };

    return new Response(JSON.stringify(responseData), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }
}
