import { getFirestore } from "firebase/firestore"
import { doc, setDoc } from "firebase/firestore"

const db = getFirestore()

export const update = async function(body, user_id) {
  console.log("update", body, user_id)

  try {
    await setDoc(doc(db, "isyos", user_id), {
      body: body,
      oauth_type: "twitter",
      user_id: "user_id",
      user_name: "user_name",
    })
  } catch (e) {
    console.log(e)
  }
}
