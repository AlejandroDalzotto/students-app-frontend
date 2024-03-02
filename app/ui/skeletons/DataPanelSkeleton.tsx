export default function DataPanelSkeleton() {

  // relative rounded-lg col-span-3 flex flex-col items-center gap-y-5 p-5 bg-black/5 dark:bg-black/20
  return (
    <div className="relative rounded-lg col-span-3 flex flex-col items-center gap-y-5 p-5 h-full bg-black/5 dark:bg-white/5">

      <div className="flex w-full items-center justify-between">
        <div className="h-[120px] aspect-square rounded-full bg-black/5 dark:bg-white/5 animate-pulse"></div>
        <div className="h-9 w-full ml-4 rounded-lg bg-black/5 dark:bg-white/5 animate-pulse"></div>
      </div>

      <div className="h-6 mt-5 w-full rounded-lg bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '100ms' }}></div>

      <div className="flex w-full gap-x-10 items-center justify-between">
        <div className="h-9 w-full rounded-lg bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '200ms' }}></div>
        <div className="h-9 w-full rounded-lg bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '200ms' }}></div>
      </div>

      <div className="h-6 mt-5 w-full rounded-lg bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '300ms' }}></div>

      <div className="flex w-full gap-x-10 items-center justify-between">
        <div className="h-9 w-full rounded-lg bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '400ms' }}></div>
        <div className="h-9 w-full rounded-lg bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '400ms' }}></div>
      </div>

      <div className="h-6 mt-5 w-full rounded-lg bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '500ms' }}></div>

      <div className="flex w-full gap-x-10 items-center justify-between">
        <div className="h-9 w-full rounded-lg bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '600ms' }}></div>
        <div className="h-9 w-full rounded-lg bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '600ms' }}></div>
      </div>
      <div className="flex w-full gap-x-10 items-center justify-between">
        <div className="h-9 w-full rounded-lg bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '700ms' }}></div>
        <div className="h-9 w-full rounded-lg bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '700ms' }}></div>
      </div>
      <div className="flex w-full gap-x-10 items-center justify-between">
        <div className="h-9 w-full rounded-lg bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '800ms' }}></div>
        <div className="h-9 w-full rounded-lg bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '800ms' }}></div>
      </div>
    </div>
  )
}
