import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f7f7f7',
    },
    title: {
      fontSize: '48px',
      color: '#333',
      marginBottom: '20px',
    },
    buttons: {
      display: 'flex',
      gap: '10px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: '#007BFF',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonDecrement: {
      backgroundColor: '#DC3545', // Màu đỏ cho nút Decrement
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Counter: {count}</h1>
      <div style={styles.buttons}>
        <button
          style={styles.button}
          onClick={increment}
        >
          Increment
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonDecrement }}
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
