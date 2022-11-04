/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let pp = './convertidores.jpeg'
let name = await conn.getName(m.sender)
let convertidores =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
┇「𝖈𝖔𝖓𝖛𝖊𝖗𝖙𝖎𝖉𝖔𝖗𝖊𝖘」
┣ ┅ ━━━━━━━━━ ┅ ━*
┃ 𝙷𝙾𝙻𝙰 ${name} 
┃
┃
┃🍀${usedPrefix}togifaud *<responde a un video>*
┃🍀${usedPrefix}toimg *<responde a un sticker>*
┃🍀${usedPrefix}tomp3 *<responde a un video / nota de voz>*
┃🍀${usedPrefix}toptt *<responde a un video / audio>*
┃🍀${usedPrefix}tovideo *<responde a un sticker>*
┃🍀${usedPrefix}tourl *<responde a un video / imagen / audio>*
┃🍀${usedPrefix}tts es *<texto>*
┃────▄▄▄▄▄▄▄▄▄▄▄▄▄▄
┃▀▀▀█─▄▄▄▄▄▄─▄─▄─▄─█
┃───█─█────█─▄▀▄▀▄─█
┃───█─█▄▄▄▄█─▄▀▄▀▄─█
┃───▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀
┃
┗ ┅ ━━━━━━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated2(m.chat, convertidores, wm, pp, '', '', 'https://github.com/CryptoLocker002/', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['MENU PRINCIPAL', '/menu']
], m,)
}
handler.help = ['menu5']
handler.tags = ['main']
handler.command = /^(menu5)/i
export default handler
