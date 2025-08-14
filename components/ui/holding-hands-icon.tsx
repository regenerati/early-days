import * as React from "react";

// SVG from https://www.flaticon.com/free-icon/couple_17107907
export function HoldingHandsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 32}
      height={props.height || 32}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <circle cx="20" cy="16" r="6" fill="#F9C9B6" />
        <circle cx="44" cy="16" r="6" fill="#F9C9B6" />
        <rect x="12" y="24" width="16" height="24" rx="8" fill="#7DD3FC" />
        <rect x="36" y="24" width="16" height="24" rx="8" fill="#F472B6" />
        <rect x="24" y="40" width="16" height="12" rx="6" fill="#F9C9B6" />
        <rect x="28" y="52" width="8" height="8" rx="4" fill="#F9C9B6" />
        <rect x="16" y="48" width="8" height="8" rx="4" fill="#F9C9B6" />
        <rect x="40" y="48" width="8" height="8" rx="4" fill="#F9C9B6" />
      </g>
    </svg>
  );
}
