const NameList = ({ names }) => (
  <div>
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  </div>
);
export default NameList;
