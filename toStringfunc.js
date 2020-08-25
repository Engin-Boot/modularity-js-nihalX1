var GetColorFromPairNumber=require('./utlity').GetColorFromPairNumber;

function toString(){
  var colorcombo={};
  colors="";
  for(var i=1;i<=25;i++)
  {
    colorcombo=GetColorFromPairNumber(i);
    colors = colors + i+":"+ colorcombo.major+" "+colorcombo.minor+"\n";
   
  }
  return colors;
}

module.exports=toString;