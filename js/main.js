function isAnagram(str1,str2){
  // s.charCodeAt(0)
  sum1 = 0
  sum2 = 0
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if(str1.length != str2.length)
    return false
  else {
    for(x = 0; x<str1.length; x++){
      sum1 += str1.charCodeAt(x)
      sum2 += str2.charCodeAt(x)
    }
    if(sum1 == sum2)
      return true
    else
      return false
  }
}
