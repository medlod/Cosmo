const Dlang = require('discordbot-script')

const discordScript = require("discordbot-script")

const bot = new discordScript({
  token: "NTU3MjEyMTY3MTkxOTIwNjgw.XI-uRQ.r_WX4McFelm8YhVfJFTxGgilxF0",
  prefix: [""]
})

bot.MessageEvent()
bot.MessageEditEvent()

bot.ExecutableCommand({
name: "1",
code: `$footer[Cosmo]
$addTimestamp
$description[<@$authorID>, You dont have the permission **Manage Channels** to run this command!]
$title[Cosmo | Error]
$color[$random[11111;99999]]`})
bot.ExecutableCommand({
name: "2",
code: `$footer[Cosmo]
$addTimestamp
$description[<@$authorID>, You have not provided any suggestion! Please provide a suggestion!]
$title[Cosmo | Error]
$color[$random[11111;99999]]`})
bot.ExecutableCommand({
name: "3",
code: `$footer[Cosmo]
$addTimestamp
$description[<@$authorID>, There is no suggestion channel setuped! Please tell your admins to do so using /setsuggest]
$title[Cosmo | Error]
$color[$random[11111;99999]]`})
bot.ExecutableCommand({
name: "4",
code: `$footer[Cosmo]
$addTimestamp
$description[<@$authorID>, There is no ModLogs channels configured yet! Please do so using /setmodlogs]
$title[Cosmo | Error]
$color[$random[11111;99999]]`})
bot.ExecutableCommand({
name: "5",
code: `$footer[Cosmo]
$addTimestamp
$description[<@$authorID>, That user is higher than you! You cant use the following command!]
$title[Cosmo | Error]
$color[$random[11111;99999]]`})
bot.ExecutableCommand({
name: "6",
code: `$footer[Cosmo]
$addTimestamp
$description[<@$authorID>, You havent mentioned anyone! Please mention a user!]
$title[Cosmo | Error]
$color[$random[11111;99999]]`})
bot.ExecutableCommand({
name: "7",
code: `$footer[Cosmo]
$addTimestamp
$description[<@$authorID>, You dont have the required permissions! You need the permission **Ban Members**!]
$title[Cosmo | Error]
$color[$random[11111;99999]]`})

bot.Command({
  name: "/help",
  code: `
$color[$random[1;99999]]
$title[Help Commands]
$description[🔰**Basic Commands**🔰
__**/basic**__

🔪**Fun Commands**🔪
**__/fun__**

💳**Economy Commands**💳
__**/economy**__

🎃**Staff Commands**🎃
**__/staff__**

📛**Bot Config Commands**📛
**__/config__**

🎵__**Music Commands**__🎵
__**/music**__
**Join our Support Server!**
{hyper:Click Here:https://discord.gg/wU9wXdJDsVt}]
  `
})

bot.Command({
name: "/basic",
code:`$addTimestamp
$description[〣covid〣 〣rank〣 〣leaderboard〣  〣github〣 〣‎ticket open〣 〣ticket close〣 〣remind〣 〣profile〣 〣vote〣 〣hex〣 〣rgb〣 〣count〣 〣poll〣 〣suggest〣 〣binary〣 〣base64〣 〣userinfo〣 〣checkwarn〣 〣ping〣 〣infoinvite〣 〣serverinfo〣 〣botinfo〣 〣afk on〣 〣afk off〣 〣support〣
**Join our Support Server!**
{hyper:Click Here:https://discord.gg/wU9wXdJDsV}]
$title[Basic Commands]
$color[$random[11111;99999]]`
})
bot.Command({
name: "/fun",
code: `$addTimestamp
$description[〣say〣 〣math〣 〣hug〣 〣neko〣 〣ipfind〣 〣lick〣 〣invert〣 〣nitro〣 〣gay〣 〣wasted〣 〣triggered〣 〣floor〣 〣car〣 〣kiss〣 〣pat〣 〣fml〣 〣scroll〣 〣cat〣 〣dog〣 〣fox〣 〣koala〣 〣redpanda〣 〣panda〣 〣quotes〣 〣bird〣 〣cat fact〣 〣dog fact〣 〣fox fact〣 〣koala fact〣 〣panda fact〣 〣bird fact〣 〣topic〣 〣stonks〣 〣salty〣 〣tickle〣 〣poke〣 〣youtube〣 〣trump〣 〣snipe〣 〣makememe〣 〣table-flip〣 〣clyde〣 〣pokedex〣 〣cuddle〣 〣weather〣 〣ship〣 〣facts〣 〣amongus〣 〣trash〣 〣watermeme〣 〣magik〣 〣eject〣 〣viewcolor〣 〣cmm〣 〣lyrics〣 〣meme〣 〣preview〣 〣roll〣 〣wink〣 〣avatar‎〣 〣8ball‎〣 〣kill〣 〣rps‎〣 〣slap‎〣 〣achievement〣 〣skin〣 〣exam〣 〣lowercase〣 〣uppercase〣
**Join our Support Server!**
{hyper:Click Here:https://discord.gg/wU9wXdJDsV}]
$title[Fun Commands]
$color[$random[11111;99999]]`
})
bot.Command({
  name: "/economy",
  code: `$addTimestamp
$description[〣work〣 〣bal〣 〣crime〣 〣fish〣 〣gift〣 〣beg〣 〣shop〣 〣inv〣 〣dep or deposit〣 〣with or withdraw‎〣 〣daily〣 〣lb or leaderboard cash〣 〣lb or leaderboard bank〣
**Join our Support Server!**
{hyper:Click Here:https://discord.gg/wU9wXdJDsV}]
$title[Economy Commands]
$color[$random[11111;99999]]`
})
bot.Command({
  name: "/staff",
  code: `$addTimestamp
$description[〣purge‎〣 〣announce〣 〣nick〣 〣ban〣 〣massrole〣 〣mute〣 〣unmute‎〣 〣suggestban〣 〣suggestunban〣 〣warn〣 〣antilinks〣 〣antiswearing〣 〣setbadwords〣 〣lock〣 〣setslowmode〣 〣checkwarn‎〣 〣setwarns〣 〣banid‎〣 〣unbanid‎〣 〣kick‎〣 〣role‎〣 〣takerole‎〣 〣createchannel〣 〣deletechannel〣
**Join our Support Server!**
{hyper:Click Here:https://discord.gg/wU9wXdJDsV}]
$title[Staff Commands]
$color[$random[11111;99999]]`
})
bot.Command({
  name: "/config",
  code: `$addTimestamp
$description[〣setsuggest‎〣 〣setmodlogs〣 〣setmutedrole〣 〣setwelcome〣 〣levelling〣 〣ticket setup〣 〣setmessage〣
**Join our Support Server!**
{hyper:Click Here:https://discord.gg/wU9wXdJDsV}]
$title[Bot Config Commands]
$color[$random[11111;99999]]`
})
bot.Command({
  name: "/music",
  code: `$addTimestamp
$description[〣loop〣 〣lyrics〣 〣np〣 〣play〣 〣pause〣 〣playlist〣 〣pruning〣 〣queue〣 〣remove〣 〣resume〣 〣search〣 〣shuffle〣 〣skip〣 〣skipto〣 〣stop〣 〣volume〣
**Join our Support Server!**
{hyper:Click Here:https://discord.gg/wU9wXdJDsV}]
$title[Music Commands]
$color[$random[11111;99999]]`
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
  count: "0",
  pole: "0",
  alcohol: "0",
  noodle: "0",
  crown: "0",
  talk: "0",
  req: "250",
  level: "0",
  snipe: "",
  snipe1: "",
  welcome: "",
  chatmode: "no",
  birthday: "/setbirth (date)",
  favcolor: "/setcolor (name)",
  petname: "/setpet (name)",
  antilink: "off",
  chat: "",
  suggestban: "0",
  lock: "0",
  ticketspam: "0",
  badword: "",
  antiswearing: "off",
  alcohol1: "",
  giveaway: "",
  levelling: "on"
})
bot.Status({
        0: {
            description: "/help and $serverCount Servers!",
            type: "WATCHING"
        },
        1: {
            description: "$allMembersCount People!",
            type: "LISTENING"
        }
    }, 13000)
bot.Command({
    name: "/support",
    code: `$color[$random[1;9999]]
$botTyping
$addTimestamp
$title[Join our support server!]
$description[Join our support server for suggestions or reporting bugs
{hyper:Click here to Join!:https://discord.gg/wU9wXdJDsV}]`
})
bot.Command({
    name: "/covid",
    code: `$title[Covid stats of $message[1]]
$description[**__Total Cases__**
$api[https://coronavirus-19-api.herokuapp.com/countries/$replaceText[message[1]; ;%20];cases]
**__Total Deaths__**
$api[https://coronavirus-19-api.herokuapp.com/countries/$replaceText[message[1]; ;%20];deaths]
**__Today Cases__**
$api[https://coronavirus-19-api.herokuapp.com/countries/$replaceText[message[1]; ;%20];todayCases]
__**Today Deaths**__
$api[https://coronavirus-19-api.herokuapp.com/countries/$replaceText[message[1]; ;%20];todayDeaths]
**__Total Tests__**
$api[https://coronavirus-19-api.herokuapp.com/countries/$replaceText[message[1]; ;%20];totalTests]
**__Recovered__**
$api[https://coronavirus-19-api.herokuapp.com/countries/$replaceText[message[1]; ;%20];recovered]
**__Active__**
$api[https://coronavirus-19-api.herokuapp.com/countries/$replaceText[message[1]; ;%20];active]
**__Critical__**
$api[https://coronavirus-19-api.herokuapp.com/countries/$replaceText[message[1]; ;%20];critical]]
$color[$random[11111;99999]]
$onlyIf[$message[1]!=;Please provide a country!]`
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
Currently Using $memory MB of RAM!]
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
    code: `$globalCooldown[20m;You need to wait {time} before working again]
$addTimestamp
$setVar[money;$sum[$getVar[money;$authorID];$random[40;120]];$authorID]
$description[$$random[40;120] 💰 Congratulations :)]
$title[**$username[]** got:]
$color[$random[11111;99999]]`
})
bot.Command({
    name: "/daily",
    code: `$globalCooldown[1d;<@$authorID>, You need to wait at {time} until you can claim your daily again!]
$addTimestamp
$setVar[money;$sum[$getVar[money;$authorID];$random[100;500]];$authorID]
$description[You have been claimed $$random[100;500] from your daily prize!]
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
    code: `$channelSendMessage[$mentionedChannels[1];
{title:📡 Announcement!}
{description: $messageSlice[>1]}
$addTimestamp
{footer: Author: $username[]}
{color:00008B}]
$footer[Cosmo]
$description[Successfully sent the Announcement to <#$mentionedChannels[1]>!]
$title[Cosmo | Announcement]
$color[$random[11111;99999]]
$onlyIf[$hasPerm[$authorID;managechannels]==true;{execute:1}]`
})
bot.Command({
    name: "/status",
    code: `$botTyping
$color[$random[11111;99999]]
$title[Minecraft Server Status]
$description[**__Latency__** $api[https://mcapi.xdefcon.com/server/$message[1]/full/json;ping]
__**Server Status**__ $api[https://mcapi.xdefcon.com/server/$message[1]/full/json;serverStatus]
**__Server IP__** $api[https://mcapi.xdefcon.com/server/$message[1]/full/json;serverip]
**__Max Players__** $api[https://mcapi.xdefcon.com/server/$message[1]/full/json;maxplayers]
__**Online**__ $api[https://mcapi.xdefcon.com/server/$message[1]/full/json;players]
__**Version**__ $api[https://mcapi.xdefcon.com/server/$message[1]/full/json;version]]
$footer[Command by $username[];$userAvatar[$authorID]]
$onlyIf[$message[]!=;Please use in format /status (ip)]
$addTimestamp`
})
bot.Command({
    name: "/8ball",
    code: `$botTyping
$thumbnail[$userAvatar[$authorID]]
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
$onlyIf[$message[]!=;❌ Please enter a Minecraft username! 👻]
$addTimestamp
$color[$random[1;9999]]
$botTyping`
})
bot.Command({
    name: "/say",
    aliases: ["/tell", "/speak"],
    code: `$botTyping
$deletecommand[1ms]
$author[$username[$authorID]] $thumbnail[$userAvatar[$authorID]]
$description[$message[]]
$addTimestamp`
})
bot.Command({
    name: "/trump",
    code: `$description[]
$image[https://api.no-api-key.com/api/v2/trump?message=$replaceText[$message[]; ;+]]
  $onlyIf[$message[]!=;Please provide some text!]`
})
bot.Command({
    name: "/majik",
   aliases: ["/magic"],
    code: `$color[$random[11111;99999]]
$image[https://api.alexflipnote.dev/filter/magik?image=$userAvatar[$mentioned[1]]]
$onlyIf[$message[]!=;Please mention someone!]`
})
bot.Command({
    name: "/eject",
    code: `$color[$random[11111;99999]]
$image[https://vacefron.nl/api/ejected?name=$username[$mentioned[1;yes]]+&impostor=$randomText[true;false]&crewmate=$randomText[black;blue;brown;cyan;darkgreen;lime;orange;pink;purple;red;white;yellow]]
$onlyIf[$message[]!=;Please mention someone!]`
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
    code: `$color[$random[11111;99999]]
$image[https://vacefron.nl/api/stonks?user=$userAvatar[$mentioned[1;yes]]?size=4096]`
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
$description[]
$image[https://flamingtext.com/net-fu/proxy_form.cgi?script=runner-logo&text=$replaceText[$message[]; ;+]&_loc=generate&imageoutput=true]
$footer[Requested by $username[$authorID]#$discriminator[$authorID]]
$color[$random[11111;99999]]
$onlyIf[$message[]!=;Provide Some Text.]`
})
bot.Command({
    name: "/roll",
    code: `$suppressErrors[**Correct usage: /roll (small number) (big number)**]
$description[📥**Given Numbers**📥
$message[1] , $message[2]
📤**Random Number Generated**📤
$random[$message[1];$message[2]]]
$title[🎲Random Numbers!🎲]
$color[$random[11111;99999]]
$onlyIf[$message[1]<$message[2];Please make sure your first number is smaller than second number!]
$onlyIf[$isNumber[$message[2]]==true;Choose valid numbers!]
$onlyIf[$isNumber[$message[1]]==true;Choose valid numbers!]`
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
$image[$api[https://some-random-api.ml/meme;image]]`
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
$color[$random[1;9999]]
$title[OH NO! Someone Died!]
$description[<@$authorID> Killed <@$mentioned[1]>]
$image[$randomText[https://cdn.weeb.sh/images/HyXTiyKw-.gif;https://cdn.weeb.sh/images/r11as1tvZ.gif;https://cdn.weeb.sh/images/B1VnoJFDZ.gif;https://cdn.discordapp.com/attachments/752428043951276102/752563482641039400/tenor_1.gif;https://cdn.discordapp.com/attachments/752428043951276102/752563483106607112/tenor.gif;https://cdn.discordapp.com/attachments/752428043951276102/752563482041385090/77518.gif]]
$deletecommand[1ms]
$onlyIf[$authorID!=$mentioned[1];I Wish u could kill yourself]
$onlyIf[$message[1]!=;{execute:6}]`
})
bot.Command({
    name: "/slap",
    code: `$botTyping
$title[Ouch... That hurts]
$description[<@$authorID> Slapped <@$mentioned[1]> Ouch..]
$image[https://purrbot.site/img/sfw/slap/gif/slap_0$randomText[01;02;03;04;05;06;07;08;09;10;11;12;13;14;15].gif]
$color[$random[1;9999]]
$deletecommand[1ms]
$onlyIf[$authorID!=$mentioned[1];I Wish u could slap yourself]
$onlyIf[$message[1]!=;{execute:6}]`
})
bot.Command({
    name: "/hug",
    code: `$deletecommand[1ms]
$onlyIf[$message[1]!=;Please mention somebody to hug.]
$onlyIf[$authorID!=$mentioned[1];I Wish u could hug yourself]
$color[$random[1;99999]]
$description[ <@$authorID> hugs <@$mentioned[1]> !]
$image[$api[https://some-random-api.ml/animu/hug;link]]
  $onlyIf[$authorID!=$mentioned[1];I Wish u could hug yourself]
  $onlyIf[$message[1]!=;{execute:6}]`
})
bot.Command({
    name: "/pat",
    code: `$deletecommand[1ms]
$color[$randomText[FF0000;00BFFF]]
$title[Pats time]
$description[ <@$authorID> Is patting <@$mentioned[1]> ]
$image[$api[https://some-random-api.ml/animu/pat;link]]
  $onlyIf[$authorID!=$mentioned[1];I Wish u could pat yourself]
  $onlyIf[$message[1]!=;{execute:6}]`
})
bot.Command({
    name: "/kiss",
    code: `$deletecommand[1ms]
$color[$random[1;99999]]
$title[**Kisses time**]
$description[** <@$authorID> Gives <@$mentioned[1]> Kisses 😗** ]
$image[https://purrbot.site/img/sfw/kiss/gif/kiss_0$randomText[01;02;03;04;05;06;07;08;09;10;11;12;13;14;15;16;17;18;19;20;21;22;23;24;25;26;27;28;29;30;31;32;33;34;35;36;37;38;39;40;41;42;43;44;45;46;47;48;49;50].gif]
  $onlyIf[$authorID!=$mentioned[1];I Wish u could kiss yourself]
  $onlyIf[$message[1]!=;{execute:6}]`
})
bot.Command({
    name: "/lick",
    code: `$botTyping
$title[Licks 😛]
$description[<@$authorID> Licks <@$mentioned[1]>]
$image[https://purrbot.site/img/sfw/lick/gif/lick_0$randomText[01;02;03;04;05;06;07;08;09;10;11;12;13;14;15].gif]
$color[$random[1;9999]]
$deletecommand[1ms]
$onlyIf[$authorID!=$mentioned[1];I Wish u could lick yourself]
$onlyIf[$message[1]!=;{execute:6}]`
})
bot.Command({
    name: "/ship",
    code: `$description[$username[$message[1]] and $username[$message[2]] are a $random[1;101]% match!]
$image[https://api.alexflipnote.dev/ship?user=$userAvatar[$message[1]]&user2=$userAvatar[$message[2]]]
$title[Aww]
$color[$random[11111;99999]]
$onlyIf[$message[2]!=;]
$onlyIf[$message[1]!=;You have to use ID of someone and someone else!]`
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
$color[$random[11111;99999]]
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
$color[$random[11111;99999]]
$description[__ ** 👤User info👤 ** __
** 📙Username: **
$username[$mentioned[1;yes]]
** 📘UserID: **
$userID[$username[$mentioned[1;yes]]]
** ✅User Badges: **
$getUserBadges[$mentioned[1;yes]]
** 🔎Tag: **
$discriminator[$mentioned[1;yes]]
**Boosting Server**
$isBoosting[$mentioned[1;yes]]
** 🤖Highest Role: **
<@&$highestRole[$mentioned[1;yes]]>
** 🔮Account Creation Date**
$creationDate[$mentioned[1;yes]]]
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
    code: `$title[$username[$authorID]#$discriminator[$authorID]]
$description[$message[]]
$author[Suggestion #$getServerVar[count];$authorAvatar[png;true;256]]
$color[$random[11111;99999]]
$addReactions[778160893095444510;778160929438302208]
$useChannel[$getServerVar[Suggest]]
$channelSendMessage[$channelID[];
{title:Cosmo | Suggestions}
{description:<@$authorID>, You have successfully sent your suggestion! Please wait for staff to review it in <#$getServerVar[Suggest]>!}
{footer: Author: $username[]}]
$onlyIf[$getUserVar[suggestban]==0;{execute:ban}]
$onlyIf[$getServerVar[Suggest]!=;{execute:3}]
$onlyIf[$message[1]!=;{execute:2}]`
})
bot.ExecutableCommand({
name: "ban",
code: `$description[<@$authorID> , You're suggestion banned, You cant make any suggestions!]
$color[$random[11111;99999]]`
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
    code: `$channelSendMessage[$getServerVar[ModLogs];
{title:Cosmo | Banned}
{description:**$username[$mentioned[1]]#$discriminator[$mentioned[1]]** was banned from $serverName[$guildID].}
{field:Moderator: <@$authorID>}]
$onlyIf[$getServerVar[ModLogs]!=;{execute:4}]
$ban[$mentioned[1]]
$title[Cosmo | Ban System]
$color[$random[11111;99999]]
$description[<@$authorID>, You have successfully banned **$username[$mentioned[1]]#$discriminator[$mentioned[1]]** from the server!]
$deletecommand[1ms]
$onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];{execute:5}]
$onlyIf[$message[1]!=;{execute:6}]
$onlyPerms[ban;{execute:7}]`
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
$title[📜 - User Warnings]
$color[$random[11111;99999]]
$description[<@$mentioned[1]> Has
$getUserVar[warn;$mentioned[1]] Warnings]
$onlyIf[$message[1]!=;Please mention somebody to checkwarns.]
$addTimestamp`
})
bot.Command({
    name: "/role",
    aliases: ["/addrole", "/add-role", "/giverole", "/give-role"],
    code: `$giveRole[$mentioned[1];$roleID[$noMentionMessage[]]]
$description[Successfully Given $messageSlice[>1] role to <@$mentioned[1]>]
$onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$roleID[$messageSlice[>1]]];You cant give a role higher than yours!]
$onlyIf[$roleExists[$noMentionMessage[]]==true;❌| Please select a valid role!]
$onlyIf[$message[1]!=;❌ | Please mention the user your trying to give role to and enter the name of the role your trying to give!]
$onlyPerms[manageroles;❌ | Your missing the permission **Manage Roles**]
$deletecommand[1ms]`
})
bot.Command({
    name: "/takerole",
    aliases: ["/take-role", "/removerole", "/remove-role"],
    code: `$botTyping
$takeRole[$mentioned[1];$roleID[$noMentionMessage[]]]
$description[Successfully Taken $messageSlice[>1] role from <@$mentioned[1]>]
$onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$roleID[$messageSlice[>1]]];You cant take a role higher than yours!]
$onlyIf[$roleExists[$noMentionMessage[]]==true;❌| Please select a valid role!]
$onlyIf[$message[1]!=;❌| Please mention the user your trying to take role from and enter the name of the role your trying to take!]
$onlyPerms[manageroles;❌| Your missing the permission > Manage Roles]
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
$suppressErrors[Please mention the channels to delete!]
$deleteChannels[$mentionedChannels[1]]
$title[Successfully Deleted! ✅]
$color[$random[11111;99999]]
$onlyIf[$message[]!=;Please mention the channels to delete!]
$onlyPerms[managechannels;❌ Your lacking the permission > Manage Channels]`
})
bot.Command({
    name: "/kick",
    code: `$botTyping
$description[Person Kicked: **$username[$mentioned[1]]**
Moderator: **$username[$authorID]**
Reason: **$noMentionMessage[]**]
$deletecommand[1ms]
$title[Someone has been Kicked!]
$color[$random[11111;99999]]
$useChannel[$getServerVar[ModLogs]]
$kick[$mentioned[1]]
$onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];You cant kick someone higher than you!]
$onlyIf[$message[1]!=;Mention The User You Wanna Kick And Provide A Reason.]
$onlyPerms[kick; ❌ You lack the following perms > Kick Members]`
})
bot.Command({
    name: "/kick",
    code: `$botTyping
$color[$random[11111;99999]]
$title[Someone has been Kicked!]
$description[Person Kicked: **$username[$mentioned[1]]**
Moderator: **$username[$authorID]**
Reason: **$noMentionMessage[]**]
$deletecommand[1ms]
$onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];]
$onlyIf[$message[1]!=;]
$onlyPerms[kick;]`
})
bot.Command({
    name: "/mute",
    code: `
$title[Someone has been Muted!]
$description[Person Muted: <@$mentioned[1]>
Moderator: $username[$authorID]
reason: $noMentionMessage[]]
$giveRole[$mentioned[1];$roleID[$getServerVar[mute]]]
$onlyIf[$getServerVar[mute]!=;Please use /setmutedrole first!]
$onlyPerms[manageroles; ❌ Your missing the permission > Manage Roles]
$onlyIf[$message[1]!=;❌ Please mention the user your trying to mute!]
$suppressErrors[Please do /setmutedrole (Role Name) to set a role which will be given to muted people!]`
})
bot.Command({
    name: "/unmute",
    code: `
$title[Someone has been Unmuted!]
$description[Person Unmuted: <@$mentioned[1]>
Moderator: $username[$authorID]
reason: $noMentionMessage[]]
$takeRole[$mentioned[1];$roleID[$getServerVar[mute]]]
$onlyIf[$getServerVar[mute]!=;Please use /setmutedrole first!]
$onlyPerms[manageroles; ❌ Your missing the permission > Manage Roles]
$onlyIf[$message[1]!=;❌ Please mention the user your trying to unmute!]
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
👑**Rare Crown**👑
**Amount:** $getVar[crown;$authorID]
**ID**  crown
🐠**Fish**🐠
**Amount:** $getVar[fish;$authorID]
**ID**  fish
**Use:** /use fish]
$footer[Page 1 of 1]`
})
bot.Command({
    name: "/crime",
    code: `$setVar[money;$sum[$getVar[money;$authorID];$random[400;600]];$authorID]
$footer[You can commit crimes every 12h so make sure to check back in, $username[$authorID]]
$description[$randomText[You commit tax fraud!;You kidnapped a child!;You blackmailed the United Nations;You leaked nuclear launch codes!] and earned $$random[400;600]💵]
$title[PAYOUT]
$color[$random[11111;99999]]
$globalCooldown[12h;<@$authorID>, You are tired and decide you will commit crimes in {time}]`
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
**Code:** /buy chocolate
👑**Rare Crown**👑
**Price:** $10000
**Code:** /buy crown]
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
$setUserVar[$noMentionMessage[];0;$mentioned[1;yes]]
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
    code: `
$setVar[alcohol;$sum[$getVar[alcohol;$authorID];1];$authorID]
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
    name: "/buy",
    code: `
$setVar[crown;$sum[$getVar[crown;$authorID];1];$authorID]
$setVar[money;$sub[$getVar[money;$authorID];10000];$authorID]
$description[You have successfully bought **1** Rare Crown! 👑]
$color[$random[11111;99999]]
$onlyIf[$getVar[money;$authorID]>=10000; **🚫 | You need $10000 to buy this item!**]
$onlyIf[$message[1]==crown;]`
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
    code: `$footer[Requested by $username[];$userAvatar[$authorID]]
$description[ **No Need to add signs**
/add = Add the amount of numbers you want!
/sub = Subtract the amount of numbers you want!
/multi = Multiply the amount of numbers you want!
/divide = Divide the amount of numbers you want!]`
})
bot.Command({
    name: "/add",
   aliases: ["/addition"],
    code: `$footer[Author: $username[];$userAvatar[$authorID]]
$description[**Numbers**
$replaceText[$message[]; ;,]
**Answer**
$sum[$splitTextJoin[;]]]
$title[Maths Time!]
$color[$random[11111;99999]]
$textSplit[$message[]; ]
$suppressErrors[Please choose Valid Numbers!]`
})
bot.Command({
    name: "/sub",
   aliases: ["/subtract", "/subtraction"],
    code: `$footer[Author: $username[];$userAvatar[$authorID]]
$description[**Numbers**
$replaceText[$message[]; ;,]
**Answer**
$sub[$splitTextJoin[;]]]
$title[Maths Time!]
$color[$random[11111;99999]]
$textSplit[$message[]; ]
$suppressErrors[Please choose Valid Numbers!]`
})
bot.Command({
    name: "/multi",
   aliases: ["/multiply", "/multiplication"],
    code: `$footer[Author: $username[];$userAvatar[$authorID]]
$description[**Numbers**
$replaceText[$message[]; ;,]
**Answer**
$multi[$splitTextJoin[;]]]
$title[Maths Time!]
$color[$random[11111;99999]]
$textSplit[$message[]; ]
$suppressErrors[Please choose Valid Numbers!]`
})
bot.Command({
    name: "/divide",
   aliases: ["/division"],
    code: `$footer[Author: $username[];$userAvatar[$authorID]]
$description[**Numbers**
$replaceText[$message[]; ;,]
**Answer**
$divide[$splitTextJoin[;]]]
$title[Maths Time!]
$color[$random[11111;99999]]
$textSplit[$message[]; ]
$suppressErrors[Please choose Valid Numbers!]`
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
    code: `$addTimestamp
$description[My prefix is /
My help page is /help]
$title[Ping Pong!]
$color[$random[11111;99999]]
$botTyping`
})
bot.Command({
    name: "/remind",
    code: `$title[Success!✅]
$color[$random[11111;99999]]
$onlyIf[$message[1]!=;Please provide some Time and Text!]`
})
bot.Command({
    name: "/remind",
    code: `$description[$messageSlice[>1]]
$title[Reminder!]
$color[$random[11111;99999]]
$dm[$authorID]
$replyIn[$message[1]]`
})
bot.Command({
    name: "/banid",
    code: `$onlyIf[$message[1]!=;Please mention who to ban!]
$ban[$message[1]]
$title[Banned]
$color[$random[11111;99999]]
$description[
**Banned By:**
**<@$authorID>**
**Banned:**
**$username[$message[1]]**
Reason: **$messageSlice[>1]**]
$deletecommand[100ms]
$onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];You cant ban someone higher than you!]
$onlyPerms[ban;Missing Ban Member Perm]`
})
bot.Command({
    name: "/tableflip",
    aliases: ["/table-flip"],
    code: `$image[https://vacefron.nl/api/tableflip?user=$userAvatar[$authorID]?size=2048]
$description[<@$authorID> flipped the table!]
$color[$random[11111;99999]]`
})
bot.Command({
    name: "/creatememe",
    aliases: ["/create-make", "/makememe", "/make-meme"],
    code: `$image[https://api.memegen.link/images/$message[1]/$replaceText[$messageSlice[>1]; ;_]]
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
    code: `$setVar[money;$sub[$getVar[money;$message[1]];$random[1;$getVar[money;$message[1]]]];$message[1]]
$setVar[money;$sum[$getVar[money;$authorID];$random[1;$getVar[money;$message[1]]]];$authorID]
$title[Successfully robbed $$random[1;$getVar[money;$message[1]]]]
$color[$random[1;99999]]
$globalCooldown[1d;<@$authorID> , Please wait {time} until next robbery]
$onlyIf[$getVar[money;$message[1]]>100;This user has lower than 100. Please dont rob the poor]
$onlyIf[$isNumber[$message[1]]==true;Please provide the ID of the person to rob!]
$suppressErrors[Please provide the ID of the person to rob!]`
})
bot.SpaceCommand({
    name: "levelling",
    code: `$setUserVar[talk;$sum[$getUserVar[talk];$random[5;25]]]
$cooldown[30s;]
$onlyIf[$getServerVar[levelling]==on;]`
})
bot.SpaceCommand({
    name: "level",
    code: `$setUserVar[level;$sum[$getUserVar[level];1]]
Congratulations <@$authorID>, you have leveled up! You are now level $sum[$getUserVar[level];1]!
$setUserVar[req;$sum[$getUserVar[req];$random[600;2000]]]
$onlyIf[$getUserVar[talk]>$getUserVar[req];]
$onlyIf[$getServerVar[levelling]==on;]`
})
bot.Command({
    name: "/rank",
    aliases: ["/level"],
    code: `$description[]
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;_]&avatar=$userAvatar[$mentioned[1;yes]]&size=1023&level=$getUserVar[level;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[talk;$mentioned[1;yes]]&nextlevelxp=$getUserVar[req;$mentioned[1;yes]]&previouslevelxp=$sub[$getUserVar[talk;$mentioned[1;yes]];120]]
$onlyIf[$getServerVar[levelling]==on;Levelling Disabled!]`
})
bot.Command({
    name: "/lb",
    aliases: ["/leaderboard"],
    code: `$footer[Requested by $username[];$userAvatar[$authorID]]
$description[$userLeaderboard[level;asc]]
$title[Rank Leaderboard]
$color[$random[11111;99999]]
$onlyIf[$getServerVar[levelling]==on;Levelling Disabled!]
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
$description[$getChannelVar[snipe;$channelID[]]]
$title[$username[$getChannelVar[snipe1;$channelID[]]]]
$thumbnail[$userAvatar[$getChannelVar[snipe1;$channelID[]]]]
$color[$random[11111;99999]]
$onlyIf[$getChannelVar[snipe]!=;Theres nothing to snipe!]`
})
bot.SpaceCommand({
 name: "dejvypepic",
 code: `$replaceText[$replaceText[$checkCondition[$getUserVar[nm;$mentioned[1]]==1];true;
$username[$mentioned[1]] is AFK!
Message: $getUserVar[msg]];false;]
$onlyIf[$mentioned[1]!=;]`
})
bot.Command({
    name: "/afk",
    code: `$setUserVar[nm;1]
$setUserVar[msg;$messageSlice[>1]]
$title[Your AFK Has Been Successfully Set!]
$color[$random[11111;99999]]
$onlyIf[$checkContains[$message[];https://;http://;<@&]==false;You cant have links or role pings in ur role!]
$onlyIf[$messageSlice[>1]!=;Please type afk message]
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
code: `Welcome <@$authorID> to $serverName[$guildID]!
Hope you enjoy your stay here!`
})
bot.onJoined()
bot.LeaveCommand({
name: "$getServerVar[welcome]",
code: `$username[$authorID] has left the server!`
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
$color[$random[100000;99999]]
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
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;_]&avatar=$userAvatar[$mentioned[1;yes]]&size=1023&level=$getUserVar[level;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[talk;$mentioned[1;yes]]&nextlevelxp=$getUserVar[req;$mentioned[1;yes]]&previouslevelxp=$sub[$getUserVar[talk;$mentioned[1;yes]];120]]]`
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
bot.Command({
    name: "/pokedex",
    code: `$description[**Name**
$api[https://some-random-api.ml/pokedex?pokemon=$message[1];name]
**ID**
$api[https://some-random-api.ml/pokedex?pokemon=$message[1];id]
**Type**
$api[https://some-random-api.ml/pokedex?pokemon=$message[1];type]
**Species**
$api[https://some-random-api.ml/pokedex?pokemon=$message[1];species]
**Abilities**
$api[https://some-random-api.ml/pokedex?pokemon=$message[1];abilities]
**Height**
$api[https://some-random-api.ml/pokedex?pokemon=$message[1];height]
**Weight**
$api[https://some-random-api.ml/pokedex?pokemon=$message[1];weight]
**Base Experience**
$api[https://some-random-api.ml/pokedex?pokemon=$message[1];base_experience]
**Gender**
$api[https://some-random-api.ml/pokedex?pokemon=$message[1];gender]
**Egg Groups**
$api[https://some-random-api.ml/pokedex?pokemon=$message[1];egg_groups]
**Evolution Line**
$api[https://some-random-api.ml/pokedex?pokemon=$message[1];evolutionLine]
**Generation**
$api[https://some-random-api.ml/pokedex?pokemon=$message[1];generation]
**Description**
$api[https://some-random-api.ml/pokedex?pokemon=$message[1];description]]
$title[Pokemon Info!]
$thumbnail[$api[https://some-random-api.ml/pokedex?pokemon=$message[1];animated]]
$color[$random[11111;99999]]`
})
bot.Command({
    name: "/dog",
    code: `$image[$api[https://some-random-api.ml/img/dog;link]]
$title[Aww..]
$color[$random[11111;99999]]
$onlyIf[$message[1]==;]`
})
bot.Command({
    name: "/cat",
    code: `$image[$api[https://some-random-api.ml/img/cat;link]]
$title[Aww..]
$color[$random[11111;99999]]
$onlyIf[$message[1]==;]`
})
bot.Command({
    name: "/bird",
    code: `$image[$api[https://some-random-api.ml/img/birb;link]]
$title[Aww..]
$color[$random[11111;99999]]
$onlyIf[$message[1]==;]`
})
bot.Command({
    name: "/fox",
    code: `$image[$api[https://some-random-api.ml/img/fox;link]]
$title[Aww..]
$color[$random[11111;99999]]
$onlyIf[$message[1]==;]`
})
bot.Command({
    name: "/panda",
    code: `$image[$api[https://some-random-api.ml/img/panda;link]]
$title[Aww..]
$color[$random[11111;99999]]
$onlyIf[$message[1]==;]`
})
bot.Command({
    name: "/koala",
    code: `$image[$api[https://some-random-api.ml/img/koala;link]]
$title[Aww..]
$color[$random[11111;99999]]
$onlyIf[$message[1]==;]`
})
bot.Command({
    name: "/redpanda",
    code: `$image[$api[https://some-random-api.ml/img/red_panda;link]]
$title[Aww..]
$color[$random[11111;99999]]`
})
bot.Command({
    name: "/dog",
    code: `$api[https://some-random-api.ml/facts/dog;fact]
$onlyIf[$message[1]==fact;]`
})
bot.Command({
    name: "/cat",
    code: `$api[https://some-random-api.ml/facts/cat;fact]
$onlyIf[$message[1]==fact;]`
})
bot.Command({
    name: "/bird",
    code: `$api[https://some-random-api.ml/facts/bird;fact]
$onlyIf[$message[1]==fact;]`
})
bot.Command({
    name: "/fox",
    code: `$api[https://some-random-api.ml/facts/fox;fact]
$onlyIf[$message[1]==fact;]`
})
bot.Command({
    name: "/panda",
    code: `$api[https://some-random-api.ml/facts/panda;fact]
$onlyIf[$message[1]==fact;]`
})
bot.Command({
    name: "/koala",
    code: `$api[https://some-random-api.ml/facts/koala;fact]
$onlyIf[$message[1]==fact;]`
})
bot.Command({
    name: "/lyrics",
    code: `$description[$api[https://some-random-api.ml/lyrics?title=$replaceText[$message[]; ;%20];lyrics]]
$title[Lyrics of $message[]]
$color[$random[11111;99999]]
$onlyIf[$message[]!=;Please provide the name of the song!]`
})
bot.Command({
    name: "/viewcolor",
    aliases: ["/colorview", "/view-color", "/color-view", "/seecolor", "/see-color"],
    code: `$image[https://some-random-api.ml/canvas/colorviewer?hex=$message[1]]
$title[Image of the color $message[1]]
$color[$random[11111;99999]]
$onlyIf[$isValidHex[$message[1]]==true;Please choose a valid hex code without #]
$onlyIf[$message[1]!=;Please provide the hex code of the color!]`
})
bot.Command({
    name: "/wink",
    code: `$image[$api[https://some-random-api.ml/animu/wink;link]]
$title[Wink ;)]
$color[$random[11111;99999]]`
})
bot.Command({
    name: "/setslowmode",
    aliases: ["/set-slowmode"],
    code: `$setSlowMode[$channelID[];$message[1]]
$description[Successfully changed <#$channelID[]> slowmode to $message[1] seconds]
$title[Slowmode Settings]
$color[$random[11111;99999]]
$onlyIf[$isNumber[$message[1]]==true;Please choose a valid number! Example: /setslowmode 10]
$onlyIf[$message[1]!=;Provide the amount of seconds in number!]
$onlyPerms[managechannels;Missing permissions >> Manage Channels]`
})
bot.Command({
    name: "/binary",
    code: `$footer[Requested by $username[];$userAvatar[$authorID]]
$description[**Input Text**
$messageSlice[>1]
**Output Binary**
$api[https://some-random-api.ml/binary?text=$replaceText[$messageSlice[>1]; ;+];binary]]
$title[Binary Conversion]
$color[$random[11111;99999]]
$onlyIf[$message[]!=;Please provide some text to convert to binary!]
$onlyIf[$message[1]==encode;]`
})
bot.Command({
    name: "/binary",
    code: `$footer[Requested by $username[];$userAvatar[$authorID]]
$description[**Input Binary**
$messageSlice[>1]
**Output Text**
$api[https://some-random-api.ml/binary?decode=$replaceText[$messageSlice[>1]; ;+];text]]
$title[Binary Conversion]
$color[$random[11111;99999]]
$onlyIf[$isNumber[$messageSlice[>1]]==true;Provide valid binary code]
$onlyIf[$message[]!=;Please provide some binary code to convert to text!]
$onlyIf[$message[1]==decode;]`
})
bot.Command({
    name: "/base64",
    code: `$footer[Requested by $username[];$userAvatar[$authorID]]
$description[**Input Text**
$messageSlice[>1]
**Output Base64**
$api[https://some-random-api.ml/base64?encode=$replaceText[$messageSlice[>1]; ;+];base64]]
$title[Base64 Conversion]
$color[$random[11111;99999]]
$onlyIf[$message[]!=;Please provide some text to convert to base64!]
$onlyIf[$message[1]==encode;]`
})
bot.Command({
    name: "/base64",
    code: `$footer[Requested by $username[];$userAvatar[$authorID]]
$description[**Input Base64**
$messageSlice[>1]
**Output Text**
$api[https://some-random-api.ml/base64?decode=$replaceText[$messageSlice[>1]; ;+];text]]
$title[Base64 Conversion]
$color[$random[11111;99999]]
$onlyIf[$message[]!=;Please provide some base64 code to convert to text!]
$onlyIf[$message[1]==decode;]`
})
bot.Command({
    name: "/binary",
    code: `$footer[Requested by $username[];$userAvatar[$authorID]]
$description[Avaliable Binary Options
__/binary encode__
Encodes the provided text into binary codes.
__/binary decode__
Decodes the provided binary code into simple text.]
$title[Binary Help]
$color[$random[11111;99999]]
$onlyIf[$message[1]==;]`
})
bot.Command({
    name: "/base64",
    code: `$footer[Requested by $username[];$userAvatar[$authorID]]
$description[Avaliable Base64 Options
__/base64 encode__
Encodes the provided text into Base64 codes.
__/base64 decode__
Decodes the provided Base64 code into simple text.]
$title[Base64 Help]
$color[$random[11111;99999]]
$onlyIf[$message[1]==;]`
})
bot.Command({
    name: "/antilinks",
    aliases: ["/antilink", "/anti-link", "/anti-links"],
    code: `$addTimestamp
$description[Successfully enabled **__AntiLinks__**]
$title[AntiLinks Settings]
$color[$random[11111;99999]]
$setServerVar[antilink;on]
$onlyAdmin[Admin Only!]
$onlyIf[$message[1]==on;]`
})
bot.Command({
    name: "/antilinks",
    aliases: ["/antilink", "/anti-link", "/anti-links"],
    code: `$addTimestamp
$description[Successfully disabled **__AntiLinks__**]
$title[AntiLinks Settings]
$color[$random[11111;99999]]
$setServerVar[antilink;off]
$onlyAdmin[Admin Only!]
$onlyIf[$message[1]==off;]`
})
bot.SpaceCommand({
    name: "antilinks",
    code: `$addTimestamp
<@$authorID> you cant send links! AntiLinks is currently online! Only admins can bypass!
$deletecommand[1ms]
$onlyIfMessageContains[https://;http://;discord.gg;www.;]
$onlyIf[$getServerVar[antilink]==on;]
$onlyIf[$hasPerm[$authorID;admin]==false;]`
})
bot.Command({
    name: "/antilink",
    aliases: ["/antilinks", "/anti-link", "/anti-links"],
    code: `$addTimestamp
$footer[Command by $username[]]
$description[__**/antilinks on**__ It will turn on the auto antilinks program!
__**/antilinks off**__ It will disable the auto antilinks program!]
$title[AntiLinks]
$color[$random[11111;99999]]
$onlyIf[$message[1]==;]`
})
bot.Command({
  name: "/rgb",
  code: `$footer[Requested by $username[];$userAvatar[$authorID]]
  $description[**Input RGB Color Code**
  $message[]
**Output Hex Code**
$api[https://some-random-api.ml/canvas/hex?rgb=$replaceText[$message[]; ;,];hex]]
  $title[Color Conversion!]
  $thumbnail[$userAvatar[$authorID]]
  $color[$random[11111;99999]]
  $onlyIf[$message[]!=;Please provide a rgb color code like /hex 256 0 0
Here r=256 , g=0 , b=0]`
})
bot.Command({
  name: "/hex",
  code: `$footer[Requested by $username[];$userAvatar[$authorID]]
  $description[**Input Hex Color Code**
  $message[1]
**Output RGB Code**
__R=__ $api[https://some-random-api.ml/canvas/rgb?hex=$replaceText[$message[1]; ;,];r]
__G=__ $api[https://some-random-api.ml/canvas/rgb?hex=$replaceText[$message[1]; ;,];g]
__B=__ $api[https://some-random-api.ml/canvas/rgb?hex=$replaceText[$message[1]; ;,];b]]
  $title[Color Conversion!]
  $thumbnail[$userAvatar[$authorID]]
  $color[$random[11111;99999]]
  $onlyIf[$message[1]!=;Please provide a hex code without #]`
})
bot.Command({
  name: "/count",
  code: `$footer[Requested by $username[];$userAvatar[$authorID]]
  $description[**Number of words**
$argsLength
**Number of characters**
$charCount]
$title[Text Counter!]
$color[$random[11111;99999]]
$thumbnail[$userAvatar[$authorID]]
$onlyIf[$message[]!=;Please provide some Text!]`
})
bot.Command({
  name: "/lock",
  code: `$setChannelVar[lock;1]
$description[Successfully locked <#$channelID[]>!]
$title[Channel Lockdown!]
$thumbnail[$userAvatar[$authorID]]
$color[$random[11111;99999]]
$modifyChannelPerms[$channelID[];-sendmessages;$guildID]
$onlyPerms[managechannels;Your missing the following permission >> Manage Channels]
$onlyIf[$getChannelVar[lock]==0;]`
})
bot.Command({
  name: "/lock",
  code: `$setChannelVar[lock;0]
$description[Successfully unlocked <#$channelID[]>!]
$title[Channel Lockdown!]
$thumbnail[$userAvatar[$authorID]]
$color[$random[11111;99999]]
$modifyChannelPerms[$channelID[];+sendmessages;$guildID]
$onlyPerms[managechannels;Your missing the following permission >> Manage Channels]
$onlyIf[$getChannelVar[lock]==1;]`
})
bot.Command({
  name: "/massrole",
  aliases: ["/mass-role"],
  code: `$addReactions[✔️]
$massRole[add;$mentionedRoles[1]]
$footer[Command by $username[];$userAvatar[$authorID]]
$description[Successfully added <@&$mentionedRoles[1]> to everyone!]
$title[Mass Role]
$thumbnail[$userAvatar[$authorID]]
$color[$random[11111;99999]]
$onlyIf[$message[1]==add;]
$onlyIf[$message[]!=;Please use the following format for usage!
/massrole (add/remove) (@role)]
$onlyPerms[manageroles;Your missing the permission >> Manage Roles]`
})
bot.Command({
  name: "/massrole",
  aliases: ["/mass-role"],
  code: `$addReactions[✔️]
$massRole[remove;$mentionedRoles[1]]
$footer[Command by $username[];$userAvatar[$authorID]]
$description[Successfully removed <@&$mentionedRoles[1]> from everyone!]
$title[Mass Role]
$thumbnail[$userAvatar[$authorID]]
$color[$random[11111;99999]]
$onlyIf[$message[1]==remove;]
$onlyIf[$message[]!=;]
$onlyPerms[manageroles;]`
})
bot.Command({
    name: "/vote",
    code: `$footer[You can vote each day!]
$description[Vote for cosmo to help it grow more and get better rankings!
Click {hyper:here:https://discordbotlist.com/bots/cosmo/upvote}]
$title[Vote For Cosmo!]
$color[$random[11111;99999]]`
})
bot.Command({
name: "/quotes",
code: `$footer[Requested by $username[]]
$description[**__Quote__**
$api[https://api.quotable.io/random;content]
**__Author__**
$api[https://api.quotable.io/random;author]]
$thumbnail[$userAvatar[$authorID]]
$color[$random[11111;99999]]`
})
bot.Command({
    name: "/salty",
    code: `$footer[Requested By $username[]]
$image[https://api.alexflipnote.dev/salty?image=$userAvatar[$mentioned[1;yes]]]
$title[I smell saltiness]
$color[$random[11111;99999]]`
})
bot.Command({
    name: "/setbadwords",
    code: `$setServerVar[badword;$splitTextJoin[;]]
$footer[Requested By $username[]]
$description[Updated Bad Words list to-
$replaceText[$message[]; ;,]]
$title[Bad Words Settings]
$color[$random[11111;99999]]
$textSplit[$message[]; ]
$onlyIf[$message[]!=;Please provide the word you wish to block!]
$onlyPerms[managemessages;Your lacking the permission >> Manage Messages]`
})
bot.SpaceCommand({
    name: "antiswearing",
    code: `$deletecommand[1ms]
<@$authorID> That word is not allowed here / It is a blacklisted word! Please refrain from using it!
$onlyIfMessageContains[$getServerVar[badword];]
$onlyIf[$hasPerm[$authorID;admin]==false;]
$onlyIf[$getServerVar[badword]!=;]
$onlyIf[$getServerVar[antiswearing]==on;]`
})
bot.Command({
     name: "/antiswearing",
    code: `$setServerVar[antiswearing;on]
$footer[Command by $username[]]
$description[Successfully enabled __**Anti Swearing**__!]
$title[Anti Swearing Settings]
$color[$random[11111;99999]]
$onlyIf[$message[1]==on;]
$onlyAdmin[Admin Only!]`
})
bot.Command({
     name: "/antiswearing",
    code: `$setServerVar[antiswearing;off]
$footer[Command by $username[]]
$description[Successfully disabled  __**Anti Swearing**__!]
$title[Anti Swearing Settings]
$color[$random[11111;99999]]
$onlyIf[$message[1]==off;]
$onlyAdmin[Admin Only!]`
})
bot.Command({
  name: "/fml",
  code: `$footer[Requested by $username[]]
$description[$api[https://api.alexflipnote.dev/fml;text]]
$title[FML]
$color[$random[11111;99999]]`
})
bot.Command({
  name: "/scroll",
  code: `$footer[Requested by $username[];$userAvatar[$authorID]]
$image[https://api.alexflipnote.dev/scroll?text=$replaceText[$message[]; ;%20]]
$color[$random[11111;99999]]
$onlyIf[$message[]!=;Provide some text]`
})
bot.Command({
  name: "/floor",
  code: `$footer[Requested by $username[];$userAvatar[$authorID]]
$image[https://api.alexflipnote.dev/floor?image=$userAvatar[$mentioned[1;yes]]&text=$replaceText[$noMentionMessage[]; ;%20]]
$color[$random[11111;99999]]
$onlyIf[$message[]!=;Provide some text!]`
})
bot.Command({
  name: "/nitro",
  code: `$deletecommand[1ms]
$image[https://media.discordapp.net/attachments/705681477169315863/769867163452047400/8a1aaf15578d1baaa469cc78a283c6e0c6e85315.jpg]
$color[$random[11111;99999]]`
})
bot.Command({
  name: "/ipfind",
  aliases: ["/ipfinder", "/ip-find"],
  code: `$addTimestamp
$description[__**IP**__
$api[https://freegeoip.app/json/$message[1];ip]
__**Country Name**__
$api[https://freegeoip.app/json/$message[1];country_name]
__**Region Name**__
$api[https://freegeoip.app/json/$message[1];region_name]
__**City**__
$api[https://freegeoip.app/json/$message[1];city]
__**Zip Code**__
$api[https://freegeoip.app/json/$message[1];zip_code]
__**Time Zone**__
$api[https://freegeoip.app/json/$message[1];time_zone]
__**Latitude**__
$api[https://freegeoip.app/json/$message[1];latitude]
__**Longitude**__
$api[https://freegeoip.app/json/$message[1];longitude]]
$color[$random[11111;99999]]
$onlyIf[$message[1]!=;Please provide a ip address of whose information you want to get!]`
})
bot.Command({
  name: "/levelling",
  code: `$setServerVar[levelling;$message[1]]
$footer[Command by $username[$authorID];$userAvatar[$authorID]]
$description[Successfully set the __Levelling System__ to $message[1]]
$title[Levelling System Settings]
$color[$random[11111;99999]]
$onlyIfMessageContains[on;off;Please use on / off for the settings!]
$onlyAdmin[Administrator Only]`
})
bot.Command({
  name: "/ticket",
  code: `$setUserVar[ticketspam;1;$authorID]
$modifyChannelPerms[$channelID[ticket-$toLowercase[$username[$authorID]]];+viewchannel;+sendmessages;$authorID]
$modifyChannelPerms[$channelID[ticket-$toLowercase[$username[$authorID]]];-viewchannel;-sendmessages;$guildID]
$footer[Requested by $username[$authorID];$userAvatar[$authorID]]
$description[Successfully opened a new ticket! <#$channelID[ticket-$toLowercase[$username[$authorID]]]>]
$title[Ticket Creator]
$color[$random[11111;99999]]
$createChannel[ticket-$username[$authorID];text;$findCategory[Tickets]]
$onlyIf[$getUserVar[ticketspam]==0;You already have a ticket opened! You cant have more than 1 ticket at once!]
$onlyIf[$findCategory[Tickets]!=;You havent configured the ticket system yet!
Please use /ticket setup if your are Administrator]
$onlyIf[$message[1]==open;]`
})
bot.Command({
  name: "/ticket",
  code: `$createChannel[Tickets;category]
$addTimestamp
$description[Successfully configured Ticket System!]
$title[Ticket Settings]
$color[$random[11111;99999]]
$onlyPerms[managechannels;You need the permission **Manage Channels** to execute this command!]
$onlyIf[$message[1]==setup;]`
})
bot.Command({
  name: "/ticket",
  code: `$deleteChannels[$channelID[ticket-$toLowercase[$username[]]]]
$setUserVar[ticketspam;0;$authorID]
$onlyIf[$channelID[]==$channelID[ticket-$toLowercase[$username[$authorID]]];This is not a Ticket!
Make sure the person who opened the ticket is using this! If your a admin use /deletechannel]
$onlyIf[$findChannel[ticket-$toLowercase[$username[$authorID]]]!=undefined;This aint a ticket channel.]
$onlyIf[$message[1]==close;]`
})
bot.Command({
  name: "/car",
  code: `$addTimestamp
$image[$api[https://no-api-key.com/api/v1/car;image]]
$title[Cars!]
$color[$random[11111;99999]]`
})
bot.Command({
  name: "/triggered",
  code: `$footer[Command Author: $username[];$userAvatar[$authorID]]
$image[https://some-random-api.ml/canvas/triggered?avatar=$replaceText[$userAvatar[$mentioned[1;yes]];webp;png]]
$title[TRIGGERED]
$color[$random[11111;99999]]`
})
bot.Command({
  name: "/wasted",
  code: `$footer[Command Author: $username[];$userAvatar[$authorID]]
$image[https://some-random-api.ml/canvas/wasted?avatar=$replaceText[$userAvatar[$mentioned[1;yes]];webp;png]]
$title[WASTED]
$color[$random[11111;99999]]`
})
bot.Command({
  name: "/gay",
  code: `$footer[Command Author: $username[];$userAvatar[$authorID]]
$image[https://some-random-api.ml/canvas/gay?avatar=$replaceText[$userAvatar[$mentioned[1;yes]];webp;png]]
$title[$username[$mentioned[1;yes]] Gay]
$color[$random[11111;99999]]`
})
bot.Command({
  name: "/invert",
  code: `$footer[Command Author: $username[];$userAvatar[$authorID]]
$image[https://some-random-api.ml/canvas/invert?avatar=$replaceText[$userAvatar[$mentioned[1;yes]];webp;png]]
$title[Ahh...]
$color[$random[11111;99999]]`
})
bot.Command({
  name: "/suggestban",
  code: `$setUserVar[suggestban;1;$mentioned[1]]
$footer[Command Author: $username[$authorID];$userAvatar[$authorID]]
$description[$addField[Reason;
$noMentionMessage[];no]
$addField[Moderator:;
<@$authorID>;no]
$addField[User Banned:;
<@$mentioned[1]>;no]]
$title[Suggestion Banned!]
$color[$random[11111;99999]]
$onlyIf[$noMentionMessage[]!=;{execute:msg}]
$onlyIf[$getUserVar[suggestban;$mentioned[1]]==0;{execute:user}]
$onlyIf[$mentioned[1]!=;{execute:sb}]
$onlyPerms[managechannels;:x: | Your missing the permission **Manage Channels**!]`
})
bot.ExecutableCommand({
name: "user",
code: `$description[<@$mentioned[1]> is already suggestion banned!]
$color[$random[11111;99999]]`
})
bot.ExecutableCommand({
name: "sb",
code: `$description[Please mention a user whom to Suggestion Ban!]
$color[$random[11111;99999]]`
})
bot.ExecutableCommand({
name: "msg",
code: `$description[Please provide a reason for the Suggestion Ban!]
$color[$random[11111;99999]]`
})
bot.Command({
  name: "/suggestunban",
  code: `$setUserVar[suggestban;0;$mentioned[1]]
$footer[Command Author: $username[$authorID];$userAvatar[$authorID]]
$description[$addField[$addField[Moderator:;
<@$authorID>;no]
User Unbanned:;
<@$mentioned[1]>;no]]
$title[Suggestion Unbanned!]
$color[$random[11111;99999]]
$onlyIf[$getUserVar[suggestban;$mentioned[1]]==1;{execute:a}]
$onlyIf[$mentioned[1]!=;{execute:b}]
$onlyPerms[managechannels;:x: | Your missing the permission **Manage Channels**!]`
})
bot.ExecutableCommand({
name: "a",
code: `$description[<@$mentioned[1]> is already suggestion unbanned!]
$color[$random[11111;99999]]`
})
bot.ExecutableCommand({
name: "b",
code: `$description[Please mention a user whom to Suggestion Unban!]
$color[$random[11111;99999]]`
})

/**
 * Module Imports
 */
const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");

let TOKEN, PREFIX;
try {
  const config = require("./config.json");
  TOKEN = config.TOKEN;
  PREFIX = config.PREFIX;
} catch (error) {
  TOKEN = process.env.TOKEN;
  PREFIX = process.env.PREFIX;
}

const client = new Client({ disableMentions: "everyone" });

client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Client Events
 */
client.on("ready", () => {
  console.log(`${client.user.username} ready!`);
  client.user.setActivity(`${PREFIX}help and ${PREFIX}play`, { type : "LISTENING" });
});
client.on("warn", (info) => console.log(info));
client.on("error", console.error);

/**
 * Import all commands
 */
const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
  if (!prefixRegex.test(message.content)) return;

  const [, matchedPrefix] = message.content.match(prefixRegex);

  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("There was an error executing that command.").catch(console.error);
  }
});
