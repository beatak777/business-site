import React from 'react';

const Book = () => {

  // Function to handle the button click
  const handleButtonClick = () => {
    window.open('https://buymeacoffee.com/belsoenergiaegyseg/e/267234', '_blank');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1></h1>
      <p>Köszönöm, ha ide jutottál. Ha úgy gondolod, hogy szeretnéd támogatni a munkám, akkor előre is köszönöm az adományod. :)</p>

      {/* Donation link with image */}
      <a href="https://buymeacoffee.com/belsoenergiaegyseg/e/267234" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.buymeacoffee.com/uploads/rewards/2024-06-17/1/192306_Screenshot_20240617_at_20.22.24.png@1200w_0e.png" alt="Donate" style={{ width: '200px', height: 'auto' }} />
      </a>

      {/* Button to take the user to the link site */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleButtonClick}>Töltsd le a könyvet itt.</button>
      </div>
    </div>
  );
};

export default Book;



