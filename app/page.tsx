import { ToolCard, type Tool } from "@/components/tool-card";

const tools: Tool[] = [
  {
    number: "01",
    name: "GEO Score",
    desc: "Check how visible your website is to AI search engines, not just Google. Generative Engine Optimization: the thing most founders haven't heard of yet.",
    status: "live",
    appUrl: "https://geo.pinelab.ai",
    articleUrl: null,
    githubUrl: "https://github.com/bmoski8/pinelab-geo",
    videoUrl: "https://www.loom.com/embed/24dab3c8034a4a0aa99353a31bb42fcc",
  },
  {
    number: "02",
    name: "Site Builder",
    desc: "Paste in websites you love. This tool scrapes their design systems, extracts what makes them great, and helps you build something better.",
    status: "coming-soon",
    appUrl: "https://builder.pinelab.ai",
    articleUrl: null,
    githubUrl: "https://github.com/bmoski8/pinelab-sitebuilder",
    videoUrl: null,
  },
  {
    number: "03",
    name: "Slack QA",
    desc: "Turn messy Slack conversations into clean, structured QA tickets. Stop losing bugs in threads. Built because I was losing bugs in threads.",
    status: "coming-soon",
    appUrl: "https://qa.pinelab.ai",
    articleUrl: null,
    githubUrl: "https://github.com/bmoski8/pinelab-slackqa",
    videoUrl: "https://www.loom.com/embed/9e014c80a3034c6791b3074586860cf1",
  },
  {
    number: "04",
    name: "Investor Portal",
    desc: "A clean portal for sharing updates, decks, and data rooms with investors. Built because email threads are where investor relationships go to die.",
    status: "coming-soon",
    appUrl: "https://investors.pinelab.ai",
    articleUrl: null,
    githubUrl: "https://github.com/bmoski8/pinelab-investor-portal",
    videoUrl: "https://www.loom.com/embed/90743ee296c84784813c3dc1fc814f56",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-10 pt-[120px] pb-20 max-w-[900px] mx-auto relative text-center max-md:px-6 max-md:pt-[100px] max-md:pb-[60px]">
        <div className="text-[11px] tracking-[0.14em] uppercase text-pine mb-8 flex items-center gap-2.5 animate-fade-up">
          <span className="inline-block w-6 h-px bg-pine" />
          Building in public
          <span className="inline-block w-6 h-px bg-pine" />
        </div>

        <h1 className="leading-tight tracking-tight mb-9 text-[clamp(36px,5.5vw,64px)] animate-fade-up [animation-delay:0.1s]">
          <span className="font-mono font-light text-foreground tracking-[-0.02em]">Tools I built</span>
          <br />
          <span className="font-mono font-light text-foreground tracking-[-0.02em]">while building</span>
          <br />
          <em className="font-mono not-italic font-medium text-pine tracking-[0.03em]">PineChat.</em>
        </h1>

        <p className="text-base text-muted-foreground max-w-[480px] leading-loose mb-10 animate-fade-up [animation-delay:0.2s]">
          I&apos;m a <strong className="text-foreground font-medium">non-technical founder</strong> learning
          to build with AI. These are the tools I made along the way. Open
          source. Free to use. Built with Claude Code.
        </p>

        <a
          href="#tools"
          className="text-pine text-sm tracking-wide no-underline hover:text-pine-soft transition-colors mb-10 animate-fade-up [animation-delay:0.3s]"
        >
          See the tools &darr;
        </a>

        <div className="inline-flex items-center gap-2 text-[11px] text-muted-foreground tracking-wide border border-border bg-surface/50 px-4 py-2 rounded-sm animate-fade-up [animation-delay:0.4s]">
          <span className="text-pine text-[10px]">&#9672;</span>
          Built with Claude Code &nbsp;&middot;&nbsp; Vibe coded
          &nbsp;&middot;&nbsp; Use at your own risk
        </div>
      </section>

      {/* Tool Grid */}
      <section
        className="px-10 pt-20 pb-[120px] max-w-[1100px] mx-auto max-md:px-6 max-md:pt-[60px] max-md:pb-20"
        id="tools"
      >
        <div className="flex items-baseline justify-between mb-12 border-b border-border pb-5">
          <span className="font-serif text-[13px] text-muted-foreground tracking-wide">
            Lab tools
          </span>
          <span className="text-[11px] text-muted-foreground tracking-wide">
            {tools.length} of more to come
          </span>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-px bg-border-custom border border-border-custom">
          {tools.map((tool, i) => (
            <ToolCard
              key={tool.number}
              tool={tool}
              className={`animate-fade-up`}
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </section>

      {/* About */}
      <section
        className="border-t border-border px-10 py-16 grid grid-cols-2 gap-20 max-w-[1100px] mx-auto max-md:grid-cols-1 max-md:gap-10 max-md:px-6 max-md:py-12"
        id="about"
      >
        <div>
          <div className="text-[10px] tracking-[0.14em] uppercase text-pine mb-5">
            Who built this
          </div>
          <p className="text-sm text-muted-foreground leading-loose">
            I&apos;m{" "}
            <strong className="text-foreground font-medium">Ben Moskoff</strong>,
            a non-technical founder building{" "}
            <strong className="text-foreground font-medium">PineChat AI</strong>,
            a relationship OS for professionals. Pine Lab is where I publish
            every tool I build along the way. Some are useful to others. All of
            them taught me something.
          </p>
          <div className="flex gap-6 mt-6">
            <a
              href="https://linkedin.com/in/benmoskoff"
              className="text-xs text-muted-foreground no-underline tracking-wide border-b border-border pb-0.5 hover:text-foreground hover:border-muted-foreground transition-colors"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
            <a
              href="https://substack.com/@benmoskoff"
              className="text-xs text-muted-foreground no-underline tracking-wide border-b border-border pb-0.5 hover:text-foreground hover:border-muted-foreground transition-colors"
              target="_blank"
              rel="noopener"
            >
              Substack
            </a>
            <a
              href="https://pinechat.ai"
              className="text-xs text-muted-foreground no-underline tracking-wide border-b border-border pb-0.5 hover:text-foreground hover:border-muted-foreground transition-colors"
              target="_blank"
              rel="noopener"
            >
              PineChat AI
            </a>
          </div>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.14em] uppercase text-pine mb-5">
            How it&apos;s built
          </div>
          <p className="text-sm text-muted-foreground leading-loose">
            Every tool here was built using{" "}
            <strong className="text-foreground font-medium">Claude Code</strong>{" "}
            with Gary Tan&apos;s g-stack and the UI-UX-Pro-Max design system. No
            prior engineering experience. Each repo is public on GitHub.
            Technical people can fork and run it. Everyone else can just use the
            tool.
          </p>
        </div>
      </section>
    </>
  );
}
