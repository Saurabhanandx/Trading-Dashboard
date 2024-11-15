// Function to toggle the select all checkboxes
function toggleSelectAll() {
    const selectAllCheckbox = document.getElementById('select-all');
    const clientCheckboxes = document.querySelectorAll('.client-id');
    clientCheckboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
}

// // Function to filter client accounts based on the selected broker
// function filterClients() {
//     const filter = document.getElementById('broker-filter-sidebar').value;
//     const clientCheckboxes = document.querySelectorAll('.client-id');
//     clientCheckboxes.forEach(checkbox => {
//         if (filter === 'all') {
//             checkbox.parentElement.style.display = 'block'; // Show all accounts
//         } else {
//             checkbox.parentElement.style.display = (checkbox.getAttribute('data-broker') === filter) ? 'block' : 'none';
//         }
//     });
// }



// Function to filter client accounts based on the selected broker
function filterClients() {
    const filter = document.getElementById('broker-filter-sidebar').value;
    const clientAccounts = document.querySelectorAll('.client-account');
    
    clientAccounts.forEach(account => {
        if (filter === 'all') {
            account.style.display = 'block'; // Show all accounts
        } else {
            account.style.display = (account.getAttribute('data-broker') === filter) ? 'block' : 'none';
        }
    });
}

// Function to toggle all client accounts when "Select All" is clicked
function toggleSelectAll() {
    const selectAllCheckbox = document.getElementById('select-all');
    const clientCheckboxes = document.querySelectorAll('.client-id');
    clientCheckboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
}

// Function to show content based on selected tab
function showTabContent(tabId) {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    document.querySelector(`[onclick="showTabContent('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}


// Function to show tab content
function showTabContent(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabs = document.querySelectorAll('.tab');
    
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(tabName).classList.add('active');
    document.querySelector(`.tab[onclick="showTabContent('${tabName}')"]`).classList.add('active');
}
