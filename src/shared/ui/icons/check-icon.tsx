import { SVGProps } from 'react';

export const CheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 12.6111L8.92308 17.5L20 6.5"
        stroke={props.stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
