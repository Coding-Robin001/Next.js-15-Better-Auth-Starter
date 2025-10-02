"use server"

import { auth } from "../auth"

export const signup = async (email: string, password: string, name: string) => {
    const result = auth.api.signUpEmail({
        body: {
            email,
            password,
            name,
            callbackURL: ("/dashboard"),
        }
    })

    return result
}

export const sigin = async (email: string, password: string) => {
    const result = auth.api.signInEmail({
        body: {
            email,
            password,
            callbackURL: ("/dashboard"),
        }
    })

    return result
}