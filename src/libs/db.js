import { firebaseInit } from "./firebase.js"
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore"
import { hash } from "./hash.js"
firebaseInit()

const db_name = "isyos"
const oauth_type = "twitter"

export const db = getFirestore()

export const update = async function (body, user_id) {
  console.log("update", body, user_id)

  const documentId = await hash(user_id, oauth_type)

  try {
    await setDoc(doc(db, db_name, documentId), {
      isyo_id: documentId,
      body: body,
      oauth_type,
      user_id,
      user_name: user_id,
    })
  } catch (e) {
    console.log(e)
  }
}

export const read = async function (isyoId) {
  console.log("read", isyoId)
  // const q = query(collection(db, "isyos"), where("user_name", "==", userId))
  // const querySnapshot = await getDocs(q)
  // console.log("querySnapshot", querySnapshot)
  let isyo
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.id, " => ", doc.data())
  //   isyo = {
  //     user_id: doc.id,
  //     user_name: doc.data().user_name,
  //     body: doc.data().body,
  //   }
  // })

  const docRef = doc(db, db_name, isyoId)
  const document = await getDoc(docRef)
  console.log("document.data()", document.data())
  const isyoModel = document.data()

  isyo = {
    isyo_id: isyoModel.isyo_id,
    user_id: isyoModel.user_id,
    user_name: isyoModel.user_name,
    body: isyoModel.body,
  }
  // ここのリターン、がPromiseオブジェになってる
  return isyo
}
