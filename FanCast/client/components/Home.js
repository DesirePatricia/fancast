"use client";

import React from "react";
import styles from './Home.module.scss';
import Image from 'next/image';
import Link from "next/link";



const imagesrow1 = [
    { src: "/images/chris.jpeg", alt: "Chris", color: "Blue" },
    { src: "/images/redrising.jpeg", alt: "RedRising", color: "Green" },
    { src: "/images/alex.jpeg", alt: "Alex", color: "Purple" },
];


const imagesrow2 = [
    { src: "/images/louispartridge.jpeg", alt: "Louis", color: "Blue" },
    { src: "/images/nightwing.jpeg", alt: "Nightwing", color: "Green" },
    { src: "/images/asherangel.jpeg", alt: "Asher", color: "Purple" },
];

export default function Home() {
    return (
        <>
            <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto">
                {/* Text section */}
                <div className="text-left w-full max-w-3xl mx-auto">
                    <h1 className={styles.title}>fancast</h1>
                    <p className={styles.subtitle}>What cast would the fans decide</p>
                </div>

                {/* Image row 1 */}
                {[0].map(row => (
                    <div key={row} className="flex justify-center items-center gap-6 flex-wrap">
                        {imagesrow1.map((img, idx) => (
                            <div key={idx} className={styles[`ellipseOutside${img.color}`]}>
                                <div className={styles[`ellipse${img.color}`]}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        width={190}
                                        height={190}
                                        className={styles.image}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                {/* Image row 2 */}
                {[0].map(row => (
                    <div key={row} className="flex justify-center items-center gap-6 flex-wrap">
                        {imagesrow2.map((img, idx) => (
                            <div key={idx} className={styles[`ellipseOutside${img.color}`]}>
                                <div className={styles[`ellipse${img.color}`]}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        width={190}
                                        height={190}
                                        className={styles.image}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

                <div className={`${styles.footer} flex justify-center items-center gap-6 flex-wrap`}>
                    <Link href="/actors">actors</Link>
                    <div className={styles.footerPeriod}>.</div>
                    <Link href="/books">books</Link>
                    <div className={styles.footerPeriod}>.</div>
                    <Link href="/vote">vote</Link>
                </div>
            </div>


        </>
    );
}
