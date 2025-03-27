# Next.js Navigation and Error Handling

This document covers key topics related to navigation and error handling in Next.js. Each section includes explanations, code examples, and links to official documentation.

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

## **2. Active Links**
To highlight the active link, you can use `usePathname()` from Next.js.

### **Example:**
```tsx
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/home" className={pathname === '/home' ? 'active' : ''}>Home</Link>
    </nav>
  );
}
```
🔗 [Active Links in Next.js](https://nextjs.org/docs/routing/dynamic-routes#linking-to-dynamic-paths)

---

## **3. Params and SearchParams**
Next.js supports **dynamic routes** and **query parameters** via `params` and `searchParams`.

### **Example:**
```tsx
import { useParams, useSearchParams } from 'next/navigation';

export default function Page() {
  const params = useParams();
  const searchParams = useSearchParams();

  return (
    <div>
      <p>Route Param: {params.id}</p>
      <p>Search Param: {searchParams.get('query')}</p>
    </div>
  );
}
```
🔗 [Dynamic Routes](https://nextjs.org/docs/routing/dynamic-routes)  
🔗 [Search Params](https://nextjs.org/docs/app/api-reference/functions/use-search-params)

---

## **4. Navigating Programmatically**
Use the `useRouter()` hook to navigate programmatically.

### **Example:**
```tsx
'use client';
import { useRouter } from 'next/navigation';

export default function Navigate() {
  const router = useRouter();

  return <button onClick={() => router.push('/dashboard')}>Go to Dashboard</button>;
}
```
🔗 [Programmatic Navigation](https://nextjs.org/docs/app/api-reference/functions/use-router)

---

## **5. Templates**
Templates allow consistent layouts across multiple pages.

🔗 [Next.js Templates](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)

---

## **6. Loading UI**
You can create loading UI components to show while data is being fetched.

### **Example:**
```tsx
export default function Loading() {
  return <p>Loading...</p>;
}
```
🔗 [Loading UI](https://nextjs.org/docs/app/building-your-application/routing/loading-ui)

---

## **7. Error Handling**
Errors can be handled using Next.js error boundaries.

### **Example:**
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
🔗 [Error Handling in Next.js](https://nextjs.org/docs/app/building-your-application/error-handling)

---

## **8. Recovering from Errors**
Use the `reset()` function to reload the failed component.

🔗 [Recovering from Errors](https://nextjs.org/docs/app/building-your-application/error-handling#recovering-from-errors)

---

## **9. Handling Errors in Nested Routes**
Each route can define its own error boundary.

🔗 [Error Boundaries in Nested Routes](https://nextjs.org/docs/app/building-your-application/error-handling#error-boundaries-in-nested-routes)

---

## **10. Handling Errors in Layouts**
Layouts can also handle errors in child pages.

🔗 [Handling Errors in Layouts](https://nextjs.org/docs/app/building-your-application/error-handling#error-boundaries-in-layouts)

---

## **11. Handling Global Errors**
Use `_error.js` to define a global error page.

🔗 [Global Error Handling](https://nextjs.org/docs/app/building-your-application/error-handling#global-error-boundaries)

---

### 📌 **Additional Resources**
- [Next.js Official Documentation](https://nextjs.org/docs)
- [Next.js Routing Overview](https://nextjs.org/docs/routing/introduction)
- [Next.js App Router Guide](https://nextjs.org/docs/app)

This guide provides a structured approach to mastering navigation and error handling in Next.js. 🚀

