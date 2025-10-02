import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { nextCookies } from "better-auth/next-js"


export const auth = betterAuth({

    database: prismaAdapter(prisma, { provider: "sqlite" }),

    emailAndPassword: {
        enabled: true
    },
    socialProviders: {
        github: {
            clientId: "",
            clientSecret: ""
        },
        google: {
            clientId: "",
            clientSecret: ""
        }
    },
    plugins: [nextCookies()]
})