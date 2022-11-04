/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let pp = './descargas.jpeg'
let name = await conn.getName(m.sender)
let Descargas =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
┇「🅳🅴🆂🅲🅰🆁🅶🅰🆂」
┣ ┅ ━━━━━━━━━ ┅ ━*
┃ 𝙷𝙾𝙻𝙰 ${name} 
┃
┃
┃📁${usedPrefix}facebook *<enlace / link 
┃📁${usedPrefix}instagram *<enlace / link 
┃📁${usedPrefix}mediafire *<enlace / link 
┃📁${usedPrefix}instagram *<enlace / link 
┃📁${usedPrefix}gitclone *<enlace / link 
┃📁${usedPrefix}stickerpack *<enlace / link 
┃📁${usedPrefix}gdrive *<enlace / link 
┃📁${usedPrefix}tiktok *<enlace / link 
┃📁${usedPrefix}xnxxdl *<enlace / link 
┃📁${usedPrefix}xvideosdl *<enlace / link 
┃📁${usedPrefix}ytmp3 *<enlace / link 
┃📁${usedPrefix}ytmp4 *<enlace / link 
┃📁${usedPrefix}ytmp3doc *<enlace / link
┃📁${usedPrefix}ytmp4doc *<enlace / link
┃📁${usedPrefix}play.1 *<texto / enlace / link
┃📁${usedPrefix}play.2 *<texto / enlace / link
┃📁${usedPrefix}play *<texto>*
┃📁${usedPrefix}playdoc *<texto>*
┃📁${usedPrefix}playlist *<texto>*
┃📁${usedPrefix}playlist2 *<texto>*
┃📁${usedPrefix}spotify *<texto>*
┃📁${usedPrefix}ringtone *<texto>*
┃📁${usedPrefix}soundcloud *<texto>*
┃📁${usedPrefix}imagen *<texto>*
┃📁${usedPrefix}pinteret *<texto>*
┃📁${usedPrefix}wallpaper *<texto>*
┃📁${usedPrefix}wallpaper2 *<texto>*
┃📁${usedPrefix}pptiktok *<nombre de usuario>*
┃📁${usedPrefix}igstalk *<nombre de usuario>*
┃📁${usedPrefix}igstory *<nombre de usuario>*
┃📁${usedPrefix}tiktokstalk *<nombre de usuario>*
┃
┃░░█▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
┃██▀▀▀██▀▀▀▀▀▀██▀▀▀██
┃█▒▒▒▒▒█▒▀▀▀▀▒█▒▒▒▒▒█
┃█▒▒▒▒▒█▒████▒█▒▒▒▒▒█
┃██▄▄▄██▄▄▄▄▄▄██▄▄▄██
┗ ┅ ━━━━━━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated2(m.chat, Descargas, wm, pp, '', '', 'https://github.com/CryptoLocker002/', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['MENU PRINCIPAL', '/menu']
], m,)
}
handler.help = ['menu4']
handler.tags = ['main']
handler.command = /^(menu4)/i
export default handler
