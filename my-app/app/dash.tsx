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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const userURL = "https://8c5b-199-212-64-119.ngrok-free.app/getboard";

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
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            User Tier Rankings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="border-2">
            <TableCaption className="mt-4 text-muted-foreground">
              Top users are highlighted for each tier based on scroll count.
            </TableCaption>
            <TableHeader>
              <TableRow className="border-t border-b">
                <TableHead className="w-[200px] font-bold">Name</TableHead>
                <TableHead className="text-right font-bold">
                  Scroll Count
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user, index) => (
                <TableRow
                  key={user.name}
                  className={`${getTierStyle(user.tier)} ${
                    index === users.length - 1 ? "border-b" : ""
                  }`}
                >
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell className="text-right">{user.scroll}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
