import React, { useState, useEffect } from "react";

function App() {
  const [result, setResult] = useState("");
  const [selected, setSelected] = useState("");
  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) => {
        setResult(data[selected]);
        console.log(data[selected]);
      });
  }, [selected]);
  const options = [
    { title: "Processor type", value: "ProcessorType", index: 1 },
    { title: "CPU cores, speed", value: "cPUCoresSpeed", index: 2 },
    { title: "Computer name", value: "computerName", index: 3 },
    { title: "Operating system name", value: "operatingSystemName", index: 4 },
    {
      title: "Total RAM memory ",
      value: "totalMemoryInstalled",
      index: 5,
    },
    { title: "OS specific name", value: "OsSpecificName", index: 6 },
    { title: "Home directory path", value: "homeDirectoryPath", index: 7 },
    {
      title: "Free Ram Memory Available",
      value: "freeMemoryAvailable",
      index: 8,
    },

    {
      title: "OS release information",
      value: "OSReleaseInformation",
      index: 9,
    },
    {
      title: "Default temporary directory",
      index: 10,
      value: "DefaultTemporaryDirectory",
    },
    {
      title: "OS version information",
      value: "OsVersionInformation",
      index: 11,
    },
  ];
  function fun(e) {
    setSelected(e.target.value);
  }
  function DataDisplay() {
    if (typeof result === "object") {
      return (
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>Speed</th>
            </tr>
          </thead>
          <tbody>
            {result.map(({ model, speed }, index) => (
              <tr key={index}>
                <td>{model}</td>
                <td>{speed} MHz</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (result) {
      return <h2>{result}</h2>;
    } else {
      return <h2>select to get info</h2>;
    }
  }
  return (
    <div className="App">
      <h1 className="greeting">welcome to my-pc</h1>
      <select className="select" onChange={(e) => fun(e)}>
        <option value="" selected>
          Please select an option
        </option>
        {options.map(({ title, value, index }) => {
          return (
            <option value={value} key={index} disabled={value === selected}>
              {title}
            </option>
          );
        })}
      </select>
      <DataDisplay />
    </div>
  );
}

export default App;
