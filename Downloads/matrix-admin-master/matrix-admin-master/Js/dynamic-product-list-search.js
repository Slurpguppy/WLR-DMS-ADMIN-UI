let products = [];

      // Function to fetch and display products
      async function fetchProduct() {
        const response = await fetch("http://localhost:3000/getProduct");
        const data = await response.json();
        products = data;  // Store globally

        displayProducts(products); // Show all products initially
      }

      // Function to display products inside the table
      function displayProducts(productList) {
        const productsTableBody = document.getElementById("productsTableBody");

        // Clear previous data
        productsTableBody.innerHTML = "";

        // Add products to the table
        productList.forEach(product => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.productName}</td>
                <td>${product.productDescription}</td>
                <td>${product.productPrice}</td>
                <td>${product.productCategory}</td>
                <td>${product.productAddedAt}</td>
            `;
            productsTableBody.appendChild(row);
        });
      }

      // Function to filter products based on search input
      function filterProductList() {
        const searchQuery = document.getElementById("productSearch").value.toLowerCase();
        
        // Filter products matching the search query
        const filteredProducts = products.filter(product =>
          product.productName.toLowerCase().includes(searchQuery) ||
          product.productDescription.toLowerCase().includes(searchQuery)
        );

        // Show search results above all products
        displayProducts([...filteredProducts, ...products]);
      }

      // Fetch products when the page loads
      window.onload = fetchProduct;
      //setInterval(fetchProduct, 5000);  // Refresh product list every 5 seconds