import React from 'react';
import './CurrencyData.scss';

interface Valute {
  ID: string;
  CharCode: string;
  Name: string;
  Nominal: number;
  Value: number;
  Previous: number;
}

interface CurrencyDataProps {
  data: {
    Date: string;
    PreviousDate: string;
    Timestamp: string;
    Valute: { [key: string]: Valute };
  };
}

const CurrencyData: React.FC<CurrencyDataProps> = ({ data }) => {
  return (
    <div className="currency-data">
      <h1>Currency Data</h1>
      <table>
        <thead>
          <tr>
            <th>CharCode</th>
            <th>Name</th>
            <th>Nominal</th>
            <th>Value</th>
            <th>Previous</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data.Valute).map((key) => (
            <tr key={data.Valute[key].ID}>
              <td>{data.Valute[key].CharCode}</td>
              <td>{data.Valute[key].Name}</td>
              <td>{data.Valute[key].Nominal}</td>
              <td>{data.Valute[key].Value}</td>
              <td>{data.Valute[key].Previous}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyData;