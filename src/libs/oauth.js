import {
  getAuth,
  signInWithPopup,
  TwitterAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"
import { update } from "../libs/db.js"

export const oauth = async function (body, showSaveComplete) {
  const domain = document.domain
  if (domain == "localhost") {
    console.log(body)
    await showSaveComplete({
      isyo_id:
        "3acacdeb050b4749d88fb6798b1738cddd58e86124fc47662f6f40822aaabd7b",
    })
  } else {
    const provider = new TwitterAuthProvider()
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
  console.log("signOut")
}
