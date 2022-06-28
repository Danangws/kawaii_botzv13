let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : D'anang wijaya saputra
║│➸ ```UMUR``` : 20 th
║│➸ ```ASAL``` : Lo Tau, Gw Jones ')
║│➸ ```NO HP``` : 0857-1559-0172

║│➸ ```GITHUB``` : http://github.com/Danangws_____
║│➸ ```WHATSAPP``` : http://wa.me/6285715590172
╰────────❉
`.trim(), m)
}

handler.help = ['infoarull']
handler.tags = ['main', 'utama']
handler.command = /^(infoarull|inforozi)$/i

handler.exp = 150

module.exports = handler
