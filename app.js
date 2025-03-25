const {Client,Events,GatewayIntentBits}=require("discord.js");
const token=process.env.TOKEN;

const client=new Client({intents:[GatewayIntentBits.Guilds]});

client.once(Events.ClientReady,c=>{
	console.log(`準備OKです! ${c.user.tag}がログインします。`);
});

client.on("messageCreate",message=>{
	console.log(JSON.stringify(message));
});

client.login(token);

//Koyebの仕様でhttpサーバーを立てないといけないので、expressを利用する
const express=require("express");

const app=express();

app.get("/",()=>{res.sendStatus(200)});

const port=process.env.PORT||8080;
app.listen(port,()=>{console.log(`Server is running on PORT ${port}.`)});
