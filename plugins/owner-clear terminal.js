import { execSync } from 'child_process'
let handler = async (m, { conn, text }) => {
if (global.conn.user.jid == conn.user.jid) {
  await m.reply('limpiando terminal de ejecucion')
let stdout = execSync('clear' )

 await m.reply('terminal limpiada')
conn.reply(m.chat, stdout.toString(), m)
}}
handler.help = ['clear']
handler.tags = ['owner']
handler.command = /^clear|limpiar$/i
handler.rowner = true
export default handler
