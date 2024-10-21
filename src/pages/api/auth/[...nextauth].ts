// pages/api/auth/[...nextauth].ts
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      // Save the access token to the token object if it's a sign-in action
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach the access token to the session object
      if (token) {
        return {
          ...session,
          accessToken: token.accessToken
        };
      }
      return session;
    }  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error', // Error page
  },
};

export default NextAuth(authOptions);
