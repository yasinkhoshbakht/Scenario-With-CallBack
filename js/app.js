function restaurantWork(food, callback) {
  console.log("The food is " + food);
  callback();
  setTimeout(() => {
    preparingFood();
    setTimeout(() => {
      deliveryOfFoodToCustomer();
      setTimeout(() => {
        finished();
      }, 3000);
    }, 3000);
  }, 3000);
}
function getOrderAndGoingToKitchen() {
  console.log("The waiter took the order and went to the kitchen .");
  setTimeout(() => {
    console.log("The waiter took the order and went to the kitchen ..");
  }, 1000);
  setTimeout(() => {
    console.log("The waiter took the order and went to the kitchen ...");
  }, 2000);
}
function preparingFood() {
  console.log("The order is being prepared .");
  setTimeout(() => {
    console.log("The order is being prepared ..");
  }, 1000);
  setTimeout(() => {
    console.log("The order is being prepared ...");
  }, 2000);
}
function deliveryOfFoodToCustomer() {
  console.log("The waiter is delivering the food to the customer .");
  setTimeout(() => {
    console.log("The waiter is delivering the food to the customer ..");
  }, 1000);
  setTimeout(() => {
    console.log("The waiter is delivering the food to the customer ...");
  }, 2000);
}
function finished() {
  console.log("The food was delivered to the customer");
}
restaurantWork("pizza", getOrderAndGoingToKitchen);
