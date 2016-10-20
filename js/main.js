function isAnagram(str1,str2){
  // s.charCodeAt(0)
  sum1 = 0
  sum2 = 0
  str1 = stripSpaces(str1.toLowerCase());
  str2 = stripSpaces(str2.toLowerCase());
  if(str1.length != str2.length)
    return false
  else {
    for(x = 0; x<str1.length; x++){
      sum1 *= str1.charCodeAt(x)
      sum2 *= str2.charCodeAt(x)
    }
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
    console.log(str1)
    console.log(str2)
    indicate(isAnagram(str1,str2))
  })

})
