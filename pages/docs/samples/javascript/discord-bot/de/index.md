---
title: "Discord Bot Erstellen"
description: "Kleines Example zu erstellen eines Discord Botes."
permalink: /samples/discord-bot/de/
---

# Projekt Erstellen
Mit `npm init` könnt ihr die `package.json` vorfertigen lassen

# Installieren des `NPM` Paketes
Mit `npm install discord.js` könnt ihr das Discord.js Paket herunterladen.

# Erstellen das Inhalts
Die Kompletten Docs können [hier]() gefunden werden.

`index.js` oder `bot.js`, je nach Wahl:
```javascript
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('pong');
  }
});

client.login('token');
```

# Bot Starten
Mit `node index.js` oder `node bot.js` (je nachdem wie deine Datei heißt) kann der Bot gestartet werden.