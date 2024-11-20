// Function to toggle the "Select All" checkboxes
function toggleSelectAll() {
    const selectAllCheckbox = document.getElementById('select-all');
    const clientCheckboxes = document.querySelectorAll('.client-id');
    clientCheckboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
}

// Function to filter client accounts based on the selected broker
function filterClients() {
    const filter = document.getElementById('broker-filter-sidebar').value;
    const clientAccounts = document.querySelectorAll('.client-account');

    clientAccounts.forEach(account => {
        account.style.display =
            filter === 'all' || account.getAttribute('data-broker') === filter
                ? 'block'
                : 'none';
    });
}

// Function to show content based on the selected tab
function showTabContent(tabId) {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Set the clicked tab as active
    document.querySelector(`.tab[onclick="showTabContent('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Function to filter positions based on the selected category
function filterPositions() {
    const filter = document.getElementById('positions-filter').value;
    const positionRows = document.querySelectorAll('.position-row');

    positionRows.forEach(row => {
        row.style.display =
            filter === 'all' || row.getAttribute('data-category') === filter
                ? 'table-row'
                : 'none';
    });
}

// Function to toggle the user menu dropdown
function toggleUserMenu() {
    const userDropdown = document.querySelector('.user-dropdown');
    userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
}

// Close the user menu when clicking outside of it
document.addEventListener('click', (event) => {
    const userIcon = document.querySelector('.user-icon');
    const userDropdown = document.querySelector('.user-dropdown');

    if (
        userDropdown &&
        userDropdown.style.display === 'block' &&
        !userIcon.contains(event.target) &&
        !userDropdown.contains(event.target)
    ) {
        userDropdown.style.display = 'none';
    }
});

// Function to populate dummy positions dynamically
function populatePositions() {
    const positionsTable = document.getElementById('positions-table');
    positionsTable.innerHTML = `
        <tr class="position-row" data-category="equity">
            <td>VMC321</td>
            <td>Zerodha</td>
            <td>Nifty 21700 pe</td>
            <td>50</td>
            <td>₹2700</td>
            <td>₹2750</td>
            <td class="positive">+₹2,500</td>
            <td class="positive">+1.85%</td>
        </tr>
        <tr class="position-row" data-category="futures">
            <td>SVG342</td>
            <td>XTS</td>
            <td>TCS</td>
            <td>20</td>
            <td>₹3200</td>
            <td>₹3100</td>
            <td class="negative">-₹2,000</td>
            <td class="negative">-3.13%</td>
        </tr>
    `;
}

// Function to populate dummy orders dynamically
function populateOrders() {
    const pendingOrders = document.getElementById('pending-orders');
    const canceledOrders = document.getElementById('canceled-orders');
    const completedOrders = document.getElementById('completed-orders');
    const rejectedOrders = document.getElementById('rejected-orders');
    
    pendingOrders.innerHTML = `
        <tr>
            <td>VMC321</td>
            <td>Zerodha</td>
            <td>Buy</td>
            <td>NIFTY 21000 CE</td>
            <td class="buy">Pending</td>
        </tr>
    `;

    canceledOrders.innerHTML = `
        <tr>
            <td>SVG342</td>
            <td>XTS</td>
            <td>Sell</td>
            <td>NIFTY 21700 CE</td>
            <td class="sell">Canceled</td>
        </tr>
    `;

    completedOrders.innerHTML = `
        <tr>
            <td>SDE352</td>
            <td>Zerodha</td>
            <td>Buy</td>
            <td>NIFTY 21000 PE</td>
            <td class="complete">Completed</td>
        </tr>
    `;

    rejectedOrders.innerHTML = `
        <tr>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td class=</td>
        </tr>
    `;
    
    
    
}

// Add event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Populate data on page load
    populateOrders();
    populatePositions();

    // Add functionality for select-all checkbox
    const selectAllCheckbox = document.getElementById('select-all');
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', toggleSelectAll);
    }

    // Add functionality for filtering clients
    const brokerFilter = document.getElementById('broker-filter-sidebar');
    if (brokerFilter) {
        brokerFilter.addEventListener('change', filterClients);
    }

    // Add functionality for filtering positions
    const positionsFilter = document.getElementById('positions-filter');
    if (positionsFilter) {
        positionsFilter.addEventListener('change', filterPositions);
    }
});


// // Function to toggle the "Select All" checkboxes
// function toggleSelectAll() {
//     const selectAllCheckbox = document.getElementById('select-all');
//     const clientCheckboxes = document.querySelectorAll('.client-id');
//     clientCheckboxes.forEach(checkbox => {
//         checkbox.checked = selectAllCheckbox.checked;
//     });
// }

// // Function to filter client accounts based on the selected broker
// function filterClients() {
//     const filter = document.getElementById('broker-filter-sidebar').value;
//     const clientAccounts = document.querySelectorAll('.client-account');
    
//     clientAccounts.forEach(account => {
//         if (filter === 'all') {
//             account.style.display = 'block'; // Show all accounts
//         } else {
//             account.style.display = (account.getAttribute('data-broker') === filter) ? 'block' : 'none';
//         }
//     });
// }

// // Function to show content based on the selected tab
// function showTabContent(tabId) {
//     const tabs = document.querySelectorAll('.tab');
//     const tabContents = document.querySelectorAll('.tab-content');

//     tabs.forEach(tab => tab.classList.remove('active'));
//     tabContents.forEach(content => content.classList.remove('active'));

//     document.querySelector(`.tab[onclick="showTabContent('${tabId}')"]`).classList.add('active');
//     document.getElementById(tabId).classList.add('active');
// }

// // Function to filter positions based on the selected category
// function filterPositions() {
//     const filter = document.getElementById('positions-filter').value;
//     const positionRows = document.querySelectorAll('.position-row');

//     positionRows.forEach(row => {
//         if (filter === 'all') {
//             row.style.display = 'table-row'; // Show all positions
//         } else {
//             row.style.display = (row.getAttribute('data-category') === filter) ? 'table-row' : 'none';
//         }
//     });
// }

// // Function to toggle the user menu dropdown
// function toggleUserMenu() {
//     const userDropdown = document.querySelector('.user-dropdown');
//     userDropdown.style.display = (userDropdown.style.display === 'block') ? 'none' : 'block';
// }

// // Close the user menu when clicking outside of it
// document.addEventListener('click', (event) => {
//     const userIcon = document.querySelector('.user-icon');
//     const userDropdown = document.querySelector('.user-dropdown');
    
//     if (!userIcon.contains(event.target) && !userDropdown.contains(event.target)) {
//         userDropdown.style.display = 'none';
//     }
// });

// Function to update the user icon and name based on the login information
window.onload = function() {
    const userInitialsElement = document.querySelector('.user-initials');
    const userNameElement = document.getElementById('user-name');
    const username = localStorage.getItem('loggedInUsername'); // Retrieve the username from local storage

    if (username) {
        const initials = username.charAt(0).toUpperCase();
        userInitialsElement.textContent = initials;
        userNameElement.textContent = username;
    }
};

// // Function to handle logout and redirect to the login page
// function logout() {
//     localStorage.removeItem('loggedInUsername'); // Remove the stored username
//     window.location.href = 'loginpage.html'; // Redirect to the login page
// }


// // Toggle the "Select All" checkboxes
// function toggleSelectAll() {
//     const selectAllCheckbox = document.getElementById('select-all');
//     const clientCheckboxes = document.querySelectorAll('.client-id');
//     clientCheckboxes.forEach(checkbox => {
//         checkbox.checked = selectAllCheckbox.checked;
//     });
// }

// // Filter clients based on selected broker
// function filterClients() {
//     const filter = document.getElementById('broker-filter-sidebar').value;
//     const clientAccounts = document.querySelectorAll('.client-account');
//     clientAccounts.forEach(account => {
//         account.style.display = 
//             filter === 'all' || account.getAttribute('data-broker') === filter
//                 ? 'block'
//                 : 'none';
//     });
// }

// // Show tab content and update active tab
// function showTabContent(tabId) {
//     const tabs = document.querySelectorAll('.tab');
//     const tabContents = document.querySelectorAll('.tab-content');

//     tabs.forEach(tab => tab.classList.remove('active'));
//     tabContents.forEach(content => content.classList.remove('active'));

//     document.getElementById(tabId).classList.add('active');
//     document.querySelector(`.tab[onclick="showTabContent('${tabId}')"]`).classList.add('active');
// }

// // Toggle user menu visibility
// function toggleUserMenu() {
//     const userDropdown = document.querySelector('.user-dropdown');
//     userDropdown.style.display = 
//         userDropdown.style.display === 'block' ? 'none' : 'block';
// }

// // Populate dummy orders for display
// function populateOrders() {
//     const pendingOrders = document.getElementById('pending-orders');
//     const canceledOrders = document.getElementById('canceled-orders');
//     const completedOrders = document.getElementById('completed-orders');

//     pendingOrders.innerHTML = `
//         <tr>
//             <td>VMC321</td>
//             <td>Zerodha</td>
//             <td>Buy</td>
//             <td>Reliance</td>
//             <td class="buy">Pending</td>
//         </tr>
//     `;

//     canceledOrders.innerHTML = `
//         <tr>
//             <td>SVG342</td>
//             <td>XTS</td>
//             <td>Sell</td>
//             <td>TCS</td>
//             <td class="sell">Canceled</td>
//         </tr>
//     `;

//     completedOrders.innerHTML = `
//         <tr>
//             <td>SDE352</td>
//             <td>Zerodha</td>
//             <td>Buy</td>
//             <td>Infosys</td>
//             <td class="complete">Completed</td>
//         </tr>
//     `;
// }

// // Populate positions dynamically
// function populatePositions() {
//     const positionsTable = document.getElementById('positions-table');
//     positionsTable.innerHTML = `
//         <tr>
//             <td>VMC321</td>
//             <td>Zerodha</td>
//             <td>Reliance</td>
//             <td>50</td>
//             <td>₹2700</td>
//             <td>₹2750</td>
//             <td class="positive">+₹2,500</td>
//             <td class="positive">+1.85%</td>
//         </tr>
//         <tr>
//             <td>SVG342</td>
//             <td>XTS</td>
//             <td>TCS</td>
//             <td>20</td>
//             <td>₹3200</td>
//             <td>₹3100</td>
//             <td class="negative">-₹2,000</td>
//             <td class="negative">-3.13%</td>
//         </tr>
//     `;
// }

// // Close the user menu if clicked outside
// function closeUserMenuOnClickOutside(event) {
//     const userDropdown = document.querySelector('.user-dropdown');
//     const userIcon = document.querySelector('.user-icon');

//     if (
//         userDropdown &&
//         userDropdown.style.display === 'block' &&
//         !userDropdown.contains(event.target) &&
//         !userIcon.contains(event.target)
//     ) {
//         userDropdown.style.display = 'none';
//     }
// }

// // DOMContentLoaded event listener
// document.addEventListener('DOMContentLoaded', () => {
//     // Populate data on page load
//     populateOrders();
//     populatePositions();

//     // Add click event listener for closing user menu
//     document.addEventListener('click', closeUserMenuOnClickOutside);

//     // Add functionality for select-all checkbox
//     const selectAllCheckbox = document.getElementById('select-all');
//     if (selectAllCheckbox) {
//         selectAllCheckbox.addEventListener('change', toggleSelectAll);
//     }

//     // Add functionality for filter dropdown
//     const brokerFilter = document.getElementById('broker-filter-sidebar');
//     if (brokerFilter) {
//         brokerFilter.addEventListener('change', filterClients);
//     }
// });
