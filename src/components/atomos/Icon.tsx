interface IconProps {
  name?: string;
  size?: number;
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={`${className || "text-text"}`}
      style={color ? { fill: color } : undefined}
    >
      <use href={`#${name}`} />
    </svg>
  );
};
