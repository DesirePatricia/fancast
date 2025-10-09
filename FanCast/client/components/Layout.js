"use client";

import Link from "next/link";
import React from "react";

export default function Layout({ children }) {
    return (
        <div>
            <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
                <Link href="/">Home</Link> |{" "}
                <Link href="/actors">Actors</Link> |{" "}
                <Link href="/books">Books</Link> |{" "}
                <Link href="/vote">Vote</Link>
            </nav>
            <main style={{ padding: "1rem" }}>{children}</main>
        </div>
    );
}
