import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth"
import { update } from "../libs/db.js"

export const oauth = async function (body, showSaveComplete) {
  const domain = document.domain
  if (domain == "localhost") {
    console.log(body)
    await showSaveComplete({ displayName: "papettoTV" })
  } else {
    const provider = new TwitterAuthProvider()
    const auth = getAuth()
    const user = auth.currentUser
    if (user) {
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log("auth.currentUser", user, body)
      update(body, user.displayName)
      showSaveComplete(user)
    } else {
      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user
          // console.log(user, body)
          console.log("singIn User", user, body)
          // 保存完了UI
          update(body, user.displayName)
          showSaveComplete(user)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}

export const logon = function () {
  const userInfo = {
    name: "ゲスト",
  }

  const auth = getAuth()
  const user = auth.currentUser
  if (user) {
    userInfo.name = user.displayName
  }
  return userInfo
}
