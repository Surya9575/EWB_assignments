
console.log("--- Initializing Inventory System ---");

// 1. Data initialization
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// Get product details from the user
let productName = prompt("Enter the new product name:");
let productPrice = Number(prompt("Enter the product price:"));

// 2. Validate input using if...else
if (
    productName === null ||
    productName.trim() === "" ||
    !Number.isFinite(productPrice) ||
    productPrice <= 0
) {
    console.log("Invalid input! Please enter a valid product name and a price greater than zero.");
} else {
    // Store the new product as an object
    productName = productName.trim();

    inventory.push({
        name: productName,
        price: productPrice
    });

    console.log(
        `[Prompt executed: User adds "${productName}" at "$${productPrice}"]`
    );

    // 3. Assign category using a regular function and switch
    function getCategory(price) {
        let category;

        if (price < 50) {
            category = "Budget";
        } else if (price >= 500) {
            category = "Premium";
        } else {
            category = "Standard";
        }

        switch (category) {
            case "Budget":
                return "Budget";
            case "Standard":
                return "Standard";
            case "Premium":
                return "Premium";
            default:
                return "Unknown";
        }
    }

    // 4. Process inventory using forEach()
    console.log("\n--- Processing Inventory Roster (forEach) ---");

    inventory.forEach(product => {
        // Skip invalid inventory entries
        if (
            !product.name ||
            !Number.isFinite(product.price) ||
            product.price <= 0
        ) {
            return;
        }

        console.log(
            `* Item: ${product.name} ($${product.price}) -> Category: ${getCategory(product.price)}`
        );
    });

    // 5. Calculate total inventory value using an arrow function
    const calculateTotal = items => {
        let total = 0;

        for (let i = 0; i < items.length; i++) {
            if (!Number.isFinite(items[i].price)) {
                continue;
            }

            if (items[i].price <= 0) {
                continue;
            }

            total += items[i].price;
        }

        return total;
    };

    // 6. Calculate total with optional tax and discount
    function calculateFinalValue(total, taxRate = 0, discountRate = 0) {
        let tax = total * taxRate / 100;
        let discount = total * discountRate / 100;

        return total + tax - discount;
    }

    // 7. Financial analytics
    const totalValue = calculateTotal(inventory);

    console.log("\n--- Financial Analytics ---");
    console.log(`Total Inventory Value: $${totalValue}`);

    // Filter products under $200
    const affordableItems = inventory.filter(
        product => product.price < 200
    );

    console.log(
        "Filtered Affordable Items (Under $200):",
        JSON.stringify(affordableItems.map(product => product.name))
    );

    // Transform inventory into a formatted report
    const reportList = inventory.map(
        product => `${product.name.toUpperCase()}: $${product.price}`
    );

    console.log(
        "Formatted Report List:",
        JSON.stringify(reportList)
    );

    // Example: Apply 10% tax and 5% discount
    const finalValue = calculateFinalValue(totalValue, 10, 5);
    console.log(`Final Value (10% Tax, 5% Discount): $${finalValue}`);
}
