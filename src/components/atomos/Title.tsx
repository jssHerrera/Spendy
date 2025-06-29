interface TitleProps {
  title: string;
}
export const Title = ({ title }: TitleProps) => {
  return <span className=" text-fluid-base font-bold">{title}</span>;
};
