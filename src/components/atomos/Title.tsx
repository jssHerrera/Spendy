interface TitleProps {
  title: string;
  className?: string;
}
export const Title = ({ title, className }: TitleProps) => {
  return <h3 className={`${className}`}>{title}</h3>;
};
