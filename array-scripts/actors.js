"use strict";

let academyMembers = [
   {
      memID: 101,
      name: "Bob Brown",
      films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
   },
   {
      memID: 142,
      name: "Sallie Smith",
      films: ["A Good Day", "A Better Day"],
   },
   {
      memID: 187,
      name: "Fred Flanders",
      films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
   },
   {
      memID: 203,
      name: "Bobbie Boots",
      films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
   },
];

// Who is the Academy Member whose ID is 187?
for (const academyMember of academyMembers) {
   if (academyMember.memID === 187) {
      console.log("Academy Member with ID 187: " + academyMember.name);
      break; 
   }
}

// Who has been in at least 3 films?
for (const academyMember of academyMembers) {
   if (academyMember.films.length >= 3) {
      console.log("Academy Member in at least 3 films: " + academyMember.name);
   }
}

// Who has a name that starts with "Bob"?
for (const academyMember of academyMembers) {
   if (academyMember.name.indexOf("Bob") === 0) {
      console.log("Academy Member with a name starting with 'Bob': " + academyMember.name);
   }
}

//Which Academy Members have been in a film that starts with "A"?
for (const academyMember of academyMembers) {
   for (const film of academyMember.films) {
      if (film.startsWith("A")) {
         console.log("Academy Member in a film starting with 'A': " + academyMember.name);
         break;
      }
   }
}
