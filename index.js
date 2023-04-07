// document.write("JavaScript External Line")


window.alert("This Program is Make For Find out the Velocity Distance and Time Value")
let user = prompt("What you want to find out Enter the No:-1)Velocity 2)Distance 3)Time")
 if(user == 1){
     document.write("This is for velocity")
     let one = prompt("To Find out Velocity We Need two Thing First Please Enter Distance in Meter")
     let two = prompt("To Find out Velocity We Need Second Thing is Time Please Enter Time in Sec")
     let rest = one / two;
     document.write("<br><br>","The Velocity Value is :-",rest)
 }
 else if (user == 2){
     document.write("This is for Distance")
     
     let one = prompt("To Find out Distance We Need 2 Thing First Please Enter Velocity")
     let two = prompt("To Find out Distance We Need Second Thing is Time Please Enter Time in Sec")
     let rest = one * two;
     document.write("<br><br>","The Distance Value is :-",rest)
 }
 else if (user == 3){
     document.write("This is for Time")

     let one = prompt("To Find out Time We Need 2 Thing First Please Enter Distance in Meter")
     let two = prompt("To Find out Time We Need Second Thing is Velocity Please Enter Velocity")
     let rest = one / two;
     document.write("<br><br>","The Time Value is :-",rest)
 }
 else{
     document.write("You can't Select Correct option")
 }