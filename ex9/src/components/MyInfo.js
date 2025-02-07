import React from 'react';

function MyInfo() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f7f7f7',
    },
    heading: {
      color: '#00008B', 
      fontSize: '36px',
      margin: '0',
    },
    paragraph: {
      color: '#00008B', 
      fontSize: '18px',
      margin: '10px 0 0 0',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hi, I'm Tran Luong Binh</h1>
      <p style={styles.paragraph}>I am a male</p>
    </div>
  );
}

export default MyInfo;
