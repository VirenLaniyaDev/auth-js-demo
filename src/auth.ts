import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/schemas/auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        let user = null;

        // validate credentials
        const parsedCredentials = signInSchema.safeParse(credentials);
        if (!parsedCredentials.success) {
          console.error("Invalid credentials:", parsedCredentials.error.errors);
          return null;
        }

        // get user (for demo purpose we took static user data)
        user = {
          id: "1",
          name: "Viren Laniya",
          email: "test@test.mail",
          role: "admin",
        };

        // logic for validate user goes here...

        if (!user) {
          console.log("Invalid credentials");
          return null;
        }

        return user;
      },
    }),
    GitHub({
      profile(profile): {
        id: string;
        email: string;
        name: string;
        role: string;
      } {
        return {
          id: profile.id.toString(),
          email: profile.email as string,
          name: profile.name as string,
          role: "user",
        };
      },
    }),
  ],
  callbacks: {
    authorized({ request: { nextUrl }, auth }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;
      const role = auth?.user?.role || "user";

      // If user is already logged in then redirect to home page
      if (pathname.startsWith("/signin") && isLoggedIn) {
        return Response.redirect(new URL("/", nextUrl));
      }
      // Make Page2 only accesible to Admin
      if (pathname.startsWith("/page2") && role !== "admin") {
        return Response.redirect(new URL("/", nextUrl));
      }
      return !!auth; // return whether user is authorized to visit page
    },
    jwt({ token, user, trigger, session }) {
      // This callback is called whenever a JSON Web Token is created (i.e. at sign in) or updated (i.e whenever a session is accessed in the client).
      if (user) {
        token.id = user.id as string;
        token.role = user.role as string;
      }
      if (trigger === "update" && session) {
        token = { ...token, ...session };
      }
      return token;
    },
    session({ session, token }) {
      // The session callback is called whenever a session is checked.
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  secret: process.env.AUTH_SECRET,
});
