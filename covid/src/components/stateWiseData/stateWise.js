import React, { useEffect, useState } from "react";
const StateWise = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    const res = await fetch(
      //   "https://data.covid19india.org/v4/min/data.min.json	"
      "https://api.rootnet.in/covid19-in/stats/latest"
    );
    const actualData = await res.json();
    console.log(actualData);
    // console.log(actualData.data.regional[0].confirmedCasesIndian);
    setData(actualData.data.regional);
  };
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="main-heading">
          <h1>India Covid-19 Dashboard</h1>
        </div>
        <div className="table-div">
          <table className="table">
            <thead>
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recorved</th>
                <th>Deaths</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              {data.map((currEle, index) => {
                return (
                  <tr key={index}>
                    <td>{currEle.loc}</td>
                    <td>{currEle.confirmedCasesIndian}</td>
                    <td>{currEle.discharged}</td>
                    <td>{currEle.deaths}</td>
                    <td>{currEle.confirmedCasesIndian - currEle.discharged}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default StateWise;
