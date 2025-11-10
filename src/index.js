import react from "react";
import reactDom from "react-dom/client";

const element = document.getElementById("root");
const root = reactDom.createRoot(element);

const App = () => {
  return <div> halo tes </div>;
};
root.render(<App />);
