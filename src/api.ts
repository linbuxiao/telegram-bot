import { request } from "./config"

export const seTu = async () => {
  return await request.get("https://api.lolicon.app/setu/v2")
}