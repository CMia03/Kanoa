// context/AuthContext.tsx
import { createContext, useContext } from "react";
import { useSession } from "next-auth/react";

const AuthContext = createContext<any>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const session = useSession();

    return (
        <AuthContext.Provider value={session}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
