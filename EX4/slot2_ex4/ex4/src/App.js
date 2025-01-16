import React from "react";

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

function App() {
  //Get only the companies that have category Retail
  const retailCompanies = companies.filter(
    (company) => company.category === "Retail"
  );

  //Sort the companies based on their end date in ascending order
  const sortedCompanies = companies.sort((a, b) => a.end - b.end);

  //Sort the ages array in descending order
  const sortedAges = [...ages].sort((a, b) => b - a);

  //Print the sum if you add all the ages using reduce
  const sumOfAges = ages.reduce((acc, age) => acc + age, 0);
  
  // Make a new object with name and category of companies[0] and add a print method
  const { name, category } = companies[0];
  const newObject = {
    name,
    category,
    print() {
      return `Name: ${this.name}, Category: ${this.category}`;
    },
  };

  // Create a function that takes an unknown number of arguments (numbers) and returns their sum
  const sumNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

  //Create a function that takes an unknown number of arguments and returns a flattened array
  const addToArray = (...args) => {
    return args.reduce((result, arg) => {
      if (Array.isArray(arg)) {
        return [...result, ...arg];
      }
      return [...result, arg];
    }, []);
  };

  // Destructure the property street into a variable named street from the object person
  const person = {
    name: "John",
    address: { street: "VietNam", city: "DaNang" },
  };
  const {
    address: { street },
  } = person;

  //Create a function that increments a number each time it is called, starting from 0
  const incrementCounter = (() => {
    let count = 0;
    return () => count++;
  })();

  //Create a function to parse query parameters from a URL into an object
  const parseQueryParams = (url) => {
    const queryString = url.split("?")[1];
    if (!queryString) return {};
    return queryString.split("&").reduce((params, pair) => {
      const [key, value] = pair.split("=");
      params[decodeURIComponent(key)] = decodeURIComponent(value);
      return params;
    }, {});
  };
  const sampleUrl = "https://example.com?page=2&sort=asc&category=Retail";

  

    


  return (
    <div>
      <h1>Company List</h1>

      {/* List of company */}
      <div>
        <h2>All Companies</h2>
        <ul>
          {companies.map((company) => (
            <li key={company.name}>{company.name}</li>
          ))}
        </ul>
      </div>

      {/* Companies started after 1987 */}
      <div>
        <h2>Companies Started After 1987</h2>
        <ul>
          {companies
            .filter((company) => company.start > 1987)
            .map((company) => (
              <li key={company.name}>{company.name}</li>
            ))}
        </ul>
      </div>

      {/* retail companies */}
      <h2>Retail Companies</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Start Year</th>
            <th>End Year</th>
          </tr>
        </thead>
        <tbody>
          {retailCompanies.map((company) => {
            const updatedCompany = { ...company, start: company.start + 1 }; 
            return (
              <tr key={updatedCompany.name}>
                <td>{updatedCompany.name}</td>
                <td>{updatedCompany.category}</td>
                <td>{updatedCompany.start}</td>
                <td>{updatedCompany.end}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Companies sorted by end year in asc */}
      <div>
        <h2>Companies Sorted by End Year (Ascending)</h2>
        <ul>
          {sortedCompanies.map((company) => (
            <li key={company.name}>
              {company.name} - {company.end}
            </li>
          ))}
        </ul>
      </div>

      {/* Sorted Ages */}
      <div>
        <h2>Sorted Ages (Descending)</h2>
        <ul>
          {sortedAges.map((age) => (
            <li key={age}>{age}</li>
          ))}
        </ul>
      </div>

      {/* Sum of ages */}
      <div>
        <h2>Sum of All Ages</h2>
        <p>{sumOfAges}</p>
      </div>

      {/* Display the New Object */}
      <div>
        <h2>New Object</h2>
        <p>{newObject.print()}</p>
      </div>

      {/* Others */}
      <div>
        <h2>Sum of Numbers: {sumNumbers(10, 20, 30, 40)}</h2>

        <h2>
          Flattened Array:{" "}
          {JSON.stringify(addToArray(1, [2, 3], "hello", [4, 5]))}
        </h2>

        <h2>Street from Person Object: {street}</h2>

        <h2>
          Increment Counter: {incrementCounter()} {incrementCounter()}{" "}
          {incrementCounter()}
        </h2>

        <h2>
          Parsed Query Parameters:{" "}
          {JSON.stringify(parseQueryParams(sampleUrl))}
        </h2>
      </div>
    </div>
  );
}

export default App;
