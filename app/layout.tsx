import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata: Metadata = {
  title: "Anushka Sharma",
  description:
    "Hi, I’m Anushka — a software engineer with a love for data science, deep learning, and building thoughtful products. This portfolio is a collection of the work that excites me: from experimenting with neural networks and solving real-world problems through data, to exploring the creative edges of tech through traditional art and public speaking. I enjoy working where ideas turn into impact — whether that’s through code, visuals, or conversations. Dive in and take a look around!",
  keywords: [
    "Anushka Sharma",
    "Anushka",
    "Sharma ",
    "Anushka Sharma Portfolio",
    "Anushka Sharma Resume",
    "Anushka Sharma Blog",
    "Anushka Sharma LinkedIn",
    "Anushka Sharma GitHub",
    "Anushka Sharma Twitter",
    "Anushka Sharma Instagram",
    "Anushka Sharma Facebook",
    "Anushka Sharma YouTube",
    "Anushka Sharma TikTok",
    "Anushka Sharma Medium",
    "Anushka Sharma HackerRank",
    "Anushka Sharma LeetCode",
    "Anushka Sharma CodeChef",
    "Anushka Sharma Codeforces",
    "Anushka Sharma HackerEarth",
    "Anushka Sharma GeeksForGeeks",
    "Anushka Sharma TopCoder",
    "Anushka Sharma HackerRank",
    "Anushka Sharma LeetCode",
    "Anushka Sharma CodeChef",
    "Anushka Sharma Codeforces",
    "Anushka Sharma HackerEarth",
    "anushkasharma",
    "anushkasharmaportfolio",
    "anushkasharmaresume",
    "anushkasharmablog",
    "anushkasharmalinkedin",
    'anushka sharma',
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
