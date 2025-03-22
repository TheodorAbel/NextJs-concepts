export default function ProductDetails({ params }: { params: { productsId: string } }) {
    console.log("Params:", params); // Debugging
    return <h1>Product details for {params.productsId}</h1>;
}
