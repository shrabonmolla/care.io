import GoogleProvider from "next-auth/providers/google";
import { collection, dbconnect } from "./dbconnect";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "@/Actions/server/auth";

export const authOptions = {
  //   debug: true,
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",

      // credentials: {
      //   username: { label: "Username", type: "text", placeholder: "jsmith" },
      //   password: { label: "Password", type: "password" },
      // },
      async authorize(credentials, req) {
        console.log("credentailas", credentials);

        const { email, password } = credentials;

        const result = await loginUser({
          email: email,
          password: password,
        });

        console.log(result);
        return result;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // ...add more providers here
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("user", user);

      const isUserExist = await dbconnect(collection.USERS).findOne({
        email: user.email,
      });

      if (isUserExist) {
        return true;
      }

      const newUser = {
        email: user.email,
        name: user.name,
        image: user.image,
        provider: account.provider,
        role: "user",
      };

      const result = await dbconnect(collection.USERS).insertOne(newUser);
      console.log("Inserted user:", result);
      return true; // Do different verification for other providers that don't have `email_verified`
    },
  },
};
