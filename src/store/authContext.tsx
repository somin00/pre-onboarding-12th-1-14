import { ReactNode, createContext, useState } from 'react';

interface AuthContextProps {
  children: ReactNode;
}
type AuthContextType = {
  accessToken: string;
  onLogin: (enterdUserData: string) => void;
};

export const AuthContext = createContext<AuthContextType>({
  accessToken: '',
  onLogin: enterdUserData => {},
});

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const parsedUserData = localStorage.getItem('access_token') ?? '';

  const [accessToken, setAccessToken] = useState(parsedUserData);

  const handleLogin = (enterdUserData: string): void => {
    localStorage.setItem('access_token', enterdUserData);
    setAccessToken(enterdUserData);
  };

  return (
    <AuthContext.Provider value={{ accessToken, onLogin: handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
