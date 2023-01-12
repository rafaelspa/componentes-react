import "./styles.css";
import carImg from "../../assets/car.png";

export default function HomeCard() {
  return (
    
      <div className="dsc-home-card">
        <img src={carImg} alt="Car" />
        <h2 className="dsc-home-card-title">Lorem ipsum dolor</h2>
      </div>

  );
}
