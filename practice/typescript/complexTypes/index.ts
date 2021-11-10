import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
function getMaxPrice(value: PriceBracket) {
  switch (value) {
    case PriceBracket.low:
      return 10;
    case PriceBracket.Medium:
      return 20;
    case PriceBracket.High:
      return 30;
  }
}

/// Add your getOrders() function below:
function getOrders(price: PriceBracket, orders: Order[][]): Order[][]
{
  let filteredOrders: Order[][] = [];
  orders.forEach((restaurant) => {
  const filteredForRestaurant = restaurant.filter((order) => order.price <= getMaxPrice(price));
  filteredOrders.push(filteredForRestaurant);
  });
  return filteredOrders;
}

/// Add your printOrders() function below:
function printOrders(restaurants: Restaurant[], filteredOrders: Order[][]): void
{
  filteredOrders.forEach((item, index) => {
    if (item.length != 0) {
      console.log(`${restaurants[index].name}`);
      item.forEach((item, index) => {
        console.log(`${item.name}: $${item.price}`);
      })
    }
  })
}
/// Main
const elligibleOrders = getOrders(PriceBracket.low, orders);
printOrders(restaurants, elligibleOrders);
