function UserFactory(type) {
    if (type === 'admin') {
        return AdminFactory;
    }
    return CustomerFactory;
}

function AdminFactory() {
    return new Admin();
}

function CustomerFactory() {
    return new Customer();
}

function Admin() { }
Admin.prototype.info = function () {
    return "User type admin";
};

function Customer() { }
Customer.prototype.info = function () {
    return "User type customer";
};

module.exports = UserFactory;