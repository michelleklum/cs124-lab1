import React, { Fragment, useState } from "react";
import "./App.css";
import Home from "./Home/Home";
import SingleListPage from "./SingleListPage/SingleListPage";

function App(props) {
  const [currentPage, setCurrentPage] = useState("Home");

  function handleChangePage(newPage) {
    setCurrentPage(newPage);
  }

  return (
    <Fragment>
      {currentPage === "Home" ? (
        <Home
          initialData={props.initialData}
          currentPage={currentPage}
          onChangePage={handleChangePage}
        />
      ) : null}
      {currentPage === "SingleListPage" ? (
        <SingleListPage
          initialData={props.initialData}
          currentPage={currentPage}
          onChangePage={handleChangePage}
        />
      ) : null}
    </Fragment>
  );
}

export default App;
