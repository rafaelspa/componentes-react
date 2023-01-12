import Header from "../../components/Header";
import HomeCard from "../../components/HomeCard";
import "./styles.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className="dsc-home-main">
        <section id="dsc-home-images-section">
          <h1 className="dsc-home-title">Venha nos visitar</h1>
          <div className="dsc-home-cards">
            <HomeCard/>
            <HomeCard/>
          </div>
        </section>
      </main>
    </>
  );
}
