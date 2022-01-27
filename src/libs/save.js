import { read } from "../libs/db.js"
import { oauth } from "../libs/oauth.js"

export async function onSave(val) {
  console.log("onSave", val)
  await oauth(val, showSaveComplete)
}

async function showSaveComplete(user) {
  const userInfo = await read(user.displayName)
  console.log("userInfo", userInfo)

  // redirect show isyo
  location.href = "/" + userInfo.user_id
}
