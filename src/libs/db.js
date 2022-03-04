import { firebaseInit } from "./firebase.js"
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore"
import { hash } from "./hash.js"
firebaseInit()

const db_name = "isyos"
const oauth_type = "twitter"

export const db = getFirestore()

export const update = async function (body, user_name) {
  console.log("update", body, user_name)

  const documentId = await hash(user_name, oauth_type)

  try {
    await setDoc(doc(db, db_name, documentId), {
      body: body,
      oauth_type,
      user_name,
    })
  } catch (e) {
    console.log(e)
  }
}

export const read = async function (documentId) {
  let isyo

  const docRef = doc(db, db_name, documentId)
  const document = await getDoc(docRef)
  console.log("document.data()", document.data())
  const isyoModel = document.data()

  isyo = {
    isyo_id: documentId,
    user_id: isyoModel.user_id,
    user_name: isyoModel.user_name,
    body: isyoModel.body,
  }
  // ここのリターン、がPromiseオブジェになってる
  return isyo
}

export const readFromUserId = async function (user_id) {
  console.log("readFromUserId", user_id)
  const documentId = await hash(user_id, oauth_type)
  return read(documentId)
}
