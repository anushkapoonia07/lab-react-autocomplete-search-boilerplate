import { useState } from 'react';
import data from "../resources/countryData.json";

export default function App() {
  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);
  const onSearch = (searchTerm) => setValue(searchTerm);

  const handleKey = (e) => {
    const dropdownBtn = document.getElementById("dropdownBtn");
    dropdownBtn.style.display = e.key === "Escape" ? "none" : "inline";
  };
  return (
    <div style={{textAlign: "center"}}>
      <h1>Search</h1>
      <div>
          <input type="text" value={value} onChange={onChange} onKeyDown={handleKey} />
          <button onClick={() => onSearch(value)}> Search </button>
        <div id="dropdownBtn">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.name.toLowerCase();
              return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;
            })
            .slice(0, 10).map((item) => (
              <div onClick={() => onSearch(item.name)} key={item.name}>
                {item.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}