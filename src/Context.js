import React, { createContext, useState } from "react";

export const PageIndex = createContext();

const Context = ({ children }) => {
  const [page, setPage] = useState(1);
  const [filteredarea, setFilteredArea] = useState("chala");

  return (
    <PageIndex.Provider value={{ page, setPage,filteredarea, setFilteredArea}}>
      {children}
    </PageIndex.Provider>
  );
};

export default Context;
