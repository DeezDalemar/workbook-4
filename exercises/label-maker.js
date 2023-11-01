let generalInfo = {
   name: "Dalemar",
   address: "156 Burger Street",
   city: "Pittsburgh",
   state: "Pennsylvannia",
   zip: 19214,
};

printContact(generalInfo);

function printContact(info) {
   console.log(`    ${info.name}
    ${info.address}
    ${info.city}, ${info.state}, ${info.zip}`);
}
