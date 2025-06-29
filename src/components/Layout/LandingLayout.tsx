import { Outlet } from "react-router-dom";

export const LandingLayout = () => {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <header className=" p-4 bg-amber-400">
        <h1 className="text-center text-xl font-bold">Spendy</h1>
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
