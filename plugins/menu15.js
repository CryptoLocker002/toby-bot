/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let pp = './Menu2.jpg'
let name = await conn.getName(m.sender)
let admins =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
┇「𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊」
┣ ┅ ━━━━━━━━━ ┅ ━*
┃ 𝙷𝙾𝙻𝙰 ${name} 
┃
┃
┃${usedPrefix}cajafuerte
┃${usedPrefix}enable *restrict*
┃${usedPrefix}disable *restrict*
┃${usedPrefix}enable *autoread*
┃${usedPrefix}disable *autoread*
┃${usedPrefix}enable *public*
┃${usedPrefix}disable *public*
┃${usedPrefix}enable *pconly*
┃${usedPrefix}disable *pconly*
┃${usedPrefix}enable *gconly*
┃${usedPrefix}disable *gconly*
┃${usedPrefix}enable *anticall*
┃${usedPrefix}disable *anticall*
┃${usedPrefix}enable *antiprivado*
┃${usedPrefix}disable *antiprivado*
┃${usedPrefix}msg *<texto>*
┃${usedPrefix}banchat
┃${usedPrefix}unbanchat
┃${usedPrefix}banuser *<@tag>*
┃${usedPrefix}unbanuser *<@tag>*
┃${usedPrefix}banuser *<@tag>*
┃${usedPrefix}bc *<texto>*
┃${usedPrefix}bcchats *<texto>*
┃${usedPrefix}bcgc *<texto>*
┃${usedPrefix}cleartpm
┃${usedPrefix}restart
┃${usedPrefix}update
┃${usedPrefix}addprem *<@tag>*
┃${usedPrefix}delprem *<@tag>*
┃${usedPrefix}listprem
┃
┃ ───▄█▌─▄─▄─▐█▄
┃ ───██▌▀▀▄▀▀▐██
┃ ───██▌─▄▄▄─▐██
┃ ───▀██▌▐█▌▐██▀
┃ ▄██████─▀─██████▄
┃
┗ ┅ ━━━━━━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated2(m.chat, admins, wm, pp, '', '', 'https://github.com/CryptoLocker002/', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['MENU PRINCIPAL', '/menu']
], m,)
}
handler.help = ['menu15']
handler.tags = ['main']
handler.command = /^(menu15)/i
export default handler
