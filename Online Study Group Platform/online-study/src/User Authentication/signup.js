import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const styles = {
    color: 'White', 
    padding: '10px',
    fontFamily: 'Roboto, sans-serif'
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('https://localhost:7250/api/Students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        // Handle successful signup
        console.log('Signup successful');
      } else {
        // Handle signup failure
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div>
      <h2 style={styles}>Sign Up</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSignup(); }}>
      <label>
          Name:
          <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;



// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Archit075/Mayur.git
// git push -u origin main