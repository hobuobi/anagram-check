<DOCTYPE! html>
<head>
  <title>anagramatical</title>
  <!-- JS -->
  <script src="js/jquery.min.js"></script>
  <script src="js/main.js"></script>

  <!-- CSS -->
  <link href="https://fonts.googleapis.com/css?family=Didact+Gothic" rel="stylesheet">
  <link rel="stylesheet" href="css/main.css">

</head>

<body>
  <div id="header"><img src="img/logo_white.png"></div>
  <div id="main">
    <div style="display: inline-block; float:left;width:45%">
    <input type="text" name="str1" id="str1" style="float:left;">
    <span style="float: left"><i>Type the first word here...</i></span>
    </div>
    <div style="display: inline-block; float:right;width:45%">
    <input type="text" name="str2" id="str2" style="float:right;">
    <span style="float: right"><i>...and the second one here.</i></span>
  </div>
  </div>
  <div class="veil">
    <div id="veil-header"><h2>^  INFORMATION  ^</h2></div>
    <div id="veil-content" align="center">
      <p>The purpose of this application is simple: to test if two strings entered are anagrams.</p>
      <p>A minimalistic approach was taken for the project, using only elements that were necessary to carry out the task at hand. </p>
      <p>There is some concern about the color choice; red-green color blind individuals would be unable to use the color cues in order to tell if their words were anagrams or not. For this reason, I added a text cue as well.</p>
      <p>The app assumes that only letters are used, and should work even with trailing spaces. However, while the program accounts for the length of the two strings, it will not consider whether or not symbols/numbers included in the strings are the same (e.g. "turtle~3" and "eltrut!8" will return as anagrams). Hence, the assumption is that only alphabetical strings are being compared, as is the case when most users are trying to see if two strings are anagrams.</p>
      <p>Oh, and I used the Illustrator files available on the Duolingo website and modified the logo to get my "anagramatical" logo. :)</p>
    </div>
  </div>
</body>

</html>
