interface DotsVerticalIconProps {
  size?: number;
  color?: string;
}

export function DotsVerticalIcon({
  size = 18,
  color = 'url(#paint0_linear_181_153)',
}: DotsVerticalIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        fill={color}
        d="M10.969 9A1.97 1.97 0 119 7.031 1.976 1.976 0 0110.969 9zM9 5.344a1.969 1.969 0 10-1.969-1.969A1.976 1.976 0 009 5.344zm0 7.312a1.969 1.969 0 101.969 1.969A1.976 1.976 0 009 12.656z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_181_153"
          x1="5.345"
          x2="11.827"
          y1="11.076"
          y2="12.536"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#266ED7"></stop>
          <stop offset="1" stopColor="#4D8AEB"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
