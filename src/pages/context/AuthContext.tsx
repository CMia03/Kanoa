import { createContext, useContext } from "react";
import { useSession } from "next-auth/react";
import type { Session } from "next-auth";
// Typage du contexte
const AuthContext = createContext<Session | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { data: session } = useSession();

    return (
        <AuthContext.Provider value={session}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
