const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      "avg-rating": 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  
  document.addEventListener('DOMContentLoaded', function() {
      const productSelect = document.getElementById('product-name');
  
      // Populate product options
      products.forEach(product => {
          const option = document.createElement('option');
          option.value = product.name;
          option.textContent = product.name;
          productSelect.appendChild(option);
      });
  
      // Check if we're on the review.html page
      if (window.location.pathname.endsWith('review.html')) {
          // Increment review counter
          let reviewCount = localStorage.getItem('reviewCount') || 0;
          reviewCount = parseInt(reviewCount) + 1;
          localStorage.setItem('reviewCount', reviewCount);
  
          // Display review count
          const reviewCountElement = document.getElementById('review-count');
          if (reviewCountElement) {
              reviewCountElement.textContent = reviewCount;
          }
  
          // Display submitted data
          const params = new URLSearchParams(window.location.search);
          const submittedDataElement = document.getElementById('submitted-data');
          if (submittedDataElement) {
              let submittedDataHTML = '<h2>Submitted Data:</h2><ul>';
              for (const [key, value] of params) {
                  submittedDataHTML += `<li><strong>${key}:</strong> ${value}</li>`;
              }
              submittedDataHTML += '</ul>';
              submittedDataElement.innerHTML = submittedDataHTML;
          }
      }
  });
  


// Set current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Set last modified date
const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
const formattedDate = lastModified.toLocaleDateString('en-US', options);
document.getElementById('lastModified').textContent = `Last Modification: ${formattedDate}`;
