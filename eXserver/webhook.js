import Discord from 'discord.js';
import shared from '../shared/shared.js';

let normalLink;
let hardLink;
if (global.env === "prod"){
	normalLink = "https://discord.com/api/webhooks/1311998301285126145/fNYvXnksntUpOsUNzUnZnkoi9k9dmcDxGAL3AIOzNK8urODkb_ovJ8EcIt-fIPBy-cAI"
	hardLink = "https://discord.com/api/webhooks/1311998530797174795/2DWkdgxtHvCgy3UBrEki1f8Z4xB44BBTOK8eoRvmNSGCNkEp_SdVO5e78S1kkqqcwqhh";
}
else if (global.env === "dev"){
	normalLink = "https://discord.com/api/webhooks/1311998301285126145/fNYvXnksntUpOsUNzUnZnkoi9k9dmcDxGAL3AIOzNK8urODkb_ovJ8EcIt-fIPBy-cAI";
	hardLink = "https://discord.com/api/webhooks/1311996678118838283/GGR31A-ePivRkpsdZlhWX-UMnyiK5Q3-7C1yn0hszSb47WveQlpFnWWt6_7-mrIbuTF8";
}

const normalWebhook = new Discord.WebhookClient({
	url: normalLink
});
const hardWebhook = new Discord.WebhookClient({
	url: hardLink
});


const difficultyEmojis = [
	"<:peaceful1:1311901063581925387>",
	"<:moderate2:1311901101112426538>",
	"<:difficult3:1311901119177293834>",
	"<:hardcore4:1311901136784986212>",
	"<:exhausting5:1311901152388055172>",
	"<:relentless6:1311901170066788353>",
	"<:agonizing7:1311901185829109833>",
	"<:terrorizing8:1311901205873561690>",
	"<:cataclysmic9:1311901222738853959>"
]

function sendWebhookWinMessage(mapName, playerName, time){
	const difficultyNumber = Math.floor(shared.mapDifficulties[mapName]) ?? 0;
	const displayMapName = shared.mapLeaderboardNames[mapName] ?? mapName;
	const timeToBeat = time / 1000;

	let ms = ((~~(timeToBeat*100))%100).toString();
	let seconds = (~~(timeToBeat%60)).toString();
	let minutes = (~~((timeToBeat / 60)%60)).toString();
	if(ms.length === 1) ms = '0' + ms;
	if(seconds.length === 1) seconds = '0' + seconds;

	let displayMapTime = `${minutes}:${seconds}.${ms}`;
	if(timeToBeat > 3600) {
			if(minutes.length === 1) minutes = '0' + minutes;
			const hours = (~~(timeToBeat / 3600)).toString();
			displayMapTime = `${hours}:${minutes}:${seconds}.${ms}`;
	}

	if (difficultyNumber < 6){
		let ending = "";
		if (difficultyNumber == 4){
			ending = "!"; //Exhausting gets 1 !
		}
		else if (difficultyNumber == 5){
			ending = "!!"; //Relentless gets 2 !s
		}
		normalWebhook.send(`**${playerName}** has beaten **${displayMapName}** ${difficultyEmojis[difficultyNumber]} in \`${displayMapTime}\`${ending}`)
	}
	else{
		let randomMsgs = ["WOW", "AMAZING", "GGGGGGGGGG", "SPECTACULAR", "CRAZY", "ABSOLUTE MADLAD", "DAYUMM", "WOAH", "OMG", "INCREDIBLE"];
		let chosen = randomMsgs[Math.floor(Math.random() * randomMsgs.length)];
		hardWebhook.send(`**${playerName}** has beaten **${displayMapName}** ${difficultyEmojis[difficultyNumber]} in \`${displayMapTime}\`!!! ${chosen}!!`)
	}
}

export default sendWebhookWinMessage;
