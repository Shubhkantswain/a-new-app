import { json } from "@remix-run/cloudflare";  // Note: using cloudflare import
import { Form } from "@remix-run/react";

export const action = async ({ request }: { request: Request }) => {
  const headers = new Headers();
  
  // Create cookie string manually
  const cookieString = [
    `myCookie=hello_remix`,
    `Path=/`,
    `Max-Age=${60 * 60 * 24}`, // 1 day
    'HttpOnly',        
    'Secure',
    'SameSite=Strict'
  ].join('; ');

  headers.append("Set-Cookie", cookieString);
  
  return json(
    { success: true, message: "Cookie set successfully!" }, 
    { headers }
  );
};

export default function Index() {
  return (
    <div>
      <h1>Set Cookie Example see</h1>
      <Form method="post">
        <button type="submit">Set Cookie</button>
      </Form>
    </div>
  );
}