// learn more about HTTP functions here: https://arc.codes/primitives/http
exports.handler = async function http (req) {
  return {
    body: JSON.stringify({ ok: true })
  }
}
