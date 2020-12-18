// varbs
var jsonfile = "https://pmr-cloud.firebaseio.com/web_server.json";
var doc = document;
var mainten = "<link href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\" rel=\"stylesheet\"><style>html, body { padding: 0; margin: 0; width: 100%; height: 100%; user-select: none;}* {box-sizing: border-box;}body { text-align: center; padding: 0; background: #d6433b; color: #fff; font-family: Open Sans; }h1 { font-size: 50px; font-weight: 100; text-align: center;}body { font-family: Open Sans; font-weight: 100; font-size: 20px; color: #fff; text-align: center; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -ms-flex-align: center; align-items: center;}article { display: block; width: 700px; padding: 50px; margin: 0 auto; }a { color: #fff; font-weight: bold;}a:hover { text-decoration: none; }svg { width: 75px; margin-top: 1em; }</style><article><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 202.24 202.24\"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Asset 3</title><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Capa_1\" data-name=\"Capa 1\"><path class=\"cls-1\" d=\"M101.12,0A101.12,101.12,0,1,0,202.24,101.12,101.12,101.12,0,0,0,101.12,0ZM159,148.76H43.28a11.57,11.57,0,0,1-10-17.34L91.09,31.16a11.57,11.57,0,0,1,20.06,0L169,131.43a11.57,11.57,0,0,1-10,17.34Z\"/><path class=\"cls-1\" d=\"M101.12,36.93h0L43.27,137.21H159L101.13,36.94Zm0,88.7a7.71,7.71,0,1,1,7.71-7.71A7.71,7.71,0,0,1,101.12,125.63Zm7.71-50.13a7.56,7.56,0,0,1-.11,1.3l-3.8,22.49a3.86,3.86,0,0,1-7.61,0l-3.8-22.49a8,8,0,0,1-.11-1.3,7.71,7.71,0,1,1,15.43,0Z\"/></g></g></svg><h1>We&rsquo;ll be back soon!</h1><div><p>Sorry for the inconvenience. We&rsquo;re performing some maintenance at the moment. If you need to you can always follow us on <a href=\"http://t.me/dergoogler\">Telegram</a> for updates!</p><p>&mdash; The DG Team</p></div></article>";
var onlay_eventa = "<link href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\" rel=\"stylesheet\"><style>html,body {padding: 0;margin: 0;width: 100%;height: 100%;cursor: default;user-select: none;}* {box-sizing: border-box;}body {text-align: center;padding: 0;background: linear-gradient(119.42deg, #ffb8bb, #e6121d 79.71%);color: #fff;font-family: Open Sans;}h1 {font-size: 75px;font-weight: 100;text-align: center;}body {font-family: Open Sans;font-weight: 100;font-size: 20px;color: #fff;text-align: center;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-box-align: center;-ms-flex-align: center;align-items: center;}.dglow_event {font-size: 75px;}article {display: block;width: 700px;padding: 50px;margin: 0 auto;}a {color: #fff;font-weight: bold;}a:hover {text-decoration: none;}</style><article><i class=\"dglow_event fad fa-gifts\"></i><h1><em id=\"dgo-event\"></em></h1><div><p>Have a nice Christmas, you and your families! Enjoy the cooldown.</p><p>&mdash; The DG Team</p></div></article>";

// some controllers
$(document).ready(function() {
    var xmlhttpp = new XMLHttpRequest();
    xmlhttpp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var web_server = JSON.parse(this.responseText);

            function dglowq_event_effects() {
                switch (web_server.index.event.event_effect) {
                    case "snow":
                        event_effect_snow();
                        break;
                    case "silvester":
                        event_effect_silvester();
                        break;
                    case "snow&silvester":
                        event_effect_snow();
                        event_effect_silvester();
                        break;
                }
            }

            function dlgowe_event() {
                // Set the date we're counting down to
                var countDownDate = new Date("Dec 24, 2020 00:00:00").getTime();

                // Update the count down every 1 second
                var x = setInterval(function() {

                    // Get today's date and time
                    var now = new Date().getTime();

                    // Find the distance between now and the count down date
                    var distance = countDownDate - now;

                    // Time calculations for days, hours, minutes and seconds
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    if (web_server.index.event.event_only === true) {
                        // Display the result in the element
                        document.getElementById("dgo-event").innerHTML = "<b>" + web_server.index.event.event_only_title + " IN:" + "</b><br>" + days + "d " + hours + "h " +
                            minutes + "m " + seconds + "s ";
                    } else {
                        // Display the result in the element
                        document.getElementById("dgo-event").innerHTML = "<b>" + web_server.index.event.event_only_title + " IN: " + "</b>" + days + "d " + hours + "h " +
                            minutes + "m " + seconds + "s ";

                    }
                    // If the count down is finished, write some text
                    if (distance < 0) {
                        clearInterval(x);
                        document.getElementById("dgo-event").innerHTML = "<b>" + "HAPPY XMAS!" + "</b>";
                    }
                }, 1000);
            }

            if (web_server.index.maintenance.active === false) {
                doc.title = web_server.index.maintenance.title;
                doc.getElementById('page-content').innerHTML = mainten;
            } else {
                if (web_server.index.event.event_only === true) {
                    doc.title = web_server.index.event.event_only_title;
                    doc.getElementById('page-content').innerHTML = onlay_eventa;
                    dlgowe_event();
                    dglowq_event_effects();
                } else {
                    function reqListener() {
                        function parseDLGM(dlgmText) {
                            const dlg = dlgmText
                                // main
                                .replace(/\[fa-icon\((.*?)\)\]/gim, "<i class='fab fa-$1'></i>>")
                                .replace(/\[x\]/gim, "<i class='fa fa-check'>")
                                .replace(/\[ \]/gim, "<i class='fa fa-remove'>")
                                .replace(/\[download\((.*?)\)\((.*?)\)\]/gim, "<button class='btn btn-1' onclick='window.open(\"$2\");'>$1</button>")
                                .replace(/\[title\((.*?)\)\]/gim, "<title id='md-title'>$1 - Der_Googler</title>")
                                .replace(/\[header\((.*?)\)\]/gim, "<title id='hide-nav'>$1</title>")
                                .replace(/\[evens\((.*?)\)\]/gim, "<title id='hide-events'>$1</title>")
                                .replace(/\[webpage\((.*?)\)\]/gim, "<title id='hide-page'>$1</title>")
                                .replace(/\[sp\]/gim, " ")
                                .replace(/\[alert\((.*?)\)\((.*?)\)\]/gim, "<em class='markdown-alert' onclick='alert(\"$1\");' title='$2'>$2</em>")
                                // [text-badge(Will Added Soon!)(green)(Pitch)]
                                .replace(/\:dot\:/gim, "\•")
                                .replace(/\[text-badge\((.*?)\)\((.*?)\)\((.*?)\)\]/gim, "<span badge-text='$1' bg-color='$2'>$3</span>")
                                .replace(/\[video\((.*?)\)\]/gim, "<video width='100%' style='border-radius:10px;outline:none;' controls class='myvideo'><source src='https://$1' type='video/mp4'>Your browser does not support the video tag.</video>")
                                // [svg-badge(Build)(Android Studio)(272727)]
                                .replace(/\[svg-badge\((.*?)\)\((.*?)\)\]/gim, "<div class='badge-wrapper'><span class='badge-text-one'>$1</span><span class='badge-text-two'>$2</span></div>")
                                .replace(/\[app-card\((.*?)\)\((.*?)\)\((.*?)\)\((.*?)\)\((.*?)\)\]/gim, "<div class='app-card'><img class='app-card-img' src='/src/images/$4' style='width:100%'><div class='app-card-container'><h4><b><a href='$5'>$1</a></b></h4><p>$2</p><p>$3</p></div></div>")
                                .replace(/\[card\((.*?)\)\((.*?)\)\((.*?)\)\((.*?)\)\]/gim, "<div class='app-card'><div class='app-card-container'><h4><b><a href='$4'>$1</a></b></h4><p>$2</p><p><em>$3</em></p></div></div>")
                                // fas
                                .replace(/\[playstore\]/gim, "<i class='fab fa-google-play'></i>")
                                .replace(/\[official\]/gim, "<i class='fal fa-badge-check'></i>")
                                .replace(/\[promo\]/gim, "<i class='fal fa-ad'></i>")
                                .replace(/\[web\]/gim, "<i class='fad fa-globe-americas'></i>")
                                .replace(/\[android\]/gim, "<i class='fab fa-android'></i>")
                                .replace(/\[app\]/gim, "<i class='fal fa-mobile-android-alt'></i>")
                                .replace(/\[blog\]/gim, "<i class='fal fa-blog'></i>")
                                .replace(/\[safty\]/gim, "<i class='fal fa-user-shield'></i>")
                                .replace(/\[changelog\]/gim, "<i class='fal fa-file-invoice'></i>")
                                .replace(/\[halloween\]/gim, "<i class='fal fa-jack-o-lantern'></i>")
                                .replace(/\[xmas\]/gim, "<i class='fal fa-gifts'></i>")
                                .replace(/\[easter\]/gim, "<i class='fal fa-file-egg'></i>")
                                .replace(/\[others\]/gim, "<i class='fal fa-bullseye'></i>")
                                .replace(/\[team\]/gim, "<i class='fal fa-user-friends'></i>")
                                // tests
                                .replace(/\<\!\-\-(.+)\-\-\>/gim, '$1')
                                .replace(/[\/]{3}(.+)/g, '<!--§1-->')
                                .replace(/[\?]{3}/g, '')

                            return dlg.trim()
                        }
                        var input = document.getElementById('content');
                        input.innerHTML = parseDLGM(marked(this.responseText));
                        var text = document.getElementById('md-title').textContent;
                        document.title = text;
                        var hideNAV = document.getElementById('hide-nav').textContent;
                        var hideNAV2 = document.getElementById('hide-page').textContent;
                        var hideNAV3 = document.getElementById('hide-events').textContent;
                        if (hideNAV === "false") {
                            document.getElementById('web-header').style.display = 'none';
                            document.getElementById('web-footer').style.display = 'none';
                        }
                        if (hideNAV2 === "true") {
                            document.getElementById('web-body').style.cssText = "box-sizing: border-box;min-width: 100%;max-width: 100%;margin: 0px;margin-top: 0px;padding: 16px 32px 32px 32px;";
                        }
                        if (hideNAV3 === "false") {
                            document.getElementById('web-news').style.display = 'none';
                        }
                    }

                    var xmlhttpp = new XMLHttpRequest();
                    var xmlhttpp_pmr = new XMLHttpRequest();
                    var param = getUrlParam('');
                    var param2 = getUrlParam2('');
                    var param_pmr = getUrlParam_pmr('');
                    var param2_pmr = getUrlParam2_pmr('');

                    if (param === "blog") {
                        document.title = "Blog - Der_Googler";
                    } else if (param === "apps") {
                        document.title = "Apps - Der_Googler";
                    } else if (param === "safty") {
                        document.title = "Safty - Der_Googler";
                    } else if (param === "changelogs") {
                        document.title = "Changelogs - Der_Googler";
                    } else if (param === "pmr") {
                        document.title = "PMR-Cloud - Der_Googler";
                    }

                    if (param_pmr === "pmr") {
                        if (param_pmr === "" || param2_pmr === ("")) {
                            xmlhttpp_pmr.addEventListener("load", reqListener);
                            xmlhttpp_pmr.open("GET", "/blog/start-with-pmr-cloud.markdown", true);
                            xmlhttpp_pmr.send();
                        } else {
                            xmlhttpp_pmr.addEventListener("load", reqListener);
                            xmlhttpp_pmr.open("GET", "https://raw.githubusercontent.com/" + param2_pmr + ".dgsm", true);
                            xmlhttpp_pmr.send();
                        }
                    } else {
                        if (param === "") {
                            xmlhttpp.addEventListener("load", reqListener);
                            xmlhttpp.open("GET", "/main/index.markdown", true);
                            xmlhttpp.send();
                        } else {
                            xmlhttpp.addEventListener("load", reqListener);
                            xmlhttpp.open("GET", param + "/" + param2 + ".markdown", true);
                            xmlhttpp.send();
                        }
                    }

                    function getUrlParam(param) {
                        param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
                        var regex = new RegExp("[?]" + param + "/([^&#]*)/");
                        var url = decodeURIComponent(window.location.href);
                        var match = regex.exec(url);
                        return match ? match[1] : "";
                    }

                    function getUrlParam2(param) {
                        param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
                        var regex = new RegExp("[#]" + param + "/([^&#]*)/");
                        var url = decodeURIComponent(window.location.href);
                        var match = regex.exec(url);
                        return match ? match[1] : "";
                    }

                    function getUrlParam_pmr(param) {
                        param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
                        var regex = new RegExp("[??]" + param + "/([^&#]*)/");
                        var url = decodeURIComponent(window.location.href);
                        var match = regex.exec(url);
                        return match ? match[1] : "";
                    }

                    function getUrlParam2_pmr(param) {
                        param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
                        var regex = new RegExp("[#]" + param + "/([^&#]*)/");
                        var url = decodeURIComponent(window.location.href);
                        var match = regex.exec(url);
                        return match ? match[1] : "";
                    }
                    dlgowe_event();
                    dglowq_event_effects();
                }
            }
        }
    };
    xmlhttpp.open("GET", jsonfile, true);
    xmlhttpp.send();
});

$(document).ready(function() {
    $(document).bind('contextmenu', function(event) {
        $("#contextmenu").css({ "top": event.pageY + "px", "left": event.pageX + "px" }).show();
        event.preventDefault();
    });
    $(document).bind('click', function() {
        $("#contextmenu").hide();
    })
});

function event_effect_snow() {
    ////////////////////////////////////////////////////////////////////////
    // SnowFlakes-Script (c) 2017, Dominik Scholz / go4u.de Webdesign
    ////////////////////////////////////////////////////////////////////////

    var snowflakes = {

        ///////////////////////////// configuration ////////////////////////////

        // amout of flakes
        _amount: 40,
        // random colors
        _color: ['#AAAACC', '#DDDDFF', '#CCCCDD', '#F3F3F3', '#F0FFFF'],
        // random fonts
        _type: ['Arial Black', 'Arial Narrow', 'Times', 'Comic Sans MS'],
        // char used for flake
        _flakeChar: '*',
        // speed of flakes
        _speed: .05,
        // minimum flake font size
        _minSize: 8,
        // maximum flake font size
        _maxSize: 22,
        // horizontal drift
        _drift: 15,
        // zIndex of flakes
        _zIndex: 20000,



        ///////////////////////////// private vars /////////////////////////////

        _flakes: [],
        _bodyWidth: 0,
        _bodyHeight: 0,
        _range: null,
        _count: 0,
        _lastInterval: 0,



        ////////////////////////////// functions ///////////////////////////////

        // init snow
        init: function() {
            this._addEventListener(window, 'resize', function() { return snowflakes.resize.apply(snowflakes); });
            this._addEventListener(window, 'load', function() { return snowflakes.start.apply(snowflakes); });
        },


        // add an event listener
        _addEventListener: function(el, name, handler) {
            if (el.addEventListener)
                el.addEventListener(name, handler, false);
            else if (el.attachEvent)
                el.attachEvent('on' + name, handler);
        },


        // start snow
        start: function() {
            // calculate range
            this._range = this._maxSize - this._minSize;

            // init window size
            this.resize();

            // add new flakes
            while (this._amount > this._flakes.length)
                this._createFlake(this._flakes.length);

            // start to move snow
            this._animFn = function() { snowflakes._move(); };
            this._lastInterval = this._time();
            requestAnimFrame(snowflakes._animFn);

        },


        // get current time
        _time: function() {
            return +new Date();
        },


        // return a random integer
        _randomInt: function(value) {
            return Math.floor(
                Math.random() * value
            );
        },


        // return a random array element
        _randomArray: function(arr) {
            return arr[
                Math.floor(
                    Math.random() * (arr.length)
                )
            ];
        },


        // creates a new snowflake
        _createFlake: function(i) {
            var newEl = !this._flakes[i],
                el, f;

            if (newEl) {
                // create new dom el
                el = document.createElement('div');
                el.style.position = 'absolute';
                el.style.zIndex = this._zIndex;
                el.innerHTML = this._flakeChar;
                f = {
                    el: el,
                    x: 0,
                    y: 0,
                    size: 0,
                    count: 0
                };
                this._flakes[i] = f;
                document.getElementsByTagName('body')[0].appendChild(el);
            } else {
                // use existing dom el
                f = this._flakes[i];
                el = f.el;
            }

            // init flake
            el.style.left = '0px';
            el.style.top = '-' + this._maxSize + 'px';
            el.style.color = this._randomArray(this._color);
            el.style.family = this._randomArray(this._type);
            el.style.fontSize = (this._randomInt(this._range) + this._minSize) + 'px';

            // create flake object
            f.x = this._randomInt(this._bodyWidth - this._drift - this._maxSize - 3) + this._drift + 1;
            f.y = -this._maxSize - this._randomInt(this._bodyHeight);
            f.size = this._randomInt(this._range) + this._minSize;
            f.count = this._randomInt(10000);
        },


        // move existing flakes
        _move: function() {
            requestAnimFrame(snowflakes._animFn);

            // calculate movement factor
            var dif = this._time() - this._lastInterval,
                l = this._flakes.length,
                d = dif * this._speed * this._maxSize,
                i, flake, flakeDiv;

            this._lastInterval = this._time();
            this._count += dif * this._speed / 20;

            for (i = 0; i < l; i++) {
                flake = this._flakes[i];
                flake.y += d / flake.size;

                // restart existing flake
                if (flake.y + flake.size >= this._bodyHeight) {
                    this._createFlake(i);
                    continue;
                }

                flake.el.style.left = Math.floor(flake.x + Math.sin(flake.count + this._count) * this._drift) + 'px';
                flake.el.style.top = Math.floor(flake.y) + 'px';
            }
        },


        // calculate new positions for all flakes
        resize: function() {
            // save old width
            var oldWidth = this._bodyWidth;

            // get new width and height
            this._bodyWidth = this._getWindowWidth() - this._maxSize;
            this._bodyHeight = this._getWindowHeight() - this._maxSize;

            // calculate correction ratio
            var ratio = this._bodyWidth / oldWidth;

            // for all flakes
            for (var i = 0, l = this._flakes.length, flake; i < l; i++) {
                flake = this._flakes[i];

                // do width correction
                flake.x *= ratio;

                // restart existing flake
                if ((flake.y + flake.size) >= this._bodyHeight)
                    this._createFlake(i);
            }
        },


        // get window width
        _getWindowWidth: function() {
            var w = Math.max(self.innerWidth || 0, window.innerWidth || 0);

            if (document.documentElement)
                w = Math.max(w, document.documentElement.clientWidth || 0);
            if (document.body) {
                w = Math.max(w, document.body.clientWidth || 0);
                w = Math.max(w, document.body.scrollWidth || 0);
                w = Math.max(w, document.body.offsetWidth || 0);
            }

            return w;
        },


        // get window height
        _getWindowHeight: function() {
            var h = Math.max(self.innerHeight || 0, window.innerHeight || 0);

            if (document.documentElement)
                h = Math.max(h, document.documentElement.clientHeight || 0);
            if (document.body) {
                h = Math.max(h, document.body.clientHeight || 0);
                h = Math.max(h, document.body.scrollHeight || 0);
                h = Math.max(h, document.body.offsetHeight || 0);
            }

            return h;
        }

    };

    // shim layer with setTimeout fallback
    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(cb) {
                window.setTimeout(cb, 1000 / 60);
            };
    })();

    snowflakes.init();
}

function event_effect_silvester() {
    ////////////////////////////////////////////////////////////////////////
    // Fireworks-Script (c) 2017, Dominik Scholz / go4u.de Webdesign
    ////////////////////////////////////////////////////////////////////////

    var fireworks = {

        ///////////////////////////// configuration ////////////////////////////

        // random colors
        _color: ['#D0D0D0', '#FF0000', '#FFFF00', '#22FF00', '#2040FF', '#00CCFF', '#FF00FF', '#A319D6'],
        // gravity factor
        _gravity: 0.07,
        // air resistance factor
        _resistance: 0.975,
        // zIndex of particles
        _zIndex: 20000,
        // maximal age of particles (in msec)
        _maxAge: 2000,
        // interval of appearing explosions (in msec)
        _interval: [500, 2500],
        // amount of particles per explosion
        _particlesPerExplosion: 40,
        // maximal speed of particle at moment of explosion
        _speed: 5,
        // minimal/maximal size of particle
        _minSize: 8,
        _maxSize: 12,



        ///////////////////////////// private vars /////////////////////////////

        _particles: [],
        _bodyWidth: 0,
        _bodyHeight: 0,
        _count: 0,
        _lastInterval: 0,



        ////////////////////////////// functions ///////////////////////////////

        // init fireworks
        init: function() {
            this._addEventListener(window, 'resize', function() { return fireworks.resize.apply(fireworks); });
            this._addEventListener(window, 'load', function() { return fireworks.start.apply(fireworks); });
        },


        // add an event listener
        _addEventListener: function(el, name, handler) {
            if (el.addEventListener)
                el.addEventListener(name, handler, false);
            else if (el.attachEvent)
                el.attachEvent('on' + name, handler);
        },


        // start fireworks
        start: function() {
            // init window size
            this.resize();

            // start to move particles
            this._animFn = function() { fireworks._move(); };
            this._lastInterval = this._time();
            requestAnimFrame(this._animFn);

            this._addExplosion();
        },


        // get current time
        _time: function() {
            return +new Date();
        },


        // return a random integer
        _random: function(value) {
            return Math.random() * value;
        },


        // return a random array element
        _randomArray: function(arr) {
            return arr[
                Math.floor(
                    Math.random() * (arr.length)
                )
            ];
        },


        // add a new explosion
        _addExplosion: function() {
            var x = Math.floor(this._random(this._bodyWidth)),
                y = Math.floor((this._random(.5) + .1) * this._bodyHeight),
                dx = this._random(10) - 5,
                dy = this._random(-2) - 1,
                c1 = this._randomArray(this._color),
                c2 = this._randomArray(this._color);

            for (var i = 0; i < this._particlesPerExplosion; i++) {
                this._createParticle(
                    x,
                    y,
                    dx,
                    dy,
                    i / (this._particlesPerExplosion - 1) * 180 * Math.PI,
                    this._random(this._speed),
                    this._random(1) > .5 ? c1 : c2
                );
            }

            window.setTimeout(
                function() { return fireworks._addExplosion.apply(fireworks); },
                this._random(this._interval[1] - this._interval[0]) + this._interval[0]
            );
        },


        // creates a new particle
        _createParticle: function(x, y, dx, dy, rot, speed, color) {
            var el = null,
                foundEl = false,
                p = this._particles;

            // look for old particle
            for (var i = 0, l = p.length; i < l; i++)
                if (p[i].data.age > 1) {
                    el = p[i];
                    foundEl = true;
                    break;
                }

                // create span child for particles
            if (!foundEl) {
                el = document.createElement('div');
                el.className = 'particle';
                el.style.position = 'absolute';
                el.style.fontSize = this._maxSize + 'px';
                el.style.zIndex = this._zIndex;
                el.style.width = this._maxSize + 'px';
                el.style.textAlign = 'center';
                el.style.overflow = 'hidden';
                el.innerHTML = '&#x25cf;';
            }

            el.style.left = x + 'px';
            el.style.top = y + 'px';
            el.style.color = color;
            el.data = {
                x: x,
                y: y,
                dx: Math.cos(rot) * speed + dx,
                dy: Math.sin(rot) * speed + dy,
                color: color,
                age: Math.random() * .25
            };

            if (!foundEl) {
                document.getElementsByTagName('body')[0].appendChild(el);
                this._particles.push(el);
            }
        },


        // move existing particles
        _move: function() {
            requestAnimFrame(this._animFn);

            // calculate movement factor
            var dif = this._time() - this._lastInterval;
            this._lastInterval = this._time();

            var delta = dif / 20,
                el,
                d,
                p = this._particles,
                r = Math.pow(this._resistance, delta),
                g = this._gravity * delta,
                a = dif / this._maxAge;

            for (var i = 0, l = p.length; i < l; i++) {
                el = p[i];
                d = el.data;

                if (d.age > 1)
                    continue;

                d.age += a;
                d.dy += g;
                d.dx *= r;
                d.dy *= r;
                d.x += d.dx * delta;
                d.y += d.dy * delta;

                if (d.x < 0) {
                    d.dx *= -1;
                    d.x = 0;
                } else if (d.x > this._bodyWidth) {
                    d.dx *= -1;
                    d.x = this._bodyWidth;
                }
                if (d.y < 0) {
                    d.dy *= -1;
                    d.y = 0;
                } else if (d.y > this._bodyHeight) {
                    d.dy *= -1;
                    d.y = this._bodyHeight;
                }

                if (d.age > 1)
                    d.x = d.y = 0;

                el.style.left = d.x + 'px';
                el.style.top = d.y + 'px';
                el.style.color = (Math.random() * .5 + d.age >= 1) ? 'transparent' : d.color;
                el.style.fontSize = Math.max(this._minSize, (1 - d.age) * this._maxSize) + 'px';
            }
        },


        // calculate new positions for all particles
        resize: function() {
            // get new width and height
            this._bodyWidth = this._getWindowWidth() - this._maxSize;
            this._bodyHeight = this._getWindowHeight() - this._maxSize - 10;
        },


        // get window width
        _getWindowWidth: function() {
            return document.getElementsByTagName('body')[0].offsetWidth;
        },


        // get window height
        _getWindowHeight: function() {
            var h = Math.max(self.innerHeight || 0, window.innerHeight || 0);

            if (document.documentElement)
                h = Math.max(h, document.documentElement.clientHeight || 0);
            if (document.body) {
                h = Math.max(h, document.body.clientHeight || 0);
                h = Math.max(h, document.body.scrollHeight || 0);
                h = Math.max(h, document.body.offsetHeight || 0);
            }

            return h;
        }

    };

    // shim layer with setTimeout fallback
    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(cb) {
                window.setTimeout(cb, 1000 / 60);
            };
    })();

    fireworks.init();
}