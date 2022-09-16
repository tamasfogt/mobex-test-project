import Header from "./Header";
import Footer from "./Footer";

interface DefaultLayoutProp {
  children: JSX.Element | JSX.Element[];
}

export default function DefaultLayout({ children }: DefaultLayoutProp) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
