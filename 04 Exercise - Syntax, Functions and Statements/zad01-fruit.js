function fruit(fruitType, weightInGrams, pricePerKg) {
    let weightInKg = weightInGrams / 1000;
    let finalPrice = weightInKg * pricePerKg;
    console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitType}.`);
}
fruit('orange', 2500, 1.80);