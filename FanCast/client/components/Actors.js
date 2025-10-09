"use client";

import React, { useEffect, useState } from "react";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Actors() {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/actor`)
            .then((res) => res.json())
            .then((data) => setActors(data))
            .catch(console.error);
    }, []);

    return (
        <div>
            <h1>Actors</h1>
            <ul>
                {actors.map((actor) => (
                    <li key={actor.id}>
                        {actor.name} <img src={actor.img} alt={actor.name} width={50} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
