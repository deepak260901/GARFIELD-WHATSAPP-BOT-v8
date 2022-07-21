// 👈 You Can change this your choice
// 👈 You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🐼'] // 👈 Enter your Emoji 
global.emoji02 = ['🦋'] //👈 Enter your Emoji
global.notice = ` *Hi 🥰 I m*
*ＮＯＩＺ Ξ*
*I am 16 years old developer...*
*From India 🇮🇳*
*I am a Learning.*
*Not more..*
*Also I am Student*
*Follow My Facebook - https://www.facebook.com/profile.php?id=100015805215445*`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+919015286428','918744089137'] //👈  Enter Your number
global.premium =  ['+919015286428','918744089137'] //👈  Enter Your number
global.ownernomer = '+919015286428','918744089137' //👈  Enter Your number
global.ownername = '꧁⁣༒𓆩𝄞D⃟『E』E༙PཽA̸͟͞ꀗ𒀱ꪳ𓆪༒꧂' //👈 Enter Your name
global.botname = 'G༙A༙P༙P༙U༙ ＢＯＴ' //👈 Enter Your Bot name
global.footer = '© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 Gཽaཽpཽpཽuཽ 𝖡𝗈𝗍' //👈 Enter Your Name
global.ig = 'https://www.instagram.com/invites/contact/?i=k7q05kjm1im0&utm_content=icvmhg8' // 👈 You Can change this your choice
global.region = 'India, Bihar, Delhi' // 👈 You Can change this your choice
global.sc = 'https://github.com/⏤͟͟͞͞★D༶E༶E༶P༶A༶K༶🤗ꗄ➺'
global.myweb = 'https://www.facebook.com' // 👈 Enter your Social media link to follow now button
global.packname = 'Gappu-Bot❤️'  // 👈 You Can change this your choice 
global.author = 'Deepak😸❤️‍🔥' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🛰️','⚓','🍎'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' 
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: 'Done 🦋', // 👈 You Can change this your choice
    admin: 'This Feature Is Only For 😌 Admin!', // 👈 You Can change this your choice
    botAdmin: 'Bot Must Be Admin 🙂 First!', // 👈 You Can change this your choice
    owner: 'This Feature Is Only For 😴 Owner!', // 👈 You Can change this your choice
    group: 'Feature Used Only For 🤗 Groups!', // 👈 You Can change this your choice
    private: 'Features Used Only For 😜 Private Chat!', // 👈 You Can change this your choice
    bot: 'This Feature Is Only For 😁 Bot', // 👈 You Can change this your choice
    wait: '```Please Wait...```', // 👈 You Can change this your choice
    error: 'Error! Maybe Api Key Is Expired🤔!', // 👈 You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // 👈 You Can change this your choice
// Do Not Change 👇 
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
