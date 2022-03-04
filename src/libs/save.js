import { readFromUserId } from "../libs/db.js"
import { oauth } from "../libs/oauth.js"

export async function onSave(val) {
  console.log("onSave", val)
  await oauth(val, showSaveComplete)
}

async function showSaveComplete(user_name) {
  const userInfo = await readFromUserId(user_name)
  console.log("userInfo", userInfo)

  // redirect show isyo
  location.href = "/isyo/" + userInfo.isyo_id
}
