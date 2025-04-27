import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          console.log("Login attempt with credentials:", {
            email: credentials.email,
            // Don't log password in production!
          });

          const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/auth/login`, {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              request: {
                request_id: Date.now(),
                data: {
                  identity: credentials.email, // Using 'identity' as per your API
                  password: credentials.password,
                }
              }
            })
          });

          const data = await res.json();
          console.log("API Response:", data);

          if (!res.ok || data.status !== 1) {
            const errorMsg = data.message || "Authentication failed";
            console.error("Login failed:", errorMsg);
            throw new Error(errorMsg);
          }

          // Transform API response to NextAuth user object
          return {
            id: data.data.user.id,
            email: data.data.user.email,
            name: `${data.data.user.first_name} ${data.data.user.last_name}`,
            firstName: data.data.user.first_name,
            lastName: data.data.user.last_name,
            phone: data.data.user.phone,
            avatar: data.data.user.avatar,
            accessToken: data.data.access_token || data.data.user.access_token,
            token: data.data.access_token || data.data.user.access_token,
            tokenString: data.token_string,
            isOnboarded: data.is_onboarded,
            subscriptionActive: data.subscription_active,
            lastLogin: data.data.user.last_login,
            authGroup: data.data.user.auth,
            rawUserData: data.data.user // Keep original structure
          };
          console.log("accessToken", accessToken);
          

        } catch (error) {
          console.error("Authentication error:", error);
          throw new Error(error.message || "Login failed. Please try again.");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // Matches token expiration
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.tokenString = user.tokenString;
        token.user = {
          id: user.id,
          email: user.email,
          token: user.token,
          name: user.name,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
          avatar: user.avatar,
          isOnboarded: user.isOnboarded,
          subscriptionActive: user.subscriptionActive,
          lastLogin: user.lastLogin,
          authGroup: user.authGroup
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.tokenString = token.tokenString;
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login?error=true", // Enhanced error redirect
  },
  events: {
    async signIn({ user }) {
      console.log("Successful login for user:", user.email);
    },
    async signOut() {
      console.log("User signed out");
    },
    async error({ error }) {
      console.error("Authentication error:", error);
    }
  },
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };