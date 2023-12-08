export default function ListOfStudentsSkeleton() {
  return (
    <div className="w-full h-[460px] p-2 rounded-lg max-w-5xl bg-black/5">
      <div className="h-10 relative flex gap-x-10">
        <div className="h-full w-10 flex items-center">
          <span className="h-2 block w-full rounded-full bg-black/10 animate-pulse"></span>
        </div>
        <div className="h-full w-20 flex items-center">
          <span className="h-2 block w-full rounded-full bg-black/10 animate-pulse" style={{animationDelay: '150ms'}}></span>
        </div>
        <div className="h-full w-14 flex items-center">
          <span className="h-2 block w-full rounded-full bg-black/10 animate-pulse" style={{animationDelay: '300ms'}}></span>
        </div>
        <div className="h-full w-10 flex items-center">
          <span className="h-2 block w-full rounded-full bg-black/10 animate-pulse" style={{animationDelay: '450ms'}}></span>
        </div>
        <div className="h-full w-20 flex items-center">
          <span className="h-2 block w-full rounded-full bg-black/10 animate-pulse" style={{animationDelay: '600ms'}}></span>
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <div>
          <div className="w-full h-11 rounded bg-black/10 animate-pulse"></div>
        </div>
        <div>
          <div className="w-full h-11 rounded bg-black/10 animate-pulse" style={{animationDelay: '100ms'}}></div>
        </div>
        <div>
          <div className="w-full h-11 rounded bg-black/10 animate-pulse" style={{animationDelay: '200ms'}}></div>
        </div>
        <div>
          <div className="w-full block h-11 rounded bg-black/10 animate-pulse" style={{animationDelay: '300ms'}}></div>
        </div>
        <div>
          <div className="w-full block h-11 rounded bg-black/10 animate-pulse" style={{animationDelay: '400ms'}}></div>
        </div>
        <div>
          <div className="w-full block h-11 rounded bg-black/10 animate-pulse" style={{animationDelay: '500ms'}}></div>
        </div>
        <div>
          <div className="w-full block h-11 rounded bg-black/10 animate-pulse" style={{animationDelay: '600ms'}}></div>
        </div>
      </div>
    </div>
  )
}
