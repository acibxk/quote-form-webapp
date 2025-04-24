import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-blue-600">Quote Form</h1>
      <form action="https://script.google.com/macros/s/AKfycbyqnaKzCaFBilYCTQpNlv_oGPHZiPHn0ASk2fZ_Gp1NqBmFLr8QCuSG0JS0KUoo6PuI/exec" method="POST" className="mt-4 space-y-4">
        <input type="text" name="name" placeholder="Name" className="border p-2 w-full" required />
        <input type="email" name="email" placeholder="Email" className="border p-2 w-full" required />
        <textarea name="message" placeholder="Message" className="border p-2 w-full" required></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


