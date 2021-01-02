const Dlang = require('discordbot-script')

const discordScript = require("discordbot-script")

const bot = new discordScript({
  token: "Nzg1MjUwNjAyMjU0MjA0OTk4.X81HnA.a7FpditZ9A6yrFXYHQW_b3wyheA",
  prefix: ["*"]
});

const fs = require('fs');
const {
    notDeepEqual
} = require("assert");
const {
    time
} = require("console");
const folders = fs.readdirSync("./commands/")

for (const files of folders) {
    const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

    for (const commands of folder) {
        const command = require(`./commands/${files}/${commands}`)
        bot.Command({
            name: command.name,
            aliases: command.aliases,
            description: command.description,
            api: command.api,
            code: command.code,
        })
    }
}

///////////OVO SU VARIABLES I TU PISEM VAR KAO U DBD/////////
bot.Variables({
  prefix: "*",
  autounmute: "no",
  msg: "0",
  rank: "1",
  req: "1000",
  lvl: "0",
  pare: "0",
  banka: "0",
  kuce: "1",
  firme: "0",
  posao: "pekar"
})

////////BOT STATUS///////
bot.Status({
        0: {
            description: "Moj prefix je *", 
            type: "PLAYING" 
        }, 
        1: {
            description: "kucaj *help za sve komande", 
            type: "PLAYING" 
        },
        2: {
            description:"$numberSeparator[$allMembersCount;,] clanova",
            type: "WATCHING"
        }
    }, 13000)

bot.MessageEvent()
bot.MessageEditEvent()

///////EKONOMIJA///////
bot.Command({
  name: "novcanik",
  code: `
  $title[$username[$replaceText[$findUser[$message[]];undefined;$authorID]]#$discriminator[$replaceText[$findUser[$message[]];undefined;$authorID]] novcanik]
  $description[
  **$getUserVar[pare;$replaceText[$findUser[$message[]];undefined;$authorID]]** dinara u novcaniku.]
  `
})

bot.Command({
  name: "banka",
  code: `
  $title[$username[$replaceText[$findUser[$message[]];undefined;$authorID]]#$discriminator[$replaceText[$findUser[$message[]];undefined;$authorID]] bankovni racun]
  $description[
  **$getUserVar[banka;$replaceText[$findUser[$message[]];undefined;$authorID]]** dinara u novcaniku.]
  `
})

bot.Command({
  name: "posao",
  code: `
  $title[$username[$authorID]#$discriminator[$authorID] odradio/la si svoju smenu na poslu.]
  $description[Odradio/la si smenu kao **$getUserVar[posao]** i zaradio/la si **$random[10;150]** dinara!]
  $setUserVar[pare;$random[10;150]]
  $cooldown[5s;Ovu komandu mozes opet iskoristiti za **{time}**]
  `
})

//////LISTA EMOJIA////
bot.ExecutableCommand({
  name: "list",
  code: `
$title[Emoji List]
$footer[Bice i imena obicnih emojia]
$color[$random[0;999999]]
$description[Za <a:amongus_twerk:$findEmote[amongus_twerk]> kucaj **-emoji amongus_twerk**
Za <a:ping_rage:$findEmote[ping_rage]> kucaj **-emoji ping_rage**
Za <a:banned:$findEmote[banned]> kucaj **-emoji banned**
Za <a:partner:$findEmote[partner]> kucaj **-emoji partner**
Za <a:nitro:$findEmote[nitro]> kucaj **-emoji nitro**]
$onlyForRoles[685126634738679826;**:x: Nemas dozvolu da koristis ovu komandu!!!**]
$onlyIf[$message[2]!=2;{execute:2}]
`
})

bot.ExecutableCommand({
  name: "2",
  code: `
  hello
  $onlyForRoles[685126634738679826;**:x: Nemas dozvolu da koristis ovu komandu!!!**]
  `
})

//////KOMANDA SA KOJOM DOBIJAM ROLE ID///////
bot.Command({
  name: "role",
  code: `
$findRole[$message[1]]
$onlyForRoles[685126634738679826;**:x: Nemas dozvolu da koristis ovu komandu!!!**]
`
})

/////////SAY KOMANDA/////
bot.Command({
  name: "say",
  code: `
$channelSendMessage[$mentionedChannels[1];$replaceText[$message[];<#$mentionedChannels[1]>;]]
$onlyForRoles[685126634738679826;**:x: Nemas dozvolu da koristis ovu komandu!!!**]
`
})

//////BOT DA POSALJE ANIMATED EMOJI//////
bot.Command({
  name: "emoji",
  code: `
<a:$message[]:$findEmote[$message[]]>
$deletecommand[]
$onlyForRoles[685126634738679826;**:x: Nemas dozvolu da koristis ovu komandu!!!**]
$onlyIf[$message[1]!=list;{execute:list}]
$onlyIf[$message[1]!=;Napisi ime nekog emojia. Lista emojia \`-emoji list\`]
`
})

////////HELP KOMANDE//////
bot.Command({
  name: "help",
  code: `
$title[Pomoc]
$footer[Grimsy™ Community;https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
$color[$random[0;999999]]
$description[
$addField[Komande za membere;<a:point:781135170052292609> ***help clanovi** (ovde su sve komande koje clanovi Grimsy Community-a mogu da koriste)]
$addField[Komande za staff;<a:point:781135170052292609> ***help staff** (ako si deo staffa moci ces da koristis ovu komandu)]]
$onlyIf[$message[1]!=clanovi;{execute:clanovi}]
$onlyIf[$message[1]!=staff;{execute:staff}]
$onlyForChannels[685378188322537475;695712075758043136;695712157009969254;<@$authorID> komande koristi u <#685378188322537475>!]
`
})

bot.ExecutableCommand({
  name: "clanovi",
  code: `
$title[Clanovi Pomoc]
$footer[Grimsy™ Community - strana 1/2 (da vidis drugu stranu kucaj > *help clanovi 2 <);https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
$color[$random[0;999999]]
$description[<a:point:781135170052292609> ** *predlog** - ova komanda je da predlozite neku ideju za server.
<a:point:781135170052292609> ** *pitaj** - ako hoces da se zajebavas sa botom u <#685378188322537475> (odgovori su skroz random).
<a:point:781135170052292609> ** *procenat** - ako hoces da ti bot odgovori na pitanje u procentima. (odgovori su skroz random)
<a:point:781135170052292609> ** *avatar ili *av** - da vidis svoj ili neciji avatar
<a:point:781135170052292609> ** *botinfo** - da dobije informacije o **Grimsy™** botu.
<a:point:781135170052292609> ** *poruke** - da vidite koliko poruka ste poslali.
<a:point:781135170052292609> ** *level** - da vidite koliko levela imate.
<a:point:781135170052292609> ** *rank** - da vidite koji ste rank.
<a:point:781135170052292609> ** *profil** - da vidite profil od nekoga ili od sebe, vidite njegov/njen level, rank i poruke koliko ima.
<a:point:781135170052292609> ** *userinfo** - Informacije o nekome (kada je usao/la na server, kada je napravljen acc).]
$onlyIf[$message[2]!=2;{execute:clanovi2}]
$onlyForChannels[685378188322537475;695712075758043136;695712157009969254;<@$authorID> komande koristi u <#685378188322537475>!]
`
})

bot.ExecutableCommand({
  name: "clanovi2",
  code: `
  $title[Pomoc Clanovi]
  $footer[Grimsy™ Community - strana 2/2;https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $color[$random[0;999999]]
  $description[<a:point:781135170052292609> **Trenutno je ova stranica prazna. Nove komande ce biti uskoro dodate. Hvala.**]
  `
})

bot.ExecutableCommand({
  name: "staff",
  code: `
$title[Staff Pomoc]
$footer[Grimsy™ Community;https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
$color[$random[0;999999]]
$description[<a:point:781135170052292609> ** *obrisi** - Ova komanda je za brisanje poruka
<a:point:781135170052292609> ** *mute** - da mutiras nekoga na neko vreme
<a:point:781135170052292609> ** *unmute** - da unmutiras nekoga
<a:point:781135170052292609> ** *ban** - da banujes nekoga
<a:point:781135170052292609> ** *unban** - da unbanujes nekoga]
$onlyForChannels[685378188322537475;695712075758043136;695712157009969254;<@$authorID> komande koristi u <#685378188322537475> ili <#695712075758043136>!]
$onlyForRoles[685126634738679826;**:x: Nemas dozvolu da koristis ovu komandu!!!**]
`
})

////////8 BALL POLL/PITAJ BOTA////////
bot.Command({
  name: "pitaj",
  code: `
$title[$username[]#$discriminator[$authorID] je postavio/la pitanje]
$footer[Pitanje postavio/la $username[]#$discriminator[$authorID];$userAvatar[$authorID]]
$color[772773]
$description[
$addField[Odgovor bota:;$randomText[Da;Ne;Mozda;Ne moze;Naravno;Naravno da mozes;Kako da ne;Logicno;Moguce;Mozda;Ne znam;Nije mi jasno, ponovi pitanje;Hteo si odgovor, evo ti ga xD;Dobro;Lose;Ok;Nece;Hoce;Naravno da hoce;Ne verujem;jeste;nije;nema;nikako;ma kakvi;nema tebi spasa;Mozes da se kladis u to;Numero je najjaci;kobrad te voli;super;oladi;mars;nema teorije;hoces;neces;nemas sanse;nema sanse;100%;50%;10%;20%;30%;40%;60%;70%;80%;90%;ima;nema;laze;nije tako;tako je;moze;ne moze;mozes;ne mozes;naravno da ne moze;naravno da hoce;malo;naravno da je tako;nop;dap;yep;no no;da daaaa;nema sanse;ma kakvi;si ti lud?;znaci boze];no]]
$addField[Pitanje:;$message[];no]
$argsCheck[>1;Napisi neko pitanje koje ti padne na pamet]
$onlyForChannels[685378188322537475;695712075758043136;695712157009969254;<@$authorID> komande koristi u <#685378188322537475>!]
`
})

bot.Command({
   name: "procenat",
   code: `
$title[$username[]#$discriminator[$authorID] je postavio/la pitanje]
$footer[Pitanje postavio/la $username[]#$discriminator[$authorID];$userAvatar[$authorID]]
$color[772773]
$description[]
$addField[Odgovor bota:;$random[0;100]%;no]
$addField[Pitanje:;$message[];no]
$argsCheck[>1;Napisi neko pitanje koje ti padne na pamet]
$onlyForChannels[685378188322537475;695712075758043136;695712157009969254;<@$authorID> komande koristi u <#685378188322537475>!]
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
$footer[Kada procitate sve onda glasajte!:https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
$addField[Tema:;**$message[]**;no]
$addReactions[781134690060075008;781134657919778816]
$argsCheck[>1;**nisi tacno napisao komandu - Probaj ovako: *predlog {napisi sta hoces za glasanje}**]
$onlyForChannels[685378188322537475;695712075758043136;695712157009969254;<@$authorID> komande koristi u <#685378188322537475>!]
`
})

///////TAG BOTA ZA HELP///////
bot.SpaceCommand({
name: "mentionhelp",
code: `
Pozdrav <@$authorID> Moj prefix je \`*\`, a da vidis sve komande kucaj \`*help\`
$onlyIfMessageContains[<@!$client[id]>;<@!$client[id]>;]
`
})

////////RANDOM EMOJI I REACTION KADA NEKO NAPISE MOJ NICK/////////
bot.SpaceCommand({
  name: "numertotag",
  code: `
  $addCmdReactions[781135110715211786]
  $onlyIfMessageContains[numero;Numero;<@452811602723471390>;Нумеро;нумеро;@ℕ𝕦𝕞𝕖𝕣𝕠;]
  `
})

bot.SpaceCommand({
  name: "randomemoji",
  code: `
  $setUserVar[req;$multi[$getUserVar[req;$replaceText[$findUser[$message[]];undefined;$authorID]];2]]
  Cestitam <@$replaceText[$findUser[$message[]];undefined;$authorID]>!!! Rank up si se do Rank: **$getUserVar[rank;$replaceText[$findUser[$message[]];undefined;$authorID]]**
  $setUserVar[rank;$sum[$getUserVar[rank;$replaceText[$findUser[$message[]];undefined;$authorID]];1]]
  $onlyIf[$getUserVar[lvl;$replaceText[$findUser[$message[]];undefined;$authorID]]>=$getUserVar[req;$replaceText[$findUser[$message[]];undefined;$authorID]];]
  $addCmdReactions[$randomText[781135052217909278;781134586045923368;781134148899045386;781134197397127211;781134234529562625;781134276682842122;781134320089563147;781134370840641548;781134426431422464;781134515400605767;781134551123623938;781134619927642142;781134722562654231;781134754115747860;781134791993983016;781134829597097994;781134867320143882;781134902975397918;781134930880626690;781134959838494731;781134985339600897;781135015702167562;781135089924702218;781135138931081216;781135229557145602;781135258710966273;781135400952528916;781135422792663040;781135447609835550;781135478325641237;781135540812382258;781135584822689822;781135639264493568;781135728603561994;781135753668460574;781135783389429761]]
  $onlyIf[$random[1;25]==3;]
  $setUserVar[msg;$sum[$getUserVar[msg];1]]
  $setUserVar[lvl;$sum[$getUserVar[lvl];$random[10;30]]]
  `
})

/////KOMANDA DA DOBIJEM EMOJI ID/////////
bot.Command({  
  name: "emote",
  code: `
$findEmote[$message[]]
`
})

//////PURGE KOMANDA/////////
bot.Command({
  name: "obrisi",
  code: `
  $title[Poruke Obrisane!!!]
  $color[$random[0;999999]]
  $description[Obrisano **$message[1]** poruka]
  $clear[$message[]]
  $onlyIf[$message[1]!=;Pogresno napisana komanda. Probaj ** *obrisi (neki broj)**. () ne trebas da koristis]
  $onlyPerms[managemessages;**:x: Nemas dozvolu da koristis ovu komandu!!!**]
  `
})

/////KAO INFO O BOTU//////
bot.Command({
  name: "botinfo",
  code: `
  $title[Informacije]
$color[$random[0;999999]]
$description[:eject: O BOTU :eject:

:crown: Kodirao: **<@452811602723471390>**

:crown: Bot Vlasnik: **<@452811602723471390>**

:globe_with_meridians: Verzija bota: **1.2.4**]
$onlyForChannels[685378188322537475;695712075758043136;695712157009969254;<@$authorID> komande koristi u <#685378188322537475>!]
`
})

///////UNMUTE I MUTE KOMANDA///////
bot.Command({
name: "mute",
code: `
$channelSendMessage[$channelID[];<@$mentioned[1]> je automatski unmutiran/a posle **$message[2]**]
$takeRole[$mentioned[1];$roleID[Muted]]
$onlyIf[$getUserVar[autounmute;$mentioned[1]]==yes;]
$replyIn[$message[2]]
$onlyIf[$hasRole[$mentioned[1];$roleID[Muted]]!=;]
$channelSendMessage[$channelID[];<@$mentioned[1]> je mutiran na **$message[2]**.
Razlog: **$messageSlice[>2]**]
$giveRole[$mentioned[1];$roleID[Muted]]
$setUserVar[autounmute;yes;$mentioned[1]]
$argsCheck[>2;Nisi dobro napisao komandu. Probaj \`*mute (@username) (na koliko mute) (razlog).\`]
$onlyForRoles[685126634738679826;**:x: Nemas dozvolu da koristis ovu komandu!!!**]
`
})

bot.Command({
  name: "unmute",
  code: `
  $title[Unmute!!!]
  $color[$random[0;999999]]
  $description[<@$mentioned[1]> je unmutiran/a
Razlog: **$messageSlice[>1]**]
  $takeRole[$mentioned[1];$roleID[Muted]]
  $setUserVar[autounmute;no;$mentioned[1]]
  $onlyIf[$getUserVar[autounmute;$mentioned[1]]==yes;$username[$mentioned[1]]#$discriminator[$mentioned[1]] nije mutiran/a]
  $onlyIf[$hasRole[$mentioned[1];$roleID[Muted]]!=;Ova osoba nije mutirana]
  $argsCheck[>1;Pogresno napisana komanda. Probaj ovako \`*unmute (@user) (razlog)\`]
  $onlyForRoles[685126634738679826;**:x: Nemas dozvolu da koristis ovu komandu!!!**]
  `
})

//////AVATAR KOMANDA//////
bot.Command({
  name: "avatar",
  aliases: ["avatar", "av"],
  code: `
  $author[$username[$replaceText[$findUser[$message[]];undefined;$authorID]]#$discriminator[$replaceText[$findUser[$message[]];undefined;$authorID]];$userAvatar[$replaceText[$findUser[$message[]];undefined;$authorID]]]
  $title[Avatar]
  $color[$random[0;999999]]
  $description[]
  $image[$replaceText[$userAvatar[$replaceText[$findUser[$message[]];undefined;$authorID]];.webp?size=128;.png?size=4096]]
  $onlyForChannels[685378188322537475;695712075758043136;695712157009969254;<@$authorID> komande koristi u <#685378188322537475>!]
  `
})

bot.Command({
  name: "av",
  aliases: ["avatar", "av"],
  code: `
  $author[$username[$replaceText[$findUser[$message[]];undefined;$authorID]]#$discriminator[$replaceText[$findUser[$message[]];undefined;$authorID]];$userAvatar[$replaceText[$findUser[$message[]];undefined;$authorID]]]
  $title[Avatar]
  $color[$random[0;999999]]
  $description[]
  $image[$replaceText[$userAvatar[$replaceText[$findUser[$message[]];undefined;$authorID]];.webp?size=128;.png?size=4096]]
  $onlyForChannels[685378188322537475;695712075758043136;695712157009969254;<@$authorID> komande koristi u <#685378188322537475>!]
  `
})

////////BAN I UNBAN KOMANDA (LOGOVI SU POSLE SVAKE KOMANDE)///////
bot.Command({
  name: "ban",
  code: `
$channelSendMessage[$channelID[];<@$findUser[$message[1]]> je banovan.
Razlog: **$messageSlice[>1]**]
$ban[$findUser[$message[1]];$messageSlice[>1]]
$onlyIf[$findUser[$message[1]]!=$ownerID;{title:Ban Error}{description:Dobar pokusaj. Ne mozes da banujes server vlasnika.}]
$onlyIf[$findUser[$message[1]]!=$client[id];{title:Ban Error}{description:Banaj me ako mozes xD. Ne mogu ja da banam sam sebe.}]
$onlyIf[$findUser[$message[1]]!=$authorID;{title:Ban Error}{description:Ne mozes da banujes sebe. LoL}]
$argsCheck[>1;Nisi dobro napisao komandu. Probaj \`*ban (@username) (razlog).\`]
$onlyForRoles[685126634738679826;685127195395489880;**:x: Nemas dozvolu da koristis ovu komandu!!!**]
`
})

bot.Command({
  name: "ban",
  code: `
$channelSendMessage[686122844949970965;{title:User Banovan}{description:<@$findUser[$message[1]]> je banovan.
Razlog: **$messageSlice[>1]**}{footer:Banovan/a od strane $username[$authorID]#$discriminator[$authorID]}]
$onlyIf[$findUser[$message[1]]!=$ownerID;]
$onlyIf[$findUser[$message[1]]!=$client[id];]
$onlyIf[$findUser[$message[1]]!=$authorID;]
$argsCheck[>1;]
$onlyForRoles[685126634738679826;685127195395489880;]
`
})

bot.Command({
  name: "unban",
  code: `
  $channelSendMessage[$channelID[];**$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]** je unbanovan.
Razlog: **$messageSlice[>1]**]
$unban[$message[1];$messageSlice[>1]]
$argsCheck[>1;Nisi dobro napisao komandu. Probaj \`*unban (USER ID) (razlog).\`]
$onlyForRoles[685126634738679826;**:x: Nemas dozvolu da koristis ovu komandu!!!**]
`
})

bot.Command({
  name: "unban",
  code: `
  $channelSendMessage[686122844949970965;{title:User Unbanovan}{description:**$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]** je unbanovan
Razlog: **$messageSlice[>1]**}{footer:Unbanovan/a od strane $username[$authorID]#$discriminator[$authorID]}]
$argsCheck[>1;]
$onlyForRoles[685126634738679826;]
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
$onlyIf[$userExists[$mentioned[1]]==true;Nisi dobro napisao komandu. Probaj ovako ***nick (@user) (nick)**]
$onlyForRoles[685126634738679826;**:x: Nemas dozvolu da koristis ovu komandu!!!**]
`
})

//////LEVELING SYSTEM/////
bot.Command({
  name: "poruke",
  code: `
  $title[$username[$replaceText[$findUser[$message[]];undefined;$authorID]]#$discriminator[$replaceText[$findUser[$message[]];undefined;$authorID]] broj poruka]
  $color[$random[0;999999]]
  $description[
  Ukupno poruka poslato od strane <@$replaceText[$findUser[$message[]];undefined;$authorID]>:
  **$getUserVar[msg;$replaceText[$findUser[$message[]];undefined;$authorID]]** poruka]
  $onlyForChannels[685378188322537475;695712075758043136;695712157009969254;<@$authorID> komande koristi u <#685378188322537475>!]
  `
})

bot.Command({
  name: "level",
  code: `
  $title[$username[$replaceText[$findUser[$message[]];undefined;$authorID]]#$discriminator[$replaceText[$findUser[$message[]];undefined;$authorID]] Level]
  $color[$random[0;999999]]
  $description[
  <@$replaceText[$findUser[$message[]];undefined;$authorID]> ima: **$getUserVar[lvl;$replaceText[$findUser[$message[]];undefined;$authorID]]** levela!!!]
  $onlyForChannels[685378188322537475;695712075758043136;695712157009969254;<@$authorID> komande koristi u <#685378188322537475>!]
  `
})

bot.Command({
name: "leaderboard",
code: `
$userLeaderboard[msg;asc]
$onlyForChannels[685378188322537475;695712075758043136;695712157009969254;<@$authorID> komande koristi u <#685378188322537475>!]
$onlyForRoles[685126634738679826;**❌ Nemas dozvolu da koristis ovu komandu**]
`
})

bot.Command({
  name: "rank",
  code: `
  $title[$username[$replaceText[$findUser[$message[]];undefined;$authorID]]#$discriminator[$replaceText[$findUser[$message[]];undefined;$authorID]] Rank]
  $color[$random[0;999999]]
  $description[
  <@$replaceText[$findUser[$message[]];undefined;$authorID]> rank je **$getUserVar[rank;$replaceText[$findUser[$message[]];undefined;$authorID]]**
  Za rank up potrebno je **$getUserVar[lvl;$replaceText[$findUser[$message[]];undefined;$authorID]]/$getUserVar[req;$replaceText[$findUser[$message[]];undefined;$authorID]]** levela skupiti!!!]
  $replyIn[1s]
  $onlyForChannels[685378188322537475;695712075758043136;695712157009969254;]
  `
})

bot.Command({
  name: "rank",
  code: `
  Ucitava se....
  $onlyForChannels[685378188322537475;695712075758043136;695712157009969254;<@$authorID> komande koristi u <#685378188322537475>!]
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
  $onlyForRoles[685126634738679826;**:x: Nemas dozvolu da koristis ovu komandu!!!**]
  `
})

bot.Command({
  name: "profil",
  code: `
  $title[$username[$replaceText[$findUser[$message[]];undefined;$authorID]]#$discriminator[$replaceText[$findUser[$message[]];undefined;$authorID]] profil!!!]
  $color[$random[0;999999]]
  $description[
  $addField[Broj Poruka:;**$getUserVar[msg;$replaceText[$findUser[$message[]];undefined;$authorID]]**]
  $addField[Broj Levela:;**$getUserVar[lvl;$replaceText[$findUser[$message[]];undefined;$authorID]]**]
  $addField[Rank:;**$getUserVar[rank;$replaceText[$findUser[$message[]];undefined;$authorID]]**]]
  $onlyForChannels[685378188322537475;695712075758043136;695712157009969254;<@$authorID> komande koristi u <#685378188322537475>!]
  `
})

bot.Command({
  name: "userinfo",
  code: `
  $author[$username[$replaceText[$findUser[$message[]];undefined;$authorID]]#$discriminator[$replaceText[$findUser[$message[]];undefined;$authorID]] Info;$userAvatar[$replaceText[$findUser[$message[]];undefined;$authorID]]]
  $description[<@$replaceText[$findUser[$message[]];undefined;$authorID]>
  $addField[User ID;$replaceText[$findUser[$message[]];undefined;$authorID]]
  $addField[Napravljen acc:;$creationTime[$replaceText[$findUser[$message[]];undefined;$authorID];user]
  $creationDate[$replaceText[$findUser[$message[]];undefined;$authorID];user]]
  $addField[Usao/la na server:;$creationTime[$replaceText[$findUser[$message[]];undefined;$authorID];member]
  $creationDate[$replaceText[$findUser[$message[]];undefined;$authorID];member]]
  $addField[Najveci role:;<@&$highestRole[$replaceText[$findUser[$message[]];undefined;$authorID]]>]]
  `
})

bot.Command({
  name: "@info1",
  code: `
  $author[INFORMACIJE;https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $thumbnail[https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $footer[Grimsy™ Community;https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $color[ffff00]
  $description[**Ukratko. Grimsy™ Community je jedan od balkanskih servera.
   
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
  $footer[Grimsy™ Community;https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
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
  $footer[Grimsy™ Community;https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
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
  $footer[Grimsy™ Community;https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $color[ffff00]
  $description[**Ako boostate Grimsy™ Community dobijate sledece privilegije:
   
  1. Dobicete odmah role <@&685133793484603427> sa kojim necete imati slowmode u <#784835518193336330> i dozvolu da saljete slike u <#784835518193336330>.
   
  2. Vase ime ce se prikazati u <#785266133145616394> da svi vide.
   
  3. Vece sanse da postanete deo Staff-a.**]
  `
})

bot.Command({
  name: "@image",
  code: `
  $color[ffff00]
  $description[]
  $image[https://media.discordapp.net/attachments/685892246251241605/787473063406207006/standard.gif]
  `
})

bot.Command({
  name: "@pravila",
  code: `
  $author[PRAVILA!!!;https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
  $footer[Grimsy™ Community;https://cdn.discordapp.com/attachments/685892246251241605/792385125090066442/grimsy_logo_gif_3.gif]
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
  name: "@lol",
  code: `
  aloo
  `
})

bot.Command({
name: "invites",
code: `
$inviteInfo[discord.gg/AyhUg68Hl;author]
`
})