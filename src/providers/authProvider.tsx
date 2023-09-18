import { createContext, useState, ReactNode, useEffect } from "react";
import app from "../firebase/Firebase.config";
import { User, getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";

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

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const emailVerify=()=>{
    return sendEmailVerification(auth.currentUser);
  }

  const loginUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  }

  const forgotPassword = (email)=>{
    return sendPasswordResetEmail(auth, email);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const logout = ()=>{
    return signOut(auth)
  }
  const authValue = {
    user,
    loading,
    setLoading,
    createUser,
    emailVerify,
    loginUser,
    forgotPassword,
    logout,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider; 
