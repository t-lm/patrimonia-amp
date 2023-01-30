// ./utils/auth.js

//import getUserLocale from "get-user-locale"

export const isBrowser = typeof window !== `undefined`
export const setUserLocal = (user) => (window.localStorage.patrimoniaUser = JSON.stringify(user))

const getUser = () => {
  if (window.localStorage.patrimoniaUser) {
    let user = JSON.parse(window.localStorage.patrimoniaUser)
    return user ? user : {}
  }
  return {}
}

export const isSignedIn = () => {
  if (!isBrowser) return false

  const user = getUser()
  if (user) return user.id
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = () => {
  if (!isBrowser) return
  setUserLocal({})
}

//export const lg = isSignedIn() ? (["fr", "en"].includes(getCurrentUser().lang) ? getCurrentUser().lang : "en") : (getUserLocale().slice(0, 2) === "fr" ? "fr" : "en")
