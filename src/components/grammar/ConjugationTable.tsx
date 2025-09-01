import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface ConjugationTableProps {
  title: string;
  headers: string[];
  rows: string[][];
}

const ConjugationTable: React.FC<ConjugationTableProps> = ({ title, headers, rows }) => {
  return (
    <Card className="border border-gray-200 bg-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                {headers.map((header, index) => (
                  <th 
                    key={index} 
                    className={`px-4 py-3 text-left text-sm font-medium text-gray-700 ${
                      index === 0 ? 'w-1/4' : 'w-auto'
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr 
                  key={rowIndex} 
                  className={`border-b border-gray-100 ${
                    rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-25'
                  }`}
                >
                  {row.map((cell, cellIndex) => (
                    <td 
                      key={cellIndex} 
                      className={`px-4 py-3 text-sm ${
                        cellIndex === 0 
                          ? 'font-medium text-gray-800' 
                          : 'text-gray-600 font-mono'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConjugationTable; 