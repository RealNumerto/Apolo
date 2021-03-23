const Dlang = require('discordbot-script')

const discordScript = require("discordbot-script")

const bot = new discordScript({
  token: process.env.TOKEN,
  prefix: ["$getServerVar[prefix]"]
});

const fs = require('fs');
const { notDeepStrictEqual } = require("assert");
const { time } = require("console");
const folders = fs.readdirSync("./commands/")

for (const files of folders) {
    const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

    for (const commands of folder) {
        const command = require(`./commands/${files}/${commands}`)
        bot.Command(command);
        console.log(`Loaded: ${command.name} | ${folders} folder - [${command.aliases}]`);
    }
}

///////////OVO SU VARIABLES I TU PISEM VAR KAO U DBD/////////
bot.Variables({
  msg: "0",
  rank: "1",
  req: "1000",
  lvl: "0",
  cash: "0",
  bank: "0",
  prefix: "!!",
  total: "0",
  warnings: "0",
  regmodlogs: "0",
})

////////BOT STATUS///////
bot.Status({
        0: {
            description: "👑Apolo Kingdom™👑 | !!help", 
            type: "PLAYING" 
        },
        1: {
            description:"$numberSeparator[$allMembersCount;,] clanova",
            type: "WATCHING"
        }
    }, 13000)

bot.MessageEvent()
bot.MessageEditEvent()
bot.onUserUpdate()

bot.JoinedCommand({
name: "805225522636390410",
code: `
$author[$serverName[];https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
$description[
👤 **|** Novi član:
**$username[]#$discriminator[]**
<@$authorID>
🙋 **|** Dobrodošao/la na __**$serverName[]**__
‼️ **|** Pre nego što počnes da se dopisuješ pročitaj:
<#805212375133061160>
🔢 **|** **$membersCount[human].** članova na serveru
☑️ **|** Zabavi se na serveru i uživaj]
$footer[$serverName[];https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
$thumbnail[$userAvatar[$author;png;true;512]]
$useChannel[805225522636390410]
`
})
bot.onJoined()

bot.UserUpdateCommand({
name: "817394678173270047",
description: "Promena taga",
code: `
{mention} je promenuo/la njegov/njen tag!
$title[User+Tag sada - {tag}]
$color[ff0000]
$thumbnail[$userAvatar[$get[ID]]]
$description[
Stari tag - **#{olddiscrim}**
Novi tag - **#{newdiscrim}**]

$let[ID;{id}]

$onlyIf[$checkCondition[$get[oldname]==$get[newname]]==true;]
$onlyIf[$checkCondition[$get[oldavatar]==$get[newavatar]]==true;]

$let[newname;{newname}]
$let[oldname;{oldname}]
$let[newavatar;{newavatar}]
$let[oldavatar;{oldavatar}]
`
})

bot.UserUpdateCommand({
name: "817394678173270047",
description: "Promena nicka",
code: `
{mention} je promenuo/la svoj nick!
$title[User+Tag sada - {tag}]
$color[ff0000]
$thumbnail[$userAvatar[$replaceText[$replaceText[$checkCondition[$get[ID]==undefined];true;$get[ID]];false;$get[ID]];png;true;512]]
$description[
Staro ime - **{oldname}**
Novo ime - **{newname}**]

$let[ID;{id}]

$onlyIf[$checkCondition[$get[olddiscrim]==$get[newdiscrim]]==true;]
$onlyIf[$checkCondition[$get[oldavatar]==$get[newavatar]]==true;]

$let[newdiscrim;{newdiscrim}]
$let[olddiscrim;{olddiscrim}]
$let[newavatar;{newavatar}]
$let[oldavatar;{oldavatar}]
`
})
//$onlyIf[$get[{newname}]!=$get[{oldname}];]//

//$userAvatar[$replaceText[$replaceText[$checkCondition[$get[ID]==undefined];true;$get[ID]];false;$get[ID]];png;true;512]//

////////BOT PING//////
bot.Command({
  name: "ping",
  code: `
  :white_check_mark: - Bot Ping : **$pingms** !
   
  Uptime: $replaceText[$replaceText[$replaceText[$uptime;d;d ];h;h ];m;m ]
  `
})

bot.Command({
  name: "@@changeprefix",
  code: `
  **The prefix has been changed to \`$message[1]\` sucessfully!**
    $setServerVar[prefix;$message[1]]
$argsCheck[1;**You must provide at least \`1\` argument**]
$onlyPerms[manageserver; **You need the \`{perms}\` permission to use this command.**]
`
})

bot.Command({
  name: "@@prefix",
  code: `
  Your Prefix is **$getServerVar[prefix]**
  `
})

bot.Command({
  name: "@@resetprefix",
  code: `
  Sucess
  $resetServerVar[prefix]
  $onlyPerms[manageserver; **You need the \`{perms}\` permission to use this command.**]
  `
})

bot.Command({
  name: "@top",
  code: `
  $author[Top Liste;https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
  $footer[$serverName[] | Brojanje je pocelo od 8.9.2021;https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
  $color[00ff00]
  $description[$addField[Top Liste;\`poruke\` **|** \`level\` **|** \`poeni\`]
  $addField[Komanda;Da vidis top liste sledeca je komanda: \`!!top <lista>\`]]
  $onlyIf[$message[1]!=poeni;{execute:poeni}]
  $onlyIf[$message[1]!=level;{execute:level}]
  $onlyIf[$message[1]!=poruke;{execute:poruke}]
  `
})

bot.ExecutableCommand({
  name: "poruke",
  code: `
  $author[Top Poruke;https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
  $footer[$serverName[];https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
  $addTimestamp
  $color[00ff00]
  $description[$replaceText[$userLeaderboard[msg;asc;\`{top}.\` **{tag}** • \`{value}\` poruka];";]]
  `
})

bot.ExecutableCommand({
  name: "level",
  code: `
  $author[Top Level;https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
  $footer[$serverName[];https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
  $addTimestamp
  $color[00ff00]
  $description[$replaceText[$userLeaderboard[rank;asc;\`{top}.\` **{tag}** • \`{value}\` level];";]]
  `
})

bot.ExecutableCommand({
  name: "poeni",
  code: `
  $author[Top Poeni;https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
  $footer[$serverName[];https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
  $addTimestamp
  $color[00ff00]
  $description[$replaceText[$userLeaderboard[lvl;asc;\`{top}.\` **{tag}** • \`{value}\` poena];";]]
  `
})

//////KOMANDA SA KOJOM DOBIJAM ROLE ID///////
bot.Command({
  name: "role",
  code: `
$findRole[$message[1]]
$onlyPerms[administrator;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{footer:$serverName[]}{color:ff0000}]
`
})

/////////SAY KOMANDA/////
bot.Command({
  name: "say",
  code: `
$channelSendMessage[$mentionedChannels[1];$replaceText[$message[];<#$mentionedChannels[1]>;]]
$onlyPerms[administrator;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{footer:$serverName[]}{color:ff0000}]
`
})

//////BOT DA POSALJE ANIMATED EMOJI//////
bot.Command({
  name: "emoji",
  code: `
<a:$message[]:$findEmote[$message[]]>
$deletecommand[]
$onlyPerms[administrator;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{footer:$serverName[]}{color:ff0000}]
`
})

/////KOMANDA DA DOBIJEM EMOJI ID/////////
bot.Command({  
  name: "emote",
  code: `
$findEmote[$message[]]
$onlyPerms[administrator;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{footer:$serverName[]}{color:ff0000}]
`
})

////////PREDLOG KOMANDA///////
bot.Command({
  name: "predlog",
  code: `
$useChannel[785258143882018836]
$author[PAZNJA!!!]
$title[Vreme je za glasanje!!!]
$color[$random[0;999999]]
$description[]
$addField[Dostupni odgovori;Ne <a:up:781134690060075008> **|** Da <a:down:781134657919778816>;true]
$addField[Kako glasati?;Kliknite nesto od ponudjenih reakcija dole;no]
$addField[Glasanje;Jedno glasanje po memberu. Ako hocete da promenite svoje misljenje onda kliknite reakciju koju ste prethodno stisnuli pa onda novu. Hvala :heart:;no]
$footer[Kada procitate sve onda glasajte!:https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
$addField[Tema:;**$message[]**;no]
$addReactions[781134690060075008;781134657919778816]
$argsCheck[>1;**nisi tacno napisao komandu - Probaj ovako: !!predlog {napisi sta hoces za glasanje}**]
`
})

/////KOMANDA ZA MENJANJE NICK-A/////
bot.Command({
name: "nick",
code: `
$title[Nick promenjen]
$color[$random[0;999999]]
$description[Nick od <@$mentioned[1]> je promenjen u **$messageSlice[>1]**]
$setNickname[$mentioned[1];$messageSlice[>1]]
$onlyIf[$message[2]!=;**Ukucaj neki nick da bi promenuo!!!**]
$onlyIf[$userExists[$mentioned[1]]==true;Pogresno napisana komanda. Probaj: **!!nick (@user) (nick)**. () ne trebas da koristis]
$onlyPerms[administrator;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{footer:Apolo Kingdom™}{color:ff0000}]
`
})

bot.Command({
  name: "@level",
  code: `
  Ucitava se....
  `
})

bot.Command({
  name: "@top",
  code: `
$author[Top Messages]
$description[$replaceText[$userLeaderboard[MC;asc;**$ordinal[{top}] : {tag} - $numberSeparator[{value}]$getVar[msg]**];";]]
$addTimestamp
$color[ffd700]
`
})

bot.Command({
  name: "reset",
  code: `
  Leveling System resetovan.....
  $resetUserVar[rank]
  $resetUserVar[req]
  $resetUserVar[lvl]
  $resetUserVar[msg]
$onlyPerms[administrator;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{footer:$serverName[]}{color:ff0000}]
  `
})

////////HELP KOMANDE//////
bot.Command({
  name: "@help",
  code: `
$title[Pomoc]
$footer[$serverName[];https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
$color[$random[0;999999]]
$description[
$addField[Komande za membere;<a:desno:800552273955782666> **$getServerVar[prefix]help clanovi** (Ovde su sve komande koje clanovi Apolo Kingdom-a mogu da koriste)]
$addField[Komande za staff;<a:desno:800552273955782666> **$getServerVar[prefix]help staff** (Ako si deo staffa moci ces da koristis ovu komandu)]]
$onlyIf[$message[1]!=clanovi;{execute:clanovi}]
$onlyIf[$message[1]!=staff;{execute:staff}]
$onlyIf[$message[1]!=nema;{execute:nema}]
`
})

bot.ExecutableCommand({
  name: "nema",
  code: `
  $title[Music Pomoc]
$footer[$serverName[] Music;https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
$color[$random[0;999999]]
$description[<a:desno:800552273955782666> ** $getServerVar[prefix]play** - Pustajte muziku u Voice Kanalu.
<a:desno:800552273955782666> ** $getServerVar[prefix]search** - Slicno kao \`$getServerVar[prefix]play\` samo sto ovde kada kucate koju muziku hocete bot vam ponudi vise opcija dok sa \`!!play\` bot pusti brvu muziku koju vidi.
<a:desno:800552273955782666> ** $getServerVar[prefix]pause** - Da pauzirate trenutnu muziku.
<a:desno:800552273955782666> ** $getServerVar[prefix]resume** - Da pokrenete pauziranu muziku.
<a:desno:800552273955782666> ** $getServerVar[prefix]queue** - Da vidite pesme/muzike koje su u playlisti.
<a:desno:800552273955782666> ** $getServerVar[prefix]clear-queue** - Da obrisete celu playlistu.
<a:desno:800552273955782666> ** $getServerVar[prefix]shuffle** - Da izmesate redosled playliste.
<a:desno:800552273955782666> ** $getServerVar[prefix]loop** - Da bi omogucili ili onemogucili ponavljanje muzike.
<a:desno:800552273955782666> ** $getServerVar[prefix]volume** - Da postavite jacinu muzike.
<a:desno:800552273955782666> ** $getServerVar[prefix]skip** - Da predjete na sledecu musizku.
<a:desno:800552273955782666> ** $getServerVar[prefix]stop** - Da stopirate svu muziku.]
  `
})

bot.ExecutableCommand({
  name: "clanovi",
  code: `
$title[Clanovi Pomoc]
$footer[$serverName[] - strana 1/2 (da vidis drugu stranu kucaj > !!help clanovi 2 <);https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
$color[$random[0;999999]]
$description[<a:desno:800552273955782666> ** $getServerVar[prefix]pitaj** - ako hoces da se zajebavas sa botom (odgovori su skroz random) (vecinom nemaju smisla).
<a:desno:800552273955782666> ** $getServerVar[prefix]procenat** - ako hoces da ti bot odgovori na pitanje u procentima. (odgovori su skroz random) (vecinom nemaju smisla).
<a:desno:800552273955782666> ** $getServerVar[prefix]avatar ili $getServerVar[prefix]av** - da vidis svoj ili neciji avatar
<a:desno:800552273955782666> ** $getServerVar[prefix]botinfo** - da dobije informacije o **Apolo™** botu.
<a:desno:800552273955782666> ** $getServerVar[prefix]poruke** (ne radi) - da vidite koliko poruka ste poslali.
<a:desno:800552273955782666> ** $getServerVar[prefix]poeni** (ne radi) - da vidite koliko poena imate.
<a:desno:800552273955782666> ** $getServerVar[prefix]level** (ne radi) - da vidite koji ste level.
<a:desno:800552273955782666> ** $getServerVar[prefix]profil** (ne radi) - da vidite profil od nekoga ili od sebe, vidite njegov/njen poene, levele i poruke koliko ima.
<a:desno:800552273955782666> ** $getServerVar[prefix]top** (ne radi) - Top liste poruka, levela i poena.
<a:desno:800552273955782666> ** $getServerVar[prefix]userinfo** - Informacije o nekome (kada je usao/la na server, kada je napravljen acc).
<a:desno:800552273955782666> ** $getServerVar[prefix]serverinfo** - Informacije o serveru.
<a:desno:800552273955782666> ** $getServerVar[prefix]kpm** - Kamen, Papir, Makaze igra.]
$onlyIf[$message[2]!=2;{execute:clanovi2}]
`
})

bot.ExecutableCommand({
  name: "clanovi2",
  code: `
  $title[Pomoc Clanovi]
  $footer[$serverName[] - strana 2/2;https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
  $color[$random[0;999999]]
  $description[<a:desno:800552273955782666> **Trenutno je ova stranica prazna. Nove komande ce biti uskoro dodate. Hvala.**]
  `
})

bot.ExecutableCommand({
  name: "staff",
  code: `
$title[Staff Pomoc]
$footer[$serverName[];https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
$color[$random[0;999999]]
$description[<a:desno:800552273955782666> ** $getServerVar[prefix]obrisi** ili **$getServerVar[prefix]obrisati** - Ova komanda je za brisanje poruka.
<a:desno:800552273955782666> ** $getServerVar[prefix]mute** - da mutirtas nekoga na neko vreme.
<a:desno:800552273955782666> ** $getServerVar[prefix]unmute** - da unmutiras nekoga.
<a:desno:800552273955782666> ** $getServerVar[prefix]ban** - da banujes nekoga.
<a:desno:800552273955782666> ** $getServerVar[prefix]unban** - da unbanujes nekoga.
<a:desno:800552273955782666> ** $getServerVar[prefix]lock** - da zakljucas trenutni kanal.
<a:desno:800552273955782666> ** $getServerVar[prefix]unlock** - da otkljucas trenutni kanal.
<a:desno:800552273955782666> ** $getServerVar[prefix]warn** - da upozoris nekoga.
<a:desno:800552273955782666> ** $getServerVar[prefix]setlogs** - da setujes log kanal.]
$onlyForRoles[805343988344422440;805225433191940116;805220500728578088;805249119786369024;805395974759383042;**:x: Nemas dozvolu da koristis ovu komandu!!!**]
`
})

///////TAG BOTA ZA HELP///////
bot.SpaceCommand({
name: "mentionhelp",
code: `
Pozdrav <@$authorID> Moj prefix na ovom serveru je \`$getServerVar[prefix]\`, a da vidis sve komande kucaj \`$getServerVar[prefix]help\`
$onlyIfMessageContains[<@!$client[id]>;<@$client[id]>;]
`
})

//bot.SpaceCommand({//
//  name: "leveling",//
//  code: `//
///$setUserVar[req;$multi[$getUserVar[req;$replaceText[$findUser[$message[]];undefined;$authorID]];2]]//
 // $setUserVar[rank;$sum[$getUserVar[rank;$replaceText[$findUser[$message[]];undefined;$authorID]];1]]//
//  $onlyIf[$getUserVar[lvl;$replaceText[$findUser[$message[]];undefined;$authorID]]>=$getUserVar[req;$replaceText[$findUser[$message[]];undefined;$authorID]];]//
//  $setUserVar[msg;$sum[$getUserVar[msg];1]]//
//  $setUserVar[lvl;$sum[$getUserVar[lvl];$random[10;30]]]//
//  `//
///})/////

bot.Command({
  name: "@info1",
  code: `
  $author[INFORMACIJE;https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $thumbnail[https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $footer[$serverName[];https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $color[ffff00]
  $description[**Ukratko. $serverName[] je jedan od balkanskih servera.
   
  Gde ljudi mogu da se upoznaju, sprijatelje i druze.
   
  Server je za sve ljude, svi su dobrodosli!
   
  Na serveru ima dosta stvari koji su objasnjeni ispod.
   
  Morate postovati pravila inace cete biti upozoreni(warn). Skupljanjem warnova moze doci do posledica.
   
  Pravila procitajte u <#685377074856198155>**]
  `
})

bot.Command({
  name: "@info2",
  code: `
  $author[POSLEDICE;https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $thumbnail[https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $footer[$serverName[];https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $color[ffff00]
  $description[**Kao sto je receno iznad. Ako krsite pravila dobicete opomene(warn).
   
  3 Warna je Mute na jedan dan!
   
  6 Warna je Ban na 10 dana!**]
  `
})

bot.Command({
  name: "@info3",
  code: `
  $author[ROLOVI;https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $thumbnail[https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $footer[$serverName[];https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $color[ffff00]
  $description[**Na serveru ima dosta rolova:
   
  1. Besplatni rolovi (Self Roles)
  - Njih mozete uzeti u <#787766723045621770>!
   
  2. Rolovi koje mozete kupiti. (Ne pravim parama)
  - Njih dobijate preko <@292953664492929025> bota u <#787676423564296237>!**
   
  <@&685133595073183848> **Pristum specijalnim kanalima. | Cena: 💸90.000**
   
  <@&685134373309120585> **Mozete postavljati slike u <#784835518193336330>. | Cena: 💸70.000**
   
  <@&685134182615089221> **Dobijete svoju privatnu sobu. (Privatnu sobu trazite od <@452811602723471390> da vam napravi). | Cena: 💸50.000**
   
  <@&685133994383114241> **Mozes menjati svoj nick. | Cena: 💸30.000**
   
  <@&685136975434350593> **God role. Da se malo odvojite od drugih. | Cena: 💸10.000**]
  `
})

bot.Command({
  name: "@info4",
  code: `
  $author[BOOSTOVI;https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $thumbnail[https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $footer[$serverName[];https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $color[ffff00]
  $description[**Ako boostate $serverName[] dobijate sledece privilegije:
   
  1. Dobicete odmah role <@&685133793484603427> sa kojim necete imati slowmode u <#784835518193336330> i dozvolu da saljete slike u <#784835518193336330>.
   
  2. Vase ime ce se prikazati u <#785266133145616394> da svi vide.
   
  3. Vece sanse da postanete deo Staff-a.**]
  `
})

bot.Command({
  name: "@pravila",
  code: `
  $author[PRAVILA!!!;https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $footer[$serverName[];https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $description[
  $addField[7. Postujte Discord TOS !!;----------]
  $addField[6. Zabranjen je nacionalizam i rasizam !!;----------]
  $addField[5. Zabranjen je spam !!;----------]
  $addField[4. Zabranjen je earrape u voice kanalima !!;----------]
  $addField[3. Zabranjen je NSFW u serveru (pornografija) !!;----------]
  $addField[2. Zabranjeno DM reklamiranje na serveru !!;----------]
  $addField[1. Bez trazenja za bilo kakav role !!;----------]]
  `
  })

bot.Command({
  name: "@info1",
  code: `
  $author[Informacije o serveru...;https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
  $footer[$serverName[];https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
$description[:white_check_mark: Dobrodošli na Apolo Kingdom:tm: discord server.
 
:white_check_mark: Server je aktivno počeo sa radom :one:.januara :two::zero::two::one:.godine.
 
:white_check_mark: Ovaj server je napravljen u svrhu upoznavanja i okupljanja ljudi svih nacionalnosti na jedno mesto.
 
:white_check_mark: Imamo Custom bota, koji se zove Apolo:tm:.
 
:white_check_mark: Aktivan staff 24/7.
 
:white_check_mark: Giveawayevi.
 
:white_check_mark: Prijave za staff.
 
:white_check_mark: U glavnom na serveru su svi dobrodošli, ali pravila i staff na serveru se moraju poštovati inače ćete biti warnovani ili muteovani, pravila i posledice će biti navedeni u ovom kanalu.
 
:white_check_mark: Server ima još puno opcija zabave, koje ćete sami otkriti.]
  `
})

bot.Command({
  name: "@info2",
  code: `
  $author[Pravila;https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
  $footer[$serverName[];https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
$description[:warning: Zabranjeno je vredjanje, omalovažavanje, rasizam, psovanje.

 :warning: Zabranjeno je spamovanje.

 :warning: Zabranjeno je duvati u mikrofon

 :warning: Zabranjeno je igranje igrica u glavnom chatu.

 :warning: Zabranjeno je raspravljati se sa staff timom o postojećim pravilima.

 :warning: Zabranjeno je puštati muziku u glavnom chatu.

 :warning:  Zabranjen DM Advertising na serveru.]
  `
})

bot.Command({
  name: "@info3",
  code: `
  $author[Posledice;https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
  $footer[$serverName[];https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
$description[:no_entry_sign: Ispod navedene posledice kršenja pravila koji su navedeni iznad ove poruke.

:no_entry_sign: 𝟐 𝐖𝐚𝐫𝐧𝐚 = 𝟏𝟎 𝐦𝐢𝐧𝐮𝐭𝐚 𝐦𝐮𝐭𝐞.

:no_entry_sign: 𝟓 𝐖𝐚𝐫𝐧𝐨𝐯𝐚 = 𝐁𝐚𝐧.

:radioactive:Vrlo jednostavno i logično ne kršite navedena pravila gore i sve će biti okej :).]
  `
})

bot.Command({
  name: "dono",
  code: `
  $author[Donacije;https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
  $footer[Ko donira treba da se javi Numerto#2542 sa dokazom donacije. Hvala.;https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
  $description[Ako neko hoće da podrži server novčano, ispod vam je paypal link na kome možete poslati koji evro. Hvala. <a:srce:800552497902256148> 
**Ako donirate dobićete <@&806208890990755850> role. Role ima jako lepe privilegije.** <a:srce:800552497902256148> 
<a:desno:800552273955782666> https://paypal.me/djogo023 <a:levo:802530795881234462>]
  `
})
