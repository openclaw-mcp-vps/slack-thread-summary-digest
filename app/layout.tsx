import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SlackDigest – AI Summaries of Long Slack Threads",
  description:
    "Automatically generates concise AI summaries of lengthy Slack threads and sends daily or weekly digest emails of important conversations you missed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="87e15d4c-5c31-466d-ac0b-a1a42a0ccb76"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
