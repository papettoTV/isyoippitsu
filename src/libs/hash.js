const sha256 = async function (text) {
  const uint8 = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest("SHA-256", uint8)
  return Array.from(new Uint8Array(digest))
    .map((v) => v.toString(16).padStart(2, "0"))
    .join("")
}
const seed = function (id, oath_type) {
  return id + oath_type
}

export const hash = async function (id, oath_type) {
  return await sha256(seed(id, oath_type))
}
