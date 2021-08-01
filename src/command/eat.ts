import { bot } from "../config";
import { FOOD } from "../const";

export const eat = () => {
  bot.command('/eat', (ctx) => ctx.reply(`${FOOD[Math.floor(Math.random() * 3)]}`))
}