import React, { useState } from "react";

import Template from "./template/Template";
import Counter from "./pages/Counter";
import Albums from "./pages/Albums";
import Users from "./pages/Users";

const defaultPage = "albums";

const pages = {
  albums: {
    text: "Albums",
    component: Albums,
  },
  counter: {
    text: "Counter",
    component: Counter,
  },
  users: {
    text: "Users",
    component: Users,
  },
};

const App = () => {
  const [page, setPage] = useState(defaultPage);

  const handleChangePage = (btnpage) => {
    setPage(btnpage);
  };

  const Page = pages[page].component;

  return (
    <Template pages={pages} activePage={page} onChangePage={handleChangePage}>
      {Page && <Page />}
    </Template>
  );
};

export default App;
