# Next.js Navigation, Route Handlers, and Error Handling

This document covers key topics related to navigation, route handlers, and error handling in Next.js. Each section includes explanations, code examples, and links to official documentation.

---

## **1. Linking Component Navigation**
Next.js provides the `<Link>` component to enable client-side navigation between pages without full page reloads, improving performance.

### **Example:**
```tsx
import Link from 'next/link';

export default function Home() {
  return (
    <nav>
      <Link href="/about">Go to About Page</Link>
    </nav>
  );
}
```
🔗 [Next.js Link Component](https://nextjs.org/docs/app/api-reference/components/link)

---

## **2. Route Handlers**
### **GET Request**
Handles fetching data from an API endpoint.
```ts
export async function GET() {
  return new Response(JSON.stringify({ message: "Hello World" }), {
    headers: { "Content-Type": "application/json" },
  });
}
```
🔗 [GET Request Docs](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#get-request)

### **POST Request**
Handles sending data to the server.
```ts
export async function POST(req: Request) {
  const data = await req.json();
  return new Response(JSON.stringify({ received: data }), {
    headers: { "Content-Type": "application/json" },
  });
}
```
🔗 [POST Request Docs](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#post-request)

### **Dynamic Route Handlers**
Dynamic API routes allow handling requests dynamically based on the URL.
```ts
export async function GET(req: Request, { params }: { params: { id: string } }) {
  return new Response(`User ID: ${params.id}`);
}
```
🔗 [Dynamic Routes Docs](https://nextjs.org/docs/routing/dynamic-routes)

### **PATCH Request**
Used for updating partial data.
```ts
export async function PATCH(req: Request) {
  const data = await req.json();
  return new Response(JSON.stringify({ updated: data }), {
    headers: { "Content-Type": "application/json" },
  });
}
```
🔗 [PATCH Request Docs](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#patch-request)

### **DELETE Request**
Handles deleting resources.
```ts
export async function DELETE() {
  return new Response("Resource deleted", { status: 200 });
}
```
🔗 [DELETE Request Docs](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#delete-request)

### **URL Query Parameters**
Extract query parameters from a request.
```ts
export async function GET(req: Request) {
  const url = new URL(req.url);
  const query = url.searchParams.get("name");
  return new Response(`Hello ${query}`);
}
```
🔗 [Query Params Docs](https://nextjs.org/docs/app/api-reference/functions/use-search-params)

### **Headers in Route Handlers**
Accessing request headers.
```ts
export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  return new Response(`Auth Header: ${authHeader}`);
}
```
🔗 [Headers Docs](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#headers)

### **Cookies in Route Handlers**
Managing cookies in API requests.
```ts
import { cookies } from "next/headers";

export async function GET() {
  cookies().set("theme", "dark");
  return new Response("Cookie Set");
}
```
🔗 [Cookies Docs](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#cookies)

### **Redirects in Route Handlers**
Redirecting users dynamically.
```ts
export async function GET() {
  return Response.redirect("/new-path", 302);
}
```
🔗 [Redirects Docs](https://nextjs.org/docs/app/api-reference/functions/redirect)

### **Caching in Route Handlers**
Control caching behavior in API responses.
```ts
export async function GET() {
  return new Response("Cached Response", {
    headers: { "Cache-Control": "max-age=3600" },
  });
}
```
🔗 [Caching Docs](https://nextjs.org/docs/app/building-your-application/performance/caching)

---

## **3. Middleware**
Middleware allows modifying requests before they reach API routes or pages.
```ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (!req.cookies.get("auth")) {
    return NextResponse.redirect("/login");
  }
  return NextResponse.next();
}
```
🔗 [Middleware Docs](https://nextjs.org/docs/app/building-your-application/routing/middleware)

---

## **4. Error Handling**
Errors can be handled using Next.js error boundaries.
```tsx
'use client';
import { useEffect } from 'react';

export default function ErrorPage({ error, reset }) {
  useEffect(() => console.error(error), [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```
🔗 [Error Handling Docs](https://nextjs.org/docs/app/building-your-application/error-handling)

---

### 📌 **Additional Resources**
- [Next.js Official Documentation](https://nextjs.org/docs)
- [Next.js Routing Overview](https://nextjs.org/docs/routing/introduction)
- [Next.js App Router Guide](https://nextjs.org/docs/app)

This guide provides a structured approach to mastering navigation, route handlers, and error handling in Next.js. 🚀

