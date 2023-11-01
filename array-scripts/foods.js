let overPricedLunch = [
   { name: "Fries", price: 9.99 },
   { name: "Burger", price: 24.99 },
   { name: "Biscit (No Drink)", price: 9.99 },
   { name: "Soda", price: 4.99 },
];

function addUpPrice(price) {
    let priceAdded = 0;
    let priceTax = 0;
    let priceTip = 0;
    let finalPrice = 0;

    for (let index = 0; index < price.length; index++) {
        priceAdded += price[index].price
    }

    priceTax = priceAdded * 0.08
    priceTip = priceAdded * 0.18
    finalPrice = priceAdded + priceTax + priceTip;

    console.log(` Total: $${priceAdded.toFixed(2)}
    Tax: $${priceTax.toFixed(2)}
    Tip: $${priceTip.toFixed(2)}
    Final Total: $${finalPrice.toFixed(2)}`);
}

addUpPrice(overPricedLunch);
