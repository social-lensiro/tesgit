import React from "react";

const Perkenalan = (props) => {
  const handleClick = () => {
    console.log("Halo, saya " + props.nama);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px 0",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>Perkenalan</h2>
      <p>
        <b>Nama:</b> {props.nama}
      </p>
      <p>
        <b>Umur:</b> {props.umur}
      </p>

      <button onClick={handleClick}>Klik Saya</button>
      <button onClick={() => handleClick(props.nama)}>Klik Saya</button>
    </div>
  );
};

export default Perkenalan;
