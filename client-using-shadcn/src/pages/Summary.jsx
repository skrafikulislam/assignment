import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const Summary = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/summary");
      const result = await response.json();
      setData(result.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const getColor = (value) => {
    if (value < 0) return "text-red-500";
    if (value === 0) return "text-yellow-500";
    return "text-green-500";
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-800 text-white">
            <TableHead>Dealer</TableHead>
            <TableHead>Exchange</TableHead>
            <TableHead>Currency</TableHead>
            <TableHead>GrossPL</TableHead>
            <TableHead>Exposure</TableHead>
            <TableHead>ExpMargin</TableHead>
            <TableHead>SpanMargin</TableHead>
            <TableHead>TotMargin</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.Dealer}</TableCell>
              <TableCell>{item.Exchange}</TableCell>
              <TableCell>{item.Currency}</TableCell>
              <TableCell className={getColor(item.GrossPL)}>
                {item.GrossPL}
              </TableCell>
              <TableCell className={getColor(item.Exposure)}>
                {item.Exposure}
              </TableCell>
              <TableCell className={getColor(item.ExpMargin)}>
                {item.ExpMargin}
              </TableCell>
              <TableCell className={getColor(item.SpanMargin)}>
                {item.SpanMargin}
              </TableCell>
              <TableCell className={getColor(item.TotMargin)}>
                {item.TotMargin}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Summary;
