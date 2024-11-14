// Function to toggle the select all checkboxes
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
    const clientCheckboxes = document.querySelectorAll('.client-id');
    clientCheckboxes.forEach(checkbox => {
        if (filter === 'all') {
            checkbox.parentElement.style.display = 'block'; // Show all accounts
        } else {
            checkbox.parentElement.style.display = (checkbox.getAttribute('data-broker') === filter) ? 'block' : 'none';
        }
    });
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
