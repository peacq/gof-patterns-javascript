function Customer(name, surname) {
    this.name = name;
    this.surname = surname;
}

Customer.prototype.clone = function () {
    return new Customer(this.name, this.surname);
};

module.exports = Customer;