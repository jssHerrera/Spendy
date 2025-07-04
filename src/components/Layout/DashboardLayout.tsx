import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "../../store";

export const DashboardLayout = () => {
  const { userMetadata } = useAuthStore();
  console.log(userMetadata);
  useEffect(() => {
    const hasOnlyHash = window.location.href.endsWith("#");

    if (hasOnlyHash || window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <div className="min-h-dvh grid grid-cols-[auto_1fr]">
      <aside className=" p-4 bg-amber-400">aside</aside>
      <div className=" grid grid-rows-[auto_1fr_auto] text-center  bg-blue-500">
        <header className=" p-4 bg-emerald-500">
          <h1 className="text-center text-xl font-bold">Header</h1>
        </header>
        <main className=" p-4 bg-blue-500">
          <Outlet />
        </main>
        <footer className=" p-4 bg-emerald-500">footer</footer>
      </div>
    </div>
  );
};
