type SombraProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Sombra = ({ isOpen, onClose }: SombraProps) => {
  return (
    <div
      className={`absolute bg-black inset-0 z-10 lg:hidden transition-all duration-300 ease-in-out ${
        isOpen ? "visible opacity-40" : "opacity-0 invisible"
      }`}
      onClick={onClose}
      aria-hidden="true"
    />
  );
};
