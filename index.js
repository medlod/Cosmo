const Dlang = require('discordbot-script')
 
const discordScript = require("discordbot-script")
 
const bot = new discordScript({
  token: "NTU3MjEyMTY3MTkxOTIwNjgw.XI-uRQ.r_q1EEL8tPiAaq4AtQMnwqdIDCY",
  prefix: [""]
})
 
bot.MessageEvent()
bot.MessageEditEvent()

bot.Command({
  name: "/help",
  code: `
$color[$random[1;99999]]
$title[Help Commands]
$description[🔰**Basic Commands**🔰
> ticket | covid | rank | leaderboard | github | ‎remind | profile | poll | ‎suggest | magik | userinfo | eject | checkwarn | ping | infoinvite | serverinfo | ‎botinfo | ‎afk on | afk off | support

🔪**Fun Commands**🔪
> say | math | hug | neko | lick | kiss | pat | topic | stonks | tickle | poke | youtube | trump | snipe | makememe| table-flip | clyde | cuddle | weather | ship | facts | amongus | trash | watermeme | cmm | meme | preview | roll‎ | avatar‎ | 8ball‎ | kill | rps‎ | slap‎ | achievement | skin | exam | lowercase | ttt help | uppercase |

💳**Economy Commands**💳
> work | ‎bal | crime | fish | gift | beg | shop | inv | dep or deposit | with or withdraw‎ | daily | lb or leaderboard cash | lb or leaderboard bank |

🎃**Staff Commands**🎃
> purge‎ | announce | nick | ban | mute | unmute‎ | warn | createrole‎ | checkwarn‎ | setwarns | banid‎ | unbanid‎ | kick‎ | role‎ | takerole‎ | createchannel | deletechannel |

📛**Bot Config Commands**📛
> setsuggest‎ | setmodlogs | setmutedrole | setwelcome | 

**Join our Support Server!**
{hyper:Click Here:https://cosmobot.ml/support}]
  `
})

bot.Variables({
  prefix: ".",
  warn: "0",
  money: "0",
  ModLogs: "",
  nm: "0",
  msg: "",
  bank: "0",
  Suggest: "",
  mute: "",
  a1: "⬜",  
  a2: "⬜",
  a3: "⬜",
  b1: "⬜",
  b2: "⬜",
  b3: "⬜",
  c1: "⬜",
  c2: "⬜",
  c3: "⬜",
  game: "0",
  turn: "0",
  player: "",
  fish: "0",
  chocolate: "0",
  pizza: "0",
  pole: "0",
  alcohol: "0",
  noodle: "0",
  talk: "0",
  req: "250",
  level: "0",
  snipe: "",
  snipe1: "",
  welcome: "",
  birthday: "/setbirth (date)",
  favcolor: "/setcolor (name)",
  petname: "/setpet (name)"
})
bot.Status({

        0: {
            description: "/help and $serverCount Servers!", 
            type: "LISTENING" 

        }, 
    }, 13000)
bot.Command({
    name: "/support",
    code: `$color[$random[1;9999]]
$botTyping
$addTimestamp
$title[Join our support server!]
$description[Join our support server for suggestions or reporting bugs
{hyper:Click here to Join!:https://discord.gg/NwqjcvT}]`
})
bot.Command({
    name: "/covid",
    code: `$title[Covid stats of $message[]]
$image[https://covid-img.herokuapp.com/country/$replaceText[$message[]; ;%20]]`
})
bot.Command({
    name: "/botinfo",
    code: `$botTyping
$title[Bot Info]
$description[***Bot Information***

🔰**Ping**🔰
$ping ms

👑**Uptime**👑
$uptime

👒**Bot Owner**👒
<@427109850368049162>

🔔**RAM Usage** 🔔
Currently Using $memory MB of RAM!

📛**CPU Usage**📛
Currently using $cpu of CPU!]

$footer[Made By RileCraft]
$color[$random[1;9999]]
$addTimestamp`
})
bot.Command({
    name: "/invite",
    code: `$botTyping
$color[$random[1;9999]]
$title[Invite Cosmo To Your Server!🤖]
$description[{hyper:Click on me to add the bot!:https://discord.com/oauth2/authorize?client_id=557212167191920680&scope=bot&permissions=2147483647}]
$footer[Command by $username[$authorID]#$discriminator[$authorID]]`
})
bot.Command({
    name: "/github",
    code: `$color[$random[1;9999]]
$title[Cosmo Source Code!]
$description[{hyper:Click Here!:https://github.com/RileCraft/Cosmo}]`
})
bot.Command({
    name: "/bal",
    code: `$title[💰 - Your Cash]
$color[$random[1;9999]]
$description[👛**Wallet**👛
$$getVar[money;$mentioned[1;yes]]

💳**Bank**💳
$$getVar[bank;$mentioned[1;yes]]

💸**NetWorth**💸
$$sum[$getVar[money;$mentioned[1;yes]];$getVar[bank;$mentioned[1;yes]]]]
$addTimestamp`
})
bot.Command({
    name: "/work",
    code: `$globalCooldown[10m; ***You need to wait 10m before working again***]
$addTimestamp
$setVar[money;$sum[$getVar[money;$authorID];$random[40;120]];$authorID]
$description[$$random[40;120] 💰 Congratulations :)]
$title[**$username[]** got:]
$color[$random[11111;99999]]`
})
bot.Command({
    name: "/daily",
    code: `$globalCooldown[1d;**You need to wait at least 1 day between your last /daily to do this command again!**] 
$addTimestamp
$setVar[money;$sum[$getVar[money;$authorID];$random[100;1000]];$authorID]
$description[You have been claimed $$random[100;1000] from your daily prize!]
$title[Daily Claim!]
$color[$random[11111;99999]]`
})
bot.Command({
    name: "/lb",
    aliases: ["/leaderboard", "/rich"],
    code: `$addTimestamp
$description[$globalUserLeaderboard[money;asc]]
$title[Most Richest People With Money In Wallet]
$color[$random[11111;99999]]
$onlyIfMessageContains[cash;wallet;money;]`
})
bot.Command({
    name: "/lb",
    aliases: ["/leaderboard", "/rich"],
    code: `$addTimestamp
$description[$globalUserLeaderboard[bank;asc]]
$title[Most Richest People With Money In Bank]
$color[$random[11111;99999]]
$onlyIf[$message[1]==bank;]`
})
bot.Command({
    name: "/announce",
    code: `$botTyping
$onlyAdmin[Admins Only!]
$argsCheck[>1;Please mention a channel where to announce.]
$useChannel[$mentionedChannels[1]]
$color[$random[1;9999]]
$title[Announcement! 📡]
$description[$noMentionMessage[]]
$suppressErrors[Please mention a channel then provide the message!]
$footer[Sent by $username[$authorID]]`
})
bot.Command({
    name: "/status",
    code: `$onlyIf[$message[]!=;Please use in format /status (ip)]
$botTyping
$color[$random[1;99999]]
$description[{hyper:Click here to see the status:https://mcsrvstat.us/server/$message[]}]
$footer[Open the link to check the Live Status!]
$addTimestamp`
})
bot.Command({
    name: "/8ball",
    code: `$botTyping
$thumbnail[$authorAvatar]
$color[$random[11111;99999]]
$title[$username[$authorID] asked] $description[**Question**
$message[]
**Answer**
$randomText[It's is certain;it is decidedly so;without a doubt;yes-definitely;you may rely on it;as I see it yes;most likely;outlook good;yes;signs point to yes; reply hazy, try again;ask again later; better not tell you now;cannot predict now; concentrate and ask again:don't count on it;my reply is no;my sources say no;outlook not so good;very doubtful]]
$deletecommand[1ms]`
})
bot.Command({
    name: "/avatar",
    aliases: ["/av", "/pfp"],
    code: `$image[$userAvatar[$mentioned[1]]] 
$title[**User Profile Picture**]
$color[$random[1;9999]]`
})
bot.Command({
    name:  "/google",
    code: `$image[https://image.thum.io/get/auth/11091-RandomBot/nomention/https://google.com/search?q=$replaceText[$message[]; ;+]]
$botTyping
$color[$random[1;9999]]
$thumbnail[https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png]
$author[Google Search]
$description[Search Google... 
{hyper:Click to see results!:https://www.google.com/search?q=$replaceText[$message[]; ;+]}
Search: **$message[]**
Author: **$username[$authorID]**

**PREVIEW**]
$addTimestamp
$deletecommand[1ms]
$onlyIf[$message!=;Please provide some text!]`
})
bot.Command({
    name: "/achievement",
    code: `$botTyping
$title[Achievement Get!]
$footer[Command Activated By $username[$authorID]]
$color[$random[1;9999]]
$image[https://minecraftskinstealer.com/achievement/1/Achievement+Get%21/$replaceText[$message[]; ;+]]
$onlyIf[$message[]!=; you can't achieve nothing, add something to achieve]
$addTimestamp
$deletecommand[1ms]`
})
bot.Command({
    name: "/exam",
    code: `$botTyping
$color[$random[11111;99999]]
$title[Exam Results]
$description[<@$authorID> has scored $random[-101;101] out of 100!]`
})
bot.Command({
    name: "/skin",
    aliases: ["/mcskin", "/mc-skin"],
    code: `$title[Skin of **$message[]**]
$description[{hyper:✎ Download Link!:https://minotar.net/download/$message[]}]
$image[https://minotar.net/armor/body/$message[]/490.png]
$onlyIf[$message[]!=;❌ Please enter a username! 👻]
$addTimestamp
$color[$random[1;9999]]
$botTyping`
})
bot.Command({
    name: "/say",
    aliases: ["/tell", "/speak"],
    code: `$botTyping
$deletecommand[1ms]
$author[$username[$authorID]] $thumbnail[$authorAvatar]
$description[$message[]]
$addTimestamp`
})
bot.Command({
    name: "/trump",
    code: `$onlyIf[$message[]!=;Please provide some text!]
$description[]
$image[https://api.no-api-key.com/api/v2/trump?message=$replaceText[$message[]; ;+]]`
})
bot.Command({
    name: "/majik",
   aliases: ["/magic"],
    code: `$onlyIf[$message[]!=;Please mention someone!]
$color[$random[111111;999999]]
$image[https://api.alexflipnote.dev/filter/magik?image=$userAvatar[$mentioned[1]]]`
})
bot.Command({
    name: "/eject",
    code: `$onlyIf[$message!=;Please mention someone!]
$color[$random[111111;999999]]
$image[https://vacefron.nl/api/ejected?name=$username[$mentioned[1]]+&impostor=$randomText[true;false]&crewmate=$randomText[black;blue;brown;cyan;darkgreen;lime;orange;pink;purple;red;white;yellow]]`
})
bot.Command({
    name: "/youtube",
    code: `$color[$random[11111;99999]]

$thumbnail[https://cdn.discordapp.com/attachments/705681477169315863/764429636842291200/Untitled17_20201010154021.png]
$author[YouTube Search]
$description[Search YouTube...
{hyper:Click to see results!:https://m.youtube.com/results?search_query=$replaceText[$message[]; ;+]}
Search: **$message[]**
Author: **$username[$authorID]**]
$onlyIf[$message[]!=;Hey! You need to search something!]
$deletecommand[1ms]`
})
bot.Command({
    name: "/stonks",
    code: `$color[$random[111111;999999]]
$image[https://vacefron.nl/api/stonks?user=$userAvatar[$mentioned[1]]?size=4096]`
})
bot.Command({
    name: "/rps",
    code: `$botTyping
$onlyIf[$message[]!=;You can't just Choose nothing.]
$title[Rock, Paper, Scissors!]
$description[You selected $message[] - Bot selected $randomText[Rock;Paper;Scissors!].]
$addTimestamp`
})
bot.Command({
    name: "/img",
    code: `$deletecommand[1ms]
$onlyIf[$message[]!=;Provide Some Text.]
$description[]
$image[https://flamingtext.com/net-fu/proxy_form.cgi?script=runner-logo&text=$replaceText[$message; ;+]&_loc=generate&imageoutput=true]
$footer[Requested by $username[$authorID]#$discriminator[$authorID]]`
})
bot.Command({
    name: "/roll",
    code: `$suppressErrors[**Correct usage: /roll (small number) (big number)**]
$color[$random[11111;99999]]
$title[I choose $random[$message[1];$message[2]]]`
})
bot.Command({
    name: "/preview",
    aliases: ["/site-preview", "/sitepreview"],
    code: `$onlyIf[$message[]!=;Try giving me a site domain!]
$onlyIfMessageContains[$message[];https://Correct Usage: /preview https://google.com/]
$title[Site Preview]
$description[{hyper:OPEN SITE:$message[]}]
$footer[]
$color[$random[1;99999]]
$image[https://image.thum.io/get/$message[]/]`
})
bot.Command({
    name: "/cmm",
    aliases: ["/changemymind", "/change-my-mind"],
    code: `$title[Change My Mind]
$image[https://vacefron.nl/api/changemymind?text=$replaceText[$message[]; ;%20]]
$color[$random[1;9999]]
$onlyIf[$message[]!=;Write something to change your mind.]
$footer[Requested by $username[$authorID]]
$addTimestamp
$botTyping
$suppressErrors[Please try again later !]
$deletecommand[1ms]`
})
bot.Command({
    name: "/meme",
    code: `$description[]
$image[https://ctk-api.herokuapp.com/meme/$random[1;500]]`
})
bot.Command({
    name: "/trash",
    code: `$title[$username[$authorID] Trashed $username[$mentioned[1]]]
$image[https://api.alexflipnote.dev/trash?face=$authorAvatar&trash=$userAvatar[$mentioned[1]]]
$color[$random[1;99999]]
$onlyIf[$mentioned[1]!=;Mention someone!]
$footer[Requested by $username[$authorID]]
$addTimestamp
$botTyping
$suppressErrors[Please try again later.]
$deletecommand[1ms]`
})
bot.Command({
    name: "/facts",
    aliases: ["/fact"],
    code: `$title[Facts!]
$image[https://api.alexflipnote.dev/facts?text=$replaceText[$message[]; ;+]]
$color[$random[1;99999]]
$onlyIf[$message[]!=;Write your facts.]
$footer[Requested by $username[$authorID]]
$addTimestamp
$botTyping
$suppressErrors[Please try again later !]
$deletecommand[$authorID]`
})
bot.Command({
    name: "/kill",
    code: `$botTyping
$onlyIf[$message[1]!=;Mention who you wanna kill.]
$onlyIf[$authorID!=$mentioned[1];I Wish u could kill yourself]
$color[$random[1;9999]]
$title[OH NO! Someone Died!]
$description[<@$authorID> Killed <@$mentioned[1]>]
$image[$randomText[https://cdn.weeb.sh/images/HyXTiyKw-.gif;https://cdn.weeb.sh/images/r11as1tvZ.gif;https://cdn.weeb.sh/images/B1VnoJFDZ.gif;https://cdn.discordapp.com/attachments/752428043951276102/752563482641039400/tenor_1.gif;https://cdn.discordapp.com/attachments/752428043951276102/752563483106607112/tenor.gif;https://cdn.discordapp.com/attachments/752428043951276102/752563482041385090/77518.gif]]
$deletecommand[1ms]`
})
bot.Command({
    name: "/slap",
    code: `$botTyping
$onlyIf[$message[1]!=;Mention Who You Wanna Slap.]
$onlyIf[$authorID!=$mentioned[1];I Wish u could slap yourself]
$title[Ouch... That hurts]
$description[<@$authorID> Slapped <@$mentioned[1]> Ouch..]
$image[https://purrbot.site/img/sfw/slap/gif/slap_0$randomText[01;02;03;04;05;06;07;08;09;10;11;12;13;14;15].gif]
$color[$random[1;9999]]
$deletecommand[1ms]`
})
bot.Command({
    name: "/hug",
    code: `$deletecommand[1ms]
$onlyIf[$message[1]!=;Please mention somebody to hug.]
$onlyIf[$authorID!=$mentioned[1];I Wish u could hug yourself]
$color[$random[1;99999]]
$description[ <@$authorID> hugs <@$mentioned[1]> !]
$image[https://purrbot.site/img/sfw/hug/gif/hug_0$randomText[01;02;03;04;05;06;07;08;09;10;11;12;13;14;15;16;17;18;19;20;21;22;23;24;25;26;27;28;29;30;31;32;33;34;35;36;37;38;39;40;41;42;43;44;45;46;47;48;49;50].gif]`
})
bot.Command({
    name: "/pat",
    code: `$deletecommand[1ms]
$onlyIf[$message[1]!=; You want to pat yourself or what?]
$onlyIf[$authorID!=$mentioned[1];I Wish u could pat yourself]
$color[$randomText[FF0000;00BFFF]]
$title[Pats time]
$description[ <@$authorID> Is patting <@$mentioned[1]> ]
$image[https://purrbot.site/img/sfw/pat/gif/pat_0$randomText[01;02;03;04;05;06;07;08;09;10;11;12;13;14;15;16;17;18;19;20;21;22;23;24;25;26;27;28;29;30;31;32;33;34;35;36;37;38;39;40;41;42;43;44;45;46;47;48;49;50].gif]`
})
bot.Command({
    name: "/kiss",
    code: `$deletecommand[1ms]
$onlyIf[$message[1]!=;**Please mention somebody to Kiss.**]
$onlyIf[$authorID!=$mentioned[1];**I Wish u could kiss yourself**]
$color[$random[1;99999]]
$title[**Kisses time**]
$description[** <@$authorID> Gives <@$mentioned[1]> Kisses 😗** ]
$image[https://purrbot.site/img/sfw/kiss/gif/kiss_0$randomText[01;02;03;04;05;06;07;08;09;10;11;12;13;14;15;16;17;18;19;20;21;22;23;24;25;26;27;28;29;30;31;32;33;34;35;36;37;38;39;40;41;42;43;44;45;46;47;48;49;50].gif]`
})
bot.Command({
    name: "/lick",
    code: `$botTyping
$onlyIf[$message[1]!=;Mention Who You Wanna Lick.]
$onlyIf[$authorID!=$mentioned[1];I Wish u could lick yourself]
$title[Licks 😛]
$description[<@$authorID> Licks <@$mentioned[1]>]
$image[https://purrbot.site/img/sfw/lick/gif/lick_0$randomText[01;02;03;04;05;06;07;08;09;10;11;12;13;14;15].gif]
$color[$random[1;9999]]
$deletecommand[1ms]`
})
bot.Command({
    name: "/ship",
    code: `$onlyIf[$mentioned[1]!=;You have to mention someone and someone else!] 
$color[$random[1;9999]]
$title[Aww] 
$description[$username[$mentioned[1]] and $username[$mentioned[2]] are a $random[1;101]% match!]`
})
bot.Command({
    name: "/watermeme",
    aliases: ["/water-meme", "/water"],
    code: `$onlyIf[$message[]!=; Write your text]
$title[Searching For Water]
$image[https://vacefron.nl/api/water?text=$replaceText[$message[]; ;%20]]
$color[$random[1;99999]]
$footer[Requested by $username[$authorID]]
$addTimestamp
$botTyping
$suppressErrors[Please try again later !]
$deletecommand[1ms]`
})
bot.Command({
    name: "/amongus",
    aliases: ["/among-us"],
    code: `$onlyIf[$message[]!=;Please provide some text]
$title[Result]
$description[. 　　　。　　　　•　 　ﾟ　　。 　　.

　　　.　　　 　　.　　　　　。　　 。　. 　

.　　 。　　　　　 ඞ 。 . 　　 • 　　　　•

　　ﾟ　　 $message[] $randomText[was not An Impostor;was An Impostor].　 。　.

　　'　　　 $randomText[1;2;0] Impostor remains 　 　　。

　　ﾟ　　　.　　　.　　　　.　 .]
$color[$random[11111;99999]]`
})
bot.Command({
    name: "/weather",
    code: `$onlyIf[$message[]!=;⚠️ Please provide a city to check weather!]
$title[Here's the weather in $message[]]
$footer[Requested by $username[$authorID]#$discriminator[$authorID]]
$addTimestamp
$image[https://wttr.in/$replaceText[$message[]; ;%20]_0tqp_lang=en.png?0m]
$color[$random[11111;99999]]`
})
bot.Command({
    name: "/poll",
    code: `$onlyIf[$message[]!=;Provide some Text!]
$title[Poll Time!]
$addReactions[👍;👎]
$description[$message[]] 
$footer[👍 You like it - 👎 You don't like it by $username[$authorID]] 
$addTimestamp`
})
bot.Command({
    name: "/purge",
    aliases: ["/clear", "/delete"],
    code: `$botTyping
$clear[$noMentionMessage[1]]
$onlyPerms[managemessages;Your lacking the permission >Manage Messages! ❌]
$title[$noMentionMessage[1] Messages Cleared!]
$footer[Purged by $username[$authorID]#$discriminator[$authorID];$userAvatar[$authorID]]
$deleteIn[3s]
$deletecommand[1ms]
$onlyIf[$noMentionMessage[1]!=;Say the amount of messages to clear!]`
})
bot.Command({
    name: "/ping",
    code: `$botTyping
$title[Latency: $ping ms]
$color[$random[1;9999]]
$addTimestamp`
})
bot.Command({
    name: "/dm",
    code: `$onlyAdmin[Admin Only!]
$botTyping
$argsCheck[>1;Please mention someone and provide Text!]
$suppressErrors[Please mention someone and provide Text!]
$dm[$mentioned[1]]
$title[You have been dmed!]
$description[$noMentionMessage[]]
$footer[Sent by $username[$authorID]#$discriminator[$authorID];$userAvatar[$authorID]]
$deletecommand[1ms]`
})
bot.Command({
    name: "/cuddle",
    code: `$botTyping
$onlyIf[$message[1]!=; Please mention a user to cuddle!]
$onlyIf[$authorID!=$mentioned[1];I Wish u could cuddle yourself]
$description[<@$authorID> cuddles <@$mentioned[1]>!]
$image[https://purrbot.site/img/sfw/cuddle/gif/cuddle_0$randomText[01;02;03;04;05;06;07;08;09;10;11;12;13;14;15;16;17;18;19;20;21;22;23;24;25;26;27;28;29;30;31;32;33;34;35;36;37;38;39;40;41;42;43;44;45].gif]
$color[$random[1;9999]]
$deletecommand[1ms]`
})
bot.Command({
    name: "/userinfo",
    aliases: ["/user-info"],
    code: `$botTyping
$onlyIf[$message[1]!=Please mention a user!]
$color[$random[11111;99999]]
$description[__ ** 👤User info👤 ** __

** 📙Username: **
$username[$mentioned[1]] 

** 📘UserID: **
$userID[$username[$mentioned[1]]] 

** ✅User Badges: **
$getUserBadges[$mentioned[1]] 

** 🔎Tag: **
$discriminator[$mentioned[1]]

** 🤖Highest Role: **
<@&$highestRole[$mentioned[1]]>

** 🔮Account Creation Date**
$creationDate[$mentioned[1]]]
$addTimestamp`
})
bot.Command({
    name: "/serverinfo",
    aliases: ["/server-info"],
    code: `$color[$random[11111;99999]]
$title[Server Info]
$description[**SERVER**
👑 | Server owner: <@$ownerID> 

🛠 | Server Name: $serverName[$guildID] 

🗺 | Region: $region

🆔 | ID: $guildID

🛡 | Level of protection: $serverVerificationLvl 

 MEMBER 

🗞 | All Members: $membersCount[]

📛 | Online: $membersCount[online]

📟 | Offline: $membersCount[offline]

🎃 | DoNotDisturb: $membersCount[dnd]

👒 | Idle: $membersCount[idle]

🔭 | Humans: $membersCount[human]

🤖 | Bots: $membersCount[bot]

 OTHER 

🔰 | Total channels: $channelCount

📌 | Category count: $categoryCount

🙋 | Invite to the server: $getServerInvite[$guildID]

📥 | Server boost count: $serverBoostCount

📮 | Total Emoji: $emoteCount]
$image[$serverIcon]`
})
bot.Command({
    name: "/beg",
    code: `$color[$random[11111;99999]] 
$addTimestamp 
$setVar[money;$sum[$getVar[money;$authorID];$random[10;100]];$authorID]
$description[You begged $randomText[on the streets;in the city;at a house;at a park] and $randomText[Jack Ma;Cool Stickman;John Cena;Alan walker;an idiot] gave you $$random[10;100]] 
$footer[Requested by $username[$authorID]] 
$globalCooldown[10m;you gotta wait for 10 minutes before each begging.]`
})
bot.Command({
    name: "/tickle",
    code: `$botTyping
$onlyIf[$message[1]!=; Please mention a user to tickle!]
$onlyIf[$authorID!=$mentioned[1];I Wish u could tickle yourself]
$color[$random[1;99999]]
$deletecommand[1ms]
$description[<@$authorID> tickles <@$mentioned[1]> Stop! He will die! LOL]
$image[https://purrbot.site/img/sfw/tickle/gif/tickle_0$randomText[01;02;03;04;05;06;07;08;09;10;11;12;13;14;15;16;17;18;19].gif]`
})
bot.Command({
    name: "/nick",
    aliases: ["/change-nick", "/set-nick", "/setnick", "/changenick"],
    code: `$onlyIf[$message[1]!=;Please mention a user!]
$onlyPerms[changenickname;❌ | Your lacking the following perm >> Change Nickname]
$setNickname[$mentioned[1];$noMentionMessage[]]
$color[$random[11111;99999]]
$title[Success!]
$description[Successfully changed <@$mentioned[1]> nickname to $noMentionMessage[]]
$suppressErrors[Correct usage: /nick (user) (new nick)]`
})
bot.Command({
    name: "/poke",
    code: `$botTyping
$onlyIf[$message[1]!=;Please mention a user to poke!]
$onlyIf[$authorID!=$mentioned[1];I Wish u could poke yourself]
$color[$random[11111;99999]]
$deletecommand[1ms]
$description[<@$authorID> Pokes <@$mentioned[1]>! owo]
$image[https://purrbot.site/img/sfw/poke/gif/poke_0$randomText[01;02;03;04;05;06;07;08;09;10;11;12;13;14;15;16;17;18;19;20;21;22;23;24].gif]`
})
bot.Command({
    name: "/clyde",
    code: `$onlyIf[$message[]!=;Type something!]
$color[$random[11111;99999]]
$image[https://ctk-api.herokuapp.com/clyde/$replaceText[$message[]; ;%20]]`
})
bot.Command({
    name: "/neko",
    code: `$botTyping
$title[Heres a neko! meow!]
$image[https://purrbot.site/img/sfw/neko/gif/neko_0$randomText[01;02;03;04;05;06;07;08;09;10;11;12;13;14;15;16;17;18;19;20;21;22;23;24;25;26;27;28;29;30;31;32;33;34;35;36;37;38;39;40;41;42;43;44;45;46;47;48;49;50].gif]
$color[$random[11111;99999]]
$deletecommand[1ms]`
})
bot.Command({
    name: "/topic",
    code: `> $randomText[What was the last funny video you saw?;Tell Me about your favourite Anime;What do you do to get rid of stress?;What is something you are obsessed with?;What three words best describe you?;What would be your perfect weekend?;What’s your favorite Anime Op? Why?;What’s the most useful thing you own?;What’s your favorite way to waste time?;What do you think of Hentai?;Do you have any pets? What are their names?;Where did you go last weekend? / What did you do last weekend?;What is something popular now that annoys you?;When was the last time you worked incredibly hard?;Are you very active, or do you prefer to just relax in your free time?;Who is your oldest friend? Where did you meet them?;What kind of parents did you have growing up?;Were your parents strict and crazy or were you free to do what you wanted?;Do you have any siblings?;Did you ever have any family pets?;Do you have anybody eccentric in your family?;Do you have anyone famous or important people in your family past or present?;What did your parents do for work?;Have you ever been in a fight with anyone in your family?;What’s your favorite family story?;Do you have any fun family traditions?;Do you have any secret family recipes?;What’s the most trouble you’ve ever been in with your mom or dad?;Do you enjoy your job?;How long have you worked there?;Have you ever quit a job?;What would be your dream position?;Do you find your job easy?;Do you get along with the people you work for/with?;What century would you choose to live in and why?;What do you think the most believable conspiracy is?;What's your view on the JFK assassination or the moon landings?]`
})
bot.Command({
    name: "/setsuggest",
    aliases: ["/set-suggest"],
    code: `$botTyping
$onlyAdmin[❌ Admin Only!]
$onlyIf[$message[]!=;Please give a channel ID]
$setServerVar[Suggest;$mentionedChannels[1]]
$color[$random[11111;99999]]
$description[Suggestions will now be sent to <#$mentionedChannels[1]>]
$deletecommand[1ms]
$addTimestamp`
})
bot.Command({
    name: "/suggest",
    code: `$addCmdReactions[✅]
$footer[Suggestion By $username[$authorID]]
$description[$message[]]
$title[New Suggestion!]
$addReactions[✅;❌]
$color[$random[11111;99999]]
$useChannel[$getServerVar[Suggest]]
$addTimestamp
$botTyping
$suppressErrors[❌ | **You havent set a suggestion channel yet! Please do /botconfig**]
$onlyIf[$message[1]!=;Please enter your suggestion!]`
})
bot.Command({
    name: "/setmodlogs",
    aliases: ["/set-mod-logs", "/set-mod-log", "/setmodlog"],
    code: `$botTyping
$onlyAdmin[❌ Admin Only!]
$onlyIf[$message!=;Please give a channel ID]
$setServerVar[ModLogs;$mentionedChannels[1]]
$color[$random[11111;99999]]
$description[Moderation Logs will now be sent to <#$mentionedChannels[1]>]
$deletecommand[1ms]
$addTimestamp`
})
bot.Command({
    name: "/ban",
    code: `$onlyIf[$message[1]!=;]
$title[Banned]
$color[$random[11111;99999]]
$description[
**Banned By:**
<@$authorID>
**Banned:**
$username[$mentioned[1]]#$discriminator[$mentioned[1]]

Reason:$noMentionMessage[]]
$onlyPerms[ban;Missing Ban Member Perm]`
})
bot.Command({
    name: "/ban",
    code: `$onlyIf[$message[1]!=; Please mention who to ban!]
$ban[$mentioned[1]]
$useChannel[$getServerVar[ModLogs]]
$title[Banned]
$color[$random[11111;99999]]
$description[
**Banned By:**
<@$authorID>
**Banned:**
$username[$mentioned[1]]

Reason:$noMentionMessage[]]
$deletecommand[100ms]
$onlyPerms[ban;Missing Ban Member Perm]`
})
bot.Command({
    name: "/unbanid",
    aliases: ["/unban", "/pardon"],
    code: `$botTyping
$onlyIf[$message[1]!=;Please put the User ID of the person to unban]
$onlyPerms[ban;]
$title[User Unbanned!]
$description[User Unbanned: $username[$noMentionMessage[1]]
Moderator: <@$authorID>]
$deletecommand[1ms]`
})
bot.Command({
    name: "/unbanid",
    aliases: ["/unban", "/pardon"],
    code: `$onlyIf[$message[1]!=;Please put the User ID of the person to unban]
$unban[$noMentionMessage[1]]
$onlyPerms[ban; **Missing Bans Permissions**]
$useChannel[$getServerVar[ModLogs]]
$title[User Unbanned!]
$description[User Unbanned: $username[$noMentionMessage[1]#$discriminator[$noMentionMessage[1]]]

Moderator: <@$authorID>]
$deletecommand[1ms]
$botTyping
$suppressErrors[Error!]`
})
bot.Command({
    name: "/warn",
    code: `$suppressErrors[❌ | You have to mention a user to warn with a reason!]
$onlyPerms[managemessages; Missing permission {perms}]
$title[Warned!]
$description[Warned: <@$mentioned[1]>
Warned By: <@$authorID>
Reason: $noMentionMessage[]]
$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];1];$mentioned[1]]
$deletecommand[1ms]`
})
bot.Command({
    name: "/setwarn",
    aliases: ["/setwarns"],
    code: `$onlyAdmin[Admin Only]
$setUserVar[warn;$noMentionMessage[];$mentioned[1]]
$title[***Reset Warnings***]
$description[Successfully Resetted <@$mentioned[1]> Warnings To $noMentionMessage[]]
$deletecommand[1ms]`
})
bot.Command({
    name: "/checkwarn",
    aliases: ["/checkwarns", "/warnings"],
    code: `$botTyping
$onlyIf[$message[1]!=;Please mention somebody to checkwarns.]
$title[📜 - User Warnings]
$color[$random[11111;99999]]
$description[<@$mentioned[1]> Has 
$getUserVar[warn;$mentioned[1]] Warnings]
$addTimestamp`
})
bot.Command({
    name: "/role",
    aliases: ["/addrole", "/add-role", "/giverole", "/give-role"],
    code: `$onlyPerms[manageroles; ❌ Your missing the permission **Manage Roles**]
$onlyIf[$message[1]!=;❌ Please mention the user your trying to give role to and enter the name of the role your trying to give!]
$giveRole[$mentioned[1];$roleID[$noMentionMessage[]]]
$description[Successfully Given $noMentionMessage[] role to <@$mentioned[1]>]
$deletecommand[1ms]`
})
bot.Command({
    name: "/takerole",
    aliases: ["/take-role", "/removerole", "/remove-role"],
    code: `$botTyping
$onlyPerms[manageroles; ❌ Your missing the permission > Manage Roles]
$onlyIf[$message[1]!=;❌ Please mention the user your trying to take role from and enter the name of the role your trying to take!]
$takeRole[$mentioned[1];$roleID[$noMentionMessage[]]]
$description[Successfully Taken $noMentionMessage[] role from <@$mentioned[1]>]
$deletecommand[1ms]`
})
bot.Command({
    name: "/addmoney",
    code: `$onlyForUsers[427109850368049162;Only RileCraft can use it.]
Successfully set $noMentionMessage[] dollars to $username[$mentioned[1]].
$setVar[money;$sum[$getVar[money;$authorID];$noMentionMessage[]];$mentioned[1]]
$deletecommand[1ms]`
})
bot.Command({
    name: "/createchannel",
    aliases: ["/create-channel", "/addchannel", "/add-channel"],
    code: `$botTyping
$onlyIf[$message[]!=;Please put a channel name and say the type of channel(voice or text) followed by category ID of where the channel is to be created! ]
$onlyPerms[managechannels;❌ Your lacking the permission > Manage Channels]
$createChannel[$message[1];$message[2];$message[3]]
$title[Successfully Created! ✅]
$suppressErrors[Please put a channel name and say the type of channel(voice or text) followed by category ID of where the channel is to be created!]`
})
bot.Command({
    name: "/deletechannel",
    aliases: ["/delete-channel", "/removechannel", "/remove-channel"],
    code: `$botTyping
$onlyPerms[managechannels;❌ Your lacking the permission > Manage Channels]
$onlyIf[$message!=;Please mention the channels to delete!]
$suppressErrors[Please mention the channels to delete!]
$deleteChannels[$mentionedChannels[1]]
$title[Successfully Deleted! ✅]`
})
bot.Command({
    name: "/kick",
    code: `$botTyping
$onlyPerms[kick; ❌ You lack the following perms > Kick Members]
$onlyIf[$message[1]!=;Mention The User You Wanna Kick And Provide A Reason.]
$kick[$mentioned[1]]
$useChannel[$getServerVar[ModLogs]]
$color[$random[1;99999]]
$title[Someone has been Kicked!]
$description[Person Kicked: $username[$mentioned[1]]

Moderator: $username[$authorID]

reason: $noMentionMessage[]]
$deletecommand[1ms]`
})
bot.Command({
    name: "/kick",
    code: `$botTyping
$onlyPerms[kick;]
$onlyIf[$message[1]!=;]
$color[$random[11111;99999]]
$title[Someone has been Kicked!]
$description[Person Kicked: $username[$mentioned[1]]

Moderator: $username[$authorID]

reason: $noMentionMessage[]]
$deletecommand[1ms]`
})
bot.Command({
    name: "/mute",
    code: `$onlyPerms[manageroles; ❌ Your missing the permission > Manage Roles]
$onlyIf[$message[1]!=;❌ Please mention the user your trying to mute!]
$title[Someone has been Muted!]

$description[Person Muted: <@$mentioned[1]>

Moderator: $username[$authorID]

reason: $noMentionMessage[]]
$giveRole[$mentioned[1];$roleID[$getServerVar[mute]]]
$suppressErrors[Please do /setmutedrole (Role Name) to set a role which will be given to muted people!]`
})
bot.Command({
    name: "/unmute",
    code: `$onlyPerms[manageroles; ❌ Your missing the permission > Manage Roles]
$onlyIf[$message[1]!=;❌ Please mention the user your trying to unmute!]
$title[Someone has been Unmuted!]
$description[Person Unmuted: <@$mentioned[1]>

Moderator: $username[$authorID]

reason: $noMentionMessage[]]
$takeRole[$mentioned[1];$roleID[$getServerVar[mute]]]
$suppressErrors[Please do /setmutedrole (Role Name) to set a role which will be given to muted people!]`
})
bot.Command({
    name: "/setmutedrole",
    code: `$onlyAdmin[❌ Admin Only!]
$onlyIf[$message[]!=;Please give a Role name which will be given to the muted!]
$setServerVar[mute;$message[]]
$color[$random[11111;99999]]
$title[Successfully Changed Settings✅]
$description[Default Muted Role Is Now $message[]]`
})
bot.Command({
    name: "/inv",
    aliases: ["/inventory"],
    code: `$color[$random[11111;99999]]
$title[Your Inventory]
$description[🍻**Alcohol**🍻
**Amount:** $getVar[alcohol;$authorID]
**ID**  alcohol
**Use:** /use alcohol

🐟**Fishing Pole**🐟
**Amount:** $getVar[pole;$authorID]
**ID**  pole
**Use:** /fish

🍜**Noddles**🍜
**Amount:** $getVar[noodle;$authorID]
**ID**  noodle
**Use:** /use noodle

🍕**Cheesy Pizza**🍕
**Amount:** $getVar[pizza;$authorID]
**ID**  pizza
**Use:** /use pizza

🍫**Chocolate**🍫
**Amount:** $getVar[chocolate;$authorID]
**ID**  chocolate
**Use:** /use chocolate

🐠**Fish**🐠
**Amount:** $getVar[fish;$authorID]
**ID**  fish
**Use:** /use fish]
$footer[Page 1 of 1]`
})
bot.Command({
    name: "/crime",
    code: `$setVar[money;$sum[$getVar[money;$authorID];$random[400;800]];$authorID]
$footer[You can commit crimes every 12h so make sure to check back in, $username[$authorID]]
$description[$randomText[You commit tax fraud!;You kidnapped a child!;You blackmailed the United Nations;You leaked nuclear launch codes!] and earned $$random[400;800]💵]
$title[PAYOUT]
$color[$random[11111;99999]]
$globalCooldown[12h;You are tired and decide you will commit crimes again every 12hrs]`
})
bot.Command({
    name: "/shop",
    code: `$color[$random[11111;99999]]
$title[Welcome to our shop!]
$description[🍻**Alcohol**
**Price:** $1k
**Code:** /buy alcohol

🐟**Fishing Pole**🐟
**Price:** $500
**Code:** /buy pole

🍜**Tasty Noodles**🍜
**Price:** $200
**Code:** /buy noodle

🍕**Cheesy Pizza**🍕
**Price:** $120
**Code:** /buy pizza

🍫**Tasty Chocolate**🍫
**Price:** $700
**Code:** /buy chocolate]
$footer[Page 1 of 1]`
})
bot.Command({
    name: "/dep",
    aliases: ["deposit"],
    code: `$color[$random[11111;99999]]
$title[Successfully Deposited $$message[1]]
$setVar[bank;$sum[$getVar[bank;$authorID];$message[1]];$authorID]
$setVar[money;$sub[$getVar[money;$authorID];$message[1]];$authorID]
$onlyIf[$getVar[money;$authorID]>=$message[1];You don't have enough money to deposit]
$onlyIf[$message[1]!=;Provide a amount to deposit!]`
})
bot.Command({
    name: "/reset",
    code: `👍
$setUserVar[$message[1];0;$authorID]
$onlyForUsers[427109850368049162;No]`
})
bot.Command({
    name: "/with",
    aliases: ["withdraw"],
    code: `$title[Successfully Withdrawed $$message[1]]
$color[$random[11111;99999]]
$setVar[money;$sum[$getVar[money;$authorID];$message[1]];$authorID]
$setVar[bank;$sub[$getVar[bank;$authorID];$message[1]];$authorID]
$onlyIf[$getVar[bank;$authorID]>=$message[1];You don't have enough money to withdraw!]
$onlyIf[$message[1]!=;You need to take a price to withdraw!]`
})
bot.Command({
    name: "/buy",
    code: `$setVar[alcohol;$sum[$getVar[alcohol;$authorID];1];$authorID]
$setVar[money;$sub[$getVar[money;$authorID];1000];$authorID]
$description[You have successfully bought **1** Alcohol! 🍻]
$color[$random[11111;99999]]
$onlyIf[$getVar[money;$authorID]>=1000; **🚫 | You need $1000 to buy this item!**]
$onlyIf[$message[1]==alcohol;]`
})
bot.Command({
    name: "/buy",
    code: `$setVar[pole;$sum[$getVar[pole;$authorID];1];$authorID]
$setVar[money;$sub[$getVar[money;$authorID];500];$authorID]
$description[You have successfully bought **1** Fishing Pole! 🐟]
$color[$random[11111;99999]]
$onlyIf[$getVar[money;$authorID]>=500; **🚫 | You need $500 to buy this item!**]
$onlyIf[$message[1]==pole;]`
})
bot.Command({
    name: "/buy",
    code: `$setVar[noodle;$sum[$getVar[noodle;$authorID];1];$authorID]
$setVar[money;$sub[$getVar[money;$authorID];200];$authorID]
$description[You have successfully bought **1** Noodles! 🍜]
$color[$random[11111;99999]]
$onlyIf[$getVar[money;$authorID]>=200; **🚫 | You need $200 to buy this item!**]
$onlyIf[$message[1]==noodle;]`
})
bot.Command({
    name: "/buy",
    code: `$setVar[pizza;$sum[$getVar[pizza;$authorID];1];$authorID]
$setVar[money;$sub[$getVar[money;$authorID];120];$authorID]
$description[You have successfully bought **1** Cheesy Pizza! 🍕]
$color[$random[11111;99999]]
$onlyIf[$getVar[money;$authorID]>=120; **🚫 | You need $120 to buy this item!**]
$onlyIf[$message[1]==pizza;]`
})
bot.Command({
    name: "/buy",
    code: `$setVar[chocolate;$sum[$getVar[chocolate;$authorID];1];$authorID]
$setVar[money;$sub[$getVar[money;$authorID];700];$authorID]
$description[You have successfully bought **1** Chocolate! 🍫]
$color[$random[11111;99999]]
$onlyIf[$getVar[money;$authorID]>=700; **🚫 | You need $700 to buy this item!**]
$onlyIf[$message[1]==chocolate;]`
})
bot.Command({
    name: "/pay",
    code: `$suppressErrors[Correct usage: /pay (user) (amount)]
$addTimestamp
$description[<@$authorID> has successfully paid $$message[2] to <@$mentioned[1]> 👍]
$setVar[money;$sub[$getVar[money;$authorID];$message[2]];$authorID]
$setVar[money;$sum[$getVar[money;$mentioned[1]];$message[2]];$mentioned[1]]
$onlyIf[$getVar[money;$authorID]>=$message[2];You Do not have enough money! ❌]
$onlyIf[$message[2]>0;Select a value bigger than 0]
$onlyIf[$message[1]!=;Please mention a user to pay and mention the amount of money to pay!]
$botTyping`
})
bot.Command({
    name: "/gift",
    code: `$suppressErrors[Please use correct arguments! 
Example: /gift (@user) (ID of item) (amount)
**To Get ID Use /inv**]
$description[<@$authorID> successfully gave **$noMentionMessage[2]** $noMentionMessage[1] to <@$mentioned[1]>]
$title[Success!✅]
$color[$random[1;99999]]
$setVar[$noMentionMessage[1];$sub[$getVar[$noMentionMessage[1];$authorID];$noMentionMessage[2]];$authorID]
$setVar[$noMentionMessage[1];$sum[$getVar[$noMentionMessage[1];$mentioned[1]];$noMentionMessage[2]];$mentioned[1]]
$onlyIf[$getVar[$noMentionMessage[1];$authorID]>=$noMentionMessage[2];You dont have enough $noMentionMessage[1]!]`
})
bot.Command({
    name: "/fish",
    code: `$description[You went for fishing and got a $randomText[common;uncommon;rare;epic] fish! You also earned $$random[10;200]]
$title[It was a nice day for fishing!]
$color[$random[11111;99999]]
$setVar[fish;$sum[$getVar[fish;$authorID];1];$authorID]
$setVar[money;$sum[$getVar[money;$authorID];$random[10;200]];$authorID]
$globalCooldown[30m;Please wait 30m before u can go fishing again!]
$onlyIf[$getVar[pole;$authorID]>0;You need a fishing pole to do this command! Visit the shop by /shop]`
})
bot.Command({
    name: "/math",
    code: `$footer[Requested by $username[];$authorAvatar]
$description[ **No Need to add signs**
/add = Add the amount of numbers you want! 
/sub = Subtract the amount of numbers you want!
/multi = Multiply the amount of numbers you want!
/divide = Divide the amount of numbers you want!]`
})
bot.Command({
    name: "/add",
   aliases: ["/addition"],
    code: `$footer[Author: $username[];$authorAvatar]
$description[**Numbers**
$replaceText[$message[]; ;,]

**Answer**
$sum[$message[1];$message[2]]]
$title[Maths Time!]
$color[$random[11111;99999]]
$suppressErrors[Please choose 2 Valid Numbers!]`
})
bot.Command({
    name: "/sub",
   aliases: ["/subtract", "/subtraction"],
    code: `$footer[Author: $username[];$authorAvatar]

$description[**Numbers**
$replaceText[$message[]; ;,]

**Answer**
$sub[$message[1];$message[2]]]
$title[Maths Time!]
$color[$random[11111;99999]]
$suppressErrors[Please choose 2 Valid Numbers!]`
})
bot.Command({
    name: "/multi",
   aliases: ["/multiply", "/multiplication"],
    code: `$footer[Author: $username[];$authorAvatar]
$description[**Numbers**
$replaceText[$message[]; ;,]

**Answer**
$multi[$message[1];$message[2]]]
$title[Maths Time!]
$color[$random[11111;99999]]
$suppressErrors[Please choose 2 Valid Numbers!]`
})
bot.Command({
    name: "/divide",
   aliases: ["/division"],
    code: `$footer[Author: $username[];$authorAvatar]
$description[**Numbers**
$replaceText[$message[]; ;,]

**Answer**
$divide[$message[1];$message[2]]]
$title[Maths Time!]
$color[$random[11111;99999]]
$suppressErrors[Please choose 2 Valid Numbers!]`
})
bot.Command({
    name: "/tolowercase",
    aliases: ["/to-lowercase", "/lowercase"],
    code: `$footer[Command by $username[]#$discriminator[$authorID];$userAvatar[$authorID]]
$addTimestamp
$description[$toLowercase[$message[]]]
$title[Successfully Changed To Lowercase✅]
$color[$random[11111;99999]]
$onlyIf[$message[1]!=;**🚫 | Provide a text to convert to lowercase!**]
$botTyping`
})
bot.Command({
    name: "/touppercase",
    aliases: ["/to-uppercase", "/uppercase"],
    code: `$footer[Command by $username[]#$discriminator[$authorID];$userAvatar[$authorID]]
$addTimestamp
$description[$toUppercase[$message[]]]
$title[Successfully Changed To Uppercase✅]
$color[$random[11111;99999]]
$onlyIf[$message[1]!=;**🚫 | Provide a text to convert to uppercase!**]
$botTyping`
})
bot.Command({
    name: "<@557212167191920680>",
    code: `$footer[Command by $username[]#$discriminator[$authorID];$userAvatar[$authorID]]
$description[My prefix is /
Do /help to see what i can! ;)]
$title[Ping Pong!]
$color[$random[11111;99999]]
$addTimestamp
$botTyping`
})
bot.Command({
    name: "/remind",
    code: `$title[Success!✅]
$color[$random[11111;99999]]
$onlyIf[$message[1]!=;Please provide some Time and Text!]`
})
bot.Command({
    name: "/banid",
    code: `$onlyIf[$message[1]!=;Please mention who to ban!]
$ban[$message[1]]
$title[Banned]
$color[$random[11111;99999]]
$description[
**Banned By:**
<@$authorID>

**Banned:**
$username[$message[1]]

Reason: $messageSlice[1]]
$deletecommand[100ms]
$onlyPerms[ban;Missing Ban Member Perm]`
})
bot.Command({
    name: "/tableflip",
    aliases: ["/table-flip"],
    code: `$image[https://vacefron.nl/api/tableflip?user=$authorAvatar?size=2048]
$description[<@$authorID> flipped the table!]
$color[$random[111111;999999]]`
})
bot.Command({
    name: "/creatememe",
    aliases: ["/create-make", "/makememe", "/make-meme"],
    code: `$image[https://api.memegen.link/images/$message[1]/$replaceText[$messageSlice[1]; ;_]]
$footer[Requested by $username[]]
$title[$message[1] Meme]
$color[$random[11111;99999]]
$addTimestamp
$botTyping
$onlyIfMessageContains[sohappy;tenguy;afraid;apcr;older;aag;atis;alyt;biw;stew;blb;bihw;kermit;bd;ch;cbg;wonka;cb;gandalf;keanu;cryingfloor;dsm;disastergirl;live;ants;doge;trump;drake;ermg;facepalm;feelsgood;firsttry;fwp;fa;fbf;fmr;fry;ggg;grumpycat;harold;hipster;icanhas;crazypills]
$onlyIf[$message[]!=; Correct Usage: /creatememe type(sohappy,tenguy,afraid,apcr,older,aag,atis,alyt,biw,stew,blb,bihw,kermit,bd,ch,cbg,wonka,cb,gandalf,keanu,cryingfloor,dsm,disastergirl,live,ants,doge,trump,drake,ermg,facepalm,feelsgood,firsttry,fwp,fa,fbf,fmr,fry,ggg,grumpycat,harold,hipster,icanhas,crazypills) text1/text2]`
})
bot.Command({
    name: "/rob",
    aliases: ["/steal"],
    code: `$setVar[money;$sum[$getVar[money;$authorID];$random[1;$getVar[money;$message[1]]]];$authorID]
$setVar[money;$sub[$getVar[money;$message[1]];$random[1;$getVar[money;$message[1]]]];$message[1]]
$title[Successfully robbed $$random[1;$getVar[money;$message[1]]]]
$color[$random[1;99999]]
$globalCooldown[1d;Please wait 1day between each robbery]
$onlyIf[$getVar[money;$message[1]]>100;This user has lower than 100. Please dont rob the poor]
$onlyIf[$isNumber[$message[1]]==true;Please provide the ID of the person to rob!]
$suppressErrors[Please provide the ID of the person to rob!]`
})
bot.SpaceCommand({
    name: "levelling",
    code: `$setUserVar[talk;$sum[$getUserVar[talk];$random[5;25]]]
$cooldown[30s;]`
})
bot.SpaceCommand({
    name: "level",
    code: `$setUserVar[level;$sum[$getUserVar[level];1]]
Congratulations <@$authorID>, you have leveled up! You are now level $sum[$getUserVar[level];1]!
$setUserVar[req;$sum[$getUserVar[req];$random[400;600]]]
$onlyIf[$getUserVar[talk]>$getUserVar[req];]`
})
bot.Command({
    name: "/rank",
    aliases: ["/level"],
    code: `$description[]
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;_]&avatar=$userAvatar[$mentioned[1;yes]]&size=1023&level=$getUserVar[level;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[talk;$mentioned[1;yes]]&nextlevelxp=$getUserVar[req;$mentioned[1;yes]]&previouslevelxp=$sub[$getUserVar[talk;$mentioned[1;yes]];120]]`
})
bot.Command({
    name: "/lb",
    aliases: ["/leaderboard"],
    code: `$footer[Requested by $username[];$authorAvatar]
$description[$userLeaderboard[level;asc]]
$title[Rank Leaderboard]
$color[$random[11111;99999]]
$onlyIf[$message[1]==rank;]`
})
bot.Command({
    name: "/lb",
    aliases: ["/leaderboard"],
    code: `$footer[Requested by $username[];$userAvatar[$authorID]]
$description[/lb bank = Bank Leaderboard
/lb cash = Wallet Leaderboard
/lb rank = Levels Leaderboard]
$title[Leaderboard Commands]
$color[$random[11111;99999]]
$onlyIf[$message[1]==;]`
})
bot.MessageDeleteCommand({
    name: "$channelID[]",
    code: `$setChannelVar[snipe1;$authorID]
$setChannelVar[snipe;$message[]]`
})
bot.onMessageDelete()

bot.Command({
    name: "/snipe",
    code: `$footer[#$channelName[$channelID[]]]
$addTimestamp
$description[$getChannelVar[snipe;$channelID[]]]
$title[$username[$getChannelVar[snipe1;$channelID[]]]]
$thumbnail[$userAvatar[$getChannelVar[snipe1;$channelID[]]]]
$color[$random[11111;99999]]
$onlyIf[$getChannelVar[snipe]!=;Theres nothing to snipe!]`
})
bot.Command({
    name: "/afk",
    code: `$setUserVar[nm;1]
$setUserVar[msg;$messageSlice[1]]
$title[Your AFK Has Been Successfully Set!]
$color[$random[11111;99999]]
$onlyIf[$messageSlice[1]!=;Please type afk message]
$onlyIf[$getUserVar[nm]==0;You already enabled afk, to disable it type /afk off]
$onlyIf[$message[1]==on;]`
})
bot.Command({
    name: "/afk",
    code: `$addTimestamp
$setUserVar[nm;0]
$title[You've Successfully Disabled AFK✅]
$color[$random[11111;99999]]
$onlyIf[$getUserVar[nm]==1;You dont have afk enabled! Use /afk on]
$onlyIf[$message[1]==off;]`
})
bot.JoinedCommand({
name: "$getServerVar[welcome]",
code: `<@$authorID> welcome to $serverName[$guildID]!
I hope you enjoy your stay!
`
})
bot.onJoined()
bot.LeaveCommand({
name: "$getServerVar[welcome]",
code: `authorID> has left the server :(
`
})
bot.onLeave()
bot.Command({
    name: "/setwelcome",
    code: `$botTyping
$onlyAdmin[❌ Admin Only!]
$onlyIf[$message!=;Please mention a channel]
$setServerVar[welcome;$mentionedChannels[1]]
$color[$random[11111;99999]]
$description[Welcome Messages will now be sent to <#$mentionedChannels[1]>]
$deletecommand[1ms]
$addTimestamp`
})
bot.Command({
name: "/use",
code: `$setVar[alcohol;$sub[$getVar[alcohol;$authorID];1];$authorID]
$title[Ho! You just drunk that whole jar! 🍻🍻]
$color[$random[11111;99999]]
$onlyIf[$getVar[alcohol;$authorID]>0;You dont own this yet?]
$onlyIf[$message[1]==alcohol;]`
})
bot.Command({
name: "/use",
code: `$setVar[pizza;$sub[$getVar[pizza;$authorID];1];$authorID]
$title[Hey! You just ate that entire box of pizza alone 🍕🍕]
$color[$random[11111;99999]]
$onlyIf[$getVar[pizza;$authorID]>0;You dont own this yet?]
$onlyIf[$message[1]==pizza;]`
})
bot.Command({
name: "/use",
code: `$setVar[noodle;$sub[$getVar[noodle;$authorID];1];$authorID]
$title[Damn! You just ate that entire bowl 🍜🍜]
$color[$random[11111;99999]]
$onlyIf[$getVar[noodle;$authorID]>0;You dont own this yet?]
$onlyIf[$message[1]==noodle;]`
})
bot.Command({
name: "/use",
code: `$setVar[chocolate;$sub[$getVar[chocolate;$authorID];1];$authorID]
$title[Yum Yum Chocolate!🍫🍫]
$color[$random[11111;99999]]
$onlyIf[$getVar[chocolate;$authorID]>0;You dont own this yet?]
$onlyIf[$message[1]==chocolate;]`
})
bot.Command({
name: "/use",
code: `$setVar[fish;$sub[$getVar[fish;$authorID];1];$authorID]
$title[Damn! That was a nice and tasty fish!🐟]
$color[$random[11111;99999]]
$onlyIf[$getVar[fish;$authorID]>0;You dont own this yet?]
$onlyIf[$message[1]==fish;]`
})
bot.Command({
    name: "/iq",
    aliases: ["/checkiq", "/check-iq"],
    code: `$footer[Request By $username[$mentioned[1;yes]]]
$description[
**Username**:
$username[$mentioned[1;yes]]
**IQ Level:**
$random[30;400] IQ! ]
$title[$username[$mentioned[1;yes]] Smrt]
$image[https://api.no-api-key.com/api/v2/smrt?image=$userAvatar[$mentioned[1;yes]]]
$color[$random[100000;999999]]
$addTimestamp`
})
bot.Command({
    name: "/profile",
    code: `$thumbnail[$userAvatar[$mentioned[1;yes]]]
$description[**🔪Name🔪**
$username[$mentioned[1;yes]]

🎉🎊**Birthday**🎉🎊
$getVar[birthday;$mentioned[1;yes]]

🐱**Pets Name**🐱
$getVar[petname;$mentioned[1;yes]]

👒**Favourite Color**👒
$getVar[favcolor;$mentioned[1;yes]]

**Server Level**
$getUserVar[level;$mentioned[1;yes]]]`
})
bot.Command({
    name: "/setbirth",
    code: `$setVar[birthday;$noMentionMessage[];$authorID]
$addTimestamp
$description[Successfully Set your birthday to $noMentionMessage[]]
$title[🎉🎊Birthdays!🎉🎊]`
})
bot.Command({
    name: "/setpet",
    code: `$setVar[petname;$noMentionMessage[];$authorID]
$addTimestamp
$description[Successfully Set your Pet name to $noMentionMessage[]]
$title[🐱🐩Pets Yay!🐱🐶]`
})
bot.Command({
    name: "/setcolor",
    code: `$setVar[favcolor;$noMentionMessage[];$authorID]
$addTimestamp
$description[Successfully Set your Favourite Colour to $noMentionMessage[]]
$title[🎌🎌Colours!🎌🎌]`
})