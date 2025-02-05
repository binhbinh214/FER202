import NavbarComponent  from "./components/NavbarComponent";
import CarouselComponent from "./components/CarouselComponent";
import CardComponent from "./components/CardComponent";
import ReservationForm from "./components/ReservationForm";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="bg-customer">
      <NavbarComponent  />
      <CarouselComponent />
      <CardComponent />
      <ReservationForm />
    </div>
  );
}

export default App;
