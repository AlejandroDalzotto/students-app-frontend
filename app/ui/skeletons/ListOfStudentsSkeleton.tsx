export default function ListOfStudentsSkeleton() {
  return (
    <div className="w-full flex flex-col gap-y-2 relative">

      {/* Table heads */}
      <div className="h-14 py-4 px-12 relative flex gap-x-10 bg-black/5 dark:bg-white/5">
        <div className="h-full w-10 flex items-center">
          <span className="h-4 block w-full rounded-full bg-black/5 dark:bg-white/5 animate-pulse"></span>
        </div>
        <div className="h-full w-20 flex items-center">
          <span className="h-4 block w-full rounded-full bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '150ms' }}></span>
        </div>
        <div className="h-full w-14 flex items-center">
          <span className="h-4 block w-full rounded-full bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '300ms' }}></span>
        </div>
        <div className="h-full w-10 flex items-center">
          <span className="h-4 block w-full rounded-full bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '450ms' }}></span>
        </div>
        <div className="h-full w-20 flex items-center">
          <span className="h-4 block w-full rounded-full bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '600ms' }}></span>
        </div>
        <div className="h-full w-20 flex items-center">
          <span className="h-4 block w-full rounded-full bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '600ms' }}></span>
        </div>
        <div className="h-full w-10 flex items-center">
          <span className="h-4 block w-full rounded-full bg-black/5 dark:bg-white/5 animate-pulse"></span>
        </div>
      </div>

      {/* Table rows */}
      <div className="flex flex-col gap-y-2">
        <div>
          <div className="w-full h-11 rounded bg-black/5 dark:bg-white/5 animate-pulse"></div>
        </div>
        <div>
          <div className="w-full h-11 rounded bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '100ms' }}></div>
        </div>
        <div>
          <div className="w-full h-11 rounded bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '200ms' }}></div>
        </div>
        <div>
          <div className="w-full block h-11 rounded bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '300ms' }}></div>
        </div>
        <div>
          <div className="w-full block h-11 rounded bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '400ms' }}></div>
        </div>
        <div>
          <div className="w-full block h-11 rounded bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '500ms' }}></div>
        </div>
        <div>
          <div className="w-full block h-11 rounded bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '600ms' }}></div>
        </div>
        <div>
          <div className="w-full block h-11 rounded bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '700ms' }}></div>
        </div>
        <div>
          <div className="w-full block h-11 rounded bg-black/5 dark:bg-white/5 animate-pulse" style={{ animationDelay: '800ms' }}></div>
        </div>
      </div>
    </div>
  )
}