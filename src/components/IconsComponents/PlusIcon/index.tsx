interface PlusIconProps {
  size?: number;
}

export function PlusIcon({ size = 26 }: PlusIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} fill="none" viewBox="0 0 26 26">
      <path
        stroke="url(#paint0_linear_18_137)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.063 13h17.875"
      ></path>
      <path
        stroke="url(#paint1_linear_18_137)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 4.063v17.875"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_18_137"
          x1="-3.59"
          x2="-3.463"
          y1="13.637"
          y2="15.62"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#266ED7"></stop>
          <stop offset="1" stopColor="#4D8AEB"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_18_137"
          x1="12.572"
          x2="14.297"
          y1="15.444"
          y2="15.527"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#266ED7"></stop>
          <stop offset="1" stopColor="#4D8AEB"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
