import { json } from "@remix-run/cloudflare"; // Using Cloudflare import
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request }: { request: Request }) => {
  const cookieHeader = request.headers.get("Cookie") || "";
  const cookies = Object.fromEntries(
    cookieHeader.split("; ").map(c => c.split("="))
  );

  return json({ myCookie: cookies.myCookie || "No cookie found" });
};

export default function Index() {
  const { myCookie } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Cookie Value:</h1>
      <p>{myCookie}</p> jjjjjjjj
      <p>{myCookie}</p>
      <p>{myCookie}</p>
      <p>{myCookie}</p>
      <p>{myCookie}</p>
      <p>{myCookie}</p> 

    </div>
  );
}
