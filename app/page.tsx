import { ToolCard, type Tool } from "@/components/tool-card";

const tools: Tool[] = [
  {
    number: "01",
    name: "GEO Score",
    desc: "Check how visible your website is to AI search engines, not just Google. Generative Engine Optimization: the thing most founders haven't heard of yet.",
    status: "live",
    appUrl: "https://geo.pinelab.ai",
    articleUrl: null,
    githubUrl: "https://github.com/benmoskoff/pinelab-geo",
  },
  {
    number: "02",
    name: "Site Builder",
    desc: "Paste in websites you love. This tool scrapes their design systems, extracts what makes them great, and helps you build something better.",
    status: "coming-soon",
    appUrl: "https://builder.pinelab.ai",
    articleUrl: null,
    githubUrl: "https://github.com/benmoskoff/pinelab-sitebuilder",
  },
  {
    number: "03",
    name: "Slack QA",
    desc: "Turn messy Slack conversations into clean, structured QA tickets. Stop losing bugs in threads. Built because I was losing bugs in threads.",
    status: "coming-soon",
    appUrl: "https://qa.pinelab.ai",
    articleUrl: null,
    githubUrl: "https://github.com/benmoskoff/pinelab-slackqa",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-10 pt-[120px] pb-20 max-w-[900px] relative max-md:px-6 max-md:pt-[100px] max-md:pb-[60px]">
        <div className="text-[11px] tracking-[0.14em] uppercase text-pine mb-8 flex items-center gap-2.5 animate-fade-up">
          <span className="inline-block w-6 h-px bg-pine" />
          Building in public
        </div>

        <h1 className="font-serif text-foreground leading-none tracking-tight mb-9 text-[clamp(52px,8vw,96px)] animate-fade-up [animation-delay:0.1s]">
          Tools I built
          <br />
          while building
          <br />
          <em className="italic text-gold">PineChat.</em>
        </h1>

        <p className="text-base text-muted-foreground max-w-[480px] leading-loose mb-12 animate-fade-up [animation-delay:0.2s]">
          I&apos;m a <strong className="text-foreground font-medium">non-technical founder</strong> learning
          to build with AI. These are the tools I made along the way. Open
          source. Free to use. Built with Claude Code.
        </p>

        <div className="inline-flex items-center gap-2 text-[11px] text-muted-foreground tracking-wide border border-border px-4 py-2 rounded-sm animate-fade-up [animation-delay:0.35s]">
          <span className="text-pine text-[10px]">&#9672;</span>
          Built with Claude Code &nbsp;&middot;&nbsp; Vibe coded
          &nbsp;&middot;&nbsp; Use at your own risk
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-10 flex items-center gap-3 text-muted-foreground text-[11px] tracking-widest uppercase max-md:left-6">
          <div className="w-10 h-px bg-border relative overflow-hidden">
            <div className="absolute top-0 left-[-100%] w-full h-full bg-pine animate-slide" />
          </div>
          The tools
        </div>
      </section>

      {/* Tool Grid */}
      <section
        className="px-10 pt-20 pb-[120px] max-w-[1100px] max-md:px-6 max-md:pt-[60px] max-md:pb-20"
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
        className="border-t border-border px-10 py-16 grid grid-cols-2 gap-20 max-w-[1100px] max-md:grid-cols-1 max-md:gap-10 max-md:px-6 max-md:py-12"
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
