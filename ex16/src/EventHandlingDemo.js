import React, { useState } from 'react';

const EventHandlingDemo = () => {
  // Khởi tạo trạng thái count với giá trị ban đầu là 0
  const [count, setCount] = useState(0);

  // Hàm xử lý sự kiện khi nút được nhấn
  const handleButtonClick = () => {
    setCount(count + 1);  
  };

  return (
    <div>
      <h1>Event Handling Demo</h1>  
      <p>Count: {count}</p> 
      <button onClick={handleButtonClick}>Increase Count</button>  
    </div>
  );
};

export default EventHandlingDemo;
