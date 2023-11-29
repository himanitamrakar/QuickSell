// Inside Board.js
// Inside Board.js
// import React from "react";
// import Column from "./Column";

// const Board = ({ data, groupingOption, sortOption }) => {
//   const groupedAndSortedData = groupAndSortData(
//     data.tickets,
//     groupingOption,
//     sortOption,
//   );

//   return (
//     <div className="kanban-board">
//       {Object.keys(groupedAndSortedData).map((group, index) => (
//         <Column key={index} title={group} cards={groupedAndSortedData[group]} />
//       ))}
//     </div>
//   );
// };

// const groupAndSortData = (data, groupingOption, sortOption) => {
//   const groupedData = groupData(data, groupingOption);
//   const sortedData = sortData(groupedData, sortOption);
//   return sortedData;
// };

// const groupData = (data, groupingOption) => {
//   const groupedData = {};
//   data.forEach((item) => {
//     const groupKey = item[groupingOption];
//     if (!groupedData[groupKey]) {
//       groupedData[groupKey] = [];
//     }
//     groupedData[groupKey].push(item);
//   });
//   return groupedData;
// };

// const sortData = (data, sortOption) => {
//   const sortedData = {};
//   Object.keys(data).forEach((group) => {
//     const groupData = data[group];
//     const sortedGroupData = groupData.sort((a, b) => {
//       if (sortOption === "priority") {
//         return b.priority - a.priority;
//       } else if (sortOption === "title") {
//         return a.title.localeCompare(b.title);
//       }
//       return 0;
//     });
//     sortedData[group] = sortedGroupData;
//   });
//   return sortedData;
// };
// const getColumnName = (priority) => {
//   const priorityMap = {
//     4: "Urgent",
//     3: "High",
//     2: "Medium",
//     1: "Low",
//     0: "No priority",
//   };
//   return priorityMap[priority];
// };

// export default Board;
// Inside Board.js
// Inside Board.js
// import React from "react";
// import Column from "./Column";

// const Board = ({ data, groupingOption, sortOption }) => {
//   const groupedAndSortedData = groupAndSortData(
//     data.tickets,
//     groupingOption,
//     sortOption,
//   );

//   return (
//     <div className="kanban-board">
//       {Object.keys(groupedAndSortedData).map((group, index) => (
//         <Column
//           key={index}
//           title={getColumnName(group, groupingOption)}
//           cards={groupedAndSortedData[group]}
//         />
//       ))}
//     </div>
//   );
// };

// const groupAndSortData = (data, groupingOption, sortOption) => {
//   const groupedData = groupData(data, groupingOption);
//   const sortedData = sortData(groupedData, sortOption);
//   return sortedData;
// };

// const groupData = (data, groupingOption) => {
//   const groupedData = {};
//   data.forEach((item) => {
//     const groupKey = item[groupingOption];
//     if (!groupedData[groupKey]) {
//       groupedData[groupKey] = [];
//     }
//     groupedData[groupKey].push(item);
//   });
//   return groupedData;
// };

// const sortData = (data, sortOption) => {
//   const sortedData = {};
//   Object.keys(data).forEach((group) => {
//     const groupData = data[group];
//     const sortedGroupData = groupData.sort((a, b) => {
//       if (sortOption === "priority") {
//         return b.priority - a.priority;
//       } else if (sortOption === "title") {
//         return a.title.localeCompare(b.title);
//       }
//       return 0;
//     });
//     sortedData[group] = sortedGroupData;
//   });
//   return sortedData;
// };

// const getColumnName = (key, groupingOption) => {
//   if (groupingOption === "priority") {
//     const priorityMap = {
//       4: "Urgent",
//       3: "High",
//       2: "Medium",
//       1: "Low",
//       0: "No priority",
//     };
//     return priorityMap[key];
//   } else if (groupingOption === "status") {
//     // Add more status names as needed
//     const statusMap = {
//       Todo: "To Do",
//       "In progress": "In Progress",
//       Backlog: "Backlog",
//     };
//     return statusMap[key] || key;
//   } else {
//     return key;
//   }
// };

// export default Board;
// Inside Board.js
// Inside Board.js
// Inside Board.js
import React from "react";
import Column from "./Column";

const Board = ({ data, groupingOption, sortOption }) => {
  const groupedAndSortedData = groupAndSortData(
    data.tickets,
    groupingOption,
    sortOption,
    data.users,
  );

  return (
    <div className="kanban-board">
      {Object.keys(groupedAndSortedData).map((group, index) => (
        <Column
          key={index}
          title={getColumnName(groupingOption, group, data.users)}
          cards={groupedAndSortedData[group]}
        />
      ))}
    </div>
  );
};

const groupAndSortData = (data, groupingOption, sortOption, users) => {
  const groupedData = groupData(data, groupingOption);
  const sortedData = sortData(groupedData, sortOption);
  return sortedData;
};

const groupData = (data, groupingOption) => {
  const groupedData = {};
  data.forEach((item) => {
    const groupKey = item[groupingOption];
    if (!groupedData[groupKey]) {
      groupedData[groupKey] = [];
    }
    groupedData[groupKey].push(item);
  });
  return groupedData;
};

const sortData = (data, sortOption) => {
  const sortedData = {};
  Object.keys(data).forEach((group) => {
    const groupData = data[group];
    const sortedGroupData = groupData.sort((a, b) => {
      if (sortOption === "priority") {
        return b.priority - a.priority;
      } else if (sortOption === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
    sortedData[group] = sortedGroupData;
  });
  return sortedData;
};

const getColumnName = (groupingOption, group, users) => {
  if (groupingOption === "priority") {
    const priorityMap = {
      4: "Urgent",
      3: "High",
      2: "Medium",
      1: "Low",
      0: "No priority",
    };
    return priorityMap[group];
  } else if (groupingOption === "user") {
    const user = users.find((userId) => userId.id === group);
    return user ? user.name : "Unknown User";
  } else {
    return group;
  }
};

export default Board;
