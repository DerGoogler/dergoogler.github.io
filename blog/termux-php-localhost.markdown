[title(Termux PHP local Host)]

# Setup an Termux PHP localhost <img src="https://badgen.net/badge/Build%20/Termux/green">
What you need:  
[Termux][termux] and a phone xD

# Start
Commands for creating localhost using Termux are listed below:- To understand more read way below the command lines.
  
- `apt update`
- `apt upgrade`
- `pkg install php`
- `termux-setup-storage`
- `apt install termux-api php`
- `mkdir /sdcard/php`
> Need you an index.html? Here:

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Localhost is online</title>
</head>

<body>
  <center>your host its working</center>
</body>

</html>
```

- `cd /sdcard/php`
- `php -S localhost:8080 -t /sdcard/php/` <kbd>To start the server</kbd>

### Change path
**change /sdcard/php** to **/sdcard/`<yourpath>`**

<!--LINKS-->
[termux]: https://google.com
