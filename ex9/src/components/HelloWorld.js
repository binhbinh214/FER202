import React from 'react';

function HelloWorld() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f7f7f7',
    },
    text: {
      color: '#B22222', 
      fontSize: '48px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Hello, World!</h1>
    </div>
  );
}

export default HelloWorld;
