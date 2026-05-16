import { cn } from "@/lib/utils";
import { VideoModal } from "@/components/video-modal";

export type Tool = {
  number: string;
  name: string;
  desc: string;
  status: "live" | "coming-soon";
  appUrl: string;
  articleUrl: string | null;
  githubUrl: string;
  videoUrl: string | null;
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
        isComingSoon && !tool.videoUrl
          ? "opacity-40 pointer-events-none"
          : isComingSoon
            ? "opacity-60"
            : "hover:bg-[#eeeae3]",
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

      {/* Video embed */}
      {tool.videoUrl ? (
        <VideoModal videoUrl={tool.videoUrl}>
          <div
            className={cn(
              "rounded-sm overflow-hidden relative transition-all duration-300 pb-[64.63%]",
              "border border-border-custom bg-background group-hover:border-pine/40"
            )}
          >
            <iframe
              src={tool.videoUrl + "?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"}
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              tabIndex={-1}
            />
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-black/30 transition-colors hover:bg-black/20">
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[#1a1a18] ml-0.5"
                >
                  <path
                    d="M8 5.14v14.72a1 1 0 001.5.86l11.5-7.36a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-[10px] text-white/80 tracking-[0.15em] uppercase">
                Watch demo
              </span>
            </div>
          </div>
        </VideoModal>
      ) : (
        <div
          className={cn(
            "rounded-sm overflow-hidden relative transition-all duration-300 pb-[64.63%]",
            "border border-border-custom bg-background group-hover:border-pine/40"
          )}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full border border-pine/30 bg-pine/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-pine/50 group-hover:bg-pine/10">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="text-pine ml-0.5"
              >
                <path
                  d="M8 5.14v14.72a1 1 0 001.5.86l11.5-7.36a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase">
              Demo coming soon
            </span>
          </div>
        </div>
      )}

      <p className="text-[13px] text-muted-foreground leading-relaxed flex-1">
        {tool.desc}
      </p>

      <span
        className={cn(
          "inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase",
          isComingSoon ? "text-gold" : "text-pine"
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

      {!isComingSoon && (
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
      )}
    </div>
  );
}
