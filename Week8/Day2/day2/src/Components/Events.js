import React, { useState } from 'react';

const Events = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      {}
      <button onClick={handleToggle}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default Events;
