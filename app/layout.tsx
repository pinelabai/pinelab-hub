import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono } from "next/font/google";
import { GridBackground } from "@/components/grid-background";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pine Lab — Tools built in public",
  description:
    "AI-powered tools built by a non-technical founder, in public, using Claude Code. Open source. Free to use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmMono.variable}`}>
      <body className="min-h-screen overflow-x-hidden font-mono text-sm leading-relaxed">
        <GridBackground />
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 bg-gradient-to-b from-[var(--background)] via-[var(--background)] to-transparent max-md:px-6 max-md:py-4">
          <a
            href="/"
            className="font-mono text-lg text-foreground no-underline tracking-tight"
          >
            Pine<span className="text-pine font-medium">Lab</span>
          </a>
          <div className="flex items-center gap-4 md:gap-8">
            <a
              href="#tools"
              className="text-muted-foreground no-underline text-xs uppercase tracking-widest hover:text-foreground transition-colors"
            >
              Tools
            </a>
            <a
              href="#about"
              className="text-muted-foreground no-underline text-xs uppercase tracking-widest hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="https://substack.com/@benmoskoff"
              className="text-muted-foreground no-underline text-xs uppercase tracking-widest hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener"
            >
              Writing
            </a>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="border-t border-border px-10 py-6 flex items-center justify-between text-muted-foreground text-[11px] tracking-wide max-md:flex-col max-md:gap-3 max-md:text-center max-md:px-6">
          <span>
            Pine Lab &copy; 2026 &middot; A side project of{" "}
            <a
              href="https://pinechat.ai"
              className="text-muted-foreground no-underline hover:text-foreground transition-colors"
            >
              PineChat AI
            </a>
          </span>
          <span>
            Built with Claude Code &middot; Open source &middot; Use at your own
            risk
          </span>
        </footer>
      </body>
    </html>
  );
}
