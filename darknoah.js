const discord = require('discord.js');
const fs = require('fs');
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
const http = require('http');
const db = require('quick.db');
const moment = require('moment')
const express = require('express');
const ayarlar = require('./ayarlar.json');
const Discord = require('discord.js');
const darknoah = new Discord.Client();
darknoah.login('TOKEN')
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\


//=== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

const log = message => { 
  console.log(` ${message}`);
};
require('./util/eventLoader.js')(darknoah);


//===============================================================================\\
darknoah.on('ready', async () => {
 darknoah.user.setActivity(`Shelp | UPDATE NOW !!  | Server + ${darknoah.guilds.cache.size}`, { type:'PLAYING' })
});
//===============================================================================\\
darknoah.on("message", emprator => {
if (emprator.content === "Sinvite") {
emprator.channel.send("https://discord.com/api/oauth2/authorize?client_id=835624624137699368&permissions=3959946305&scope=bot"); }});
//===============================================================================\\
darknoah.on("message", emprator => {
if (emprator.content === "Ssupport") {
emprator.channel.send("https://discord.gg/xVbFaP6hbx"); }});
//===============================================================================\\
darknoah.on('message', message => {
if (message.guild) return;
if (message.author.bot) return;
var channel = darknoah.channels.cache.get("833511082429120533");
if (!channel) return;
var embed = new Discord.MessageEmbed()
.setColor("#0000ff")
.setAuthor(message.author.username, message.author.displayAvatarURL())
.addField(`✅ **New Suggestion**`, `\`\`\`
  ${message.content}\`\`\``)
.setFooter(`${message.author.username}`)
.setThumbnail(message.author.displayAvatarURL())
.setTimestamp();
channel.send(embed).then(c => {
c.react('').then(() =>
  c.react(''))
})
});
//===============================================================================\\
darknoah.on('guildCreate', guild => {
darknoah.channels.cache.get("833511082429120533")
  .send(`
✅ **Join Server**: ${darknoah.guilds.cache.size}
🔠 **Server Name**: ${guild.name}
👑 **Server Owner**: ${guild.owner}
🆔 **Server Id**: ${guild.id}
👥 **Member Count**: ${guild.memberCount}**`)
});
////////////////////////////////////////////
darknoah.on('guildDelete', guild => {
  darknoah.channels.cache.get("833511082429120533")
  .send(`
❎ **Lift Server**: ${darknoah.guilds.cache.size}
🔠 **Server Name**: ${guild.name}
👑 **Server Owner**: ${guild.owner}
🆔 **Server Id**: ${guild.id}
👥 **Member Count**: ${guild.memberCount}**`)
});
//================================================================================\\
darknoah.on("message", message => {
if  (message.content === "Shelp") {
const embed = new Discord.MessageEmbed()
.setThumbnail(darknoah.user.avatarURL())
.setColor("RANDOM")
.setAuthor('Skull Bot Games')
.setDescription(`**
> 💰 - __Economy Commands__
> 💰┇daily (d) -  cash (c)
> 💰┇work (w)  - skulls(sl) 
> 💰┇check (ch) - deposit (de)
> 💰┇send (se) - rob (ro) - steal (st)

> 🎮 - __Game Comamnds__
> 🎮┇coinflip(cf) - slots(s) -  fish(f) 

> 🏅 - __Rank Commands__
> 🏅┇rank(r) - top(t)

> ⚙️ - __Moderation Commands__
> ⚙️┇lock - unlock - bot 
> ⚙️┇server - kick - avatar
> ⚙️┇clear - role - invite
> ⚙️┇support - server - Svote

> 📎┇Link
> [Support Bot](https://discord.gg/xVbFaP6hbx) - [Invite Bot](https://discord.com/api/oauth2/authorize?client_id=835624624137699368&permissions=3959946305&scope=bot) - [YouTube](https://www.youtube.com/watch?v=EIf67Y3KFPc) - [Website](https://bit.ly/SkullBots)
**`)
       message.channel.send(embed)

       } 
      });
//===============================================================================\\
darknoah.on("message", msg => { 

if(msg.content.startsWith("Sclear")) { 

let args = msg.content.split(" ").slice(1); 

if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You can't use this command!"); 

if(!args[0]) return msg.channel.send("Specify how many messages you want to delete."); 

msg.delete(); 

msg.channel.bulkDelete(args[0]).catch(e => { msg.channel.send("You can only delete 100 messages at once.")}); 

msg.channel.send(`Delete Message`).then(m => m.delete({ timeout: 5000 })); 

}})
//===============================================================================\\
darknoah.on("message", russi => {
  if (russi.content === "Sserver") {


    let embed = new Discord.MessageEmbed()
    .setTitle(`${russi.guild.name}`)///Russi
    .setThumbnail(darknoah.user.avatarURL())
    .setColor('#ffff00')///Russi
    .setFooter(`Requested | ${russi.author.tag}`, russi.author.avatarURL())
    .addField('> 🆔 ID Server :', `${russi.guild.id}`)
    .addField('> :crown: Owner Server :', `${russi.guild.owner}`)
    .addField('> :calendar: Created : ', `${russi.guild.createdAt.toLocaleString()}`)
    .addField('> :busts_in_silhouette: Members : ', `${russi.guild.memberCount}`)
    .addField('> :speech_balloon: Channels : ', `${russi.guild.channels.cache.size}`)
    .addField('> :earth_americas: Region : ', `${russi.guild.region}`)
    .setTimestamp()///Russi
    russi.channel.send(embed);
  }
});
//===============================================================================\\
darknoah.on('message', habdo => {
    if (habdo.content.startsWith("Skick")) {
    if (!habdo.guild) return;
    if (!habdo.member.hasPermission('KICK_MEMBERS')) return habdo.reply('**You don t have a ram**');
   let user = habdo.mentions.users.first();
    if (!user) return habdo.reply('**Kick A Member User**');
      habdo.guild.member(user).kick();
      habdo.channel.send(`**✈ \`${user}\` Kicked from the server.**`);
}
}); 
//===============================================================================\\
darknoah.on("message", message => {
  if (message.content.startsWith("Srole")) {
    var roles = message.guild.roles.cache.map(roles => `${roles.name}, `).join(" ");
    let embed = new Discord.MessageEmbed()
      .setColor("#ffff00")
      .addField("**Roles Server:**", `**[${roles}]**`);
    message.channel.send(embed);
  }
});
//===============================================================================\\
darknoah.on("message", habdo => {
    if (habdo.content.startsWith("Savatar")) {
  var embed = new Discord.MessageEmbed()
         .setAuthor(`${habdo.author.username}`, habdo.author.avatarURL({dynamic: true}))
         .setColor('#ffff00')
         .setDescription(`**[Avatar Link](${habdo.author.avatarURL({dynamic: true, format: 'png', size: 1024})})**`)
         .setImage(habdo.author.avatarURL({dynamic: true, format: 'png', size: 1024}))
         .setFooter(`Requsted by ${habdo.author.tag}`, habdo.author.avatarURL({dynamic: true}))
    habdo.channel.send(embed);
}
});
//===============================================================================\\
darknoah.on("message", message => {
  if (message.content === "Sbot") {
    const embed = new Discord.MessageEmbed().setColor("#ffff00").setDescription(`
 > **Server**
${darknoah.guilds.cache.size}
> **Channel**
${darknoah.channels.cache.size}
> **User**
${darknoah.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}
> **Owner Bot**
<@776494689703559208>
> **Prefix Bot** :
S`);
    message.channel.send(embed);
  }
});
//===============================================================================\\
darknoah.on("message", message => {
  if (message.content === "Slock") {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    message.delete();

    if (!message.channel.guild) return;

    let bwan = new Discord.MessageEmbed()

      .setFooter("Has Been Channel Lock")
      .setColor("#ffff00")
    message.channel.send(bwan);

    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
  }
});
//////////////////////////////////////////////////////////////////
darknoah.on("message", message => {
  if (message.content === "Sunlock") {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    message.delete();

    if (!message.channel.guild) return message.reply("SORRY IM IN SERVER");
    let bwan = new Discord.MessageEmbed()
      .setFooter("Has Been Channel unlock")
      .setColor("#ffff00")
    message.channel.send(bwan);

    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: true
    });
  }
});
//===============================================================================\\
darknoah.on("message", async message => {
  if (message.content.startsWith(`<@${darknoah.user.id}>`)) {

let help = new Discord.MessageEmbed()
      .setColor("#ffff00")
      .setThumbnail(`https://media.discordapp.net/attachments/855773790184931339/868417068951801886/1615058769329.jpg`)
      .setAuthor(darknoah.user.username, darknoah.user.avatarURL())
      .setDescription(`
<a:emoji_48:850045260028575784> | Skull Prefix (S)
      
<a:emoji_48:850045260028575784> | Skull [Support](https://discord.gg/xVbFaP6hbx)

<a:emoji_48:850045260028575784> | Skull [Invite](https://discord.com/api/oauth2/authorize?client_id=863360142086635550&permissions=27664&scope=bot)

<a:emoji_48:850045260028575784> | Skull [Website](https://bit.ly/SkullBots)`)

    message.channel.send(help);
  }
});
//===============================================================================\\
//===============================================================================\\
//===============================================================================\\
darknoah.commands = new Discord.Collection();
darknoah.aliases = new Discord.Collection();
fs.readdir('./Destek/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} Installing support command...`);
    files.forEach(f => {//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

        let props = require(`./Destek/${f}`);
        log(`Support Command Installed: ${props.help.name}.`);
        darknoah.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            darknoah.aliases.set(alias, props.help.name);
        });
    });
});
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

darknoah.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./Destek/${command}`);
            darknoah.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                darknoah.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



//===============================================================================\\
//===============================================================================\\
//===============================================================================\\

darknoah.commands = new Discord.Collection();
darknoah.aliases = new Discord.Collection();
fs.readdir('./Ekonomi/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} Economy command Loading ...`);
    files.forEach(f => {//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

        let props = require(`./Ekonomi/${f}`);
        log(`Economy Command Installed: ${props.help.name}.`);
        darknoah.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            darknoah.aliases.set(alias, props.help.name);
        });
    });
});
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\


darknoah.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./Ekonomi/${command}`);
            darknoah.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                darknoah.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
//===============================================================================\\
//===============================================================================\\
//===============================================================================\\

darknoah.commands = new Discord.Collection();
darknoah.aliases = new Discord.Collection();
fs.readdir('./Oyunlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} Game command Loading ...`);
    files.forEach(f => {
        let props = require(`./Oyunlar/${f}`);
        log(`Game Command Installed: ${props.help.name}.`);
        darknoah.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            darknoah.aliases.set(alias, props.help.name);
        });
    });
});
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\


darknoah.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./Oyunlar/${command}`);
            darknoah.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                darknoah.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
//====================================================//
  darknoah.on('message', msg => {
  if (msg.content === 'Syoutube') {
    msg.reply('> https://www.youtube.com/watch?v=EIf67Y3KFPc&t=12s ');
  }
});

 darknoah.on('message', msg => {
  if (msg.content === 'Swebsite') {
    msg.reply('>  https://bit.ly/Skull-Website ');
  }
});

darknoah.on('message', msg => {
  if (msg.content === 'Sweb') {
    msg.reply('>  https://bit.ly/Skull-Website ');
  }
});



darknoah.on('message', msg => {
  if (msg.content === 'Smoney') {
    msg.reply('> DM | Send Messages |  <@776494689703559208> ');
  }
});
darknoah.on('message', msg => {
  if (msg.content === 'Smo') {
    msg.reply('> DM | Send Messages |  <@776494689703559208> ');
  }
});

darknoah.on('message', msg => {
  if (msg.content === 'Scf') {
    msg.reply('لەئێستادا خریکی زیادکردنینئەم کۆماندە بەردەست نیە بۆ زانیاری زیاتر سەردانی سێرڤەر بکە https://discord.gg/xVbFaP6hbx');
  }
});
darknoah.on('message', msg => {
  if (msg.content === 'Svote') {
    msg.reply('https://top.gg/bot/835624624137699368/vote ');
  }
});






