/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let pp = './Menu2.jpg'
let name = await conn.getName(m.sender)
let audios =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
┇「𝔸𝕌𝔻𝕀𝕆𝕊」
┣ ┅ ━━━━━━━━━ ┅ ━*
┃ 𝙷𝙾𝙻𝙰 ${name} 
┃
┃
┃
┃*<𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊/>*
┃- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┃🎤 _${usedPrefix}bass_
┃🎤 _${usedPrefix}blown_
┃🎤 _${usedPrefix}deep_
┃🎤 _${usedPrefix}earrape_
┃🎤 _${usedPrefix}fast_
┃🎤 _${usedPrefix}fat_
┃🎤 _${usedPrefix}nightcore_
┃🎤 _${usedPrefix}reverse_
┃🎤 _${usedPrefix}robot_
┃🎤 _${usedPrefix}slow_
┃🎤 _${usedPrefix}smooth_
┃🎤 _${usedPrefix}tupai_
┃*<𝔸𝕌𝔻𝕀𝕆𝕊/>* 
┃*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)* 
┃_(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_
┃
┃🔊 _Quien es tu sempai botsito 7w7_
┃🔊 _Te diagnostico con gay_
┃🔊 _A nadie le importa_
┃🔊 _Fiesta del admin_
┃🔊 _Fiesta del administrador_ 
┃🔊 _Vivan los novios_
┃🔊 _Feliz cumpleaños_
┃🔊 _Noche de paz_
┃🔊 _Buenos dias_
┃🔊 _Buenos tardes_
┃🔊 _Buenos noches_
┃🔊 _Audio hentai_
┃🔊 _Chica lgante_
┃🔊 _Feliz navidad_
┃🔊 _Vete a la vrg_
┃🔊 _Pasa pack Bot_
┃🔊 _Atencion grupo_
┃🔊 _Marica quien_
┃🔊 _Murio el grupo_
┃🔊 _Oh me vengo_
┃🔊 _tio que rico_
┃🔊 _Viernes_
┃🔊 _Baneado_
┃🔊 _Sexo_
┃🔊 _Hola_
┃🔊 _Un pato_
┃🔊 _Nyanpasu_
┃🔊 _Te amo_
┃🔊 _Yamete_
┃🔊 _Bañate_
┃🔊 _Es puto_
┃🔊 _La biblia_
┃🔊 _Onichan_
┃🔊 _Mierda de Bot_
┃🔊 _Siuuu_
┃🔊 _Epico_
┃🔊 _Shitpost_
┃🔊 _Rawr_
┃🔊 _UwU_
┃🔊 _:c_
┃🔊 _a_
┃
┃
┃┃────▄▄▄▄▄▄▄▄▄▄▄▄▄▄
┃▀▀▀█─▄▄▄▄▄▄─▄─▄─▄─█
┃───█─█────█─▄▀▄▀▄─█
┃───█─█▄▄▄▄█─▄▀▄▀▄─█
┃───▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀
┃
┗ ┅ ━━━━━━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated2(m.chat, audios, wm, pp, '', '', 'https://github.com/CryptoLocker002/', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['MENU PRINCIPAL', '/menu']
], m,)
}
handler.help = ['menu12']
handler.tags = ['main']
handler.command = /^(menu12)/i
export default handler
