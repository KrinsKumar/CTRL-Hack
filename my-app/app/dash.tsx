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

type User = {
  name: string;
  scroll: number;
  tier: "Gold" | "Silver" | "Bronze" | "";
};

// Sample data based on the provided schema
const userss: User[] = [
  { name: "Bob", scroll: 10, tier: "Gold" },
  { name: "Alice", scroll: 8, tier: "Silver" },
  { name: "Diana", scroll: 7, tier: "Bronze" },
  { name: "Charlie", scroll: 3, tier: "" },
  { name: "Krins", scroll: 1, tier: "" },
];

const getTierStyle = (tier: string) => {
  switch (tier.toLowerCase()) {
    case "gold":
      return "bg-yellow-100 dark:bg-yellow-900/30";
    case "silver":
      return "bg-gray-100 dark:bg-gray-800/50";
    case "bronze":
      return "bg-orange-100 dark:bg-orange-900/30";
    default:
      return "";
  }
};

const userURL = "http://localhost:8080/getboard";

export default function UserTierTable() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(userURL)
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
        });
      console.log(users);
    }, 1000);

    return () => clearInterval(interval);
  }, [users]);

  return (
    <div className="container mx-auto py-10">
      <Table>
        <TableCaption>User Tier Information</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead className="text-right">Scroll Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.name} className={getTierStyle(user.tier)}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell className="text-right">{user.scroll}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
