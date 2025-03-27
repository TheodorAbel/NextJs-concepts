"use client";
import {useRouter} from 'next/navigation';

export default function orderProducts() {
    const router=useRouter();
    const orderclick=()=>{
        console.log("Placing Your order");
        router.push('/');
    }
    return (
    <>
    <h1>orderProducts</h1>
    <button onClick={orderclick}>Place order</button>
    </>
    );

}