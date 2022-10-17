import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import "./style.css";

export function App() {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh'
  }}>
    <Header />
    <Main />
    <Footer />
  </div>
}