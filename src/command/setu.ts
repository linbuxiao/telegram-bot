import { bot } from "../config";
import { seTu } from "../api";

export const setu = () => {
  bot.command('/setu', async (ctx) => {
    const { data} = await seTu() || {}
    if(data) {
      const url = data[0].urls.original
      ctx.replyWithPhoto(url)
    }
  })
}