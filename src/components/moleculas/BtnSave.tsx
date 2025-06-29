import { Icon } from "../../index";

interface BtnSaveProps {
  title: string;
  icon?: string;
  onClick?: () => void;
  bgColor?: string;
}

export const BtnSave = ({ title, icon, onClick, bgColor }: BtnSaveProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`${bgColor}  flex items-center justify-center gap-2.5 font-bold font-lg p-2.5 border-[3px] rounded-lg shadow-[0.1em_0.1em_#000] text-black cursor-pointer hover:translate-x-[-0.05em] hover:translate-y-[-0.05em] hover:shadow-[0.15em_0.15em_#000] active:translate-x-[0.05em] active:translate-y-[0.05em] active:shadow-[0.05em_0.05em_#000] transition-all ease-in-out duration-200 `}
    >
      <Icon name={icon} size={24} />
      <span className="text-fluid-sm">{title}</span>
    </button>
  );
};

// className=" shadow-lg hover:shadow-xl transition-all duration-300 bg-blue-500  p-2 rounded flex items-center justify-center w-full text-xxxl-custom m-xl-custom hover:cursor-pointer"
// flex, center, items-center, justify-center
