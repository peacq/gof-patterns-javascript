class Customer {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    clone() {
        return new Customer(this.name, this.surname);
    }
}

module.exports = Customer;