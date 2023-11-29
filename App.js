import "./styles.css";

// App.js

// Inside App.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Board from "./Board";

// const App = () => {
//   const [data, setData] = useState(null);
//   const [groupingOption, setGroupingOption] = useState("status");
//   const [sortOption, setSortOption] = useState("priority");

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "https://api.quicksell.co/v1/internal/frontend-assignment",
//       );
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleGroupingOptionChange = (option) => {
//     setGroupingOption(option);
//     localStorage.setItem("groupingOption", option);
//   };

//   const handleSortOptionChange = (option) => {
//     setSortOption(option);
//     localStorage.setItem("sortOption", option);
//   };

//   return (
//     <div>
//       <button onClick={fetchData}>Display</button>
//       <div>
//         <label>
//           Group by:
//           <select
//             value={groupingOption}
//             onChange={(e) => handleGroupingOptionChange(e.target.value)}
//           >
//             <option value="status">Status</option>
//             <option value="user">User</option>
//             <option value="priority">Priority</option>
//           </select>
//         </label>
//         <label>
//           Sort by:
//           <select
//             value={sortOption}
//             onChange={(e) => handleSortOptionChange(e.target.value)}
//           >
//             <option value="priority">Priority</option>
//             <option value="title">Title</option>
//           </select>
//         </label>
//       </div>
//       {data && (
//         <Board
//           data={data}
//           groupingOption={groupingOption}
//           sortOption={sortOption}
//         />
//       )}
//     </div>
//   );
// };

// export default App;
// Inside App.js
// Inside App.js
// Inside App.js
// Inside App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Board from "./Board";
import DisplayButton from "./DisplayButton";

const App = () => {
  const [data, setData] = useState(null);
  const [groupingOption, setGroupingOption] = useState("status");
  const [sortOption, setSortOption] = useState("priority");
  const [optionsVisible, setOptionsVisible] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.quicksell.co/v1/internal/frontend-assignment",
      );
      setData(response.data);
      // No need to change optionsVisible after fetching data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleGroupingOptionChange = (option) => {
    setGroupingOption(option);
    localStorage.setItem("groupingOption", option);
  };

  const handleSortOptionChange = (option) => {
    setSortOption(option);
    localStorage.setItem("sortOption", option);
  };

  const handleDisplayClick = () => {
    // Fetch data and toggle options visibility when the "Display" button is clicked
    fetchData();
    setOptionsVisible(!optionsVisible);
  };

  return (
    <div className="bg">
      <button onClick={handleDisplayClick}>
        <div className="Dis">Display </div>
      </button>

      {/* Grouping and Sorting Options */}
      {optionsVisible && (
        <div className="GO">
          <div style={{ marginBottom: "15px" }}>
            <label>
              Grouping:
              <select
                className="pd"
                value={groupingOption}
                onChange={(e) => handleGroupingOptionChange(e.target.value)}
              >
                <option value="status">Status</option>
                <option className="us" value="user">
                  User
                </option>
                <option value="priority">Priority</option>
              </select>
            </label>
          </div>
          <label>
            Ordering:
            <select
              className="pd"
              value={sortOption}
              onChange={(e) => handleSortOptionChange(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </label>
        </div>
      )}

      {data && (
        <Board
          data={data}
          groupingOption={groupingOption}
          sortOption={sortOption}
        />
      )}
    </div>
  );
};

export default App;
