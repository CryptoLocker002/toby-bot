/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let pp = './Menu2.jpg'
let name = await conn.getName(m.sender)
let sticker =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
┇「𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊」
┣ ┅ ━━━━━━━━━ ┅ ━*
┃ 𝙷𝙾𝙻𝙰 ${name} 
┃
┃
┃👽 ${usedPrefix}sticker *<responder a imagen o video>*
┃👽 ${usedPrefix}sticker *<enlace / link / url>*
┃👽 ${usedPrefix}s *<responder a imagen o video>*
┃👽 ${usedPrefix}s *<enlace / link / url>*
┃👽 ${usedPrefix}emojimix *<emoji 1>&<emoji 2>*
┃👽 ${usedPrefix}scircle *<responder a imagen>*
┃👽 ${usedPrefix}sremovebg *<responder a imagen>*
┃👽 ${usedPrefix}semoji *<tipo> <emoji>*
┃👽 ${usedPrefix}attp *<texto>*
┃👽 ${usedPrefix}attp2 *<texto>*
┃👽 ${usedPrefix}attp3 *<texto>*
┃👽 ${usedPrefix}ttp *<texto>*
┃👽 ${usedPrefix}ttp2 *<texto>*
┃👽 ${usedPrefix}ttp3 *<texto>*
┃👽 ${usedPrefix}ttp4 *<texto>*
┃👽 ${usedPrefix}ttp5 *<texto>*
┃👽 ${usedPrefix}pat *<@tag>*
┃👽 ${usedPrefix}slap *<@tag>*
┃👽 ${usedPrefix}kiss *<@tag>*
┃👽 ${usedPrefix}dado
┃👽 ${usedPrefix}wm *<packname> <author>*
┃👽 ${usedPrefix}stickermarker *<efecto> <responder a imagen>*
┃👽 ${usedPrefix}stickerfilter *<efecto> <responder a imagen>*
┃
┃┊┊┊┊┊╱▏┊┊┊┊┊
┃┊┊┊┊▕╱┊┊┊┊┊┊
┃┊╱▔▔╲┊╱▔▔╲┊┊
┃▕┈┈┈┈▔┈┈┈╱┊┊
┃▕┈┈┈┈┈┈┈┈╲┊┊
┃┊╲┈┈┈┈┈┈┈╱┊┊
┃┊┊╲▂▂▂▂▂╱┊┊┊
┃
┗ ┅ ━━━━━━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated2(m.chat, sticker, wm, pp, '', '', 'https://github.com/CryptoLocker002/', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['MENU PRINCIPAL', '/menu']
], m,)
}
handler.help = ['menu14']
handler.tags = ['main']
handler.command = /^(menu14)/i
export default handler
