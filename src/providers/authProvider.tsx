import { createContext, useState, ReactNode } from "react";
import app from "../firebase/Firebase.config";
import { User, getAuth } from "firebase/auth";

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
const auth = getAuth(app);

interface AuthProviderProps {
  children: ReactNode;
}

const authProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  

  const authValue = { user, loading, setLoading };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default authProvider;
