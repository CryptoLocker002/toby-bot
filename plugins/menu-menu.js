import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
𝗯𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼 ${name}   𝗲𝘀𝘁𝗲 𝗲𝘀 𝗲𝗹 𝗺𝗲𝗻𝘂 𝗱𝗲 𝘁𝗼𝗯𝘆  𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲  𝗹𝗼 𝗱𝗶𝘀𝗳𝗿𝘂𝘁𝗲𝘀 :) 

📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}
📈 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}
📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}

𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻 𝗱𝗲𝗹 𝗯𝗼𝘁

☑️${usedPrefix}estado
☑️${usedPrefix}infobot
☑️${usedPrefix}donar
☑️${usedPrefix}grouplist
☑️${usedPrefix}owner
☑️${usedPrefix}script
☑️ Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)

*┏ ┅ ━━━━━━━━━ ┅ ━*
┇「🅼🅴🅽🆄」
┣ ┅ ━━━━━━━━━ ┅ ━*
┏ ┅ ━━━━━━━━━━━━ ┅ ━*
┃${usedPrefix}🅼🅴🅽🆄 1 𝕞𝕖𝕟𝕦 𝕞𝕖𝕟𝕦 𝕕𝕖𝕝 𝕓𝕠𝕥
┃${usedPrefix}🅼🅴🅽🆄 2 𝕛𝕦𝕖𝕘𝕠𝕤
┃${usedPrefix}🅼🅴🅽🆄 3 𝕘𝕣𝕦𝕡𝕠𝕤
┃${usedPrefix}🅼🅴🅽🆄 4 𝕕𝕖𝕤𝕔𝕒𝕣𝕘𝕒𝕤
┃${usedPrefix}🅼🅴🅽🆄 5 𝕔𝕠𝕟𝕧𝕖𝕣𝕥𝕚𝕕𝕠𝕣𝕖𝕤
┃${usedPrefix}🅼🅴🅽🆄 6 𝕖𝕗𝕖𝕔𝕥𝕠𝕤 𝕪 𝕝𝕠𝕘𝕠𝕤
┃${usedPrefix}🅼🅴🅽🆄 7 𝔽ℝ𝔸𝕊𝔼𝕊 𝕐 𝕋𝔼𝕏𝕋𝕆𝕊
┃${usedPrefix}🅼🅴🅽🆄 8 ℝ𝔸ℕ𝔻𝕆𝕄
┃${usedPrefix}🅼🅴🅽🆄 9  +18
┃${usedPrefix}🅼🅴🅽🆄 10 ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆
┃${usedPrefix}🅼🅴🅽🆄 11 𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊
┃${usedPrefix}🅼🅴🅽🆄 12  𝔸𝕌𝔻𝕀𝕆𝕊
┃${usedPrefix}🅼🅴🅽🆄 13 ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊
┃${usedPrefix} 🅼🅴🅽🆄 14 𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊
┃${usedPrefix} 🅼🅴🅽🆄 15 𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊
┃═════════════════╗
┃ ◈ ${usedPrefix} crear -> app del grupo ◈        
┃ ◈ ${usedPrefix} git -> git del creador aqui ◈ 
┃═════════════════╝
┃━━━━━━━━━━━━━━━━━┓
┃ *< 𝕄𝔸𝕋𝔸 𝕎ℍ𝔸𝕋𝕊𝔸ℙℙ - 𝕍𝕀ℝ𝕌𝕊 />*
┣ pronto....
┗━━━━━━━━━━━━━━━━━┛
┗ ┅ ━━━━━━━━━━━━━ ┅ ━*
𝗽𝗮𝗿𝗮  𝘂𝗹𝘁𝗶𝗹𝗶𝘇𝗮𝗿 𝗰𝘂𝗮𝗹𝗾𝘂𝗶𝗲𝗿 𝗺𝗲𝗻𝘂 𝗲𝘀𝗰𝗿𝗶𝗯𝗲${usedPrefix}  𝗺𝗮𝘀 𝗲𝗹 𝗺𝗲𝗻𝘂 𝗮  𝘂𝗹𝘁𝗶𝗹𝗶𝘇𝗮𝗿 𝗲𝗷𝗲𝗺𝗽𝗹𝗼${usedPrefix}menu9

𝗿𝗲𝗽𝗼𝗿𝘁𝗲 𝗱𝗲 𝗳𝗮𝗹𝗹𝗼𝘀

${usedPrefix}reporte *<texto>*


`.trim()
conn.sendHydrated2(m.chat, str, wm, pp, '', '', 'https://github.com/CryptoLocker002/', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾', '/infobot']
], m,)

//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|menu1|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
