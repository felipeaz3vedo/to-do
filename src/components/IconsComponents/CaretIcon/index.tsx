import { Caret } from './style';

interface CaretProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  direction?: 'left';
}

export function CaretIcon({ size, color, strokeWidth, direction }: CaretProps) {
  return (
    <Caret
      size={size}
      strokeWidth={strokeWidth}
      color={color}
      direction={direction}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        id="path-1"
        stroke="url(#paint0_linear_18_170)"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.063 2.625L7.436 7l-4.375 4.375"
      ></path>
      <path
        id="path-2"
        stroke="url(#paint1_linear_18_170)"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.438 2.625L11.813 7l-4.376 4.375"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_18_170"
          x1="1.189"
          x2="7.556"
          y1="8.196"
          y2="10.961"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#266ED7"></stop>
          <stop offset="1" stopColor="#4D8AEB"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_18_170"
          x1="5.564"
          x2="11.931"
          y1="8.196"
          y2="10.961"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#266ED7"></stop>
          <stop offset="1" stopColor="#4D8AEB"></stop>
        </linearGradient>
      </defs>
    </Caret>
  );
}
