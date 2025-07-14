interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  handleClick?: () => void;
}

export const Image = ({ src, alt, handleClick, className }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onClick={handleClick}
      loading="lazy"
    />
  );
};
