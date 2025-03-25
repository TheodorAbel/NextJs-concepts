import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { productsId: string } }): Promise<Metadata> {
    return {
        title: `Product Details - ${params.productsId}`,
        description: `Details and information about product ${params.productsId}.`,
    };
}

export default function ProductDetails({ params }: { params: { productsId: string } }) {
    console.log("Params:", params); // Debugging
    return <h1>Product details for {params.productsId}</h1>;
}
