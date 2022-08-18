import React from "react";
import Navbar from "../navbar";
import Search from "../search";
import * as S from "./styled";

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
      <Navbar />
      <Search />
      {children}
    </S.WrapperLayout>
  );
};

export default Layout;
