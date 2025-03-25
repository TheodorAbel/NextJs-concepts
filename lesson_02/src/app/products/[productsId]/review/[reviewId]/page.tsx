import { notFound } from "next/navigation";

export default async function reviewproduct({ params }: { params: { productsId: string; reviewId: string } }) {
    const { productsId, reviewId } = params; // Destructure params
    console.log("Params:", params); // Debugging

    if (parseInt(params.productsId) > 1000) {
        notFound();
    }
    return <h1>Review {reviewId} for product {productsId}</h1>;
}