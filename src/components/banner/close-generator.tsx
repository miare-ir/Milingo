import * as React from 'react';

export interface CloseGeneratorProps {
  type: 'error' | 'warning' | 'info' | 'success';
}

const FILL_COLORS = {
  error: '#bc0007',
  warning: '#85660e',
  info: '#1e6dc8',
  success: '#248212',
};

const CloseGenerator: React.SFC<CloseGeneratorProps> = ({
  type,
}: CloseGeneratorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <rect
        width="2"
        height="14"
        x="11"
        y="5"
        fill={FILL_COLORS[type]}
        rx="1"
        transform="rotate(45 12 12)"
      />
      <rect
        width="2"
        height="14"
        x="11"
        y="5"
        fill={FILL_COLORS[type]}
        rx="1"
        transform="rotate(135 12 12)"
      />
    </g>
  </svg>
);

export default CloseGenerator;
