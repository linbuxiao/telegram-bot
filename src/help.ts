import { bot } from "./config";

export const help = () => {
  bot.help((ctx) => ctx.reply('Send me a sticker'))
}