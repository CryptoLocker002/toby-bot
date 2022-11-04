/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let pp = './Menu2.jpg'
let name = await conn.getName(m.sender)
let buscadores =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
┇「𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊」
┣ ┅ ━━━━━━━━━ ┅ ━*
┃ 𝙷𝙾𝙻𝙰 ${name} 
┃
┃
┃
┃🔍${usedPrefix}stickersearch *<texto>*
┃🔍${usedPrefix}xnxxsearch *<texto>*
┃🔍${usedPrefix}animeinfo *<texto>*
┃🔍${usedPrefix}google *<texto>*
┃🔍${usedPrefix}letra *<texto>*
┃🔍${usedPrefix}wikipedia *<texto>*
┃🔍${usedPrefix}ytsearch *<texto>*
┃🔍${usedPrefix}apkdone *<texto>*
┃🔍${usedPrefix}apkgoogle *<texto>*
┃🔍${usedPrefix}apkmody *<texto>*
┃🔍${usedPrefix}apkshub *<texto>*
┃🔍${usedPrefix}happymod *<texto>*
┃🔍${usedPrefix}hostapk *<texto>*
┃🔍${usedPrefix}revdl *<texto>*
┃🔍${usedPrefix}toraccino *<texto>*
┃🔍${usedPrefix}uapkpro *<texto>*
┃▄█▀─▄▄▄▄▄▄▄─▀█▄
┃▀█████████████▀
┃────█▄███▄█
┃─────█████
┃─────█▀█▀█
┃
┗ ┅ ━━━━━━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated2(m.chat, buscadores, wm, pp, '', '', 'https://github.com/CryptoLocker002/', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['MENU PRINCIPAL', '/menu']
], m,)
}
handler.help = ['menu11']
handler.tags = ['main']
handler.command = /^(menu11)/i
export default handler
