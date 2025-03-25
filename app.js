const {Client,Events,GatewayIntentBits}=require("discord.js");
const token=process.env.TOKEN;

const client=new Client({intents:[
	GatewayIntentBits.Guilds,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildMessages
]});

client.once(Events.ClientReady,c=>{
	console.log(`準備OKです! ${c.user.tag}がログインします。`);
});

client.on("messageCreate",async message=>{
	console.log(`受信しました${JSON.stringify(message)}`);
});

client.login(token);

//Koyebの仕様でhttpサーバーを立てないといけないので、expressを利用する
const express=require("express");

const app=express();

app.get("/",(req,res)=>{res.sendStatus(200)});

const port=process.env.PORT||8080;
app.listen(port,()=>{console.log(`Server is running on PORT ${port}.`)});
