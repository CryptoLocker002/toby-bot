import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
╠┅ ━━━━━━━━━ ┅ ━*
╠═〘 𝖌𝖎𝖙 𝖉𝖊𝖑 𝖈𝖗𝖊𝖆𝖉𝖔𝖗 〙 ═
╠
╠➥ [🤴🏻] 𝙲𝚁𝙴𝙰𝙳𝙾𝚁: 🅷🆄🅽🆃🅴🆁 🅳🅴🆇🆃🅴🆁
╠➥ [#️⃣] 𝙽𝙾° 𝙳𝙴𝙻 𝙲𝚁𝙴𝙰𝙳𝙾𝚁: +57 3205891193
╠➥ [🎳] 𝙿𝚁𝙴𝙵𝙸𝙹𝙾: *${usedPrefix}*
╠➥ [🔐] git del creador https://github.com/CryptoLocker002*
╠═〘 🆃🅾🅱🆈 🤖〙 ═
╠┅ ━━━━━━━━━ ┅ ━*
`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '🅶🅸🆃 🅳🅴🅻 🅲🆁🅴🅰🅳🅾🆁',
body: '🆃🅾🅱🆈 🤖',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/CryptoLocker002`}}})
}
handler.help = ['git',]
handler.tags = ['info', 'tools']
handler.command = /^(git)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
