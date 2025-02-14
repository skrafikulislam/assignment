import React, { useState, useEffect } from 'react';

const Summary = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/summary');
      const result = await response.json();
      setData(result.message);
    } catch (error) {
      console.error('Error fetching data:', error);
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
    if (value < 0) return 'text-red-500';
    if (value === 0) return 'text-yellow-500';
    return 'text-green-500';
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }
 
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-2 border">Dealer</th>
            <th className="p-2 border">Exchange</th>
            <th className="p-2 border">Currency</th>
            <th className="p-2 border">GrossPL</th>
            <th className="p-2 border">Exposure</th>
            <th className="p-2 border">ExpMargin</th>
            <th className="p-2 border">SpanMargin</th>
            <th className="p-2 border">TotMargin</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{item.Dealer}</td>
              <td className="p-2">{item.Exchange}</td>
              <td className="p-2">{item.Currency}</td>
              <td className={`p-2 ${getColor(item.GrossPL)}`}>{item.GrossPL}</td>
              <td className={`p-2 ${getColor(item.Exposure)}`}>{item.Exposure}</td>
              <td className={`p-2 ${getColor(item.ExpMargin)}`}>{item.ExpMargin}</td>
              <td className={`p-2 ${getColor(item.SpanMargin)}`}>{item.SpanMargin}</td>
              <td className={`p-2 ${getColor(item.TotMargin)}`}>{item.TotMargin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
