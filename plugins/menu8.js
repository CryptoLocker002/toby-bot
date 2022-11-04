/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let pp = './random.jpeg'
let name = await conn.getName(m.sender)
let random =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
┇「ℝ𝔸ℕ𝔻𝕆𝕄」
┣ ┅ ━━━━━━━━━ ┅ ━*
┃ 𝙷𝙾𝙻𝙰 ${name} 
┃──────────────▄▀█▀█▀▄
┃─────────────▀▀▀▀▀▀▀▀▀ 
┃─────────────▄─░░░░░▄
┃───█──▄─▄───▐▌▌░░░░░▌▌
┃▌▄█▐▌▐█▐▐▌█▌█▌█░░░░░▌▌
┃
┃
┃*<ℝ𝔸ℕ𝔻𝕆𝕄/>*
┃
┃${usedPrefix}cristianoronaldo
┃👾 _${usedPrefix}messi
┃👾 _${usedPrefix}meme
┃👾 _${usedPrefix}itzy
┃👾 _${usedPrefix}blackpink
┃👾 _${usedPrefix}kpop *<blackpink / exo / bts>*
┃👾 _${usedPrefix}lolivid
┃👾 _${usedPrefix}loli
┃👾 _${usedPrefix}navidad
┃👾 _${usedPrefix}ppcouple
┃👾 _${usedPrefix}wpmontaña
┃👾 _${usedPrefix}pubg
┃👾 _${usedPrefix}wpgaming
┃👾 _${usedPrefix}wpaesthetic
┃👾 _${usedPrefix}wpaesthetic2
┃👾 _${usedPrefix}wprandom
┃👾 _${usedPrefix}wallhp
┃👾 _${usedPrefix}wpvehiculo
┃👾 _${usedPrefix}wpmoto
┃👾 _${usedPrefix}coffee
┃👾 _${usedPrefix}pentol
┃👾 _${usedPrefix}caricatura
┃👾 _${usedPrefix}ciberespacio
┃👾 _${usedPrefix}technology
┃👾 _${usedPrefix}doraemon
┃👾 _${usedPrefix}hacker
┃👾 _${usedPrefix}planeta
┃👾 _${usedPrefix}randomprofile
┃👾 _${usedPrefix}neko
┃👾 _${usedPrefix}waifu
┃👾 _${usedPrefix}akira
┃👾 _${usedPrefix}akiyama
┃👾 _${usedPrefix}anna
┃👾 _${usedPrefix}asuna
┃👾 _${usedPrefix}ayuzawa
┃👾 _${usedPrefix}boruto
┃👾 _${usedPrefix}chiho
┃👾 _${usedPrefix}chitoge
┃👾 _${usedPrefix}deidara
┃👾 _${usedPrefix}erza
┃👾 _${usedPrefix}elaina
┃👾 _${usedPrefix}eba
┃👾 _${usedPrefix}emilia
┃👾 _${usedPrefix}hestia
┃👾 _${usedPrefix}hinata
┃👾 _${usedPrefix}inori
┃👾 _${usedPrefix}isuzu
┃👾 _${usedPrefix}itachi
┃👾 _${usedPrefix}itori
┃👾 _${usedPrefix}kaga
┃👾 _${usedPrefix}kagura
┃👾 _${usedPrefix}kaori
┃👾 _${usedPrefix}keneki
┃👾 _${usedPrefix}kotori
┃👾 _${usedPrefix}kurumi
┃👾 _${usedPrefix}madara
┃👾 _${usedPrefix}mikasa
┃👾 _${usedPrefix}miku
┃👾 _${usedPrefix}minato
┃👾 _${usedPrefix}naruto
┃👾 _${usedPrefix}nezuko
┃👾 _${usedPrefix}sagiri
┃👾 _${usedPrefix}sasuke
┃👾 _${usedPrefix}sakura
┃👾 _${usedPrefix}cosplay
┃
┃ ──────────────▄▀█▀█▀▄
┃─────────────▀▀▀▀▀▀▀▀▀ 
┃─────────────▄─░░░░░▄
┃───█──▄─▄───▐▌▌░░░░░▌▌
┃▌▄█▐▌▐█▐▐▌█▌█▌█░░░░░▌▌
┗ ┅ ━━━━━━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated2(m.chat, random, wm, pp, '', '', 'https://github.com/CryptoLocker002/', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['MENU PRINCIPAL', '/menu']
], m,)
}

handler.help = ['menu8']
handler.tags = ['main']
handler.command = /^(menu8)/i
export default handler
