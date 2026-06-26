interface LogoProps {
  size?: number;
  light?: boolean;
}

export default function CharityLogo({ size = 70, light = false }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Caring and Sharing Rochdale logo"
      role="img"
    >
      {/* Outer circle */}
      <circle cx="60" cy="60" r="56" fill={light ? 'white' : '#E5097F'} />
      <circle cx="60" cy="60" r="56" fill="none" stroke={light ? '#E5097F' : 'white'} strokeWidth="3" />

      {/* Inner circular text path (decorative) */}
      <path
        id="circleText"
        d="M60,14 a46,46 0 1,1 -0.1,0"
        fill="none"
      />
      <text
        style={{ fontSize: 9, fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
        fill={light ? '#E5097F' : 'white'}
      >
        <textPath href="#circleText" startOffset="5%">
          CARING AND SHARING · ROCHDALE ·
        </textPath>
      </text>

      {/* Heart with cyan fill */}
      <path
        d="M60 78 L36 56 C31 51 31 43 36 38 C41 33 49 33 54 38 L60 44 L66 38 C71 33 79 33 84 38 C89 43 89 51 84 56 Z"
        fill={light ? '#E5097F' : '#35C3D6'}
      />

      {/* Small hands/people silhouette */}
      <circle cx="52" cy="72" r="4" fill={light ? '#E5097F' : 'white'} opacity="0.9" />
      <circle cx="68" cy="72" r="4" fill={light ? '#E5097F' : 'white'} opacity="0.9" />
    </svg>
  );
}
