import React from 'react';
import './Suggestion.css';

const Suggestion = () => {
  return (
    <div className='suggestion'>
      <div className="suggestion-section">
        <h2>Naslov</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dignissimos?</p>
        <div className="buttons-container">
          <button className="btn white">Sign Up</button>
          <button className="btn black">Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestion;
