import { Outlet } from "react-router-dom";
import { v } from "../../styles/variables";

export const AuthLayout = () => {
  return (
    <div
      style={{ backgroundImage: `url(${v.fondo1})` }}
      className=" h-dvh bg-cover bg-no-repeat  flex items-center justify-center text-[rgba(255,255,255,0.87)]"
    >
      <div className=" min-w-7 w-96 rounded-3xl flex flex-col items-center gap-8 bg-[#131313] m-5 p-5 shadow-[8px_5px_18px_3px_rgba(0,0,0,0.35)]">
        <Outlet />
      </div>
    </div>
  );
};
