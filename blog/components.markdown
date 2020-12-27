{#setting#}
=title((Components))
=header((true))
{#setting#}

/// Includes the navbar
{#navbar-body#}
{#=include((embeds/navbar))#}
{#navbar-body#}

# Componets
here can you see all custom markdown componets    
View [LICENCE](https://dergoogler.github.io/?/safty/#/licences/)
<br>
<br>

----
## Page Settings
**Example**     
        
N/A

**Code**
```
{#setting#}
=title((Components))
=header((true))
{#setting???#}
```
----

----
## Edit the Navbar
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
\b
**Code (No Include)**
```
{#navbar-body#???}
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/editor/">Editor</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/?/blog/#/start-with-pmr-cloud/">PMR-Cloud</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Social
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="https://instagram.com/der_googler">Instagram</a></li>
            <li><a class="dropdown-item" href="https://t.me/dergoogler">Telegram</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Safty
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/?/safty/#/licences/">Licences</a></li>
            <li><a class="dropdown-item" href="/?/safty/#/impressum/">Imprint (GER)</a></li>
          </ul>
        </li>
      </ul>
    </div>
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
            
{#alert#}
=title((Hello))
=message((this is a test!!!!))
{#alert#}

**Code**
```
{#alert#}
=title((Hello))
=message((this is a test!!!!))
{#alert#???}
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
