// Given trip details (green for comments)
const total_Distance = 1500; 
const fuel_Efficiency = { 55: 30, 60: 28, 75: 23 }; 
const fuel_Budget = 175; //Cash needed for the trip\\
           //Price for a Gallon
const fuelCostPerGallon = 3.00;
// Function to calculate trip details
function calculateTripDetails(speed) {
    const mpg = fuel_Efficiency[speed];

    const gallonsNeeded = total_Distance / mpg;
    const totalFuelCost = gallonsNeeded * fuelCostPerGallon;
    const tripTime = total_Distance / speed;

    const isBudgetEnough = totalFuelCost <= fuel_Budget;

    // template literals Result
    console.log(`At an average speed of ${speed} mph:`); 
    console.log(`- Total Fuel Needed: ${gallonsNeeded.toFixed(2)} gallons`);
    console.log(`- Total Fuel Cost: $${totalFuelCost.toFixed(2)}`);
    console.log(`- Total Trip Time: ${tripTime.toFixed(2)} hours`);
    console.log(`- Is your budget of $${fuel_Budget} enough? ${isBudgetEnough ? "Yes" : "No"}`);
    console.log('-------------------------------------------------');
}

 //check for result
calculateTripDetails(55);
calculateTripDetails(60);
calculateTripDetails(75)