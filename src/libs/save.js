import { read } from "../libs/db.js"
import { oauth } from "../libs/oauth.js"

export async function onSave(val) {
  console.log("onSave", val)
  await oauth(val, showSaveComplete)
}

async function showSaveComplete(user_id) {
  const userInfo = await read(user_id)
  console.log("userInfo", userInfo)

  // redirect show isyo
  location.href = "/isyo/" + userInfo.isyo_id
}
