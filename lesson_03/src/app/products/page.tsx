
import Link from 'next/link';

export default function productpage(){
    return (
    <>
        <h1>product are listed here</h1>
        <li>
            <Link href="/products/1">Product 1</Link></li>
        <li>Product 2</li>
        <li>Product 3</li>
    </>
    );
}

