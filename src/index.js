import react from "react";
import reactDom from "react-dom/client";

const element = document.getElementById("root");
const root = reactDom.createRoot(element);

const App = () => {
  const nama = "sandi";
  const umur = 20;

  return (
    <div>
      Nama Saya {nama} dan Umur Saya sekarang adalah {umur}
    </div>
  );
};

root.render(<App />);
