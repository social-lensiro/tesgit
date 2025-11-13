// import React from "react";
// import Perkenalan from "./components/Perkenalan";

// const App = () => {
//   const datas = [
//     { nama: "Sandi", umur: 20 },
//     { nama: "Sandsi", umur: 40 },
//     { nama: "Sanddi", umur: 25 },
//   ];

//   return (
//     <div>
//       {datas.map((data, index) => (
//         <Perkenalan key={index} nama={data.nama} umur={data.umur} />
//       ))}
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import "./App.css";
export default function HitungAngka() {
  // Buat state bernama "angka" dengan nilai awal 0
  const [angka, setAngka] = useState(0);

  // Fungsi untuk menambah angka
  const tambah = () => {
    setAngka(angka + 1);
  };

  // Fungsi untuk mereset angka ke 0
  const minus = () => {
    setAngka(angka - 1);
  };
  // let info;
  // if (angka % 2 === 0) {
  //   info = "Genap";
  // } else {
  //   info = "Ganjil";
  // }
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Nilai Sekarang: {angka}</h2>

      <button onClick={tambah} style={{ marginRight: "10px" }}>
        Tambah
      </button>
      <button onClick={minus}>Minus</button>
      <h4 className={`${angka % 2 == 0 ? "green" : "blue"}`}>
        {" "}
        {angka > 10 || <div> okbos</div>}
      </h4>
    </div>
  );
}
