# Next.js Routing & Layouts

## Overview
This document provides an overview of key Next.js concepts related to routing, layouts, and metadata. These topics are essential for structuring Next.js applications efficiently. Given our previous discussions, this document builds on your knowledge of folder structuring, colocation, and efficient dependency management.

## Topics Covered

### 1. Not Found Page
In Next.js, a custom `not-found.js` page can be created inside the `app/` directory to handle 404 errors. This allows you to customize the user experience when a requested page is not found.

[Next.js Documentation - Not Found Page](https://nextjs.org/docs/app/building-your-application/routing/not-found)

```tsx
// app/not-found.js
export default function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}
```

### 2. File Colocation
File colocation is a best practice where related files, such as components and styles, are placed within the same directory as the page using them. This makes code management easier and avoids unnecessary imports across directories.

[Next.js Documentation - Project Structure](https://nextjs.org/docs/app/building-your-application/project-structure)

Example structure:
```
app/
 ├── dashboard/
 │   ├── page.js
 │   ├── DashboardComponent.js
 │   ├── dashboard.module.css
```

### 3. Private Folders
In Next.js, folders prefixed with `_` (underscore) are conventionally treated as private, meaning they don't define routes. However, Next.js does not enforce this convention; it simply helps organize non-route files.

Example:
```
app/
 ├── _helpers/
 │   ├── formatDate.js
```

### 4. Route Groups
Route groups allow for better organization by grouping related pages together while keeping a clean URL structure. Wrapping a directory name in `(` and `)` creates a group without affecting the URL.

[Next.js Documentation - Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)

Example:
```
app/
 ├── (dashboard)/
 │   ├── settings/page.js  →  /settings
```

### 5. Layouts
Layouts in Next.js allow pages to share UI elements like navigation bars and footers. A `layout.js` file in a directory applies the layout to all child routes.

[Next.js Documentation - Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)

Example:
```tsx
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav>Navigation</nav>
        {children}
      </body>
    </html>
  );
}
```

### 6. Nested Layouts
Layouts can be nested by adding `layout.js` files within subdirectories. This allows sections of the app to have their own structure.

[Next.js Documentation - Nested Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#nested-layouts)

Example:
```
app/
 ├── layout.js  →  Applies globally
 ├── dashboard/
 │   ├── layout.js  →  Applies only to dashboard pages
```

### 7. Multiple Root Layouts
Multiple root layouts are possible by placing `layout.js` in different route groups. This is useful for applications with different layout needs.

[Next.js Documentation - Multiple Root Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#multiple-root-layouts)

Example:
```
app/
 ├── (public)/layout.js  →  Public-facing layout
 ├── (admin)/layout.js  →  Admin dashboard layout
```

### 8. Routing Metadata
Next.js allows metadata to be set at the route level using `metadata.js` or inside `page.js` exports. This is useful for SEO and customization.

[Next.js Documentation - Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

Example:
```tsx
// app/blog/page.js
export const metadata = {
  title: "Blog Page",
  description: "Latest articles and updates",
};
```

### 9. Title Metadata
Title metadata is a subset of routing metadata that sets dynamic titles per page.

[Next.js Documentation - Title Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata#title)

Example:
```tsx
export const metadata = {
  title: "Dashboard | My App",
};
```

## Conclusion
These concepts are essential for building structured, scalable Next.js applications. As you continue learning, focus on applying them efficiently in your projects while maintaining an organized folder structure to optimize storage and dependencies.

