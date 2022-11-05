/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let pp = './Menu2.jpg'
let name = await conn.getName(m.sender)
let herramientas =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
┇「ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊」
┣ ┅ ━━━━━━━━━ ┅ ━*
┃ 𝙷𝙾𝙻𝙰 ${name} 
┃
┃
┃
┃🛠️ _${usedPrefix}afk *<motivo>*_
┃🛠️ _${usedPrefix}ocr *<responde a imagen>*_
┃🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
┃🛠️ _${usedPrefix}calc *<operacion math>*_
┃🛠️ _${usedPrefix}del *<respondre a mensaje del Bot>*_
┃🛠️ _${usedPrefix}whatmusic *<responde a un audio>*_
┃🛠️ _${usedPrefix}qrcode *<texto>*_
┃🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
┃🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┃🛠️ _${usedPrefix}styletext *<texto>*_
┃🛠️ _${usedPrefix}traducir *<texto>*_
┃🛠️ _${usedPrefix}nowa *<numero>*_
┃💵 _${usedPrefix}balance_
┃💵 _${usedPrefix}claim_
┃💵 _${usedPrefix}lb_
┃💵 _${usedPrefix}levelup_
┃💵 _${usedPrefix}myns_
┃💵 _${usedPrefix}perfil_
┃💵 _${usedPrefix}work_
┃💵 _${usedPrefix}minar_
┃💵 _${usedPrefix}buy_
┃💵 _${usedPrefix}buyall_
┃💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┃💵 _${usedPrefix}verificar_
┃💵 _${usedPrefix}unreg *<numero de serie>*_
┃💵 _${usedPrefix}voz * ingresa el idioma del audio que va am andar el bot ejemplo .voz es hola soy un bot*_
┃        ▄▀▀▄
┃ █▀█▀▀▀▀█  █
┃ ▀ ▀     ▀▀
┃
┗ ┅ ━━━━━━━━━━━━━━ ┅ ━*

`.trim()
conn.sendHydrated2(m.chat, herramientas, wm, pp, '', '', 'https://github.com/CryptoLocker002/', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['MENU PRINCIPAL', '/menu']
], m,)
}
handler.help = ['menu13']
handler.tags = ['main']
handler.command = /^(menu13)/i
export default handler
