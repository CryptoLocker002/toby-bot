/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let pp = './frases.jpeg'
let name = await conn.getName(m.sender)
let frases =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
┇「𝔽ℝ𝔸𝕊𝔼𝕊 𝕐 𝕋𝔼𝕏𝕋𝕆𝕊」
┣ ┅ ━━━━━━━━━ ┅ ━*
┃ 𝙷𝙾𝙻𝙰 ${name} 
┃
┃
┃
┃🥀${usedPrefix}consejo
┃🥀${usedPrefix}fraseromantica
┃🥀${usedPrefix}historiaromantica
┃───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───
┃───█▒▒░░░░░░░░░▒▒█───
┃────█░░█░░░░░█░░█────
┃─▄▄──█░░░▀█▀░░░█──▄▄─
┃█░░█─▀▄░░░░░░░▄▀─█░░█
┃
┗ ┅ ━━━━━━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated2(m.chat, frases, wm, pp, '', '', 'https://github.com/CryptoLocker002/', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['MENU PRINCIPAL', '/menu']
], m,)
}
handler.help = ['menu7']
handler.tags = ['main']
handler.command = /^(menu7)/i
export default handler
