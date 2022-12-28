function CheckboxUnchecked() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path
        stroke="url(#paint0_linear_18_167)"
        strokeWidth="2"
        d="M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_18_167"
          x1="-8.563"
          x2="11.157"
          y1="12.734"
          y2="29.86"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#266ED7"></stop>
          <stop offset="0" stopColor="#266ED7"></stop>
          <stop offset="1" stopColor="#4D8AEB"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

function CheckboxChecked() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path
        fill="url(#paint0_linear_18_118)"
        stroke="url(#paint1_linear_18_118)"
        strokeWidth="2"
        d="M18.956 10c0 4.973-4.022 9-8.978 9C5.022 19 1 14.973 1 10s4.022-9 8.978-9c4.956 0 8.978 4.027 8.978 9z"
      ></path>
      <path
        stroke="#232229"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.694 7.188L8.42 14.479 4.78 10.833"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_18_118"
          x1="-8.544"
          x2="11.169"
          y1="12.734"
          y2="29.816"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#266ED7"></stop>
          <stop offset="1" stopColor="#4D8AEB"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_18_118"
          x1="-8.544"
          x2="11.169"
          y1="12.734"
          y2="29.816"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#266ED7"></stop>
          <stop offset="1" stopColor="#4D8AEB"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export const CheckboxIcon = {
  Unchecked: CheckboxUnchecked,
  Checked: CheckboxChecked,
};
