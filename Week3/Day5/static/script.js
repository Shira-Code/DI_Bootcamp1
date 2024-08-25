document.addEventListener('DOMContentLoaded', function() {
    fetch('/get-parking-lots')
        .then(response => response.json())
        .then(data => {
            const dropdown = document.getElementById('parking-lots');
            data.forEach(lot => {
                const option = document.createElement('option');
                option.value = lot.id;
                option.textContent = `${lot.name} - ${lot.address}`;
                dropdown.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
