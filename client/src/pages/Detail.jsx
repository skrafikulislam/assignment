import React, { useState, useEffect } from 'react';

const Detail = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/details');
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
            <th className="p-2 border">BrokerID</th>
            <th className="p-2 border">Exchange</th>
            <th className="p-2 border">Symbol</th>
            <th className="p-2 border">Expiry</th>
            <th className="p-2 border">Strike</th>
            <th className="p-2 border">OptionType</th>
            <th className="p-2 border">LTP</th>
            <th className="p-2 border">MtM</th>
            <th className="p-2 border">MtM_INR</th>
            <th className="p-2 border">Exp</th>
            <th className="p-2 border">Exp_INR</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{item.Dealer}</td>
              <td className="p-2">{item.BrokerID}</td>
              <td className="p-2">{item.Exchange}</td>
              <td className="p-2">{item.Symbol}</td>
              <td className="p-2">{item.Expiry}</td>
              <td className="p-2">{item.Strike}</td>
              <td className="p-2">{item.OptionType}</td>
              <td className={`p-2 ${getColor(item.LTP)}`}>{item.LTP}</td>
              <td className={`p-2 ${getColor(item.MtM)}`}>{item.MtM}</td>
              <td className={`p-2 ${getColor(item.MtM_INR)}`}>{item.MtM_INR}</td>
              <td className={`p-2 ${getColor(item.Exp)}`}>{item.Exp}</td>
              <td className={`p-2 ${getColor(item.Exp_INR)}`}>{item.Exp_INR}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
