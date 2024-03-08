"use strict";
/* My name is "Waheed Ahmed"
My Email Addres is "waheedahmedsoomro@gmail.com"
My Roll No. is (00208505)
*/
Object.defineProperty(exports, "__esModule", { value: true });
// // Challenge : Day 1 (Question 2)
// create a name in a variable
// let name1: string = "Waheed"
// console.log("Hellow Mr. "+name1+ " Would You like to learn some Typescript Today")
// console.log("Hellow Mr."+ " " + name1 + " " + "Would You like to learn some Typescript Today")
// // Challenge : Day 1 (Question 3)
// create a name in a variable
// let myname : string = "wAheEd aHmEd sOomRO"
// console.log(" My Name in Orignal Text " + myname)
// console.log(" My Name in LowerCase Text " + myname.toLowerCase())
// console.log(" My Name in UpperCase Text " + myname.toUpperCase())
// this Line learn from Internet but still no idea how it works (Title Case)
// console.log("My Nam in TitleCase Text " + myname.toLowerCase().replace(/(?:^|\s)\w/g, match => match.toUpperCase()))
// // Challenge : Day 2 (Question 1)
// console.log(`"Albert Einstein once said, "A person who never made a mistake never tried anything new.""`)
// // Challenge : Day 2 (Question 2)
// let famous_person : string = "Albert Einstein";
// let message : string = "A person who never made a mistake never tried anything new.";
// console.log(`"${famous_person} once said, "${message}""`)
// // Challenge : Day 2 (Question 3)
// let stripping_name : string = "     Waheed   \t    \n"
// console.log (stripping_name)
// console.log (stripping_name.trim())
// // Challenge : Day 3 (Question 1)
// console.log(5+3)
// console.log(9-1)
// console.log(4*2)
// console.log(16/2)
// // Challenge : Day 3 (Question 2)
// console.log(`5+3\n7+1\n4+4\n9-1`)
// // Challenge : Day 3 (Question 3)
// var favourite_number : number = 7;
// console.log("Here is my favourite number " + favourite_number)
// // Challenge : Day 4 (Question 1)
// This program is written by Soomro Waheed Ahmed
/* This is Day 4 Challenge Program
    and Question 1 for commenting
    these are multi lines Comments
    This Challenge start on 05 March 2024
*/
// // Challenge : Day 4 (Question 2)
// let names : string[] = ["Waheed", "Qamar", "Raza", "Maqsood", "Adnan"]
// for (let i = 0; i < names.length; i ++){
//     console.log(names[i])
// }
// // Challenge : Day 4 (Question 3)
// let names : string[] = ["Waheed", "Qamar", "Raza", "Maqsood", "Adnan"]
// for (let i = 0; i < names.length; i ++){
//     console.log("Assalam o Alaikum Dear " +names[i] + ", How are You?")
// }
// // Challenge : Day 5 (Question 1)
// let mode_of_transport : string[] = ["Cycle", "MotorCycle", "Motor Car", "Jeep", "Ferrari"]
// for (let i = 0; i < mode_of_transport.length; i ++) {
//     console.log("I would like to go on " + mode_of_transport[i])
// }
// // this is copy from the Challenge Hint
// mode_of_transport.forEach(transport => {
//     console.log(`I would like to own a ${transport}.`);
// });
// // Challenge : Day 5 (Question 2)
// let guest_list : string[] = ["Qamar", "Adnan", "Maqsood", "Aqeel", "Adil"]
// guest_list.forEach(guest => {
//     console.log(`Dear Mr. ${guest} I would like to invite you on dinner`);
// });
// // Challenge : Day 5 (Question 3)
// let new_guest_list : string[] = ["Qamar", "Adnan", "Maqsood", "Aqeel", "Adil"]
// let no_guest = new_guest_list.splice(1,1,"javed")
// console.log(`${no_guest} is unable to attend the dinner Party`)
// new_guest_list.forEach(guest => {
//     console.log(`Dear Mr. ${guest} I would like to invite you on dinner`);
// });
// // Challenge : Day 6 (Question 1)
// let guests : string [] = ["Qamar", "Adnan", "Maqsood", "Aqeel", "Adil"]
// console.log(guests)
// guests.push("Kamran")
// console.log(guests)
// guests.splice(0,1,"Arslan","Waqas","Sohail")
// console.log(guests)
// guests.splice(1,3,"Adnan","Ali","Murtaza")
// console.log(guests)
// guests.forEach(guest => {
//          console.log(`Dear Mr. ${guest} I would like to invite you on dinner`)
// });
// // Challenge : Day 6 (Question 2)
// let new_guests : string [] = ["Qamar", "Adnan", "Maqsood", "Aqeel", "Adil"]
// new_guests.splice(1,3)
// console.log(new_guests)
// new_guests.forEach(guest => {
// console.log(`Due to some time table changed, Now Mr. ${guest} I would like to invite you on dinner Party`)
// });
// // Challenge : Day 6 (Question 3)
// let places : string [] = ["Saudi Arabia", "Germany", "Russia", "Nepal", "China", "Iran"]
// console.log(places) // In Orignal State
// console.log([...places].reverse()) // In Reverse Order
// console.log(places) // In Orignal State
// console.log([...places].sort()) // In Ascending Sort Order
// console.log(places) // In Orignal State
// // Challenge : Day 7 (Question 1)
// let guests : string [] = ["Qamar", "Adnan", "Maqsood", "Aqeel", "Adil"]
// console.log("Orignal Guests are " + guests.length)
// guests.push("Kamran")
// guests.splice(0,1,"Arslan","Waqas","Sohail")
// guests.splice(1,3,"Adnan","Ali","Murtaza")
// console.log("Now the  Guests are " + guests.length)
// // Challenge : Day 7 (Question 2)
// let mountains : string[] = ["K-2", "Himaliya", "QaraQaram", "Mount Averest"]
// let rivers : string[] = ["Indus", "Satlaj", "Ravi", "chanab"]
// let cities : string[] = ["Hyderabad", "Khairpur", "Kaachi", "Quetta", "Islamabad","Pehawar"]
// let zuban : string[] = ["Sindhi", "Arabic","Urdu", "Chinese", "French"] 
// console.log("I want to hike on all mountains like " + mountains)
// console.log("I want to swim in all rives like " + rivers)
// console.log("I want to travel and see all the cities like " + cities)
// console.log("I want to learn and speak all the languages like " + zuban)
// // Challenge : Day 7 (Question 3)
var myCar = {
    model: "2008",
    color: "Brown",
    manufacture: "Honda",
    HP: "1300cc"
};
console.log(myCar["model"]);
console.log(myCar["color"]);
console.log(myCar["manufacture"]);
console.log(myCar["HP"]);
