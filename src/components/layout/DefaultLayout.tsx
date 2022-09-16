import Header from "./Header";
import Footer from "./Footer";
import { Container } from "@mui/system";

interface DefaultLayoutProp {
  children: JSX.Element | JSX.Element[];
}

export default function DefaultLayout({ children }: DefaultLayoutProp) {
  return (
    <>
      <Header></Header>
      <div style={{ background: "#f2f6fc" }}>
        <Container maxWidth="lg">{children}</Container>
      </div>
      <Footer />
    </>
  );
}
