let str="omm"
function palindrome(){
let bag="";
for( let i=str.length-1;i>=0;i--){
bag+=str[i];
}
return bag;
}
let rev_str=palindrome(str);
if(str==rev_str){
console.log("Palindrome");
}else{
console.log("Not Palindrome");
}