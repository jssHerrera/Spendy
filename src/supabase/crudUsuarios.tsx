import type { User } from "@supabase/supabase-js";
import { supabase } from "./supabase.conifg";
import type { UsuarioInsert } from "./types";

// Inserta un nuevo usuario en la tabla usuarios
export const createNewUser = async (user: UsuarioInsert) => {
  try {
    const { data, error } = await supabase.from("usuarios").insert(user);

    if (error) {
      console.error("Error inserting user:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Busca un usuario por su ID en la tabla usuarios
export const getUserById = async (authId: string): Promise<User | null> => {
  try {
    const { data, error } = await supabase
      .from("usuarios")
      .select("*")
      .eq("idauth_supabase", authId)
      .maybeSingle();

    if (error) {
      console.error("Error fetching user:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
