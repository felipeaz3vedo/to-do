interface CheckIconProps {
  color?: string;
}

export function CheckIcon({ color }: CheckIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" fill="none" viewBox="0 0 9 8">
      <path
        stroke={color ? color : 'url(#paint0_linear_95_40)'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M8 1.5l-4.667 5L1 4"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_95_40"
          x1="-1.997"
          x2="2.888"
          y1="4.684"
          y2="10.623"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#266ED7"></stop>
          <stop offset="1" stopColor="#4D8AEB"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
