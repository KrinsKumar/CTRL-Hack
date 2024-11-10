"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CSS from "csstype";


type User = {
  name: string;
  scroll: number;
};

// Sample data based on the provided schema
const userss: User[] = [
  { name: "Bob", scroll: 10},
  { name: "Alice", scroll: 8},
  { name: "Diana", scroll: 7},
  { name: "Charlie", scroll: 5},
  { name: "Banana", scroll: 3},
  { name: "Kristin", scroll: 1}

];

const getTierStyle = (scroll: number) => {
  if (scroll >= 10) return "bg-red-500 dark:bg-red-900/30";
  if (scroll >= 8) return "bg-orange-500 dark:bg-orange-800/50";
  if (scroll >= 5) return "bg-yellow-500 dark:bg-yellow-700/30";
  if (scroll >= 1) return "bg-green-500 dark:bg-green-900/30";
  return "bg-gray-200 dark:bg-gray-800";  // default for low scroll counts
};

const userURL = "http://localhost:8080/getboard";

export default function UserTierTable() {
  const [users, setUsers] = useState<User[]>(userss);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     fetch(userURL)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setUsers(data);
  //       });
  //     console.log(users);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [users]);

  const sortedUsers = [...users].sort((a, b) => b.scroll - a.scroll);

  return (
    <div style={smartphone} className="container mx-auto py-10">
        <h1 style={h1Styles}>Leaderboard</h1>
        <Table>
        <TableHeader>
          <TableRow>            
            <TableHead style={tableHeadStyles}>Name</TableHead>
            <TableHead style={tableHeadStyles}>Scroll Counter</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedUsers.map((user) => (
            <TableRow style={leaderboardTable} key={user.name} className={getTierStyle(user.scroll)}>
              <TableCell style={tableRowStyle}>{user.name}</TableCell>
              <TableCell style={tableRowStyle}>{user.scroll}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}


const h1Styles: CSS.Properties = {
  textAlign: "center",
  color: "#333",
  padding: "1rem 0",
  fontSize: "1.8rem",
  fontWeight: 700,
};

const tableHeadStyles: CSS.Properties = {
  fontWeight : "bold",
  backgroundColor: "#4a4a4a",
  color: "white",
  padding: "0.5rem",
  textAlign: "center",
};

const tableRowStyle: CSS.Properties = {
  padding: "0.5rem",
  borderBottom: "1px solid #ddd",
  borderColor: "black",
  textAlign: "center",
};

const leaderboardTable: CSS.Properties = {
  width: "100%",
  textAlign: "left",
  marginTop: "1rem",
  
};

const smartphone: CSS.Properties = {
  position: "relative",
  width: "360px",
  height: "640px",
  margin: "auto",
  border: "16px solid black",
  borderTopWidth: "40px",
  borderBottomWidth: "60px",
  borderRadius: "36px",
  overflow: "auto",
  padding: "1rem",
  backgroundColor: "#ccc2c1",
  marginTop: "25px"
};
 