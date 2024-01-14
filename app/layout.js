import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VersatileGPT",
  description:
    "VersatileGPT: An innovative full-stack application that seamlessly blends AI technology with the practicality of city touring and chat functionality. It serves as an interactive guide, offering personalized city tours and engaging chat experiences. Powered by OpenAI, VersatileGPT provides users with real-time information, suggestions, and insights about various city attractions, enhancing their exploration and travel experience. This application is an ideal companion for tourists and city dwellers alike, offering a unique blend of conversational interaction and insightful guidance, making every city adventure more informed and enjoyable.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
        </head>
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
