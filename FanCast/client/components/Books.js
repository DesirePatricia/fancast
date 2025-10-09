"use client";

import React, { useEffect, useState } from "react";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/book`)
            .then((res) => res.json())
            .then((data) => setBooks(data))
            .catch(console.error);
    }, []);

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.name} <img src={book.img} alt={book.name} width={50} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
