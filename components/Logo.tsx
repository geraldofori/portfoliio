export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Structural G shape */}
      <path
        d="M26 16V26H6V6H26V11"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="square"
        className="transition-transform duration-500 ease-out group-hover:-translate-x-0.5"
      />
      <rect 
        x="14" 
        y="14" 
        width="12" 
        height="4" 
        fill="currentColor" 
        className="transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:scale-x-110 origin-left"
      />
    </svg>
  )
}
