import { BtnSave } from "../components";
import { useAuthStore } from "../store";

export const Dashboard = () => {
  const signOut = useAuthStore((state) => state.signOut);

  return (
    <div className="p-4 bg-white text-black rounded-xl shadow-xl">
      <h2>¡Bienvenido!</h2>
      <p>Este es tu panel.</p>
      <BtnSave
        title="Cerrar Sesión"
        icon="google"
        bgColor="bg-secundario"
        onClick={signOut}
      />
    </div>
  );
};
