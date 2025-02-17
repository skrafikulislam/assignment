import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const Detail = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/details");
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
    <div className="overflow-x-auto p-4">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-800 text-white">
            <TableHead>Dealer</TableHead>
            <TableHead>BrokerID</TableHead>
            <TableHead>Exchange</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Expiry</TableHead>
            <TableHead>Strike</TableHead>
            <TableHead>OptionType</TableHead>
            <TableHead className="text-end">LTP</TableHead>
            <TableHead className="text-end">MtM</TableHead>
            <TableHead className="text-end">MtM_INR</TableHead>
            <TableHead className="text-end">Exp</TableHead>
            <TableHead className="text-end">Exp_INR</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.Dealer}</TableCell>
              <TableCell>{item.BrokerID}</TableCell>
              <TableCell>{item.Exchange}</TableCell>
              <TableCell>{item.Symbol}</TableCell>
              <TableCell>{item.Expiry}</TableCell>
              <TableCell>{item.Strike}</TableCell>
              <TableCell>{item.OptionType}</TableCell>
              <TableCell className={`text-end ${getColor(item.LTP)}`}>
                {item.LTP}
              </TableCell>
              <TableCell className={`text-end ${getColor(item.MtM)}`}>
                {item.MtM}
              </TableCell>
              <TableCell className={`text-end ${getColor(item.MtM_INR)}`}>
                {item.MtM_INR}
              </TableCell>
              <TableCell className={`text-end ${getColor(item.Exp)}`}>
                {item.Exp}
              </TableCell>
              <TableCell className={`text-end ${getColor(item.Exp_INR)}`}>
                {item.Exp_INR}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Detail;
