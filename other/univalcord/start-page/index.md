# Univalcord
Use Apps with Custom CSS!

## Allowing Customing Titlebar
We allowing the user to add more apps to the title (include with titlebar color, css and title!)

Create this in your local: `C:\univalcord\titlebar.json`

Example:
```json
[
    {
        "name": "Discord",
        "link": "https://discord.com/app",
        "titlebarColor": "#24292e",
        "stylesheet": { // new
            "source": "external",
            "file": "https://raw.githubusercontent.com/Gibbu/BetterDiscord-Themes/master/Slate/base.css"
        },
        "javascript": { // new
            "source": "internal",
            "file": "discord.js"
        }
    },
    {
        "name": "YouTube",
        "link": "https://www.youtube.com",
        "titlebarColor": "#212121",
        "stylesheet": { // new
            "source": "internal",
            "file": "youtube.css"
        },
        "javascript": { // new
            "source": "internal",
            "file": "youtube.js"
        }
    },
    {
        "name": "WhatsApp",
        "link": "https://web.whatsapp.com",
        "titlebarColor": "#1c2026",
        "stylesheet": { // new
            "source": "internal",
            "file": "whatsapp.css"
        },
        "javascript": { // new
            "source": "internal",
            "file": "whatsapp.js"
        }
    }
]
```
           
> don't use comments