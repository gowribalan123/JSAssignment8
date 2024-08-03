
const IndexUppercase = (str) => {
   
  let result=" ";

 
  for (let i = 0; i < str.length; i++) {
    
    
    result += i +  str[i].toUpperCase();
  }

  return result;
};


  
let str = prompt("Please enter the string:");
document.write("The string  entered is " +str)
document.write("<br><br>")

const result = IndexUppercase(str);

document.write("The string in Uppercase preceded by its index is "  +result)


  





  

   

  