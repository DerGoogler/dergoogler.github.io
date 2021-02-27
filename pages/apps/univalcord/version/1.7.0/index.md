---
title: "Univalcord 1.7.0"
description: "Download the newst Univalcord Version!"
permalink: /apps/univalcord/1.7.0/
---


# [Unicalcord](https://github.com/DerGoogler/general-releases/releases/tag/1.7.0-Univalcord)
Version: `1.7.0`.

- added an titlebar editor
- now can you load files from webservers
- new json syntax

![image](https://user-images.githubusercontent.com/54764558/107987182-de179b80-6fcd-11eb-88d5-7c76b8d2be20.png)  

**NEW JSON SYNTAX:**
```json
[
    {
        "name": "Discord",
        "link": "https://discord.com/app",
        "titlebarColor": "#24292e",
        "stylesheet": {
            "source": "external",
            "file": "https://raw.githubusercontent.com/Gibbu/BetterDiscord-Themes/master/Slate/base.css"
        },
        "javascript": {
            "source": "internal",
            "file": "discord.js"
        }
    },
    {
        "name": "YouTube",
        "link": "https://www.youtube.com",
        "titlebarColor": "#212121",
        "stylesheet": {
            "source": "internal",
            "file": "youtube.css"
        },
        "javascript": {
            "source": "internal",
            "file": "youtube.js"
        }
    },
    {
        "name": "WhatsApp",
        "link": "https://web.whatsapp.com",
        "titlebarColor": "#1c2026",
        "stylesheet": {
            "source": "internal",
            "file": "whatsapp.css"
        },
        "javascript": {
            "source": "internal",
            "file": "whatsapp.js"
        }
    }
]
```
