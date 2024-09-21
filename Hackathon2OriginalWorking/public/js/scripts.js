document.addEventListener('DOMContentLoaded', function() {
    let timers = {};

    function formatTime(seconds) {
      const days = Math.floor(seconds / (3600 * 24));
      seconds %= (3600 * 24);
      const hours = Math.floor(seconds / 3600);
      seconds %= 3600;
      const minutes = Math.floor(seconds / 60);
      seconds %= 60;

      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    function calculatePrice(seconds, isTelAvivResident) {
      const freeSeconds = 15;
      const pricePer15Seconds = 20;
      const discount = 0.75;

      let price = 0;
      if (seconds > freeSeconds) {
        const payableSeconds = seconds - freeSeconds;
        price = Math.ceil(payableSeconds / 15) * pricePer15Seconds;
      }

      if (isTelAvivResident) {
        price *= (1 - discount);
      }

      return `₪${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }

    function startTimer(spotId) {
      const startTime = Date.now();
      const timerElement = document.createElement('span');
      const priceElement = document.createElement('span');
      timerElement.className = 'timer';
      priceElement.className = 'price';
      timerElement.setAttribute('aria-live', 'polite');

      if (timers[spotId]) {
        clearInterval(timers[spotId].interval);
      }

      timers[spotId] = {
        startTime,
        interval: setInterval(() => {
          const elapsedTime = Math.floor((Date.now() - timers[spotId].startTime) / 1000);
          const isTelAvivResident = document.getElementById('telAvivResident').checked;
          timerElement.textContent = formatTime(elapsedTime);
          priceElement.textContent = `Estimated Price: ${calculatePrice(elapsedTime, isTelAvivResident)}`;
        }, 1000),
        element: timerElement,
        priceElement: priceElement
      };

      return { timerElement, priceElement };
    }

    function stopTimer(spotId) {
      if (timers[spotId]) {
        clearInterval(timers[spotId].interval);
        const totalTime = Math.floor((Date.now() - timers[spotId].startTime) / 1000);
        const stopTime = new Date();
        const isTelAvivResident = document.getElementById('telAvivResident').checked;
        const price = calculatePrice(totalTime, isTelAvivResident);
        delete timers[spotId];
        return { totalTime, stopTime, price };
      }
      return { totalTime: 0, stopTime: new Date(), price: '₪0.00' };
    }

    document.getElementById('parkingForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const selectedSpotId = document.getElementById('parking_spot').value;
      const selectedSpotText = document.querySelector(`option[value='${selectedSpotId}']`).text;
      const selectedSpotInfo = document.querySelector(`option[value='${selectedSpotId}']`).getAttribute('data-info');
      const isTelAvivResident = document.getElementById('telAvivResident').checked;
      const showInfo = document.getElementById('showInfo').checked;

      const selectedList = document.getElementById('selected-spots');
      const newListItem = document.createElement('li');
      const { timerElement, priceElement } = startTimer(selectedSpotId);

      newListItem.innerHTML = `
        <span>${selectedSpotText} - Start time: ${new Date().toLocaleString()}</span>
      `;
      newListItem.appendChild(timerElement);
      newListItem.appendChild(priceElement);

      const stopButton = document.createElement('button');
      stopButton.className = 'stop-button';
      stopButton.textContent = 'Stop Timer';
      stopButton.setAttribute('aria-label', 'Stop Timer');
      stopButton.onclick = function() {
        const { totalTime, stopTime, price } = stopTimer(selectedSpotId);
        const totalTimeElement = document.createElement('span');
        totalTimeElement.className = 'total-time';
        totalTimeElement.textContent = ` | Stop time: ${stopTime.toLocaleString()} | Total Time: ${formatTime(totalTime)}`;
        newListItem.appendChild(totalTimeElement);
        const priceElement = document.createElement('span');
        priceElement.className = 'price';
        priceElement.textContent = ` | Estimated Price: ${price}`;
        newListItem.appendChild(priceElement);
        newListItem.removeChild(timerElement);
        newListItem.removeChild(priceElement);
        newListItem.removeChild(stopButton);
      };
      newListItem.appendChild(stopButton);

      const removeButton = document.createElement('button');
      removeButton.className = 'remove-button';
      removeButton.textContent = 'Remove';
      removeButton.setAttribute('aria-label', 'Remove Parking Lot');
      removeButton.onclick = function() {
        const confirmRemove = confirm("Are you sure you want to remove this parking lot?");
        if (confirmRemove) {
          selectedList.removeChild(newListItem);
          showNotification('Parking lot removed successfully!');
        }
      };
      newListItem.appendChild(removeButton);

      if (showInfo && selectedSpotInfo) {
        const infoElement = document.createElement('div');
        infoElement.className = 'info';
        infoElement.textContent = `Additional Info: ${selectedSpotInfo}`;
        newListItem.appendChild(infoElement);
      }

      selectedList.prepend(newListItem);
      showNotification('Parking lot selected successfully!');
    });

    function showNotification(message) {
      const notification = document.getElementById('notification');
      notification.textContent = message;
      notification.style.display = 'block';
      setTimeout(() => {
        notification.style.display = 'none';
      }, 3000);
    }
  });