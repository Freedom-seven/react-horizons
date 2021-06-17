import Narbar from './component/Navbar/Navbar';
import Carousel from './component/Carousel/Carousel';
import Plans from './component/Plans/Plans';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <>
      <Narbar/>
      <Carousel/>
      <Plans plans={"PLANS"}/>
      <Footer 
      kenya={"VIST US IN KENYA"} 
      ghana={"VIST US IN GHANA"}
      nigeria={"VIST US IN NIGERIA"}
      />
    </>
  );
}

export default App;
