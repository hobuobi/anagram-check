var charMap = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 5,
  'e': 7,
  'f': 11,
  'g': 13,
  'h': 17,
  'i': 19,
  'j': 23,
  'k': 29,
  'l': 31,
  'm': 37,
  'n': 41,
  'o': 43,
  'p': 47,
  'q': 53,
  'r': 59,
  's': 61,
  't': 67,
  'u': 71,
  'v': 73,
  'w': 79,
  'x': 83,
  'y': 91,
  'z': 97
}

function isAnagram(str1,str2){
  // s.charCodeAt(0)
  sum1 = 1
  sum2 = 1
  str1 = stripSpaces(str1.toLowerCase());
  str2 = stripSpaces(str2.toLowerCase());

  if(str1.length != str2.length)
    return false
  else {
    for(var x = 0; x<str1.length; x++){
      if(str1.charCodeAt(x) <= 122 && str1.charCodeAt(x) >= 97)
      {
        console.log(charMap[str1[x]])
        sum1 *= charMap[(str1[x])]
      }

      if(str1.charCodeAt(x) <= 122 && str1.charCodeAt(x) >= 97)
        sum2 *= charMap[str2[x]]
    }
    console.log(sum1)
    if(sum1 == sum2)
      return true
    else
      return false
  }
}
function stripSpaces(str){
  if(str.charCodeAt(str.length-1) == 32)
    return stripSpaces(str.substring(0,str.length-1))
  else
    return str
}
function indicate(bool){
  if(bool)
    $("input").css("border-color","#8ee000")
  else {
    $("input").css("border-color","#e53838")
  }
}
$(document).ready(function(){
  $("input").keyup(function(){
    str1 = $("#str1").val()
    str2 = $("#str2").val()
    indicate(isAnagram(str1,str2))
  })

})
