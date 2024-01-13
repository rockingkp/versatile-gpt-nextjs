import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VersatileGPT",
  description:
    "VersatileGPT: An innovative full-stack application that seamlessly blends AI technology with the practicality of city touring and chat functionality. It serves as an interactive guide, offering personalized city tours and engaging chat experiences. Powered by OpenAI, VersatileGPT provides users with real-time information, suggestions, and insights about various city attractions, enhancing their exploration and travel experience. This application is an ideal companion for tourists and city dwellers alike, offering a unique blend of conversational interaction and insightful guidance, making every city adventure more informed and enjoyable.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
