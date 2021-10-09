import "firebase/auth";
import firebase from "firebase/app";
import initFirebase from "./initFirebase";
import { removeTokenCookie, setTokenCookie } from "./tokenCookies";
import router, { useRouter } from "next/router";
import {
  useEffect,
  useState,
  useContext,
  createContext,
  FunctionComponent,
} from "react";

initFirebase();

interface IAuthContext {
  user: firebase.User | null;
  logout: () => void;
  authenticated: boolean;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  logout: () => null,
  authenticated: false,
});

export const AuthProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const router = useRouter();
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        router.push("/");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    const cancelAuthListener = firebase
      .auth()
      .onIdTokenChanged(async (user: any) => {
        if (user) {
          const token = await user.getIdToken();
          setTokenCookie(token);
          setUser(user);
        } else {
          removeTokenCookie();
          setUser(null);
        }
      });
    return () => {
      cancelAuthListener();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, logout, authenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
