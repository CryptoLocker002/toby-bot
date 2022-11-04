/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let pp = './GRUPOS.jpeg'
let name = await conn.getName(m.sender)
let grupo =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
┇「🅶🆁🆄🅿🅾🆂」
┣ ┅ ━━━━━━━━━ ┅ ━*
┃ 𝙷𝙾𝙻𝙰 ${name} 
┃
┃
*<𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ/>*
┃☑️${usedPrefix}enable *welcome*_
┃☑️${usedPrefix}join *<enlace / link / url>*_
┃☑️${usedPrefix}disable *welcome*_
┃☑️${usedPrefix}enable *modohorny*_
┃☑️${usedPrefix}disable *modohorny*_
┃☑️${usedPrefix}enable *antilink*_
┃☑️${usedPrefix}disable *antilink*_
┃☑️${usedPrefix}enable *antilink2*_
┃☑️${usedPrefix}disable *antilink2*_
┃☑️${usedPrefix}enable *detect*_
┃☑️${usedPrefix}disable *detect*_
┃☑️${usedPrefix}enable *audios*_
┃☑️${usedPrefix}disable *audios*_
┃☑️${usedPrefix}enable *autosticker*_
┃☑️${usedPrefix}disable *autosticker*_
┃☑️${usedPrefix}enable *antiviewonce*_
┃☑️${usedPrefix}disable *antiviewonce*_
┃☑️${usedPrefix}enable *antitoxic*_
┃☑️${usedPrefix}disable *antitoxic*_
┃☑️${usedPrefix}add *<numero>*_
┃☑️${usedPrefix}kick *<@tag>*_
┃☑️${usedPrefix}grupo *<abrir / cerrar>*_
┃☑️${usedPrefix}promote *<@tag>*_
┃☑️${usedPrefix}demote *<@tag>*_
┃☑️${usedPrefix}admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┃☑️${usedPrefix}demote *<@tag>*_
┃☑️${usedPrefix}infogroup_
┃☑️${usedPrefix}link_
┃☑️${usedPrefix}setname *<texto>*_
┃☑️${usedPrefix}setdesc *<texto>*_
┃☑️${usedPrefix}invocar *<texto>*_
┃☑️${usedPrefix}setwelcome *<texto>*_
┃☑️${usedPrefix}setbye *<texto>*_
┃☑️${usedPrefix}hidetag *<texto>*_
┃☑️${usedPrefix}fantasmas_
┃──▄▀▀▀▄
┃──█───█
┃─███████
┃░██─▀─██
┃░███▄███
┃┗ ┅ ━━━━━━━━━━━━━━━━━━ ┅ ━*
`.trim()

conn.sendHydrated2(m.chat, grupo, wm, pp, '', '', 'https://github.com/CryptoLocker002/', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['MENU PRINCIPAL', '/menu']
], m,)
}
handler.help = ['menu3']
handler.tags = ['main']
handler.command = /^(menu3)/i
export default handler
