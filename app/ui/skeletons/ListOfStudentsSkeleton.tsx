export default function ListOfStudentsSkeleton() {
  return (
    <div className="w-full relative flex flex-col">
      {/* Table */}
      <div className="w-full min-h-[500px] max-h-[512px] p-2 rounded-lg max-w-5xl bg-black/[0.025]">

        {/* Table heads */}
        <div className="h-10 relative flex gap-x-10">
          <div className="h-full w-10 flex items-center">
            <span className="h-2 block w-full rounded-full bg-black/5 animate-pulse"></span>
          </div>
          <div className="h-full w-20 flex items-center">
            <span className="h-2 block w-full rounded-full bg-black/5 animate-pulse" style={{ animationDelay: '150ms' }}></span>
          </div>
          <div className="h-full w-14 flex items-center">
            <span className="h-2 block w-full rounded-full bg-black/5 animate-pulse" style={{ animationDelay: '300ms' }}></span>
          </div>
          <div className="h-full w-10 flex items-center">
            <span className="h-2 block w-full rounded-full bg-black/5 animate-pulse" style={{ animationDelay: '450ms' }}></span>
          </div>
          <div className="h-full w-20 flex items-center">
            <span className="h-2 block w-full rounded-full bg-black/5 animate-pulse" style={{ animationDelay: '600ms' }}></span>
          </div>
        </div>

        {/* Table rows */}
        <div className="flex flex-col gap-y-5">
          <div>
            <div className="w-full h-11 rounded bg-black/5 animate-pulse"></div>
          </div>
          <div>
            <div className="w-full h-11 rounded bg-black/5 animate-pulse" style={{ animationDelay: '100ms' }}></div>
          </div>
          <div>
            <div className="w-full h-11 rounded bg-black/5 animate-pulse" style={{ animationDelay: '200ms' }}></div>
          </div>
          <div>
            <div className="w-full block h-11 rounded bg-black/5 animate-pulse" style={{ animationDelay: '300ms' }}></div>
          </div>
          <div>
            <div className="w-full block h-11 rounded bg-black/5 animate-pulse" style={{ animationDelay: '400ms' }}></div>
          </div>
          <div>
            <div className="w-full block h-11 rounded bg-black/5 animate-pulse" style={{ animationDelay: '500ms' }}></div>
          </div>
          <div>
            <div className="w-full block h-11 rounded bg-black/5 animate-pulse" style={{ animationDelay: '600ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}