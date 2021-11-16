import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth"
import { update } from "../libs/db.js"

export const oauth = function(body) {
  const provider = new TwitterAuthProvider()
  const auth = getAuth()
  const user = auth.currentUser
  if (user) {
    // https://firebase.google.com/docs/reference/js/firebase.User
    update(body, user.displayName)
    return user
  } else {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user
        console.log(user, body)
        // 保存完了UI
        // showSaveComplete()
        update(body, user.displayName)
        return user
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
