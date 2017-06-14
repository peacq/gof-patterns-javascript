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

class Admin {
  info() {
    return "User type admin";
  }
}

class Customer {
  info() {
    return "User type customer";
  }
}

module.exports = UserFactory;