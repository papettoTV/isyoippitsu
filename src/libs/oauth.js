import {
  getAuth,
  signInWithPopup,
  OAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"
import { update, readFromUserId } from "../libs/db.js"

const testUserDisplayName = "papettoTV"

export const oauth = async function (body, showSaveComplete) {
  const domain = document.domain
  if (domain == "localhost") {
    console.log(body)
    await showSaveComplete(testUserDisplayName)
  } else {
    const provider = new OAuthProvider("x.com")
    const auth = getAuth()
    const user = auth.currentUser
    if (user) {
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log("auth.currentUser", user, body)
      update(body, user.displayName)
      showSaveComplete(user.displayName)
    } else {
      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user
          // console.log(user, body)
          console.log("singIn User", user, body)
          // 保存完了UI
          update(body, user.displayName)
          showSaveComplete(user.displayName)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}

export const login = function () {
  const provider = new OAuthProvider("x.com")
  const auth = getAuth()
  signInWithPopup(auth, provider)
    .then(async (result) => {
      // The signed-in user info.
      const user = result.user
      // console.log(user, body)
      const userInfo = await readFromUserId(user.displayName)
      // redirect show isyo
      location.href = "/isyo/" + userInfo.isyo_id
    })
    .catch((error) => {
      console.log(error)
    })
}

export const logon = function () {
  const userInfo = {
    name: "",
  }

  const auth = getAuth()
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        userInfo.name = user.displayName
      }
      resolve(userInfo)
    })
  })
}

export const logout = function () {
  console.log("logout")
  const auth = getAuth()
  signOut(auth)
    .then(() => {
      location.href = "/"
    })
    .catch((error) => {
      console.log("logout error", error)
    })
}
