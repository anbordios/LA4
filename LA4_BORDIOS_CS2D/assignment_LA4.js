let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"]; // name of the customers displayed inside the array

function serviceCustomer() { // use function to serve a customer
  let numberServe = parseInt(prompt("Enter the number:")); // get the number of the customer to be serviced
  alert(numberServe);

  if (numberServe > 0 && numberServe <= customers.length) {
    let customerName = customers.shift(); // to remove first customer from the queue and display the updated queue
    alert(customerName, customers);
    console.log("Updated Queue:", customers); // it display the updated name inside the queue
  } else {
    alert("Invalid number."); // display an error message for invalid input
  }
}

while (customers.length > 0) { // using while loop to serve customer until the queue is empty
  serviceCustomer();
}

console.log(customers);
