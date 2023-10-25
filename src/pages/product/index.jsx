import React from "react";
import { HeaderSearch } from "@/components/Header";
import { FooterCentered } from "@/components/Footer";

const products = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 3", price: 39.99 }
    // Add more products as needed
];

export default function ProductList() {
    return (
        <div>
            <HeaderSearch />
            <h2>Product Lists</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
            <FooterCentered />
        </div>
    );
}
