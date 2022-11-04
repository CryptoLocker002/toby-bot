/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let pp = './efectos.jpeg'
let name = await conn.getName(m.sender)
let efectos =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
┇「<𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊」
┣ ┅ ━━━━━━━━━ ┅ ━*
┃ 𝙷𝙾𝙻𝙰 ${name} 
┃
┃
┃
┃
┃🖍️ _${usedPrefix}logos *<efecto> <texto>*
┃🖍️ _${usedPrefix}logocorazon *<texto>*
┃🖍️ _${usedPrefix}logochristmas *<texto>*
┃🖍️ _${usedPrefix}simpcard *<@tag>*
┃🖍️ _${usedPrefix}hornycard *<@tag>*
┃🖍️ _${usedPrefix}lolice *<@tag>*
┃🖍️ _${usedPrefix}ytcomment *<texto>*
┃🖍️ _${usedPrefix}phmaker *<opcion><responder a imagen>*
┃🖍️ _${usedPrefix}itssostupid
┃🖍️ _${usedPrefix}pixelar
┃🖍️ _${usedPrefix}blur
┃ ─▄▀▀███═◯
┃ ┃▌▄▀▀█▀▀▄
┃ █▐▌─────▐▌
┃ █▐█▄───▄█▌
┃ ▀─▀██▄██▀
┃
┃
┗ ┅ ━━━━━━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated2(m.chat, efectos, wm, pp, '', '', 'https://github.com/CryptoLocker002/', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['MENU PRINCIPAL', '/menu']
], m,)
}
handler.help = ['menu6']
handler.tags = ['main']
handler.command = /^(menu6)/i
export default handler
