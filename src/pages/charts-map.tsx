import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { useQuery } from 'react-query';
import LineChart from '../components/lineChart';
import Map from '../components/mapChart';

const ChartsMapPage = () => {
  const [isChart, setIsChart] =  useState(false);
  const [isMap, setIsMap] =  useState(false);

  const fetchWorldData = async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/all');
    return response.json();
  };

  const fetchCasesWithDate = async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    return response.json();
  };
  
  const fetchCountryData = async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    return response.json();
  };

  const { data: worldData } = useQuery('worldData', fetchWorldData);
  const { data: caseswithDateData } = useQuery('worldData', fetchCasesWithDate);
  const { data: countryData } = useQuery('countryData', fetchCountryData);

  const handleShowChart = () => {
    setIsMap(false);
    setIsChart(!isChart);
  }
  const handleShowMap = () => {
    setIsChart(false)
    setIsMap(!isMap);
  }
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-3/4 p-8">
      <div className="p-8">
          <h1 className="text-2xl font-semibold mb-4">COVID-19 Dashboard</h1>
          <div className="flex justify-between items-center mb-4 mt-2">
          <button onClick={handleShowChart} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            View Chart
          </button>
          <button onClick={handleShowMap} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            View Map
          </button>
          </div>
          {isChart && (
           worldData && <LineChart data={caseswithDateData} />
          )}
          {isMap && (
            countryData && <Map countries={countryData} />
          )}
        </div>
      </div>
    </div>
  );
};
export default ChartsMapPage;
