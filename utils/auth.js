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
  window.location.href = "/";
}

export const authKey = "14cf515d-0f25-c9da-68ff-9c931cd63244:fx"