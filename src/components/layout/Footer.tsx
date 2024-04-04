export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <footer className="space-y-10 pb-10 sm:pb-0">
      <div className="flex flex-col items-center justify-center gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row">
        <p className="text-xs text-zinc-600 dark:text-zinc-400">
          {"< />"} with ♡ by{" "}
          <a
            target="_blank"
            href=""
            aria-label="creator's portfolio"
            className="-underline-offset-2 inline-block origin-left text-base font-semibold underline transition-transform duration-200 hover:scale-[1.1]"
          >
            Niel Vincent Cano
          </a>
        </p>
      </div>
    </footer>
  );
}
