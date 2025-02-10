// Function to fetch and display drivers in a table
async function fetchDrivers() {
    try {
        const response = await fetch("http://localhost:3000/getDrivers"); // Ensure your backend route is correct
        const drivers = await response.json();

        const driverTableBody = document.getElementById("DriverTableBody");
        const numberOfDrivers = document.getElementById("numberOfDrivers");

        driverTableBody.innerHTML = ""; // Clear the table before adding new rows

        drivers.forEach(driver => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${driver.driverName}</td>
                <td>${driver.driverLastName}</td>
                <td>${driver.driverEmail}</td>
                <td>${driver.driverNumber}</td>
            `;

            driverTableBody.appendChild(row);
        });

        // Update the number of drivers
        numberOfDrivers.textContent = drivers.length;
    } catch (error) {
        console.error("Error fetching drivers:", error);
    }
}

// Call fetchDrivers when the page loads
window.onload = fetchDrivers;

// Refresh driver list every 5 seconds
setInterval(fetchDrivers, 5000);
