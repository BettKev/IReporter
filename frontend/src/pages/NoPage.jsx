import React from 'react';
// import './NoPage.css'; // Import the CSS file for styles

export default function NoPage() {
  return (
    <div className="noPageContainer">
      <div className="noPageText">
        <h1>Oops! Page Not Found</h1>
        <p>Looks like you’ve stumbled upon a page that doesn't exist.</p>
        <a href="/" className="backHomeLink">Go Back Home</a>
      </div>
    </div>
  );
}
