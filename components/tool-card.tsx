import { cn } from "@/lib/utils";

export type Tool = {
  number: string;
  name: string;
  desc: string;
  status: "live" | "coming-soon";
  appUrl: string;
  articleUrl: string | null;
  githubUrl: string;
};

export function ToolCard({
  tool,
  className,
  style,
}: {
  tool: Tool;
  className?: string;
  style?: React.CSSProperties;
}) {
  const isComingSoon = tool.status === "coming-soon";

  return (
    <div
      className={cn(
        "group relative bg-surface p-9 px-8 flex flex-col gap-4 overflow-hidden transition-colors",
        isComingSoon
          ? "opacity-40 pointer-events-none"
          : "hover:bg-[#171715]",
        className
      )}
      style={style}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-pine origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />

      <span className="text-[10px] text-pine tracking-widest uppercase">
        {tool.number}
      </span>

      <div className="font-serif text-[28px] text-foreground tracking-tight leading-tight">
        {tool.name}
      </div>

      <p className="text-[13px] text-muted-foreground leading-relaxed flex-1">
        {tool.desc}
      </p>

      <span
        className={cn(
          "inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase",
          isComingSoon ? "text-gold" : "text-[#6baa7a]"
        )}
      >
        <span
          className={cn(
            "w-[5px] h-[5px] rounded-full bg-current",
            !isComingSoon && "animate-pulse-dot"
          )}
        />
        {isComingSoon ? "Coming soon" : "Live"}
      </span>

      <div className="flex flex-col gap-1.5 pt-4 border-t border-border-custom">
        <a
          href={tool.appUrl}
          className="flex items-center justify-between text-pine font-medium text-xs tracking-wide py-1 no-underline hover:text-[#5a9970] transition-colors"
        >
          Launch tool{" "}
          <span className="text-[10px] transition-transform group-hover:translate-x-[3px]">
            →
          </span>
        </a>

        {tool.articleUrl && (
          <a
            href={tool.articleUrl}
            className="flex items-center justify-between text-muted-foreground text-xs tracking-wide py-1 no-underline hover:text-foreground transition-colors"
          >
            Read the article{" "}
            <span className="text-[10px] transition-transform group-hover:translate-x-[3px]">
              →
            </span>
          </a>
        )}

        <a
          href={tool.githubUrl}
          className="flex items-center justify-between text-muted-foreground text-xs tracking-wide py-1 no-underline hover:text-foreground transition-colors"
          target="_blank"
          rel="noopener"
        >
          View on GitHub{" "}
          <span className="text-[10px] transition-transform group-hover:translate-x-[3px]">
            →
          </span>
        </a>
      </div>
    </div>
  );
}
