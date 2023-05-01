module.exports.reportsPage = `
<html>

<head>
  <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <meta name="description" content="Falcon Servers, discord server that hosts tournaments for various games, join to participate in events and get rewards">
  <meta name="keywords" content="falcon, falconservers, serversfalcon">
  <meta name="google-site-verification" content="yq-PydwWrpUAa-FIK_nNtUjmNjJDH9og1l1HZNlECd8" />
  <link rel="canonical" href="https://serversfalcon.com/home/" />
  <title>Falcon Servers | Reports</title>
  <link rel="stylesheet" href="style.css">
  

  <link rel="shortcut icon" href="https://i.postimg.cc/QxWttYgq/icon.png" type="image/png">
</head>

  <body oncontextmenu="return false" onselectstart="return false" ondragstart="return false">
    <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
    <label for="menu-icon"></label>
    <nav class="nav">
    <ul class="pt-5">
      <li><a href="https://serversfalcon.com">Home</a></li>
      <li><a href="https://serversfalcon.com/about">About</a></li>
      <li><a href="https://serversfalcon.com/apply">Apply</a></li>
    </ul>
  </nav>
    
    <div id="yazı">█ █ █&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="color:black"> </span>28%
      <br>&gt; Page coming soon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br>&gt; Under Development  <span id="imleç">█</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
<footer>
    <a href="https://serversfalcon.com/terms" class="flink span a">Terms</a>
    <a href="https://serversfalcon.com/privacy" class="flink span a">Privacy Policy</a>
    <a href="https://serversfalcon.com/delete" class="flink span a">Data Deletion</a>
    <a href="https://serversfalcon.com/reports" class="flink span a">Reports</a>
  </footer>
  </body>
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
html {
  overflow: hidden;
  overflow-y: hidden;
  overflow-x: hidden;
}

body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.7;
    color: #ececee;
    background-color: #1f2029;
    overflow: hidden;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat-back.svg');
    background-position: center;
    background-repeat: repeat;
    background-size: 4%;
    height: 100vh;
    width: 100%;
}

.section-center {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    z-index: 6;
    text-align: center;
    transform: translateY(-50%);
}

h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 4vw;
    line-height: 1;
    color: #50bcbb;
    text-align: center;
}

.mb-0 {
  transition: all 0.3s ease;
}

.mb-0:hover {
  
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
    position: absolute;
    left: -9999px;
}

.menu-icon:checked+label,
.menu-icon:not(:checked)+label {
    position: fixed;
    top: 63px;
    right: 75px;
    display: block;
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    z-index: 10;
}

.menu-icon:checked+label:before,
.menu-icon:not(:checked)+label:before {
    position: absolute;
    content: '';
    display: block;
    width: 30px;
    height: 20px;
    z-index: 20;
    top: 0;
    left: 0;
    border-top: 2px solid #ececee;
    border-bottom: 2px solid #ececee;
    transition: border-width 100ms 1500ms ease, top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:after,
.menu-icon:not(:checked)+label:after {
    position: absolute;
    content: '';
    display: block;
    width: 22px;
    height: 2px;
    z-index: 20;
    top: 10px;
    right: 4px;
    background-color: #ececee;
    margin-top: -1px;
    transition: width 100ms 1750ms ease, right 100ms 1750ms ease, margin-top 100ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:before {
    top: 10px;
    transform: rotate(45deg);
    height: 2px;
    background-color: #ececee;
    border-width: 0;
    transition: border-width 100ms 340ms ease, top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms 500ms ease, transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:after {
    width: 30px;
    margin-top: 0;
    right: 0;
    transform: rotate(-45deg);
    transition: width 100ms ease, right 100ms ease, margin-top 100ms 500ms ease, transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav {
    position: fixed;
    top: 33px;
    right: 50px;
    display: block;
    width: 80px;
    height: 80px;
    padding: 0;
    margin: 0;
    z-index: 9;
    overflow: hidden;
    box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.3);
    background-color: #353746;
    animation: border-transform 7s linear infinite;
    transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1), right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 1100ms ease, width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1), height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes border-transform {
    0%,
    100% {
        border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    }
    14% {
        border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
    }
    28% {
        border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
    }
    42% {
        border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
    }
    56% {
        border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
    }
    70% {
        border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
    }
    84% {
        border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
    }
}

.menu-icon:checked~.nav {
    animation-play-state: paused;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 200%;
    height: 200%;
    transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 700ms ease, width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1), height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav ul {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    z-index: 6;
    text-align: center;
    transform: translateY(-50%);
    list-style: none;
}

.nav ul li {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    margin: 10px 0;
    text-align: center;
    list-style: none;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transform: translateY(30px);
    transition: all 250ms linear;
}

.nav ul li:nth-child(1) {
    transition-delay: 200ms;
}

.nav ul li:nth-child(2) {
    transition-delay: 150ms;
}

.nav ul li:nth-child(3) {
    transition-delay: 100ms;
}

.nav ul li:nth-child(4) {
    transition-delay: 50ms;
}

.nav ul li a {
    font-family: 'Montserrat', sans-serif;
    font-size: 9vh;
    text-transform: uppercase;
    line-height: 1.2;
    font-weight: 800;
    display: inline-block;
    position: relative;
    color: #ececee;
    transition: all 250ms linear;
}

.nav ul li a:hover {
    text-decoration: none;
    color: #50bcbb;
}

.nav ul li a:after {
    display: block;
    position: absolute;
    top: 50%;
    content: '';
    height: 2vh;
    margin-top: -1vh;
    width: 0;
    left: 0;
    background-color: #112031;
    opacity: 0.8;
    transition: width 250ms linear;
}

.nav ul li a:hover:after {
    width: 100%;
}

.menu-icon:checked~.nav ul li {
    pointer-events: auto;
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    transition: opacity 350ms ease, transform 250ms ease;
}

.menu-icon:checked~.nav ul li:nth-child(1) {
    transition-delay: 1400ms;
}

.menu-icon:checked~.nav ul li:nth-child(2) {
    transition-delay: 1480ms;
}

.menu-icon:checked~.nav ul li:nth-child(3) {
    transition-delay: 1560ms;
}

.menu-icon:checked~.nav ul li:nth-child(4) {
    transition-delay: 1640ms;
}

.logo {
    position: absolute;
    top: 60px;
    left: 50px;
    display: block;
    z-index: 11;
    transition: all 250ms linear;
}

.logo img {
    height: 26px;
    width: auto;
    display: block;
}


/* ALL TESTS */

.b {
    position: relative;
    display: inline-block;
    padding: 25px 30px;
    margin: 40px 0;
    color: #03e9f4;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
    margin-right: 50px;
    font-weight: 700;
    top: 60%;
    left: 45%;
}

.b:hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}

.b:nth-child(1) {
    filter: hue-rotate(270deg);
}

.b:nth-child(2) {
    filter: hue-rotate(110deg);
}

.b span {
    position: absolute;
    display: block;
}

.b span:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: animate1 1s linear infinite;
}

@keyframes animate1 {
    0% {
        left: -100%;
    }
    50%,
    100% {
        left: 100%;
    }
}

.b span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
}

@keyframes animate2 {
    0% {
        top: -100%;
    }
    50%,
    100% {
        top: 100%;
    }
}

.b span:nth-child(3) {
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: animate3 1s linear infinite;
    animation-delay: 0.50s;
}

@keyframes animate3 {
    0% {
        right: -100%;
    }
    50%,
    100% {
        right: 100%;
    }
}

.b span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
}

@keyframes animate4 {
    0% {
        bottom: -100%;
    }
    50%,
    100% {
        bottom: 100%;
    }
}

@media screen and (max-width: 991px) {
    .menu-icon:checked+label,
    .menu-icon:not(:checked)+label {
        right: 55px;
    }
    .logo {
        left: 30px;
    }
    .nav {
        right: 30px;
    }
    h1 {
        font-size: 9vw;
        -webkit-text-stroke: 2px transparent;
        text-stroke: 2px transparent;
        -webkit-text-fill-color: #50bcbb;
        text-fill-color: #50bcbb;
        color: #50bcbb;
    }
    .nav ul li a {
        font-size: 3vh;
    }
    .nav ul li a:after {
        display: block;
        position: absolute;
        top: 50%;
        content: '';
        height: 0.5vh;
        margin-top: -0.3vh;
        width: 0;
        left: 0;
        background-color: #112031;
        opacity: 0.8;
        transition: width 250ms linear;
    }
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 20px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 30vw;
    }
}


/* @media screen and (min-width: 480px) {
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 15px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 28vw;
    }
} */

@media screen and (max-width: 1145px) {
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 15px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 42.5vw;
        top: 50vh;
    }
}

@media screen and (max-width: 993px) {
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 15px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 39.5vw;
        top: 65vh;
    }
}

@media screen and (max-width: 728px) {
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 15px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 32.5vw;
        top: 65vh;
    }
}

@media screen and (max-width: 567px) {
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 15px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 29.5vw;
        top: 60vh;
    }
}

@media screen and (max-width: 500px) {
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 15px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 26vw;
        top: 55vh;
    }
}

@media only screen and (max-width: 600px) {
    .b {
        position: relative;
        display: inline-block;
        padding: 25px 30px;
        margin: 40px 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 4px;
        overflow: hidden;
        margin-right: 50px;
        font-weight: 700;
        top: 60%;
        left: 26%;
    }
}

@media screen and (max-width: 280px) {
  html {
    overflow: hidden;
  }
  
  .b {
      position: relative;
      display: inline-block;
      padding: 3vh 5vh;
      font-size: 15px;
      margin: 10vh 0;
      color: #03e9f4;
      text-decoration: none;
      text-transform: uppercase;
      transition: 0.5s;
      letter-spacing: 0.4vh;
      overflow: hidden;
      margin-right: 1vh;
      left: 26vw;
      top: 55vh;
  }
}

footer {
  position: absolute;
  bottom: 20px;
  width: 100%;
  height: 2.5rem;     
  margin: auto;
  text-align: center;
  padding: 1px 30px;
}

.flink {
  text-decoration: none;
  color: white;
  padding: 1px 30px;
}

.a {
  overflow: hidden;
  position: relative;
  display: inline-block;
}

.a::before,
.a::after {
 content: '';
  position: absolute;
  width: 100%;
  left: 0;
}
.a::before {
  background-color: #54b3d6;
  height: 2px;
  bottom: 0;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}
.a::after {
  content: attr(data-replace);
  height: 100%;
  top: 0;
  transform-origin: 100% 50%;
  transform: translate3d(200%, 0, 0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
  color: #54b3d6;
}

.a:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
.a:hover::after {
  transform: translate3d(0, 0, 0);
}

.a .span {
  display: inline-block;
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}

.a:hover .span {
  transform: translate3d(-200%, 0, 0);
}

.a {
  text-decoration: none;
  color: white;
  font-weight: 700;
  vertical-align: top;
}

@media screen and (max-width: 564px) {
  .flink {
    text-decoration: none;
    color: white;
    padding: 1px 5px;
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 90%;
    height: 2.5rem;     
    margin: auto;
    text-align: center;
    padding: 1px 30px;
  }
}
</style>

</html>
`

module.exports.deletePage = `
<!DOCTYPE html>
<html lang = "en">
  <link rel="canonical" href="https://serversfalcon.com/home/" />
<head>
	<meta charset = "UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Falcon Servers, discord server that hosts tournaments for various games, join to participate in events and get rewards">
  <meta name="keywords" content="falcon, falconservers, serversfalcon">
  	<title> Falcon Servers | Data Deletion </title>

    <link rel="shortcut icon" href="https://i.postimg.cc/QxWttYgq/icon.png" type="image/png">
</head>
<body id="element">
<input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
    <label for="menu-icon"></label>
    <nav class="nav">
    <ul class="pt-5">
      <li><a href="https://serversfalcon.com">Home</a></li>
      <li><a href="https://serversfalcon.com/about">About</a></li>
      <li><a href="https://serversfalcon.com/apply">Apply</a></li>
    </ul>
  </nav>

<iframe class="iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSewTmG3shmkC-J3YGmhtVj3sNM6z5DCh9U0tdn-7zgCJTvGdg/viewform" width="650" height="750" frameborder="0" marginheight="0" marginwidth="0" align = "center">Loading…</iframe>
<footer>
    <a href="https://serversfalcon.com/terms" class="flink span a">Terms</a>
    <a href="https://serversfalcon.com/privacy" class="flink span a">Privacy Policy</a>
    <a href="https://serversfalcon.com/delete" class="flink span a">Data Deletion</a>
    <a href="https://serversfalcon.com/reports" class="flink span a">Reports</a>
  </footer>
</body>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
html {
  overflow: hidden;
  overflow-y: hidden;
  overflow-x: hidden;
}

body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.7;
    color: #ececee;
    background-color: #1f2029;
    overflow: hidden;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat-back.svg');
    background-position: center;
    background-repeat: repeat;
    background-size: 4%;
    height: 100vh;
    width: 100%;
}

.section-center {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    z-index: 6;
    text-align: center;
    transform: translateY(-50%);
}

h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 4vw;
    line-height: 1;
    color: #50bcbb;
    text-align: center;
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
    position: absolute;
    left: -9999px;
}

.menu-icon:checked+label,
.menu-icon:not(:checked)+label {
    position: fixed;
    top: 63px;
    right: 75px;
    display: block;
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    z-index: 10;
}

.menu-icon:checked+label:before,
.menu-icon:not(:checked)+label:before {
    position: absolute;
    content: '';
    display: block;
    width: 30px;
    height: 20px;
    z-index: 20;
    top: 0;
    left: 0;
    border-top: 2px solid #ececee;
    border-bottom: 2px solid #ececee;
    transition: border-width 100ms 1500ms ease, top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:after,
.menu-icon:not(:checked)+label:after {
    position: absolute;
    content: '';
    display: block;
    width: 22px;
    height: 2px;
    z-index: 20;
    top: 10px;
    right: 4px;
    background-color: #ececee;
    margin-top: -1px;
    transition: width 100ms 1750ms ease, right 100ms 1750ms ease, margin-top 100ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:before {
    top: 10px;
    transform: rotate(45deg);
    height: 2px;
    background-color: #ececee;
    border-width: 0;
    transition: border-width 100ms 340ms ease, top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms 500ms ease, transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:after {
    width: 30px;
    margin-top: 0;
    right: 0;
    transform: rotate(-45deg);
    transition: width 100ms ease, right 100ms ease, margin-top 100ms 500ms ease, transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav {
    position: fixed;
    top: 33px;
    right: 50px;
    display: block;
    width: 80px;
    height: 80px;
    padding: 0;
    margin: 0;
    z-index: 9;
    overflow: hidden;
    box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.3);
    background-color: #353746;
    animation: border-transform 7s linear infinite;
    transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1), right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 1100ms ease, width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1), height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes border-transform {
    0%,
    100% {
        border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    }
    14% {
        border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
    }
    28% {
        border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
    }
    42% {
        border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
    }
    56% {
        border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
    }
    70% {
        border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
    }
    84% {
        border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
    }
}

.menu-icon:checked~.nav {
    animation-play-state: paused;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 200%;
    height: 200%;
    transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 700ms ease, width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1), height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav ul {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    z-index: 6;
    text-align: center;
    transform: translateY(-50%);
    list-style: none;
}

.nav ul li {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    margin: 10px 0;
    text-align: center;
    list-style: none;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transform: translateY(30px);
    transition: all 250ms linear;
}

.nav ul li:nth-child(1) {
    transition-delay: 200ms;
}

.nav ul li:nth-child(2) {
    transition-delay: 150ms;
}

.nav ul li:nth-child(3) {
    transition-delay: 100ms;
}

.nav ul li:nth-child(4) {
    transition-delay: 50ms;
}

.nav ul li a {
    font-family: 'Montserrat', sans-serif;
    font-size: 9vh;
    text-transform: uppercase;
    line-height: 1.2;
    font-weight: 800;
    display: inline-block;
    position: relative;
    color: #ececee;
    transition: all 250ms linear;
}

.nav ul li a:hover {
    text-decoration: none;
    color: #50bcbb;
}

.nav ul li a:after {
    display: block;
    position: absolute;
    top: 50%;
    content: '';
    height: 2vh;
    margin-top: -1vh;
    width: 0;
    left: 0;
    background-color: #112031;
    opacity: 0.8;
    transition: width 250ms linear;
}

.nav ul li a:hover:after {
    width: 100%;
}

.menu-icon:checked~.nav ul li {
    pointer-events: auto;
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    transition: opacity 350ms ease, transform 250ms ease;
}

.menu-icon:checked~.nav ul li:nth-child(1) {
    transition-delay: 1400ms;
}

.menu-icon:checked~.nav ul li:nth-child(2) {
    transition-delay: 1480ms;
}

.menu-icon:checked~.nav ul li:nth-child(3) {
    transition-delay: 1560ms;
}

.menu-icon:checked~.nav ul li:nth-child(4) {
    transition-delay: 1640ms;
}

footer {
  position: absolute;
  bottom: 20px;
  width: 100%;
  height: 2.5rem;     
  margin: auto;
  text-align: center;
  padding: 1px 30px;
}

.flink {
  text-decoration: none;
  color: white;
  padding: 1px 30px;
}

.a {
  overflow: hidden;
  position: relative;
  display: inline-block;
}

.a::before,
.a::after {
 content: '';
  position: absolute;
  width: 100%;
  left: 0;
}
.a::before {
  background-color: #54b3d6;
  height: 2px;
  bottom: 0;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}
.a::after {
  content: attr(data-replace);
  height: 100%;
  top: 0;
  transform-origin: 100% 50%;
  transform: translate3d(200%, 0, 0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
  color: #54b3d6;
}

.a:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
.a:hover::after {
  transform: translate3d(0, 0, 0);
}

.a .span {
  display: inline-block;
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}

.a:hover .span {
  transform: translate3d(-200%, 0, 0);
}

.a {
  text-decoration: none;
  color: white;
  font-weight: 700;
  vertical-align: top;
}

@media screen and (max-width: 564px) {
  .flink {
    text-decoration: none;
    color: white;
    padding: 1px 5px;
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 90%;
    height: 2.5rem;     
    margin: auto;
    text-align: center;
    padding: 1px 30px;
  }
}

iframe {
  margin:auto;
  display:block;
  width: 640px;
  height: 630px;
}

@media screen and (max-width: 650px) {
  iframe {
    margin:auto;
    display:block;
    width: 240px;
  }
}

@media screen and (max-width: 991px) {
    .menu-icon:checked+label,
    .menu-icon:not(:checked)+label {
        right: 55px;
    }
    .logo {
        left: 30px;
    }
    .nav {
        right: 30px;
    }
    h1 {
        font-size: 9vw;
        -webkit-text-stroke: 2px transparent;
        text-stroke: 2px transparent;
        -webkit-text-fill-color: #50bcbb;
        text-fill-color: #50bcbb;
        color: #50bcbb;
    }
    .nav ul li a {
        font-size: 3vh;
    }
    .nav ul li a:after {
        display: block;
        position: absolute;
        top: 50%;
        content: '';
        height: 0.5vh;
        margin-top: -0.3vh;
        width: 0;
        left: 0;
        background-color: #112031;
        opacity: 0.8;
        transition: width 250ms linear;
    }
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 20px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 30vw;
    }
}
</style>
</html>
`

module.exports.privacyPage = `
<!DOCTYPE html>
<html lang = "en">
<head>
	<meta charset = "UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="Falcon Servers, discord server that hosts tournaments for various games, join to participate in events and get rewards">
  <meta name="keywords" content="falcon, falconservers, serversfalcon">
  	<title> Falcon Servers | Privacy </title>
  <link rel="canonical" href="https://serversfalcon.com/home/" />
    <link rel="stylesheet" href="/privacy/index.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="shortcut icon" href="https://i.postimg.cc/QxWttYgq/icon.png" type="image/png">
</head>

<body align='center' id="element">
  <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
    <label for="menu-icon"></label>
    <nav class="nav">
    <ul class="pt-5">
      <li><a href="https://serversfalcon.com">Home</a></li>
      <li><a href="https://serversfalcon.com/about">About</a></li>
      <li><a href="https://serversfalcon.com/apply">Apply</a></li>
    </ul>
  </nav>

<div class = "content" style="padding: 0px 70px; color: white;">
<h1 align = "left" style="font-size:400%; color:#50bcbb;">Privacy Policy</h1>

<p align = "left" style="font-size:140%;"><i>Effective from 01.02.2021 (February first, Two thousand and twenty one) <br>
Written by switch#6187 (Server and Bot Owner), BiscuitWires#7210 (Bot Developer) & WhackyAshu15#3719 (Website Developer)
</i>
</p>
<h2 align = "left" style="font-size:200%; color:#50bcbb"><strong>Definitions:</strong></h2>

<article align = "left" style="font-size:150%;">Falcon Servers Bot and the website located at <a href="https://serversfalcon.com" class="web">serversfalcon.com</a> (hereby referred to as “we” and “our”) refers to our Discord Bot with the username and tag: Falcon Servers#5738 and ID: 890242275152654386
<br>
The user (hereby referred to as “you” and “your”), refers to anyone who uses our services.
</article>

<h2 align = "left" style="font-size:200%;color:#50bcbb;"><strong>IMPORTANT NOTICE:</strong></h2>
<article align = "left" style="font-size:150%;">Please note that as our website is currently in development, our terms of use and privacy policy are subject to change for the betterment of your experience and our ability to provide our service(s). We will update our privacy policy and all forms associated with said policy to reflect these changes once our website is released.
</article>

<h2 align = "left" style="font-size:150%;color:#50bcbb;"><strong>By using our Service(s), you agree to our terms of use and our privacy policy</strong></h2>

<h2 align = "left" style="font-size:200%;"><strong>Data we collect:</strong></h2>
<article align = "left" style="font-size:150%;">
- Registration Data, including but not limited to usernames and emails <br>
- Profile Data from Discord, such as usernames, avatars and knowledge of servers you are a member of <br>
- Communications, including but not limited to questions, bug reports, feedback <br>
- Other information we may collect which is not specifically listed here, but will use in accordance with this Privacy Policy <br>
</article>

<h2 align = "left" style="font-size:200%;color:#50bcbb;"><strong>Why we need this data:</strong></h2>
<article align = "left" style="font-size:150%;">
Your data is used in order to provide you with our service(s). Personal information such as your <strong><i>email address</strong></i> and / or your  <strong><i>Discord username </strong></i> is required to verify you for both contact and verification purposes. Other information is used for, but is not limited to, the following reasons: <br>
- To monitor and maintain our Service(s) <br>
- To provide assistance and / or updates <br>
- To interact with our Service(s) <br>
- To prevent the misuse of our Service(s) <br>
</article>

<h2 align = "left" style="font-size:200%; color:#50bcbb;"><strong>Expectations from you:</strong></h2>
<article align = "left" style="font-size:150%;">
By using our Service(s), you comply and accept these terms. By using our services, you comply with the <a href="https://discord.com/terms">Discord TOS</a>. You agree that you are over <strong>13 years of age</strong> and are authorized to use our Service(s). <u>Any violations of the discord TOS will not be our liability, and any harmful misuse of our service(s) will be reported to discord if required.</u>
</article>

<h2 align = "left" style="font-size:200%; color:#50bcbb;"><strong>Third-Party sites:</strong></h2>
<article align = "left" style="font-size:150%;">
Our Service(s) include links to third party websites and images such as ‘youtube.com’. Please note that Falcon Servers does not have any control over these sites and or links and we therefore cannot be held accountable for any issues or complications that arise by visiting these sites.
</article>

<h2 align = "left" style="font-size:200%; color:#50bcbb;"><strong>Data Removal:</strong></h2>
<article align = "left" style="font-size:150%;">
As a user of our service, you have the right to request your data to be removed and deleted from all of our services. While our website is in the works, <a href= "/privacy/datadeletion">you can fill out our google form here to request data deletion. </a>
</article><br>
</div>
<footer>
    <a href="https://serversfalcon.com/terms" class="flink span a">Terms</a>
    <a href="https://serversfalcon.com/privacy" class="flink span a">Privacy Policy</a>
    <a href="https://serversfalcon.com/delete" class="flink span a">Data Deletion</a>
    <a href="https://serversfalcon.com/reports" class="flink span a">Reports</a>
  </footer>
</body>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');

html {
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #112031;
}

::-webkit-scrollbar-thumb {
  background: #50bcbb;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #007a78;
}

body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.7;
    color: #ececee;
    background-color: #1f2029;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat-back.svg');
    background-position: center;
    background-repeat: repeat;
    background-size: 4%;
    height: 100vh;
    width: 100%;
}

.section-center {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    z-index: 6;
    text-align: center;
    transform: translateY(-50%);
}

h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 4vw;
    line-height: 1;
    color: #50bcbb;
    text-align: center;
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
    position: absolute;
    left: -9999px;
}

.menu-icon:checked+label,
.menu-icon:not(:checked)+label {
    position: fixed;
    top: 63px;
    right: 75px;
    display: block;
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    z-index: 10;
}

.menu-icon:checked+label:before,
.menu-icon:not(:checked)+label:before {
    position: absolute;
    content: '';
    display: block;
    width: 30px;
    height: 20px;
    z-index: 20;
    top: 0;
    left: 0;
    border-top: 2px solid #ececee;
    border-bottom: 2px solid #ececee;
    transition: border-width 100ms 1500ms ease, top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:after,
.menu-icon:not(:checked)+label:after {
    position: absolute;
    content: '';
    display: block;
    width: 22px;
    height: 2px;
    z-index: 20;
    top: 10px;
    right: 4px;
    background-color: #ececee;
    margin-top: -1px;
    transition: width 100ms 1750ms ease, right 100ms 1750ms ease, margin-top 100ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:before {
    top: 10px;
    transform: rotate(45deg);
    height: 2px;
    background-color: #ececee;
    border-width: 0;
    transition: border-width 100ms 340ms ease, top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms 500ms ease, transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:after {
    width: 30px;
    margin-top: 0;
    right: 0;
    transform: rotate(-45deg);
    transition: width 100ms ease, right 100ms ease, margin-top 100ms 500ms ease, transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav {
    position: fixed;
    top: 33px;
    right: 50px;
    display: block;
    width: 80px;
    height: 80px;
    padding: 0;
    margin: 0;
    z-index: 9;
    overflow: hidden;
    box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.3);
    background-color: #353746;
    animation: border-transform 7s linear infinite;
    transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1), right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 1100ms ease, width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1), height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes border-transform {
    0%,
    100% {
        border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    }
    14% {
        border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
    }
    28% {
        border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
    }
    42% {
        border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
    }
    56% {
        border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
    }
    70% {
        border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
    }
    84% {
        border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
    }
}

.menu-icon:checked~.nav {
    animation-play-state: paused;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 200%;
    height: 200%;
    transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 700ms ease, width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1), height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav ul {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    z-index: 6;
    text-align: center;
    transform: translateY(-50%);
    list-style: none;
}

.nav ul li {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    margin: 10px 0;
    text-align: center;
    list-style: none;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transform: translateY(30px);
    transition: all 250ms linear;
}

.nav ul li:nth-child(1) {
    transition-delay: 200ms;
}

.nav ul li:nth-child(2) {
    transition-delay: 150ms;
}

.nav ul li:nth-child(3) {
    transition-delay: 100ms;
}

.nav ul li:nth-child(4) {
    transition-delay: 50ms;
}

.nav ul li a {
    font-family: 'Montserrat', sans-serif;
    font-size: 9vh;
    text-transform: uppercase;
    line-height: 1.2;
    font-weight: 800;
    display: inline-block;
    position: relative;
    color: #ececee;
    transition: all 250ms linear;
}

.nav ul li a:hover {
    text-decoration: none;
    color: #50bcbb;
}

.nav ul li a:after {
    display: block;
    position: absolute;
    top: 50%;
    content: '';
    height: 2vh;
    margin-top: -1vh;
    width: 0;
    left: 0;
    background-color: #112031;
    opacity: 0.8;
    transition: width 250ms linear;
}

.nav ul li a:hover:after {
    width: 100%;
}

.menu-icon:checked~.nav ul li {
    pointer-events: auto;
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    transition: opacity 350ms ease, transform 250ms ease;
}

.menu-icon:checked~.nav ul li:nth-child(1) {
    transition-delay: 1400ms;
}

.menu-icon:checked~.nav ul li:nth-child(2) {
    transition-delay: 1480ms;
}

.menu-icon:checked~.nav ul li:nth-child(3) {
    transition-delay: 1560ms;
}

.menu-icon:checked~.nav ul li:nth-child(4) {
    transition-delay: 1640ms;
}

footer {
  position: relative;
  width: 100%;
  height: 2.5rem;     
  margin: auto;
  text-align: center;
  padding: 1px 30px;
}

.flink {
  text-decoration: none;
  color: white;
  padding: 1px 30px;
}

.a {
  overflow: hidden;
  position: relative;
  display: inline-block;
}

.a::before,
.a::after {
 content: '';
  position: absolute;
  width: 100%;
  left: 0;
}
.a::before {
  background-color: #54b3d6;
  height: 2px;
  bottom: 0;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}
.a::after {
  content: attr(data-replace);
  height: 100%;
  top: 0;
  transform-origin: 100% 50%;
  transform: translate3d(200%, 0, 0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
  color: #54b3d6;
}

.a:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
.a:hover::after {
  transform: translate3d(0, 0, 0);
}

.a .span {
  display: inline-block;
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}

.a:hover .span {
  transform: translate3d(-200%, 0, 0);
}

.a {
  text-decoration: none;
  color: white;
  font-weight: 700;
  vertical-align: top;
}

@media screen and (max-width: 564px) {
  .flink {
    text-decoration: none;
    color: white;
    padding: 1px 5px;
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 90%;
    height: 2.5rem;     
    margin: auto;
    text-align: center;
    padding: 1px 30px;
  }
}

@media screen and (max-width: 623px) {
  .flink {
    text-decoration: none;
    color: white;
    padding: 1px 5px;
  }
  footer {
    position: relative;
    bottom: 0;
    width: 90%;
    height: 2.5rem;     
    margin: auto;
    text-align: center;
    padding: 1px 30px;
  }
}

iframe {
  margin:auto;
  display:block;
  width: 640px;
  height: 630px;
}

@media screen and (max-width: 991px) {
    .menu-icon:checked+label,
    .menu-icon:not(:checked)+label {
        right: 55px;
    }
    .logo {
        left: 30px;
    }
    .nav {
        right: 30px;
    }
    h1 {
        font-size: 9vw;
        -webkit-text-stroke: 2px transparent;
        text-stroke: 2px transparent;
        -webkit-text-fill-color: #50bcbb;
        text-fill-color: #50bcbb;
        color: #50bcbb;
    }
    .nav ul li a {
        font-size: 3vh;
    }
    .nav ul li a:after {
        display: block;
        position: absolute;
        top: 50%;
        content: '';
        height: 0.5vh;
        margin-top: -0.3vh;
        width: 0;
        left: 0;
        background-color: #112031;
        opacity: 0.8;
        transition: width 250ms linear;
    }
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 20px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 30vw;
    }
}

</style>
</html>
`

module.exports.termsPage = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description"
    content="Falcon Servers, discord server that hosts tournaments for various games, join to participate in events and get rewards">
  <meta name="keywords" content="falcon, falconservers, serversfalcon">
  <title> Falcon Servers | Terms </title>
  <link rel="stylesheet" href="/terms/index.css">
  <link rel="canonical" href="https://serversfalcon.com/home/" />
  <link rel="shortcut icon" href="https://i.postimg.cc/QxWttYgq/icon.png" type="image/png">
</head>

<body align='center' id="element">
  <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
  <label for="menu-icon"></label>
  <nav class="nav">
    <ul class="pt-5">
      <li><a href="https://serversfalcon.com">Home</a></li>
      <li><a href="https://serversfalcon.com/about">About</a></li>
      <li><a href="https://serversfalcon.com/apply">Apply</a></li>
    </ul>
  </nav>
  <div class="contentTerms" style="padding: 0px 70px;">
    <h1 align="left" style="color:#50bcbb; face:monsterrat; font-size:400%;">Terms of Use</h1>

    <p align="left" style="font-size:140%; color:white; face:monsterrat;"><i>Effective from 01.02.2021 (February first,
        Two thousand and twenty one)
        Written by switch#6187 (Server and Bot Owner) and WhackyAshu15#3719 (Website Developer)</i>
    </p>
    <h2 align="left" style="font-size:200%; color:#50bcbb; face:monsterrat;"><strong>Definitions:</strong></h2>

    <article align="left" style="font-size:150%; color:white; face:monsterrat;">Falcon Servers Bot and the website
      located at <a href="https://serversfalcon.com"
        style="text-decoration: none; color: #50bcbb;">serversfalcon.com</a> (hereby referred to as “we” and “our”)
      refers to our Discord Bot with the username and tag: Falcon Servers#5738 and ID: 890242275152654386
      <br>
      The user (hereby referred to as “you” and “your”), refers to anyone who uses our services.
    </article>
    <br><br>
    <h2 align="left" style="font-size:200%; color:#50bcbb; face:monsterrat;"><strong>IMPORTANT NOTICE:</strong></h2>
    <article align="left" style="font-size:150%; color:white; face:monsterrat;">Please note that as our website is
      currently in development, our terms of use and privacy policy are subject to change for the betterment of your
      experience and our ability to provide our service(s). We will update our privacy policy and all forms associated
      with said policy to reflect these changes once our website is released.
    </article><br><br>

    <h2 align="left" style="font-size:150%; color:#50bcbb; face:monsterrat;"><strong>By using our Service(s) [Discord
        bot and Falcon Website], you agree to our terms of use and our privacy policy
      </strong></h2>

    <h2 align="left" style="font-size:200%; color:#50bcbb; face:monsterrat;"><strong>Fair Use:
      </strong></h2>
    <article align="left" style="font-size:150%; color:white; face:monsterrat;">
      By using our service(s), you agree to not intentionally attempt to exploit any flaws / bugs or other such issues.
      You agree that once spotted, any flaws / bugs / or other such issues will be reported to our staff team using the
      ‘$report’ feature on our Discord Bot. You cannot attempt to / or endorse the trade of any form of currency /
      services / or products for the use of our service(s).
    </article>
    <h2 align="left" style="font-size:200%; color:#50bcbb; face:monsterrat;"><strong>Termination:</strong></h2>
    <article align="left" style="font-size:150%; color:white; face:monsterrat;">
      We can terminate your access and/or use of our service(s) temporarily and/or permanently, due to a breach of our
      terms, privacy policy, or any reason deemed justifiable by our admin team. This may be done with no prior
      notification or warning to you.
    </article>

    <h2 align="left" style="font-size:200%; color:#50bcbb; face:monsterrat;"><strong>Updates and changes:</strong></h2>
    <article align="left" style="font-size:150%; color:white; face:monsterrat;">As we continue to develop our
      service(s), our privacy policy and / or our terms of use may be updated or changed. This may happen for any of the
      following reasons:

      <article>- To maintain our service(s)<br>
        - To improve our service(s)<br>
        - To prevent the misuse of our service(s)<br>
      </article>
      We will update our policies on our website to reflect said changes. Users that have opted for our newsletter will
      be informed about said changes at least 1 week prior to their effectiveness.
    </article>
  </div><br>
  <footer>
    <a href="https://serversfalcon.com/terms" class="flink span a">Terms</a>
    <a href="https://serversfalcon.com/privacy" class="flink span a">Privacy Policy</a>
    <a href="https://serversfalcon.com/delete" class="flink span a">Data Deletion</a>
    <a href="https://serversfalcon.com/reports" class="flink span a">Reports</a>
  </footer>
</body>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');

html {
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #112031;
}

::-webkit-scrollbar-thumb {
  background: #50bcbb;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #007a78;
}

body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.7;
    color: #ececee;
    background-color: #1f2029;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat-back.svg');
    background-position: center;
    background-repeat: repeat;
    background-size: 4%;
    height: 100vh;
    width: 100%;
}

.section-center {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    z-index: 6;
    text-align: center;
    transform: translateY(-50%);
}

h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 4vw;
    line-height: 1;
    color: #50bcbb;
    text-align: center;
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
    position: absolute;
    left: -9999px;
}

.menu-icon:checked+label,
.menu-icon:not(:checked)+label {
    position: fixed;
    top: 63px;
    right: 75px;
    display: block;
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    z-index: 10;
}

.menu-icon:checked+label:before,
.menu-icon:not(:checked)+label:before {
    position: absolute;
    content: '';
    display: block;
    width: 30px;
    height: 20px;
    z-index: 20;
    top: 0;
    left: 0;
    border-top: 2px solid #ececee;
    border-bottom: 2px solid #ececee;
    transition: border-width 100ms 1500ms ease, top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:after,
.menu-icon:not(:checked)+label:after {
    position: absolute;
    content: '';
    display: block;
    width: 22px;
    height: 2px;
    z-index: 20;
    top: 10px;
    right: 4px;
    background-color: #ececee;
    margin-top: -1px;
    transition: width 100ms 1750ms ease, right 100ms 1750ms ease, margin-top 100ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:before {
    top: 10px;
    transform: rotate(45deg);
    height: 2px;
    background-color: #ececee;
    border-width: 0;
    transition: border-width 100ms 340ms ease, top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms 500ms ease, transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:after {
    width: 30px;
    margin-top: 0;
    right: 0;
    transform: rotate(-45deg);
    transition: width 100ms ease, right 100ms ease, margin-top 100ms 500ms ease, transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav {
    position: fixed;
    top: 33px;
    right: 50px;
    display: block;
    width: 80px;
    height: 80px;
    padding: 0;
    margin: 0;
    z-index: 9;
    overflow: hidden;
    box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.3);
    background-color: #353746;
    animation: border-transform 7s linear infinite;
    transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1), right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 1100ms ease, width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1), height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes border-transform {
    0%,
    100% {
        border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    }
    14% {
        border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
    }
    28% {
        border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
    }
    42% {
        border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
    }
    56% {
        border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
    }
    70% {
        border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
    }
    84% {
        border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
    }
}

.menu-icon:checked~.nav {
    animation-play-state: paused;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 200%;
    height: 200%;
    transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 700ms ease, width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1), height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav ul {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    z-index: 6;
    text-align: center;
    transform: translateY(-50%);
    list-style: none;
}

.nav ul li {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    margin: 10px 0;
    text-align: center;
    list-style: none;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transform: translateY(30px);
    transition: all 250ms linear;
}

.nav ul li:nth-child(1) {
    transition-delay: 200ms;
}

.nav ul li:nth-child(2) {
    transition-delay: 150ms;
}

.nav ul li:nth-child(3) {
    transition-delay: 100ms;
}

.nav ul li:nth-child(4) {
    transition-delay: 50ms;
}

.nav ul li a {
    font-family: 'Montserrat', sans-serif;
    font-size: 9vh;
    text-transform: uppercase;
    line-height: 1.2;
    font-weight: 800;
    display: inline-block;
    position: relative;
    color: #ececee;
    transition: all 250ms linear;
}

.nav ul li a:hover {
    text-decoration: none;
    color: #50bcbb;
}

.nav ul li a:after {
    display: block;
    position: absolute;
    top: 50%;
    content: '';
    height: 2vh;
    margin-top: -1vh;
    width: 0;
    left: 0;
    background-color: #112031;
    opacity: 0.8;
    transition: width 250ms linear;
}

.nav ul li a:hover:after {
    width: 100%;
}

.menu-icon:checked~.nav ul li {
    pointer-events: auto;
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    transition: opacity 350ms ease, transform 250ms ease;
}

.menu-icon:checked~.nav ul li:nth-child(1) {
    transition-delay: 1400ms;
}

.menu-icon:checked~.nav ul li:nth-child(2) {
    transition-delay: 1480ms;
}

.menu-icon:checked~.nav ul li:nth-child(3) {
    transition-delay: 1560ms;
}

.menu-icon:checked~.nav ul li:nth-child(4) {
    transition-delay: 1640ms;
}

footer {
  position: relative;
  width: 100%;
  height: 2.5rem;     
  margin: auto;
  text-align: center;
  padding: 1px 30px;
}

.flink {
  text-decoration: none;
  color: white;
  padding: 1px 30px;
}

.a {
  overflow: hidden;
  position: relative;
  display: inline-block;
}

.a::before,
.a::after {
 content: '';
  position: absolute;
  width: 100%;
  left: 0;
}
.a::before {
  background-color: #54b3d6;
  height: 2px;
  bottom: 0;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}
.a::after {
  content: attr(data-replace);
  height: 100%;
  top: 0;
  transform-origin: 100% 50%;
  transform: translate3d(200%, 0, 0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
  color: #54b3d6;
}

.a:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
.a:hover::after {
  transform: translate3d(0, 0, 0);
}

.a .span {
  display: inline-block;
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}

.a:hover .span {
  transform: translate3d(-200%, 0, 0);
}

.a {
  text-decoration: none;
  color: white;
  font-weight: 700;
  vertical-align: top;
}

@media screen and (max-width: 564px) {
  .flink {
    text-decoration: none;
    color: white;
    padding: 1px 5px;
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 90%;
    height: 2.5rem;     
    margin: auto;
    text-align: center;
    padding: 1px 30px;
  }
}

@media screen and (max-width: 623px) {
  .flink {
    text-decoration: none;
    color: white;
    padding: 1px 5px;
  }
  footer {
    position: relative;
    bottom: 0;
    width: 90%;
    height: 2.5rem;     
    margin: auto;
    text-align: center;
    padding: 1px 30px;
  }
}

iframe {
  margin:auto;
  display:block;
  width: 640px;
  height: 630px;
}

@media screen and (max-width: 991px) {
    .menu-icon:checked+label,
    .menu-icon:not(:checked)+label {
        right: 55px;
    }
    .logo {
        left: 30px;
    }
    .nav {
        right: 30px;
    }
    h1 {
        font-size: 9vw;
        -webkit-text-stroke: 2px transparent;
        text-stroke: 2px transparent;
        -webkit-text-fill-color: #50bcbb;
        text-fill-color: #50bcbb;
        color: #50bcbb;
    }
    .nav ul li a {
        font-size: 3vh;
    }
    .nav ul li a:after {
        display: block;
        position: absolute;
        top: 50%;
        content: '';
        height: 0.5vh;
        margin-top: -0.3vh;
        width: 0;
        left: 0;
        background-color: #112031;
        opacity: 0.8;
        transition: width 250ms linear;
    }
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 20px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 30vw;
    }
}
</style>

</html>
`

module.exports.applyPage = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="canonical" href="https://serversfalcon.com/home/" />
    <link rel="stylesheet" href="/views/index.css">
  <meta name="description" content="Falcon Servers, discord server that hosts tournaments for various games, join to participate in events and get rewards">
  <meta name="keywords" content="falcon, falconservers, serversfalcon">
  <meta name="google-site-verification" content="yq-PydwWrpUAa-FIK_nNtUjmNjJDH9og1l1HZNlECd8" />
  	<title> Falcon Servers | Apply </title>
    <link rel="shortcut icon" href="https://i.postimg.cc/QxWttYgq/icon.png" type="image/png">
</head>

<body>
    <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
    <label for="menu-icon"></label>
    <nav class="nav">
        <ul class="pt-5">
            <li><a href="https://serversfalcon.com">Home</a></li>
            <li><a href="https://serversfalcon.com/about">About</a></li>
            <li><a href="https://serversfalcon.com/apply">Apply</a></li>
        </ul>
    </nav>
  
  <iframe class="iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSe7wAv0ROmWctveXDR8djFey0woybCDjOa90p9j9RP7mJsMGg/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

  <footer>
    <a href="https://serversfalcon.com/terms" class="flink span a">Terms</a>
    <a href="https://serversfalcon.com/privacy" class="flink span a">Privacy Policy</a>
    <a href="https://serversfalcon.com/delete" class="flink span a">Data Deletion</a>
    <a href="https://serversfalcon.com/reports" class="flink span a">Reports</a>
  </footer>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');

html {
  overflow: hidden;
  overflow-y: hidden;
  overflow-x: hidden;
}

body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.7;
    color: #ececee;
    background-color: #1f2029;
    overflow: hidden;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat-back.svg');
    background-position: center;
    background-repeat: repeat;
    background-size: 4%;
    height: 100vh;
    width: 100%;
}

.section-center {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    z-index: 6;
    text-align: center;
    transform: translateY(-50%);
}

h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 4vw;
    line-height: 1;
    color: #50bcbb;
    text-align: center;
}

.mb-0 {
  transition: all 0.3s ease;
}

.mb-0:hover {
  
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
    position: absolute;
    left: -9999px;
}

.menu-icon:checked+label,
.menu-icon:not(:checked)+label {
    position: fixed;
    top: 63px;
    right: 75px;
    display: block;
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    z-index: 10;
}

.menu-icon:checked+label:before,
.menu-icon:not(:checked)+label:before {
    position: absolute;
    content: '';
    display: block;
    width: 30px;
    height: 20px;
    z-index: 20;
    top: 0;
    left: 0;
    border-top: 2px solid #ececee;
    border-bottom: 2px solid #ececee;
    transition: border-width 100ms 1500ms ease, top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:after,
.menu-icon:not(:checked)+label:after {
    position: absolute;
    content: '';
    display: block;
    width: 22px;
    height: 2px;
    z-index: 20;
    top: 10px;
    right: 4px;
    background-color: #ececee;
    margin-top: -1px;
    transition: width 100ms 1750ms ease, right 100ms 1750ms ease, margin-top 100ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:before {
    top: 10px;
    transform: rotate(45deg);
    height: 2px;
    background-color: #ececee;
    border-width: 0;
    transition: border-width 100ms 340ms ease, top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms 500ms ease, transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:after {
    width: 30px;
    margin-top: 0;
    right: 0;
    transform: rotate(-45deg);
    transition: width 100ms ease, right 100ms ease, margin-top 100ms 500ms ease, transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav {
    position: fixed;
    top: 33px;
    right: 50px;
    display: block;
    width: 80px;
    height: 80px;
    padding: 0;
    margin: 0;
    z-index: 9;
    overflow: hidden;
    box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.3);
    background-color: #353746;
    animation: border-transform 7s linear infinite;
    transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1), right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 1100ms ease, width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1), height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes border-transform {
    0%,
    100% {
        border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    }
    14% {
        border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
    }
    28% {
        border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
    }
    42% {
        border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
    }
    56% {
        border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
    }
    70% {
        border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
    }
    84% {
        border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
    }
}

.menu-icon:checked~.nav {
    animation-play-state: paused;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 200%;
    height: 200%;
    transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 700ms ease, width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1), height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav ul {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    z-index: 6;
    text-align: center;
    transform: translateY(-50%);
    list-style: none;
}

.nav ul li {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    margin: 10px 0;
    text-align: center;
    list-style: none;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transform: translateY(30px);
    transition: all 250ms linear;
}

.nav ul li:nth-child(1) {
    transition-delay: 200ms;
}

.nav ul li:nth-child(2) {
    transition-delay: 150ms;
}

.nav ul li:nth-child(3) {
    transition-delay: 100ms;
}

.nav ul li:nth-child(4) {
    transition-delay: 50ms;
}

.nav ul li a {
    font-family: 'Montserrat', sans-serif;
    font-size: 9vh;
    text-transform: uppercase;
    line-height: 1.2;
    font-weight: 800;
    display: inline-block;
    position: relative;
    color: #ececee;
    transition: all 250ms linear;
}

.nav ul li a:hover {
    text-decoration: none;
    color: #50bcbb;
}

.nav ul li a:after {
    display: block;
    position: absolute;
    top: 50%;
    content: '';
    height: 2vh;
    margin-top: -1vh;
    width: 0;
    left: 0;
    background-color: #112031;
    opacity: 0.8;
    transition: width 250ms linear;
}

.nav ul li a:hover:after {
    width: 100%;
}

.menu-icon:checked~.nav ul li {
    pointer-events: auto;
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    transition: opacity 350ms ease, transform 250ms ease;
}

.menu-icon:checked~.nav ul li:nth-child(1) {
    transition-delay: 1400ms;
}

.menu-icon:checked~.nav ul li:nth-child(2) {
    transition-delay: 1480ms;
}

.menu-icon:checked~.nav ul li:nth-child(3) {
    transition-delay: 1560ms;
}

.menu-icon:checked~.nav ul li:nth-child(4) {
    transition-delay: 1640ms;
}

.logo {
    position: absolute;
    top: 60px;
    left: 50px;
    display: block;
    z-index: 11;
    transition: all 250ms linear;
}

.logo img {
    height: 26px;
    width: auto;
    display: block;
}


/* ALL TESTS */

.b {
    position: relative;
    display: inline-block;
    padding: 25px 30px;
    margin: 40px 0;
    color: #03e9f4;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
    margin-right: 50px;
    font-weight: 700;
    top: 60%;
    left: 45%;
}

.b:hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}

.b:nth-child(1) {
    filter: hue-rotate(270deg);
}

.b:nth-child(2) {
    filter: hue-rotate(110deg);
}

.b span {
    position: absolute;
    display: block;
}

.b span:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: animate1 1s linear infinite;
}

@keyframes animate1 {
    0% {
        left: -100%;
    }
    50%,
    100% {
        left: 100%;
    }
}

.b span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
}

@keyframes animate2 {
    0% {
        top: -100%;
    }
    50%,
    100% {
        top: 100%;
    }
}

.b span:nth-child(3) {
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: animate3 1s linear infinite;
    animation-delay: 0.50s;
}

@keyframes animate3 {
    0% {
        right: -100%;
    }
    50%,
    100% {
        right: 100%;
    }
}

.b span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
}

@keyframes animate4 {
    0% {
        bottom: -100%;
    }
    50%,
    100% {
        bottom: 100%;
    }
}

@media screen and (max-width: 991px) {
    .menu-icon:checked+label,
    .menu-icon:not(:checked)+label {
        right: 55px;
    }
    .logo {
        left: 30px;
    }
    .nav {
        right: 30px;
    }
    h1 {
        font-size: 9vw;
        -webkit-text-stroke: 2px transparent;
        text-stroke: 2px transparent;
        -webkit-text-fill-color: #50bcbb;
        text-fill-color: #50bcbb;
        color: #50bcbb;
    }
    .nav ul li a {
        font-size: 3vh;
    }
    .nav ul li a:after {
        display: block;
        position: absolute;
        top: 50%;
        content: '';
        height: 0.5vh;
        margin-top: -0.3vh;
        width: 0;
        left: 0;
        background-color: #112031;
        opacity: 0.8;
        transition: width 250ms linear;
    }
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 20px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 30vw;
    }
}


/* @media screen and (min-width: 480px) {
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 15px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 28vw;
    }
} */

@media screen and (max-width: 1145px) {
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 15px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 42.5vw;
        top: 50vh;
    }
}

@media screen and (max-width: 993px) {
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 15px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 39.5vw;
        top: 65vh;
    }
}

@media screen and (max-width: 728px) {
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 15px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 32.5vw;
        top: 65vh;
    }
}

@media screen and (max-width: 567px) {
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 15px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 29.5vw;
        top: 60vh;
    }
}

@media screen and (max-width: 500px) {
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 15px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 26vw;
        top: 55vh;
    }
}

@media only screen and (max-width: 600px) {
    .b {
        position: relative;
        display: inline-block;
        padding: 25px 30px;
        margin: 40px 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 4px;
        overflow: hidden;
        margin-right: 50px;
        font-weight: 700;
        top: 60%;
        left: 26%;
    }
}

@media screen and (max-width: 280px) {
  html {
    overflow: hidden;
  }
  
  .b {
      position: relative;
      display: inline-block;
      padding: 3vh 5vh;
      font-size: 15px;
      margin: 10vh 0;
      color: #03e9f4;
      text-decoration: none;
      text-transform: uppercase;
      transition: 0.5s;
      letter-spacing: 0.4vh;
      overflow: hidden;
      margin-right: 1vh;
      left: 26vw;
      top: 55vh;
  }
}

footer {
  position: absolute;
  bottom: 20px;
  width: 100%;
  height: 2.5rem;     
  margin: auto;
  text-align: center;
  padding: 1px 30px;
}

.flink {
  text-decoration: none;
  color: white;
  padding: 1px 30px;
}

.a {
  overflow: hidden;
  position: relative;
  display: inline-block;
}

.a::before,
.a::after {
 content: '';
  position: absolute;
  width: 100%;
  left: 0;
}
.a::before {
  background-color: #54b3d6;
  height: 2px;
  bottom: 0;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}
.a::after {
  content: attr(data-replace);
  height: 100%;
  top: 0;
  transform-origin: 100% 50%;
  transform: translate3d(200%, 0, 0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
  color: #54b3d6;
}

.a:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
.a:hover::after {
  transform: translate3d(0, 0, 0);
}

.a .span {
  display: inline-block;
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}

.a:hover .span {
  transform: translate3d(-200%, 0, 0);
}

.a {
  text-decoration: none;
  color: white;
  font-weight: 700;
  vertical-align: top;
}

@media screen and (max-width: 564px) {
  .flink {
    text-decoration: none;
    color: white;
    padding: 1px 5px;
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 90%;
    height: 2.5rem;     
    margin: auto;
    text-align: center;
    padding: 1px 30px;
  }
}
iframe {
  margin:auto;
  display:block;
  width: 640px;
  height: 630px;
}

@media screen and (max-width: 650px) {
  iframe {
    margin:auto;
    display:block;
    width: 240px;
  }
}
    
  </style>
</html>
`

module.exports.aboutPage = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="canonical" href="https://serversfalcon.com/home/" />
  <meta name="description" content="Falcon Servers, discord server that hosts tournaments for various games, join to participate in events and get rewards">
  <meta name="keywords" content="falcon, falconservers, serversfalcon">
  <meta name="google-site-verification" content="yq-PydwWrpUAa-FIK_nNtUjmNjJDH9og1l1HZNlECd8" />
  	<title> Falcon Servers | About </title>
    <link rel="shortcut icon" href="https://i.postimg.cc/QxWttYgq/icon.png" type="image/png">
</head>

<body>
    <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
    <label for="menu-icon"></label>
    <nav class="nav">
        <ul class="pt-5">
            <li><a href="https://serversfalcon.com">Home</a></li>
            <li><a href="https://serversfalcon.com/about">About</a></li>
            <li><a href="https://serversfalcon.com/apply">Apply</a></li>
        </ul>
    </nav>

<section class="hero-section">
  <div class="card-grid">
    <a class="card" href="javascript:void();" onclick="sid()">
      <div class="card__background" style="background-image: url(https://cdn.discordapp.com/avatars/537428190834982922/4a3b17923d3f0fd95d48fc57393f85be.webp?size=128)"></div>
      <div class="card__content">
        <p class="card__category" id="s">SID</p>
        <h3 class="card__heading">Fullstack developer and server admin</h3>
      </div>
    </a>
    <a class="card" href="javascript:void();" onclick="kesh()">
      <div class="card__background" style="background-image: url(https://cdn.discordapp.com/avatars/385850799294644232/11617a20baa679f06702c8112d1d5637.webp?size=128)"></div>
      <div class="card__content">
        <p class="card__category" id='k'>KESHAV</p>
        <h3 class="card__heading">Server co-owner</h3>
      </div>
    </a>
    <a class="card" href="javascript:void();" onclick="ash()">
      <div class="card__background" style="background-image: url(https://cdn.discordapp.com/avatars/528779661334020116/f51e56bdac76200bed55caac3643082a.webp?size=128)"></div>
      <div class="card__content">
        <p class="card__category" id='a'>ASHUTOSH</p>
        <h3 class="card__heading">Community head and server admin (Secretary)</h3N>
      </div>
    </li>
    <a class="card" href="javascript:void();" onclick="joe()">
      <div class="card__background" style="background-image: url(https://cdn.discordapp.com/avatars/789812580268507159/595ed1ad77e471e7eb830fab5128cd91.webp?size=128)"></div>
      <div class="card__content">
        <p class="card__category" id='j'>JOE</p>
        <h3 class="card__heading">Server owner and head bot developer</h3>
      </div>
    </a>
    </a>
</section>
  <script>
    function sid() {
      let s = document.getElementById('s');
      if (s.innerHTML == 'SID') {
        s.innerHTML = 'xd aids#5525';
      } else {
        s.innerHTML = 'SID';
      }
      return true;
    }

    function kesh() {
      let k = document.getElementById('k');
      if (k.innerHTML == 'KESHAV') {
        k.innerHTML = 'BiscuitWires#7210';
      } else {
        k.innerHTML = 'KESHAV';
      }
      return true;
    }
    
    function ash() {
      let a = document.getElementById('a');
      if (a.innerHTML == 'ASHUTOSH') {
        a.innerHTML = 'WhackyAshu15#3719';
      } else {
        a.innerHTML = 'ASHUTOSH';
      }
      return true;
    }

    function joe() {
      let j = document.getElementById('j');
      if (j.innerHTML == 'JOE') {
        j.innerHTML = 'switch#6187';
      } else {
        j.innerHTML = 'JOE';
      }
      return true;
    }
  </script>
  <footer>
    <a href="https://serversfalcon.com/terms" class="flink span a">Terms</a>
    <a href="https://serversfalcon.com/privacy" class="flink span a">Privacy Policy</a>
    <a href="https://serversfalcon.com/delete" class="flink span a">Data Deletion</a>
    <a href="https://serversfalcon.com/reports" class="flink span a">Reports</a>
  </footer>
</body>
  <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
html {
  overflow-y: scroll; 
  overflow-x:hidden;
}
@media screen and (min-width: 768px) {
  html {
    overflow-y: hidden;
  }
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #112031;
}

::-webkit-scrollbar-thumb {
  background: #50bcbb;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #007a78;
}

body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.7;
    color: #ececee;
    background-color: #1f2029;
    overflow: hidden;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat-back.svg');
    background-position: center;
    background-repeat: repeat;
    background-size: 4%;
    min-height: 100vh;
    width: 100%;
}

.section-center {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    z-index: 6;
    text-align: center;
    transform: translateY(-50%);
}

h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 4vw;
    line-height: 1;
    color: #50bcbb;
    text-align: center;
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
    position: absolute;
    left: -9999px;
}

.menu-icon:checked+label,
.menu-icon:not(:checked)+label {
    position: fixed;
    top: 63px;
    right: 75px;
    display: block;
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    z-index: 10;
}

.menu-icon:checked+label:before,
.menu-icon:not(:checked)+label:before {
    position: absolute;
    content: '';
    display: block;
    width: 30px;
    height: 20px;
    z-index: 20;
    top: 0;
    left: 0;
    border-top: 2px solid #ececee;
    border-bottom: 2px solid #ececee;
    transition: border-width 100ms 1500ms ease, top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:after,
.menu-icon:not(:checked)+label:after {
    position: absolute;
    content: '';
    display: block;
    width: 22px;
    height: 2px;
    z-index: 20;
    top: 10px;
    right: 4px;
    background-color: #ececee;
    margin-top: -1px;
    transition: width 100ms 1750ms ease, right 100ms 1750ms ease, margin-top 100ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:before {
    top: 10px;
    transform: rotate(45deg);
    height: 2px;
    background-color: #ececee;
    border-width: 0;
    transition: border-width 100ms 340ms ease, top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms 500ms ease, transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:after {
    width: 30px;
    margin-top: 0;
    right: 0;
    transform: rotate(-45deg);
    transition: width 100ms ease, right 100ms ease, margin-top 100ms 500ms ease, transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav {
    position: fixed;
    top: 33px;
    right: 50px;
    display: block;
    width: 80px;
    height: 80px;
    padding: 0;
    margin: 0;
    z-index: 9;
    overflow: hidden;
    box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.3);
    background-color: #353746;
    animation: border-transform 7s linear infinite;
    transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1), right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 1100ms ease, width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1), height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes border-transform {
    0%,
    100% {
        border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    }
    14% {
        border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
    }
    28% {
        border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
    }
    42% {
        border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
    }
    56% {
        border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
    }
    70% {
        border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
    }
    84% {
        border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
    }
}

.menu-icon:checked~.nav {
    animation-play-state: paused;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 200%;
    height: 200%;
    transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 700ms ease, width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1), height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav ul {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    z-index: 6;
    text-align: center;
    transform: translateY(-50%);
    list-style: none;
}

.nav ul li {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    margin: 10px 0;
    text-align: center;
    list-style: none;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transform: translateY(30px);
    transition: all 250ms linear;
}

.nav ul li:nth-child(1) {
    transition-delay: 200ms;
}

.nav ul li:nth-child(2) {
    transition-delay: 150ms;
}

.nav ul li:nth-child(3) {
    transition-delay: 100ms;
}

.nav ul li:nth-child(4) {
    transition-delay: 50ms;
}

.nav ul li a {
    font-family: 'Montserrat', sans-serif;
    font-size: 9vh;
    text-transform: uppercase;
    line-height: 1.2;
    font-weight: 800;
    display: inline-block;
    position: relative;
    color: #ececee;
    transition: all 250ms linear;
}

.nav ul li a:hover {
    text-decoration: none;
    color: #50bcbb;
}

.nav ul li a:after {
    display: block;
    position: absolute;
    top: 50%;
    content: '';
    height: 2vh;
    margin-top: -1vh;
    width: 0;
    left: 0;
    background-color: #112031;
    opacity: 0.8;
    transition: width 250ms linear;
}

.nav ul li a:hover:after {
    width: 100%;
}

.menu-icon:checked~.nav ul li {
    pointer-events: auto;
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    transition: opacity 350ms ease, transform 250ms ease;
}

.menu-icon:checked~.nav ul li:nth-child(1) {
    transition-delay: 1400ms;
}

.menu-icon:checked~.nav ul li:nth-child(2) {
    transition-delay: 1480ms;
}

.menu-icon:checked~.nav ul li:nth-child(3) {
    transition-delay: 1560ms;
}

.menu-icon:checked~.nav ul li:nth-child(4) {
    transition-delay: 1640ms;
}

.logo {
    position: absolute;
    top: 60px;
    left: 50px;
    display: block;
    z-index: 11;
    transition: all 250ms linear;
}

.logo img {
    height: 26px;
    width: auto;
    display: block;
}

@media screen and (max-width: 991px) {
    .menu-icon:checked+label,
    .menu-icon:not(:checked)+label {
        right: 55px;
    }
    .logo {
        left: 30px;
    }
    .nav {
        right: 30px;
    }
    h1 {
        font-size: 9vw;
        -webkit-text-stroke: 2px transparent;
        text-stroke: 2px transparent;
        -webkit-text-fill-color: #50bcbb;
        text-fill-color: #50bcbb;
        color: #50bcbb;
    }
    .nav ul li a {
        font-size: 3vh;
    }
    .nav ul li a:after {
        display: block;
        position: absolute;
        top: 50%;
        content: '';
        height: 0.5vh;
        margin-top: -0.3vh;
        width: 0;
        left: 0;
        background-color: #112031;
        opacity: 0.8;
        transition: width 250ms linear;
    }
}

:root{
  --background-dark: #1f2029;
  --text-light: rgba(255,255,255,0.6);
  --text-lighter: rgba(255,255,255,0.9);
  --spacing-s: 8px;
  --spacing-m: 16px;
  --spacing-l: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 64px;
  --width-container: 1200px;
}

.hero-section{
  align-items: flex-start;
  display: flex;
  min-height: 100%;
  justify-content: center;
  padding: var(--spacing-xxl) var(--spacing-l);
}

.card-grid{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: var(--spacing-l);
  grid-row-gap: var(--spacing-l);
  max-width: var(--width-container);
  width: 100%;
}

@media(min-width: 540px){
  .card-grid{
    grid-template-columns: repeat(2, 1fr);
  }
}

@media(min-width: 960px){
  .card-grid{
    grid-template-columns: repeat(4, 1fr); 
  }
}

.card{
  list-style: none;
  position: relative;
}

.card:before{
  content: '';
  display: block;
  padding-bottom: 150%;
  width: 100%;
}

.card__background{
  background-size: cover;
  background-position: center;
  border-radius: var(--spacing-l);
  bottom: 0;
  filter: brightness(0.75) saturate(1.2) contrast(0.85);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center;
  trsnsform: scale(1) translateZ(0);
  transition: 
    filter 200ms linear,
    transform 200ms linear;
}

.card:hover .card__background{
  transform: scale(1.01) translateZ(0);
}

.card-grid:hover > .card:not(:hover) .card__background{
  filter: brightness(0.5) saturate(1) contrast(1.2) blur(5px);
}

.card__content{
  left: 0;
  padding: var(--spacing-l);
  position: absolute;
  top: 0;
}

.card__category{
  color: white;
  font-size: 1.1rem;
  margin-bottom: var(--spacing-s);
  font-weight: 700;
}

.card__heading{
  color: var(--text-lighter);
  font-size: 1.9rem;
  text-shadow: 2px 2px 20px rgba(0,0,0,0.2);
  line-height: 1.4;
  word-spacing: 100vw;
}

footer {
  position: absolute;
  bottom: 20px;
  width: 100%;
  height: 2.5rem;     
  margin: auto;
  text-align: center;
  padding: 1px 30px;
}

.flink {
  text-decoration: none;
  color: white;
  padding: 1px 30px;
}

.a {
  overflow: hidden;
  position: relative;
  display: inline-block;
}

.a::before,
.a::after {
 content: '';
  position: absolute;
  width: 100%;
  left: 0;
}
.a::before {
  background-color: #54b3d6;
  height: 2px;
  bottom: 0;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}
.a::after {
  content: attr(data-replace);
  height: 100%;
  top: 0;
  transform-origin: 100% 50%;
  transform: translate3d(200%, 0, 0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
  color: #54b3d6;
}

.a:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
.a:hover::after {
  transform: translate3d(0, 0, 0);
}

.a .span {
  display: inline-block;
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}

.a:hover .span {
  transform: translate3d(-200%, 0, 0);
}

.a {
  text-decoration: none;
  color: white;
  font-weight: 700;
  vertical-align: top;
}

@media screen and (max-width: 564px) {
  .flink {
    text-decoration: none;
    color: white;
    padding: 1px 5px;
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 90%;
    height: 2.5rem;     
    margin: auto;
    text-align: center;
    padding: 1px 30px;
  }
}

@media screen and (max-width: 994px) {
  .flink {
    text-decoration: none;
    color: white;
    padding: 1px 5px;
  }
  footer {
    position: absolute;
    top: -90vh;
    width: 90%;
    height: 2.5rem;     
    margin: auto;
    text-align: center;
    padding: 1px 30px;
  }
}</style>

</html>`

module.exports.homePage = `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <meta name="description" content="Falcon Servers, discord server that hosts tournaments for various games, join to participate in events and get rewards">
  <meta name="keywords" content="falcon, falconservers, serversfalcon">
  <meta name="google-site-verification" content="yq-PydwWrpUAa-FIK_nNtUjmNjJDH9og1l1HZNlECd8" />
  <link rel="canonical" href="https://serversfalcon.com/home/" />

  	<title> Falcon Servers | Home </title>
    <link rel="shortcut icon" href="https://i.postimg.cc/QxWttYgq/icon.png" type="image/png">
</head>

<body>
    <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
    <label for="menu-icon"></label>
    <nav class="nav">
        <ul class="pt-5">
            <li><a href="https://serversfalcon.com">Home</a></li>
            <li><a href="https://serversfalcon.com/about">About</a></li>
            <li><a href="https://serversfalcon.com/apply">Apply</a></li>
			<li><a href="https://discord.com/api/oauth2/authorize?client_id=1102302494744399964&redirect_uri=https%3A%2F%2Fserversfalcon.com&response_type=code&scope=identify">Login with Discord</a></li>
        </ul>
    </nav>
  
    <div class="section-center">
        <h1 class="mb-0">Join a total of 19 users around the world in Discord's smallest server.</h1>
    </div>
    <a href="#" style="display: none" class="b">
        <span></span>
        <span></span>
        <span></span>
        <span></span> test
    </a>
    <a href="#" style="display: none" class="b">
        <span></span>
        <span></span>
        <span></span>
        <span></span> test
    </a>
    <a href="#" class="b" target="_blank">
        <span></span>
        <span></span>
        <span></span>
        <span></span> Join Server
    </a>
  <footer>
    <a href="https://serversfalcon.com/terms" class="flink span a">Terms</a>
    <a href="https://serversfalcon.com/privacy" class="flink span a">Privacy Policy</a>
    <a href="https://serversfalcon.com/delete" class="flink span a">Data Deletion</a>
    <a href="https://serversfalcon.com/reports" class="flink span a">Reports</a>
  </footer>
</body>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');

html {
  overflow: hidden;
  overflow-y: hidden;
  overflow-x: hidden;
}

body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.7;
    color: #ececee;
    background-color: #1f2029;
    overflow: hidden;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat-back.svg');
    background-position: center;
    background-repeat: repeat;
    background-size: 4%;
    height: 100vh;
    width: 100%;
}

.section-center {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    z-index: 6;
    text-align: center;
    transform: translateY(-50%);
}

h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 4vw;
    line-height: 1;
    color: #50bcbb;
    text-align: center;
}

.mb-0 {
  transition: all 0.3s ease;
}

.mb-0:hover {
  
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
    position: absolute;
    left: -9999px;
}

.menu-icon:checked+label,
.menu-icon:not(:checked)+label {
    position: fixed;
    top: 63px;
    right: 75px;
    display: block;
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    z-index: 10;
}

.menu-icon:checked+label:before,
.menu-icon:not(:checked)+label:before {
    position: absolute;
    content: '';
    display: block;
    width: 30px;
    height: 20px;
    z-index: 20;
    top: 0;
    left: 0;
    border-top: 2px solid #ececee;
    border-bottom: 2px solid #ececee;
    transition: border-width 100ms 1500ms ease, top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:after,
.menu-icon:not(:checked)+label:after {
    position: absolute;
    content: '';
    display: block;
    width: 22px;
    height: 2px;
    z-index: 20;
    top: 10px;
    right: 4px;
    background-color: #ececee;
    margin-top: -1px;
    transition: width 100ms 1750ms ease, right 100ms 1750ms ease, margin-top 100ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:before {
    top: 10px;
    transform: rotate(45deg);
    height: 2px;
    background-color: #ececee;
    border-width: 0;
    transition: border-width 100ms 340ms ease, top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms 500ms ease, transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-icon:checked+label:after {
    width: 30px;
    margin-top: 0;
    right: 0;
    transform: rotate(-45deg);
    transition: width 100ms ease, right 100ms ease, margin-top 100ms 500ms ease, transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav {
    position: fixed;
    top: 33px;
    right: 50px;
    display: block;
    width: 80px;
    height: 80px;
    padding: 0;
    margin: 0;
    z-index: 9;
    overflow: hidden;
    box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.3);
    background-color: #353746;
    animation: border-transform 7s linear infinite;
    transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1), right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 1100ms ease, width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1), height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes border-transform {
    0%,
    100% {
        border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    }
    14% {
        border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
    }
    28% {
        border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
    }
    42% {
        border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
    }
    56% {
        border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
    }
    70% {
        border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
    }
    84% {
        border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
    }
}

.menu-icon:checked~.nav {
    animation-play-state: paused;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 200%;
    height: 200%;
    transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 700ms ease, width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1), height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav ul {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    z-index: 6;
    text-align: center;
    transform: translateY(-50%);
    list-style: none;
}

.nav ul li {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    margin: 10px 0;
    text-align: center;
    list-style: none;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transform: translateY(30px);
    transition: all 250ms linear;
}

.nav ul li:nth-child(1) {
    transition-delay: 200ms;
}

.nav ul li:nth-child(2) {
    transition-delay: 150ms;
}

.nav ul li:nth-child(3) {
    transition-delay: 100ms;
}

.nav ul li:nth-child(4) {
    transition-delay: 50ms;
}

.nav ul li a {
    font-family: 'Montserrat', sans-serif;
    font-size: 9vh;
    text-transform: uppercase;
    line-height: 1.2;
    font-weight: 800;
    display: inline-block;
    position: relative;
    color: #ececee;
    transition: all 250ms linear;
}

.nav ul li a:hover {
    text-decoration: none;
    color: #50bcbb;
}

.nav ul li a:after {
    display: block;
    position: absolute;
    top: 50%;
    content: '';
    height: 2vh;
    margin-top: -1vh;
    width: 0;
    left: 0;
    background-color: #112031;
    opacity: 0.8;
    transition: width 250ms linear;
}

.nav ul li a:hover:after {
    width: 100%;
}

.menu-icon:checked~.nav ul li {
    pointer-events: auto;
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    transition: opacity 350ms ease, transform 250ms ease;
}

.menu-icon:checked~.nav ul li:nth-child(1) {
    transition-delay: 1400ms;
}

.menu-icon:checked~.nav ul li:nth-child(2) {
    transition-delay: 1480ms;
}

.menu-icon:checked~.nav ul li:nth-child(3) {
    transition-delay: 1560ms;
}

.menu-icon:checked~.nav ul li:nth-child(4) {
    transition-delay: 1640ms;
}

.logo {
    position: absolute;
    top: 60px;
    left: 50px;
    display: block;
    z-index: 11;
    transition: all 250ms linear;
}

.logo img {
    height: 26px;
    width: auto;
    display: block;
}


/* ALL TESTS */

.b {
    position: relative;
    display: inline-block;
    padding: 25px 30px;
    margin: 40px 0;
    color: #03e9f4;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
    margin-right: 50px;
    font-weight: 700;
    top: 60%;
    left: 45%;
}

.b:hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}

.b:nth-child(1) {
    filter: hue-rotate(270deg);
}

.b:nth-child(2) {
    filter: hue-rotate(110deg);
}

.b span {
    position: absolute;
    display: block;
}

.b span:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: animate1 1s linear infinite;
}

@keyframes animate1 {
    0% {
        left: -100%;
    }
    50%,
    100% {
        left: 100%;
    }
}

.b span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
}

@keyframes animate2 {
    0% {
        top: -100%;
    }
    50%,
    100% {
        top: 100%;
    }
}

.b span:nth-child(3) {
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: animate3 1s linear infinite;
    animation-delay: 0.50s;
}

@keyframes animate3 {
    0% {
        right: -100%;
    }
    50%,
    100% {
        right: 100%;
    }
}

.b span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
}

@keyframes animate4 {
    0% {
        bottom: -100%;
    }
    50%,
    100% {
        bottom: 100%;
    }
}

@media screen and (max-width: 991px) {
    .menu-icon:checked+label,
    .menu-icon:not(:checked)+label {
        right: 55px;
    }
    .logo {
        left: 30px;
    }
    .nav {
        right: 30px;
    }
    h1 {
        font-size: 9vw;
        -webkit-text-stroke: 2px transparent;
        text-stroke: 2px transparent;
        -webkit-text-fill-color: #50bcbb;
        text-fill-color: #50bcbb;
        color: #50bcbb;
    }
    .nav ul li a {
        font-size: 3vh;
    }
    .nav ul li a:after {
        display: block;
        position: absolute;
        top: 50%;
        content: '';
        height: 0.5vh;
        margin-top: -0.3vh;
        width: 0;
        left: 0;
        background-color: #112031;
        opacity: 0.8;
        transition: width 250ms linear;
    }
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 20px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 30vw;
    }
}


/* @media screen and (min-width: 480px) {
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 15px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 28vw;
    }
} */

@media screen and (max-width: 1145px) {
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 15px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 42.5vw;
        top: 50vh;
    }
}

@media screen and (max-width: 993px) {
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 15px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 39.5vw;
        top: 65vh;
    }
}

@media screen and (max-width: 728px) {
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 15px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 32.5vw;
        top: 65vh;
    }
}

@media screen and (max-width: 567px) {
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 15px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 29.5vw;
        top: 60vh;
    }
}

@media screen and (max-width: 500px) {
    .b {
        position: absolute;
        display: inline-block;
        padding: 3vh 5vh;
        font-size: 15px;
        margin: 10vh 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 0.4vh;
        overflow: hidden;
        margin-right: 1vh;
        left: 26vw;
        top: 55vh;
    }
}

@media only screen and (max-width: 600px) {
    .b {
        position: relative;
        display: inline-block;
        padding: 25px 30px;
        margin: 40px 0;
        color: #03e9f4;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        letter-spacing: 4px;
        overflow: hidden;
        margin-right: 50px;
        font-weight: 700;
        top: 60%;
        left: 26%;
    }
}

@media screen and (max-width: 280px) {
  html {
    overflow: hidden;
  }
  
  .b {
      position: relative;
      display: inline-block;
      padding: 3vh 5vh;
      font-size: 15px;
      margin: 10vh 0;
      color: #03e9f4;
      text-decoration: none;
      text-transform: uppercase;
      transition: 0.5s;
      letter-spacing: 0.4vh;
      overflow: hidden;
      margin-right: 1vh;
      left: 26vw;
      top: 55vh;
  }
}

footer {
  position: absolute;
  bottom: 20px;
  width: 100%;
  height: 2.5rem;     
  margin: auto;
  text-align: center;
  padding: 1px 30px;
}

.flink {
  text-decoration: none;
  color: white;
  padding: 1px 30px;
}

.a {
  overflow: hidden;
  position: relative;
  display: inline-block;
}

.a::before,
.a::after {
 content: '';
  position: absolute;
  width: 100%;
  left: 0;
}
.a::before {
  background-color: #54b3d6;
  height: 2px;
  bottom: 0;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}
.a::after {
  content: attr(data-replace);
  height: 100%;
  top: 0;
  transform-origin: 100% 50%;
  transform: translate3d(200%, 0, 0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
  color: #54b3d6;
}

.a:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
.a:hover::after {
  transform: translate3d(0, 0, 0);
}

.a .span {
  display: inline-block;
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}

.a:hover .span {
  transform: translate3d(-200%, 0, 0);
}

.a {
  text-decoration: none;
  color: white;
  font-weight: 700;
  vertical-align: top;
}

@media screen and (max-width: 564px) {
  .flink {
    text-decoration: none;
    color: white;
    padding: 1px 5px;
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 90%;
    height: 2.5rem;     
    margin: auto;
    text-align: center;
    padding: 1px 30px;
  }
}
</style>
</html>
`