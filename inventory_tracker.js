// Define the inventory structure
let inventory = {
    produce: [],
    dairy: [],
    bakery: []
};

// Function to add an item to the inventory
function addItem(department, name, price, quantity) {
    let item = { name: name, price: price, quantity: quantity };
    if (inventory[department]) {
        inventory[department].push(item);
        console.log(`Added ${name} to ${department}.`);
    } else {
        console.log(`Department ${department} does not exist.`);
    }
}

// Function to update the quantity of an item when a sale occurs
function updateQuantity(department, name, quantitySold) {
    if (inventory[department]) {
        for (let item of inventory[department]) {
            if (item.name === name) {
                if (item.quantity >= quantitySold) {
                    item.quantity -= quantitySold;
                    console.log(`Updated quantity of ${name}. Remaining: ${item.quantity}`);
                } else {
                    console.log(`Not enough quantity of ${name} in ${department}.`);
                }
                return;
            }
        }
        console.log(`Item ${name} not found in ${department}.`);
    } else {
        console.log(`Department ${department} does not exist.`);
    }
}

// Function to calculate the total value of items in a particular department
function calculateTotalValue(department) {
    let totalValue = 0;
    if (inventory[department]) {
        for (let item of inventory[department]) {
            totalValue += item.price * item.quantity;
        }
    } else {
        console.log(`Department ${department} does not exist.`);
    }
    return totalValue; // Ensure this line is present
}

// Example usage
addItem('produce', 'apple', 1.0, 100);
addItem('dairy', 'milk', 1.5, 50);
addItem('bakery', 'bread', 2.0, 30);
addItem('produce', 'banana', 0.5, 200);
addItem('dairy', 'cheese', 3.0, 20);

updateQuantity('produce', 'apple', 20);
updateQuantity('produce', 'banana', 50);

let totalValueProduce = calculateTotalValue('produce');
console.log(`Total value of items in produce: $${totalValueProduce}`);
let totalValueDairy = calculateTotalValue('dairy');
console.log(`Total value of items in dairy: $${totalValueDairy}`);

let totalValueBakery = calculateTotalValue('bakery');
console.log(`Total value of items in bakery: $${totalValueBakery}`);
