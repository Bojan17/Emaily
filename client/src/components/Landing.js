import React from 'react';

const Landing = () => {
  return (
    <div class="card">
      <ul class="collection with-header">
        <li class="collection-header">
          <h4>Follow these steps to learn how to use App</h4>
        </li>
        <li class="collection-item">Login with Google</li>
        <li class="collection-item">Add Credits with Stripe</li>
        <li class="collection-item">
          Create new Survey by clicking on PLUS button
        </li>
        <li class="collection-item">
          Make a list of recipients with comma separated emails
        </li>
      </ul>
    </div>
  );
};

export default Landing;
