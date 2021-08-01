import axios from 'axios'
import dotenv from "dotenv"
import { Telegraf } from "telegraf";
import httpsProxyAgent from "https-proxy-agent"

export let bot: Telegraf

axios.interceptors.response.use((config)=> {
  return config.data
})

export const initConfig = () => {
  dotenv.config()
  bot = new Telegraf(process.env.TOKEN!, {
    telegram: {
      agent: httpsProxyAgent('http://127.0.0.1:7890')
    }
  }) 
}

export const request = axios