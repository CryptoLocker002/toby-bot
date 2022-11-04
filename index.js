


import ora from 'ora';
import { join, dirname } from 'path'
import { createRequire } from "module";
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts';
import { createInterface } from 'readline'
import yargs from 'yargs'
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) 
const { name, author } = require(join(__dirname, './package.json')) 
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)
const spinner = ora();
const chalk = require('chalk')
const fs = require("fs")
const exec = require('child_process')
//const timeoutObj = setTimeout(() => {
//spinner.start('✅ㅤIniciando...');
//}, 1500);

say('Ajuste la pantalla para escanear el codigo QR', {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']})
say('toby\nWhatsApp Bot', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
say(`'toby' By hunter dexter`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})

  

console.log(chalk.red("│"),chalk.red("```````_1111111_````````````````````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("``1$¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶$₫_````````````````````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("`_111_```````1₫$¶¶¶¶¶¶¶¶¶₫_```````````````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("`````````````````_₫¶¶¶¶¶¶¶¶¶₫`````````````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("````````````````````1¶¶¶¶¶¶¶¶¶¶₫``````````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("```````1₫§₫1``````````₫¶¶¶¶¶¶¶¶¶¶1```_₫1``````````````")), {
} 
console.log(chalk.red("│"),chalk.red("```_§$$$¶¶¶¶¶¶¶¶₫_``````§¶¶¶¶¶¶¶¶¶¶1``₫$$1````````````")), {
} 
console.log(chalk.red("│"),chalk.red("````````````₫¶¶¶¶¶¶§1````1¶¶¶¶¶¶¶¶¶¶1``1¶¶§_``````````")), {
} 
console.log(chalk.red("│"),chalk.red("`````1§§₫1`````₫¶¶¶¶¶¶₫````₫¶¶¶¶$$¶¶¶$``_¶¶$``````````")), {
} 
console.log(chalk.red("│"),chalk.red("``````₫¶¶¶¶¶₫```1¶¶¶¶¶¶¶§`````````1¶¶¶$1`1¶¶$1````````")), {
} 
console.log(chalk.red("│"),chalk.red("````````_$¶¶¶¶$_`1§¶¶¶¶¶¶¶$1_``````1¶¶¶¶11¶¶¶$````````")), {
} 
console.log(chalk.red("│"),chalk.red("``````````1¶¶¶¶§```¶¶¶¶¶¶¶¶¶¶¶1````1¶¶¶¶¶¶¶¶¶¶1```````")), {
} 
console.log(chalk.red("│"),chalk.red("```````````§¶¶¶¶§1_1$¶¶¶¶¶¶¶¶¶1```₫¶¶¶¶¶¶¶¶¶¶¶§1``````")), {
} 
console.log(chalk.red("│"),chalk.red("````````````1§¶¶¶¶₫``````1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶$1``````")), {
} 
console.log(chalk.red("│"),chalk.red("````````````₫¶¶¶¶¶¶1```````1§¶¶¶¶¶¶¶¶¶¶§₫§¶¶¶¶¶₫``````")), {
} 
console.log(chalk.red("│"),chalk.red("```````````$¶¶¶¶¶¶¶§``₫¶¶₫11§¶¶¶¶¶¶¶¶¶¶$1_1§¶¶¶§``````")), {
} 
console.log(chalk.red("│"),chalk.red("````````````````₫¶¶¶₫`_$¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶§111$¶$``````")), {
} 
console.log(chalk.red("│"),chalk.red("`````₫§`````````_$¶¶¶11§¶¶¶¶¶¶¶¶¶¶¶¶¶¶$¶¶¶¶§1₫¶¶§`````")), {
} 
console.log(chalk.red("│"),chalk.red("`````$¶§````````1¶¶¶§11¶¶¶¶¶¶¶¶¶§₫§¶¶¶$₫$¶¶¶¶¶¶¶¶§````")), {
} 
console.log(chalk.red("│"),chalk.red("`````₫¶¶¶§1``_11$¶¶¶11₫¶¶¶¶¶§1_`````1§¶$11¶¶¶¶¶¶¶$1```")), {
} 
console.log(chalk.red("│"),chalk.red("``_```₫¶¶¶¶¶¶¶¶¶¶¶$11$¶¶¶¶$1``````````§¶¶§₫§¶¶¶¶¶¶§_``")), {
} 
console.log(chalk.red("│"),chalk.red("`₫$1```₫¶¶¶¶¶¶¶¶¶¶$11§¶¶¶¶1````````````1¶$₫₫¶¶¶¶¶¶¶₫``")), {
} 
console.log(chalk.red("│"),chalk.red("`₫¶$1```1$¶¶¶¶¶¶¶¶¶§11₫¶¶¶1``````````````1¶¶$$¶¶¶¶$1``")), {
} 
console.log(chalk.red("│"),chalk.red("`_$¶¶1````1§¶¶¶¶¶¶¶¶₫_1$¶¶¶1``````````````₫§₫₫$¶¶¶§```")), {
} 
console.log(chalk.red("│"),chalk.red("``1¶¶¶1`````₫¶¶¶¶¶¶¶¶$1`1§¶¶¶₫```````````````1¶¶¶¶_```")), {
} 
console.log(chalk.red("│"),chalk.red("```₫¶¶¶$````_§¶¶¶¶¶¶¶¶¶₫11111₫11`````````````1¶¶§`````")), {
} 
console.log(chalk.red("│"),chalk.red("````₫¶¶¶¶¶₫``1¶¶¶¶¶¶¶¶¶¶¶$§§§$¶¶§`````````````_```````")), {
} 
console.log(chalk.red("│"),chalk.red("`````1¶¶¶¶¶11§¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1````````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("```````§¶¶¶§₫¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶§````````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("```$$```1₫§§$¶¶¶¶1_``1₫$¶¶¶¶¶¶¶¶¶¶1```````````````````")),{
} 
console.log(chalk.red("│"),chalk.red("```§¶$1````§¶¶¶₫```````1$¶¶¶¶¶¶¶¶¶₫```````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("````§¶¶¶```₫¶¶¶````````1$¶¶¶¶¶¶¶¶¶¶§``````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("`````$¶¶¶11$¶¶₫````````1$¶¶¶¶¶¶¶¶¶¶¶§`````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("``````₫¶¶¶¶¶¶§1```````1¶¶¶¶¶¶¶$₫1§¶¶¶§````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("```````1§¶¶¶$§₫````_$¶¶¶¶¶¶¶¶¶1```1¶¶¶₫```````````````")), {
} 
console.log(chalk.red("│"),chalk.red("``````````11₫$₫````_§¶¶¶¶¶¶¶¶¶1```₫¶¶¶¶§``````````````")), {
} 
console.log(chalk.red("│"),chalk.red("````````````_§§```````1¶¶¶¶¶¶¶$1``$¶¶¶¶¶₫`````````````")), {
} 
console.log(chalk.red("│"),chalk.red("``````````````_````11_``1¶¶¶¶¶¶$``1¶¶¶¶¶§1````````````")), {
} 
console.log(chalk.red("│"),chalk.red("````````````````````§¶₫``1$¶¶¶¶¶§``1$¶¶¶¶§````````````")), {
} 
console.log(chalk.red("│"),chalk.red("`````````````````````$¶¶1``1¶¶¶¶¶¶```§¶¶¶¶_```````````")), {
} 
console.log(chalk.red("│"),chalk.red("`````````````````````1¶¶¶1``1¶¶¶¶¶1```§¶¶¶1```````````")), {
} 
console.log(chalk.red("│"),chalk.red("`````````````````````1¶¶¶¶1``1¶¶¶¶¶1``1¶¶¶₫```````````")), {
} 
console.log(chalk.red("│"),chalk.red("````````````````````1¶¶¶¶¶$1``₫¶¶¶¶¶_``1¶¶§_``````````")), {
} 
console.log(chalk.red("│"),chalk.red("````````````````````1¶¶¶¶¶¶¶1`_$¶¶¶¶1```¶¶§```````````")), {
} 
console.log(chalk.red("│"),chalk.red("``````````````````````₫¶¶¶¶¶₫``1$¶¶¶$_``¶¶₫```````````")), {
} 
console.log(chalk.red("│"),chalk.red("```````````````````````₫¶¶¶¶$1``₫¶¶¶¶₫``$¶1```````````")), {
} 
console.log(chalk.red("│"),chalk.red("````````````````````````₫¶¶¶¶$``1¶¶¶¶§``1§````````````")), {
} 
console.log(chalk.red("│"),chalk.red("````````````````````````_$¶¶¶¶1``$¶¶¶$1``_````````````")), {
} 
console.log(chalk.red("│"),chalk.red("`````````````````````````₫¶¶¶¶1``§¶¶¶¶1```````````````")), {
} 
console.log(chalk.red("│"),chalk.red("`````````````````````````1$¶¶¶1``§¶¶¶$_```````````````")), {
} 
console.log(chalk.red("│"),chalk.red("``````````````````````````§¶¶¶₫``₫¶¶¶$````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("``````````````````````````§¶¶¶1``§¶¶¶$````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("``````````````````````````§¶¶¶1`1¶¶¶¶§````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("`````````````````````````1$¶¶¶1`1¶¶¶§1````````````````")), {
}
console.log(chalk.red("│"),chalk.red("`````````````````````````₫¶¶¶₫``§¶¶¶₫`````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("````````````````````````1¶¶¶§``1¶¶¶§``````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("````````````````````````1¶¶¶1`1¶¶¶§```````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("```````````````````````_$¶¶$``₫¶¶¶_```````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("``````````````````````1$¶¶§_`₫¶¶§`````````````````````")),{
} 
console.log(chalk.red("│"),chalk.red("`````````````````````_$¶¶$``₫¶¶₫``````````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("````````````````````1¶¶¶$1`₫¶¶1```````````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("```````````````````₫¶¶¶§1`§¶§`````````````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("``````````````````§¶¶¶₫``₫§_``````````````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("`````````````````§¶¶¶1````````````````````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("````````````````₫¶¶$1`````````````````````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("```````````````1¶¶¶```````````````````````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("``````````````_$¶§_```````````````````````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("``````````````₫¶¶`````````````````````````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("``````````````§$§`````````````````````````````````````")), {
} 
console.log(chalk.red("│"),chalk.red("`````````````1₫₫1`````````````````````````````````````")), {
} 
console.log(chalk.red("├---------------------------------------------------------------")), {
}
console.log(chalk.red('✅ㅤIniciando...'));
var isRunning = false
/**
* Start a js file
* @param {String} file `path/to/file`
*/
function start(file) {
if (isRunning) return
isRunning = true
let args = [join(__dirname, file), ...process.argv.slice(2)]


  
setupMaster({
exec: args[0],
args: args.slice(1), })
let p = fork()
p.on('message', data => {
console.log('[RECEIVED]', data)
switch (data) {
case 'reset':
p.process.kill()
isRunning = false
start.apply(this, arguments)
break
case 'uptime':
p.send(process.uptime())
break }})
p.on('exit', (_, code) => {
isRunning = false
console.error('❎ㅤOcurrio un error inesperado:', code)
  
p.process.kill()
isRunning = false
start.apply(this, arguments)
  
if (code === 0) return
watchFile(args[0], () => {
unwatchFile(args[0])
start(file)})})
let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test'])
if (!rl.listenerCount()) rl.on('line', line => {
p.emit('message', line.trim())})}


 start('main.js')
//spinner.setTimeout








