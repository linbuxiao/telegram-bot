import { initConfig, bot } from "./config";
import { help } from "./help";
import command from "./command";

export const start = () => {
  // 初始化配置
  initConfig()
  
  bot.start((ctx)=> ctx.reply("Welcome"))
  bot.on('sticker', (ctx) => ctx.reply('👍'))

  // 帮助信息
  help()
  
  // 关键词
  command.eat()
  command.setu()
  
  // 正常回答
  bot.on('message', (ctx) => ctx.reply(`Hello ${ctx.message.from.username}`))

  bot.launch()

  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'))
  process.once('SIGTERM', () => bot.stop('SIGTERM'))
}