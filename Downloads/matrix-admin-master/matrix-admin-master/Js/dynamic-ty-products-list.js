 // Function to fetch and display products dynamically
 async function fetchProduct() {
    const response = await fetch("http://localhost:3000/getProduct");
    const products = await response.json();

    const tableBody = document.getElementById("productsTableBody");
    tableBody.innerHTML = ""; // Clear existing rows

    products.forEach(product => {
        // Create a new row for each product
        const row = document.createElement("tr");

        // Create and append each cell in the row
        const productNameCell = document.createElement("td");
        productNameCell.textContent = product.productName;
        row.appendChild(productNameCell);

        const productDescriptionCell = document.createElement("td");
        productDescriptionCell.textContent = product.productDescription;
        row.appendChild(productDescriptionCell);

        const productPriceCell = document.createElement("td");
        productPriceCell.textContent = product.productPrice;
        row.appendChild(productPriceCell);

        const productCell = document.createElement("td");
        productCell.textContent = product.product; // Assuming 'product' is a key in your product object
        row.appendChild(productCell);

        const productCategoryCell = document.createElement("td");
        productCategoryCell.textContent = product.productCategory;
        row.appendChild(productCategoryCell);

        const dateAddedCell = document.createElement("td");
        dateAddedCell.textContent = product.productAddedAt; // Assuming 'productAddedAt' is the key for date
        row.appendChild(dateAddedCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}

// Call fetchProduct when the page loads
window.onload = fetchProduct;

// Optionally, refresh the product list every 5 seconds
setInterval(fetchProduct, 5000);