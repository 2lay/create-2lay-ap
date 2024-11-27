
import { Manrope } from "next/font/google";
import "./globals.css";

const font = Manrope({
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
                className={font.className}
            >
                {children}
            </body>
        </html>
    );
}
