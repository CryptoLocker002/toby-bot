/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let pp = './juegos.jpeg'
let name = await conn.getName(m.sender)
let juegos =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
┇「🅹🆄🅴🅶🅾🆂 」
┣ ┅ ━━━━━━━━━ ┅ ━*
┃ 𝙷𝙾𝙻𝙰 ${name} 
┃
┃
┃🎮${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┃🎮${usedPrefix}ppt *<papel / tijera /piedra>*
┃🎮${usedPrefix}prostituto *<nombre / @tag>*
┃🎮${usedPrefix}prostituta *<nombre / @tag>*
┃🎮${usedPrefix}gay2 *<nombre / @tag>*
┃🎮${usedPrefix}lesbiana *<nombre / @tag>*
┃🎮${usedPrefix}pajero *<nombre / @tag>*
┃🎮${usedPrefix}pajera *<nombre / @tag>*
┃🎮${usedPrefix}puto *<nombre / @tag>*
┃🎮${usedPrefix}puta *<nombre / @tag>*
┃🎮${usedPrefix}manco *<nombre / @tag>*
┃🎮${usedPrefix}manca *<nombre / @tag>*
┃🎮${usedPrefix}rata *<nombre / @tag>*
┃🎮${usedPrefix}love *<nombre / @tag>*
┃🎮${usedPrefix}doxear *<nombre / @tag>*
┃🎮${usedPrefix}pregunta *<texto>*
┃🎮${usedPrefix}suitpvp *<@tag>*
┃🎮${usedPrefix}slot *<apuesta>*
┃🎮${usedPrefix}ttt *<nombre sala>*
┃🎮${usedPrefix}delttt
┃🎮${usedPrefix}simi *<texto>*
┃🎮${usedPrefix}top *<texto>*
┃🎮${usedPrefix}topgays
┃🎮${usedPrefix}topotakus
┃🎮${usedPrefix}formarpareja
┃🎮${usedPrefix}verdad
┃🎮${usedPrefix}reto
┃🎮${usedPrefix}cancion
┃🎮${usedPrefix}pista_
┃▄▀─────────────▀▄
┃█▄█──█▀█─█▀█─▄█▄█
┃─▀██▄▀▄▀─▀▄▀▄██▀
┃░░░▄██▀███▀███▄
┃░▐▀█▀██▄▄▄██▀█▀▌
┃┗ ┅ ━━━━━━━━━━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated2(m.chat, juegos, wm, pp, '', '', 'https://github.com/CryptoLocker002/', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['MENU PRINCIPAL', '/menu']
], m,)
}
handler.help = ['menu2']
handler.tags = ['main']
handler.command = /^(menu2)/i
export default handler
