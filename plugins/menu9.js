/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let pp = './Menu2.jpg'
let name = await conn.getName(m.sender)
let adultos =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
┇「ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊 +𝟙𝟠」
┣ ┅ ━━━━━━━━━ ┅ ━*
┃ 𝙷𝙾𝙻𝙰 ${name} 
┃
┃
┃*<e̷s̷ ̷h̷o̷r̷a̷ ̷d̷e̷ ̷a̷n̷t̷o̷j̷a̷r̷/>*
┃
┃🔞 _${usedPrefix}pack
┃🔞 _${usedPrefix}pack2
┃🔞 _${usedPrefix}pack3
┃🔞 _${usedPrefix}videoxxx
┃🔞 _${usedPrefix}tiktokxxx
┃🔞 _${usedPrefix}tetas
┃🔞 _${usedPrefix}booty
┃🔞 _${usedPrefix}ecchi
┃🔞 _${usedPrefix}furro
┃🔞 _${usedPrefix}imagenlesbians
┃🔞 _${usedPrefix}panties
┃🔞 _${usedPrefix}pene
┃🔞 _${usedPrefix}porno
┃🔞 _${usedPrefix}porno2
┃🔞 _${usedPrefix}randomxxx
┃🔞 _${usedPrefix}pechos
┃🔞 _${usedPrefix}yaoi
┃🔞 _${usedPrefix}yaoi2
┃🔞 _${usedPrefix}yuri
┃🔞 _${usedPrefix}yuri2
┃🔞 _${usedPrefix}trapito
┃🔞 _${usedPrefix}hentai
┃🔞 _${usedPrefix}nsfwloli
┃🔞 _${usedPrefix}nsfworgy
┃🔞 _${usedPrefix}nsfwfoot
┃🔞 _${usedPrefix}nsfwass
┃🔞 _${usedPrefix}nsfwbdsm
┃🔞 _${usedPrefix}nsfwcum
┃🔞 _${usedPrefix}nsfwero
┃🔞 _${usedPrefix}nsfwfemdom
┃🔞 _${usedPrefix}nsfwglass
┃
┃ ─────▄████▀█▄
┃ ───▄█████████████████▄
┃ ─▄█████.▼.▼.▼.▼.▼.▼▼▼▼
┃ ▄███████▄.▲.▲▲▲▲▲▲▲▲
┃ ████████████████████▀▀
┃
┗ ┅ ━━━━━━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated2(m.chat, adultos, wm, pp, '', '', 'https://github.com/CryptoLocker002/', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['MENU PRINCIPAL', '/menu']
], m,)
}


handler.help = ['menu9']
handler.tags = ['main']
handler.command = /^(menu9)/i
export default handler
