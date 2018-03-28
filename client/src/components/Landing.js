import React from 'react';

const Landing = () => {
  return (
    <div className="card">
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Follow these steps to learn how to use App</h4>
        </li>
        <li className="collection-item">Login with Google</li>
        <li className="collection-item">Add Credits with Stripe</li>
        <li className="collection-item">
          Create new Survey by clicking on PLUS button
        </li>
        <li className="collection-item">
          Make a list of recipients with comma separated emails
        </li>
      </ul>
    </div>
  );
};

export default Landing;
