import React from "react";
import Perkenalan from "./components/Perkenalan";

const App = () => {
  const datas = [
    { nama: "Sandi", umur: 20 },
    { nama: "Sandsi", umur: 40 },
    { nama: "Sanddi", umur: 25 },
  ];

  return (
    <div>
      {datas.map((data, index) => (
        <Perkenalan key={index} nama={data.nama} umur={data.umur} />
      ))}
    </div>
  );
};

export default App;
