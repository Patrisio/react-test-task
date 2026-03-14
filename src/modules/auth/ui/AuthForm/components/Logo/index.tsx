export const Logo = ({ style }) => {
  return (
    <svg viewBox="0 0 128 128" width="50" height="50" style={style}>
      <circle cx="64" cy="64" r="56" fill="#fff" />
      <g fill="black">
        <rect x="40" y="58" width="6" height="12" rx="3" />
        <rect x="50" y="54" width="6" height="20" rx="3" />
        <rect x="60" y="50" width="6" height="28" rx="3" />
        <rect x="70" y="46" width="6" height="36" rx="3" />
        <rect x="80" y="42" width="6" height="44" rx="3" />
      </g>
    </svg>
  );
};
