let customers = [];

function hash(name) {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash += name.charCodeAt(i); // using this charCodeAt method to specifically get the unicode character of the name at a string
  }
  return hash % 5;
}

function addCustomer() {
  let name = prompt("Enter customer name:");
  customers.push(name); // the entered name will be added to the queue
  console.log(name); 
}

function serveCustomer() {
  if (customers.length === 0) {
    console.log("Invalid customers.");
    return;
  }

  let servedCustomer = customers.shift(); // to remove the entered name inside the queue
  console.log(servedCustomer ); 
  console.log("Current customers:", customers); // to update the remaining name inside the queue
}

// Initializing the queue
addCustomer("Elaine");
addCustomer("Althea");
addCustomer("Angelo");
addCustomer("Lito");
addCustomer("Engelbert");

// Simulating customer service
serveCustomer();
serveCustomer();
serveCustomer();
