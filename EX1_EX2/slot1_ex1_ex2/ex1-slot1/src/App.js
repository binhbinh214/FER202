function App() {
  // Khai báo đối tượng họ và tên
  const person = {
    firstName: "Trần Lương",
    lastName: "Bình"
  };

  return (
    <div>
      {/* Hiển thị họ và tên */}
      <h1>Hello {person.firstName} {person.lastName}!</h1>
    </div>
  );
}

export default App;
