# **Next.js Dynamic Routing Guide** 🚀

Welcome to this **Next.js Routing Guide**, where we’ll explore **static and dynamic routes**, how to work with **params**, and how to fetch **dynamic data** using URL parameters. This guide will help you understand the routing system in Next.js and how to work with dynamic content effectively.

---

## **1️⃣ Understanding Next.js Routing System** 🏗️

In **Next.js**, routing is based on the **file and folder structure** inside the `app/` directory when using the **App Router**.

### **📌 Basic Page Routing**
Every file inside the `app/` directory corresponds to a route.

```
app/
  ├── page.tsx        # Renders homepage ("/")
  ├── about/
  │   ├── page.tsx    # Renders "/about"
  ├── contact/
  │   ├── page.tsx    # Renders "/contact"
```

**Example:**
- Creating `app/products/page.tsx` → Visiting `/products` loads `products/page.tsx`.

---

## **2️⃣ Dynamic Routing in Next.js** 🔄

When a URL contains **dynamic values**, we use **dynamic route segments** inside **square brackets `[ ]`**.

### **📌 Example: Dynamic Product Page**
```
app/
  ├── products/
  │   ├── [productId]/  # Dynamic route for any product ID
  │   │   ├── page.tsx
```

#### **`page.tsx` Code:**
```tsx
export default function ProductDetails({ params }: { params: { productId: string } }) {
    return <h1>Product details for {params.productId}</h1>;
}
```

### **✅ How it works:**
- Visiting `/products/23` will display:
```html
<h1>Product details for 23</h1>
```
- The `productId` is **automatically extracted** from the URL.

---

## **3️⃣ Understanding `params` in Next.js** 🔍

### **📌 What is `params`?**
`params` is an **object** containing the dynamic route parameters, automatically passed to your component.

#### **Example: Console Logging `params`**
```tsx
export default function ProductDetails({ params }: { params: { productId: string } }) {
    console.log("Params:", params);
    return <h1>Product details for {params.productId}</h1>;
}
```

### **✅ Visiting `/products/42` prints:**
```js
Params: { productId: "42" }
```

---

## **4️⃣ Fetching Dynamic Data Using `params`** 📡

You can use `params.productId` to **fetch data from an API**.

#### **📌 Example: Fetching Product Data**
```tsx
async function getProductData(id: string) {
    const res = await fetch(`https://api.example.com/products/${id}`);
    const data = await res.json();
    return data;
}

export default async function ProductDetails({ params }: { params: { productId: string } }) {
    const product = await getProductData(params.productId);
    
    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
}
```

### **✅ How it works:**
- If `/products/23` is visited, it fetches data from `https://api.example.com/products/23`.

---

## **5️⃣ Handling Multiple Dynamic Routes** 🛠️

If a URL contains **multiple dynamic segments**, define **multiple `[dynamic]` folders**.

### **📌 Example: Category + Product Page**
```
app/
  ├── categories/
  │   ├── [categoryId]/
  │   │   ├── products/
  │   │   │   ├── [productId]/
  │   │   │   │   ├── page.tsx
```

#### **`page.tsx` Code:**
```tsx
export default function ProductDetails({ params }: { params: { categoryId: string; productId: string } }) {
    return <h1>Category: {params.categoryId}, Product: {params.productId}</h1>;
}
```

### **✅ Example URLs and Outputs:**

| **URL**                                 | **Output**                                      |
|-----------------------------------------|------------------------------------------------|
| `/categories/electronics/products/42`   | `Category: electronics, Product: 42`           |
| `/categories/books/products/19`         | `Category: books, Product: 19`                 |

---

## **6️⃣ Catch-All & Optional Catch-All Routes** 🌟

### **📌 Catch-All Routes (`[...slug]`)**

A **Catch-All Route** captures **one or more segments** of a URL into an array.

#### **Example:**
```
app/
  ├── docs/
  │   ├── [...slug]/
  │   │   ├── page.tsx
```

#### **`page.tsx` Code:**
```tsx
export default function Docs({ params }: { params: { slug: string[] } }) {
    const { slug } = params;
    return <h1>Docs Page: {slug.join(' / ')}</h1>;
}
```

**Example URLs and Outputs:**
- `/docs/guide` → `Docs Page: guide`
- `/docs/tutorials/nextjs` → `Docs Page: tutorials / nextjs`

---

### **📌 Optional Catch-All Routes (`[[...slug]]`)**

An **Optional Catch-All Route** captures **zero or more segments** of a URL, making it more flexible.

#### **Example:**
```
app/
  ├── docs/
  │   ├── [[...slug]]/
  │   │   ├── page.tsx
```

#### **`page.tsx` Code:**
```tsx
export default function Docs({ params }: { params: { slug?: string[] } }) {
    return <h1>{slug ? `Docs Page: ${slug.join(' / ')}` : 'Docs Home Page'}</h1>;
}
```

**Example URLs and Outputs:**
- `/docs` → `Docs Home Page`
- `/docs/guide` → `Docs Page: guide`
- `/docs/tutorials/nextjs` → `Docs Page: tutorials / nextjs`

---

## **✅ Conclusion**

This guide has provided a **comprehensive explanation of Next.js routing**, covering:

✅ **Static & Dynamic Routes** 🏗️  
✅ **Working with the `params` Object** 🔍  
✅ **Fetching Data Dynamically** 📡  
✅ **Handling Multiple Dynamic Segments** 🔄  
✅ **Catch-All & Optional Catch-All Routes** 🌟  

---

If you found this guide useful, **star ⭐ this repository** and stay updated with more tutorials! 🚀

"Check out the next lesson in the project's GitHub repository by switching to the corresponding branch! 🚀