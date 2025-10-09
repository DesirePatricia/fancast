"use client";

import React from "react";
import styles from './Home.module.scss';
import Image from 'next/image';

export default function Home() {
    return (
        <div className={styles.containerCenter}>
            <h1 className={styles.title}>fancast</h1>
            <p className={styles.subtitle}>what cast would the fans decide</p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
                <div className={styles.ellipseOutsideBlue}>
                    <div className={styles.ellipseBlue}>
                        <Image
                            src="/images/alex.jpeg"
                            alt="Actor"
                            width={190}
                            height={190}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.ellipseOutsideGreen}>
                    <div className={styles.ellipseGreen}>
                        <Image
                            src="/images/alex.jpeg"
                            alt="Actor"
                            width={190}
                            height={190}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.ellipseOutsidePurple}>
                    <div className={styles.ellipsePurple}>
                        <Image
                            src="/images/alex.jpeg"
                            alt="Actor"
                            width={190}
                            height={190}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}