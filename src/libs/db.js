import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCz9xsxV903h5zq5oCNUXnn3Ld4o4oI2aA",
  authDomain: "isyo-894d2.firebaseapp.com",
  projectId: "isyo-894d2",
  storageBucket: "isyo-894d2.appspot.com",
  messagingSenderId: "274415468618",
  appId: "1:274415468618:web:5634c12171e40bbb74e6b3",
  measurementId: "G-8XE4XDBH4P",
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()

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

export const read = async function() {
  const querySnapshot = await getDocs(collection(db, "isyos"))
  querySnapshot.forEach((doc) => {
    console.log(doc.id, doc.data())
  })
}
