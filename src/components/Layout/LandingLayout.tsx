import { Outlet } from "react-router-dom";
import { useAuthStore } from "../../store";

export const LandingLayout = () => {
  const { isInitialized, user } = useAuthStore();
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <header className=" p-4 bg-amber-400 flex justify-between">
        <h1 className="text-center text-xl font-bold ">Spendy</h1>
        {isInitialized ? (
          user ? (
            <a
              href="/admin/dashboard"
              className={` bg-blue-500 flex items-center justify-center gap-2.5 font-bold font-lg p-2.5 border-[3px] rounded-lg shadow-[0.1em_0.1em_#000] text-black cursor-pointer hover:translate-x-[-0.05em] hover:translate-y-[-0.05em] hover:shadow-[0.15em_0.15em_#000] active:translate-x-[0.05em] active:translate-y-[0.05em] active:shadow-[0.05em_0.05em_#000] transition-all ease-in-out duration-200 `}
            >
              <span className="text-fluid-sm"> ir al dashboard</span>
            </a>
          ) : (
            <a
              href="/auth/login"
              className={` bg-blue-500 flex items-center justify-center gap-2.5 font-bold font-lg p-2.5 border-[3px] rounded-lg shadow-[0.1em_0.1em_#000] text-black cursor-pointer hover:translate-x-[-0.05em] hover:translate-y-[-0.05em] hover:shadow-[0.15em_0.15em_#000] active:translate-x-[0.05em] active:translate-y-[0.05em] active:shadow-[0.05em_0.05em_#000] transition-all ease-in-out duration-200 `}
            >
              <span className="text-fluid-sm"> Iniciar Sesión</span>
            </a>
          )
        ) : (
          <span>Cargando...</span>
        )}
      </header>
      <main className=" text-center flex flex-col items-center justify-center bg-blue-500">
        <Outlet />
      </main>
      <footer className=" p-4 bg-emerald-500">
        <p className="text-center font-bold">Footer</p>
      </footer>
    </div>
  );
};
