
import { Geist } from "next/font/google";
import "./globals.css";

const font = Geist({
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={font.className}>
                    {children}
            </body>
        </html>
    );
}
