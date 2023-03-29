import { Header } from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Footer from './components/footer/footer';
import Employee from './components/employee';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Employee name='Khushal Agarwal' phone='9557429766' salary='1789900'/>
      <Footer />
    </>
  );
}

export default App;
