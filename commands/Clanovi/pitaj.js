module.exports = ({
  name: "pitaj",
  aliases: "pitanje",
  code: `
$title[$username[]#$discriminator[$authorID] je postavio/la pitanje]
$footer[Pitanje postavio/la $username[]#$discriminator[$authorID];$userAvatar[userID;png;true;512]]
$color[772773]
$description[
$addField[Odgovor bota:;$randomText[Da;Ne;Mozda;Ne moze;Naravno;Naravno da mozes;Kako da ne;Logicno;Moguce;Mozda;Ne znam;Nije mi jasno, ponovi pitanje;Hteo si odgovor, evo ti ga xD;Dobro;Lose;Ok;Nece;Hoce;Naravno da hoce;Ne verujem;jeste;nije;nema;nikako;ma kakvi;nema tebi spasa;Mozes da se kladis u to;Numero je najjaci;kobrad te voli;super;oladi;mars;nema teorije;hoces;neces;nemas sanse;nema sanse;100%;50%;10%;20%;30%;40%;60%;70%;80%;90%;ima;nema;laze;nije tako;tako je;moze;ne moze;mozes;ne mozes;naravno da ne moze;naravno da hoce;malo;naravno da je tako;nop;dap;yep;no no;da daaaa;nema sanse;ma kakvi;si ti lud?;znaci boze];no]]
$addField[Pitanje:;$message[];no]
$argsCheck[>1;Napisi neko pitanje koje ti padne na pamet]
`
})
