import { Inter, Gloock } from "next/font/google";
import "../styles/globals.scss";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

const gloock = Gloock({
    subsets: ['latin'],
    weight: ['400'], // optional
    display: 'swap',
});

export const metadata = {
    title: "FanCast",
    description: "Your fan casting app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
