export default async function reviewproduct({ params }: { params: { productsId: string; reviewId: string } }) {
    const { productsId, reviewId } = params; // Destructure params
    console.log("Params:", params); // Debugging
    return <h1>Review {reviewId} for product {productsId}</h1>;
}