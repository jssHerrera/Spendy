import { BtnSave, Title } from "../../components";
import { v } from "../../styles";
import { useAuthStore } from "../../store";

export const LoginTemplate = () => {
  const signWithGoogle = useAuthStore((state) => state.signWithGoogle);
  return (
    <>
      <span className="text-[#727272] text-start"> version 1.0</span>
      <div className="w-1/2 animate-bouncing animate-iteration-count-infinite animate-delay-100">
        <img src={v.logo} alt="logo" />
      </div>
      <Title title="Spendy" />
      <p className="text-fluid-md text-[#909090] text-center">
        Controla tus gastos e ingresos
      </p>
      <div className="flex flex-col items-center justify-center gap-2 ">
        <BtnSave
          title="Iniciar Sesión con Google"
          icon="google"
          bgColor="bg-secundario"
          onClick={signWithGoogle}
        />
      </div>
    </>
  );
};
