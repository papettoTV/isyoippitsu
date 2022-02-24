import { firebaseInit } from "./firebase.js"
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  setDoc,
} from "firebase/firestore"
firebaseInit()

export const db = getFirestore()

export const update = async function (body, user_id) {
  console.log("update", body, user_id)

  try {
    await setDoc(doc(db, "isyos", user_id), {
      body: body,
      oauth_type: "twitter",
      user_id: user_id,
      user_name: user_id,
    })
  } catch (e) {
    console.log(e)
  }
}

export const read = async function (userId) {
  console.log("read", userId)
  const q = query(collection(db, "isyos"), where("user_name", "==", userId))
  const querySnapshot = await getDocs(q)
  // console.log("querySnapshot", querySnapshot)
  let isyo
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data())
    isyo = {
      user_id: doc.id,
      user_name: doc.data().user_name,
      body: doc.data().body,
    }
  })
  // ここのリターン、がPromiseオブジェになってる
  return isyo
}
