import React from "react";
import Header from "./Header";

type Props = {
  children: React.ReactElement;
};
const Layout = ({ children }: Props) => {
  return (
    <section>
      <Header />
      <main className="container">{children}</main>
      <footer> Direitos reservados@ </footer>
    </section>
  );
};

export default Layout;
