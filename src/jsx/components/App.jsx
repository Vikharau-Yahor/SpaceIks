import React from 'react'
function App() {
    let forecasttTemp = 5;

    return (
        <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                <tr key='2023-10-01'>
                    <td>2023-10-01</td>
                    <td>{forecasttTemp}</td>
                    <td>{(forecasttTemp * 9 / 5) + 32}</td>
                    <td>Cold</td>
                </tr>
            </tbody>
        </table>
    );
}

export default App;