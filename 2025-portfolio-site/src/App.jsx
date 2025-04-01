import { useState } from "react";

import Page from "./Page";
import HeaderHome from "./components/HeaderHome";
import "./index.css";

function App() {
  const pages = ["home", "javascript", "react", "css", "python", "contact"];

  const [selectedPage, setSelectedPage] = useState("home");

  function handlePageChange(newPage) {
    setSelectedPage(newPage);
  }

  return (
    <>
      {selectedPage === "home" && (
        <HeaderHome onPageChange={handlePageChange} />
      )}

      {selectedPage !== "home" && (
        <Page title={selectedPage} onPageChange={handlePageChange} />
      )}
      {selectedPage === "contact" && <p>contact</p>}
    </>
  );
}

export default App;
