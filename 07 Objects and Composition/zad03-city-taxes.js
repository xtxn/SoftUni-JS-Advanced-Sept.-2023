function cityTaxes(city, population, treasury) {
    let obj = {
        name: city,
        population: population,
        treasury: treasury,
        taxRate: 10,

        collectTaxes() {
            this.treasury += this.population * this.taxRate;
            this.treasury = Math.floor(this.treasury)
        },
        applyGrowth(percentage) {
            this.population += this.population * percentage / 100;
            this.population = Math.floor(this.population)
        },
        applyRecession(percentage) {
            this.treasury -= this.treasury * percentage / 100;
            this.treasury = Math.floor(this.treasury)
        }
    };

    return obj;
}

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
