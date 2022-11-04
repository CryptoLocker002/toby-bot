let handler = async (m, { conn, usedPrefix, command }) => {

let pp = './Menu2.jpg'
let name = await conn.getName(m.sender)

let convertidores =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
┇「ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆」
┣ ┅ ━━━━━━━━━ ┅ ━*
┃ 𝙷𝙾𝙻𝙰 ${name} 
┃
┃
┃
┃📳${usedPrefix}start
┃📳${usedPrefix}next
┃📳${usedPrefix}leave
┃
┃─────█─▄▀█──█▀▄─█─────
┃────▐▌──────────▐▌────
┃────█▌▀▄──▄▄──▄▀▐█────
┃───▐██──▀▀──▀▀──██▌───
┃──▄████▄──▐▌──▄████▄──
┃
┗ ┅ ━━━━━━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated2(m.chat, convertidores, wm, pp,titulo, '', '', 'https://github.com/CryptoLocker002/', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['MENU PRINCIPAL', '/menu']
], m,)
}
handler.help = ['menu10']
handler.tags = ['main']
handler.command = /^(menu10)/i
export default handler
