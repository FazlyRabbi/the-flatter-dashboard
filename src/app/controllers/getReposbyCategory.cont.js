import { getRepoByCategory } from "../../../prisma/createRepo";

export async function getReposByCategory(req) {
  try {
    const data = await req.json();

    const result = await getRepoByCategory(data);

    const responseData = {
      ok: true,
      message: "Category Inserted Successfully!",
      data: result,
    };

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    const responseData = {
      ok: false,
      message: "Data Not Inserted!",
      data: err.message,
    };

    return new Response(JSON.stringify(responseData), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Content-Type": "application/json", // Set the content type header to JSON
      },
    });
  }
}

