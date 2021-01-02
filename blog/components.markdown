<page>
{#=include((/embeds/navbar))#}
<div class="container-fluid" style="padding:15px;">

# Componets
here can you see all custom markdown componets    
View [LICENCE](https://dergoogler.github.io/?/safty/#/licences/)
<br>
<br>

----
## Include
**Example**     
        
N/A      
[See Code](/embeds/navbar.em.dgsm)

**Code (With Include)**
```
//???/ Includes the navbar
{#navbar-body#???}
{#=include((embeds/navbar))#???}
{#navbar-body#???}
```
----

----
## GitHub Markdown
**Example**    
            
{#gitmd#}
## 📺 Installation 
| Name           | platform                          | Install                                                      |
| -------------- | --------------------------------- | ------------------------------------------------------------ |
| tidal-gui      | Windows                           | {#GUI Repository#}((https://github.com/yaronzz/Tidal-Media-Downloader-PRO)) |
| tidal-dl ((cli)) | Windows \ Linux \ Macos \ Android | ```pip3 install tidal-dl --upgrade```<br />[Detailed Description](https://yaronzz.top/post/tidal_dl_installation/#Install) |

**Renewal cycle:** Once a month. (25th to 30th)
{#gitmd#}

**Code**
```
{#gitmd#}
## 📺 Installation 
| Name        ???   | platform                  ???        | Install                                                      |
| -------------- | --------------------------------- | ------------------------------------------------------------ |
| tidal-gui      | Windows                           | {#GUI Repository#}((https://github.com/yaronzz/Tidal-Media-Downloader-PRO)) |
| tidal-dl ((cli)) | Windows \ Linux \ Macos \ Android | ```pip3 install tidal-dl --upgrade```<br />[Detailed Description](https://yaronzz.top/post/tidal_dl_installation/#Install) |

**Renewal cycle:** Once a month. ((25th to 30th))
{#gitmd???#}
```
----

----
## Alert
**Example**    
            
<alert title="HELLOW">Hello World<alert>

**Code**
```html
<alert title="HELLOW">Hello World<alert>
```
----

----
## Dots
**Example**   
          
`gray` :dot: `red` :dot: `dark` :dot: `yellow` :dot: `blue` :dot: `green`

**Code**
```
`gray???` :dot???: `red???` :dot???: `dark???` :dot???: `yellow???` :dot???: `blue???` :dot???: `green???`
```
----

----
## Card
**Example**
          
{#card#}
=title((Hello World!))
=description((This is a card in dgsm))
=btn-text((Read more))
=link((google.com))
{#card#}

**Code**
```
{#card#}
=title((Hello World!))
=description((This is a card in dgsm))
=btn-text((Read more))
=link((google.com))
{#card???#}
```
----

----
## Card Grid
**Example**
          
<div class="row">
<div class="col-sm-6">
{#card#}
=title((Hello World!))
=description((This is a card in dgsm))
=btn-text((Read more))
=link((google.com))
{#card#}
</div>
<div class="col-sm-6">
{#card#}
=title((Hello World!))
=description((This is a card in dgsm))
=btn-text((Read more))
=link((google.com))
{#card#}
</div>
</div>

**Code**
```
<div class="row">
<div class="col-sm-6">
{#card#}
=title((Hello World!))
=description((This is a card in dgsm))
=btn-text((Read more))
=link((google.com))
{#card???#}
</div>
<div class="col-sm-6">
{#card#}
=title((Hello World!))
=description((This is a card in dgsm))
=btn-text((Read more))
=link((google.com))
{#card???#}
</div>
</div>
```
----

----
## Comments for Github Only
**Example**    
         
//???/ This will not display on this page

**Code**
```
//???/ This will not display on this page
```
----



----
## Video
**Example**    
        
{#video((w3schools.com/howto/rain.mp4))#}

**Code**
```
{#video((w3schools.com/howto/rain.mp4))???#} <-- without https://
```
----

----
## Progrssbars
**Example**    
         
{#progressbar#}
=color((28a745))
=progress((25))
{#progressbar#}
{#progressbar#}
=color((17a2b8))
=progress((50))
{#progressbar#}
{#progressbar#}
=color((ffc107))
=progress((75))
{#progressbar#}
{#progressbar#}
=color((dc3545))
=progress((100))
{#progressbar#}

**Code**
```
{#progressbar#}
=color((28a745))
=progress((25))
{#progressbar???#}
{#progressbar#}
=color((17a2b8))
=progress((50))
{#progressbar???#}
```
----

----
## News Alerts
**Example**     
       
{#news-alert#}
=class((primary))
=b-text((NOTE))
=n-text((This is a test))
{#news-alert#}
{#news-alert#}
=class((secondary))
=b-text((NOTE))
=n-text((This is a test))
{#news-alert#}
{#news-alert#}
=class((success))
=b-text((NOTE))
=n-text((This is a test))
{#news-alert#}
{#news-alert#}
=class((warning))
=b-text((NOTE))
=n-text((This is a test))
{#news-alert#}
{#news-alert#}
=class((danger))
=b-text((NOTE))
=n-text((This is a test))
{#news-alert#}
{#news-alert#}
=class((info))
=b-text((NOTE))
=n-text((This is a test))
{#news-alert#}
{#news-alert#}
=class((lighr))
=b-text((NOTE))
=n-text((This is a test))
{#news-alert#}
{#news-alert#}
=class((dark))
=b-text((NOTE))
=n-text((This is a test))
{#news-alert#}


**Code**
```
{#news-alert#}
=class((primary))
=b-text((NOTE))
=n-text((This is a test))
{#news-alert???#}
{#news-alert#}
=class((secondary))
=b-text((NOTE))
=n-text((This is a test))
{#news-alert???#}

```
----

----
## Buttons
**Example**  
         
{#button#}
=class((primary))
=text((Primary))
=link((google.com))
{#button#}
{#button#}
=class((secondary))
=text((Secondary))
=link((google.com))
{#button#}
{#button#}
=class((success))
=text((Success))
=link((google.com))
{#button#}
{#button#}
=class((danger))
=text((Danger))
=link((google.com))
{#button#}
{#button#}
=class((warning))
=text((Warning))
=link((google.com))
{#button#}


**Code**
```
{#button#}
=class((primary))
=text((Primary))
=link((google.com))
{#button#???}
```
----

----
## Button Group
**Example**
<div class="btn-group" role="group" aria-label="Basic example">
{#button#}
=class((primary))
=text((Primary))
=link((google.com))
{#button#}
{#button#}
=class((secondary))
=text((Secondary))
=link((google.com))
{#button#}
{#button#}
=class((success))
=text((Success))
=link((google.com))
{#button#}
{#button#}
=class((danger))
=text((Danger))
=link((google.com))
{#button#}
{#button#}
=class((warning))
=text((Warning))
=link((google.com))
{#button#}
</div>
<br>
       
**Code**
```
<div class="btn-group" role="group" aria-label="Basic example">
{#button#}
=class((primary))
=text((Primary))
=link((google.com))
{#button#???}
{#button#}
=class((secondary))
=text((Secondary))
=link((google.com))
{#button#???}
</div>
```
----

----
## Modal Dialog
**Example**    
        
{#modal#}
=id((kekekekekekeke))
=title((Changelog))
=content((HI LOL))
=btn-text((Open Modal))
{#modal#}

**Code**
```
{#modal#}
=id((kekekekekekeke))
=title((Changelog))
=content((HI LOL))
=btn-text((Open Modal))
{#modal???#}
```
----

----
## Button Collapse
**Example**    
            
{#btn-collapse#}
=id((dgsm_collapse))
=class((primary))
=btn-text((Open the Primary))
=content-text((
fghfghfghdfsgh     
ghsf     
ghsfghsfghsfthsfgh     
sfghsfg     
hsfghsfghsfgh     
sfghsfghsfgh
))
{#btn-collapse#}

**Code**
```
{#btn-collapse#}
=id((dgsm_collapse))
=class((primary))
=btn-text((Open the Primary))
=content-text((
fghfghfghdfsgh     
ghsf     
ghsfghsfghsfthsfgh     
sfghsfg     
hsfghsfghsfgh     
sfghsfghsfgh
))
{#btn-collapse???#}
```
----

----
## Accordion
**Example**    
        
<div class="accordion" id="accordionExample">
<div class="accordion-item">
<h2 class="accordion-header" id="headingOne">
<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
Accordion Item #1
</button>
</h2>
<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
<div class="accordion-body">
<strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingTwo">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
Accordion Item #2
</button>
</h2>
<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
<div class="accordion-body">
<strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingThree">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
Accordion Item #3
</button>
</h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
<div class="accordion-body">
<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
</div>
</div>
</div>
</div>

**Code**
```
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
```
----

----
## Sample Page
**Example**    
        
[See here](https://dergoogler.github.io/?/pmr/#/DerGoogler/DerGoogler/main/sadness/)

**Code**
```
<style???>
body {
  width: 100%;
  overflow: hidden;
  cursor:move;
}
<style???>
<page???>
<canvas id="canv" width="2265" height="1465"></canvas>
<page???>
<script???>
window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

var gnum = 90; //num grids / frame
var _x = 2265; //x width (canvas width)
var _y = 1465; //y height (canvas height)
var w = _x / gnum; //grid sq width
var h = _y / gnum; //grid sq height
var $; //context
var parts; //particles 
var frm = 0; //value from
var P1 = 0.0005; //point one
var P2 = 0.01; //point two
var n = 0.98; //n value for later
var n_vel = 0.02; //velocity
var ŭ = 0; //color update
var msX = 0; //mouse x
var msY = 0; //mouse y
var msdn = false; //mouse down flag

var Part = function() {
  this.x = 0; //x pos
  this.y = 0; //y pos
  this.vx = 0; //velocity x
  this.vy = 0; //velocity y
  this.ind_x = 0; //index x
  this.ind_y = 0; //index y
};

Part.prototype.frame = function() {

  if (this.ind_x == 0 || this.ind_x == gnum - 1 || this.ind_y == 0 || this.ind_y == gnum - 1) {
    return;
  }

  var ax = 0; //angle x
  var ay = 0; //angle y
  //off_dx, off_dy = offset distance x, y
  var off_dx = this.ind_x * w - this.x;
  var off_dy = this.ind_y * h - this.y;
  ax = P1 * off_dx;
  ay = P1 * off_dy;

  ax -= P2 * (this.x - parts[this.ind_x - 1][this.ind_y].x);
  ay -= P2 * (this.y - parts[this.ind_x - 1][this.ind_y].y);

  ax -= P2 * (this.x - parts[this.ind_x + 1][this.ind_y].x);
  ay -= P2 * (this.y - parts[this.ind_x + 1][this.ind_y].y);

  ax -= P2 * (this.x - parts[this.ind_x][this.ind_y - 1].x);
  ay -= P2 * (this.y - parts[this.ind_x][this.ind_y - 1].y);

  ax -= P2 * (this.x - parts[this.ind_x][this.ind_y + 1].x);
  ay -= P2 * (this.y - parts[this.ind_x][this.ind_y + 1].y);

  this.vx += (ax - this.vx * n_vel);
  this.vy += (ay - this.vy * n_vel);

  this.x += this.vx * n;
  this.y += this.vy * n;
  if (msdn) {
    var dx = this.x - msX;
    var dy = this.y - msY;
    var ɋ = Math.sqrt(dx * dx + dy * dy);
    if (ɋ < 50) {
      ɋ = ɋ < 10 ? 10 : ɋ;
      this.x -= dx / ɋ * 5;
      this.y -= dy / ɋ * 5;
    }
  }
};

function go() {
    parts = []; //particle array
    for (var i = 0; i < gnum; i++) {
      parts.push([]);
      for (var j = 0; j < gnum; j++) {
        var p = new Part();
        p.ind_x = i;
        p.ind_y = j;
        p.x = i * w;
        p.y = j * h;
        parts[i][j] = p;
      }
    }
  }
  //move particles function
function mv_part() {

    for (var i = 0; i < gnum; i++) {
      for (var j = 0; j < gnum; j++) {
        var p = parts[i][j];
        p.frame();
      }
    }
  }
  //draw grid function
function draw() {
    $.strokeStyle = "hsla(" + (ŭ % 360) + ",100%,50%,1)";
    $.beginPath();
    ŭ -= .5;
    for (var i = 0; i < gnum - 1; i += 1) {
      for (var j = 0; j < gnum - 1; j += 1) {
        var p1 = parts[i][j];
        var p2 = parts[i][j + 1];
        var p3 = parts[i + 1][j + 1];
        var p4 = parts[i + 1][j];
        draw_each(p1, p2, p3, p4);
      }
    }
    $.stroke();

  }
  //draw each in array
function draw_each(p1, p2, p3, p4) {

    $.moveTo(p1.x, p1.y);
    $.lineTo(p2.x, p2.y);
    $.moveTo(p1.x, p1.y);
    $.lineTo(p4.x, p4.y);
    
    if (p1.ind_x == gnum - 2) {
      $.moveTo(p3.x, p3.y);
      $.lineTo(p4.x, p4.y);
    }
    if (p1.ind_y == gnum - 2) {
      $.moveTo(p3.x, p3.y);
      $.lineTo(p2.x, p2.y);
    }
  }
  //call functions to run
function calls() {
    $.fillStyle = "hsla(0, 5%, 5%, .1)";
    $.fillRect(0, 0, _x, _y);

    mv_part();
    draw();
    frm++;
  }
  //create wave effect 
function wave(x, y) {

  var wv = Math.sin(x / wv * xw);
  var wave = Math.sin(0.2 * w * frm + y * yw) * w;

  return wave;
}

var c = document.getElementById('canv');
var $ = c.getContext('2d');
$.fillStyle = "hsla(0, 5%, 5%, .1)";
$.fillRect(0, 0, _x, _y);

function resize() {
  if (c.width < window.innerWidth) {
    c.width = window.innerWidth;
  }

  if (c.height < window.innerHeight) {
    c.height = window.innerHeight;
  }
}
window.requestAnimFrame(go);

document.addEventListener('mousemove', MSMV, false);
document.addEventListener('mousedown', MSDN, false);
document.addEventListener('mouseup', MSUP, false);

function MSDN(e) {
  msdn = true;
}

function MSUP(e) {
  msdn = false;
}

function MSMV(e) {
  var rect = e.target.getBoundingClientRect();
  msX = e.clientX - rect.left;
  msY = e.clientY - rect.top;
}
window.onload = function() {
  run();

  function run() {
    window.requestAnimFrame(calls);
    window.requestAnimFrame(run, 33);
  }
  resize();
};
<script???>
```
----

</div>
</page>