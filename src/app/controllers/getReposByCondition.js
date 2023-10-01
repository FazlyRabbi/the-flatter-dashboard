import {
  getRepoByCondition,
  getLetest18Repo,
} from "../../../prisma/createRepo";

export async function getRepobyConditions(req) {
  try {
    const jsonBody = await req.json();
    const query = jsonBody.query;


    const result = await getRepoByCondition(query);

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

export async function getLetestRepo() {
  try {
    const result = await getLetest18Repo();

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
