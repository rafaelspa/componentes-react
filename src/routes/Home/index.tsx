import Header from "../../components/Header";
import CarCard from "../../components/CarCard";
import "./styles.css";
import CommentCard from "../../components/CommentCard";

export default function Home() {
  return (
    <>
      <Header />
      <main className="dsc-home-main">
        <section id="dsc-home-images-section">
          <h1 className="dsc-images-title">Venha nos visitar</h1>
          <div className="dsc-images-cards">
            <CarCard/>
            <CarCard/>
          </div>
        </section>
        <section id="dsc-home-comments-section">
            <h1 className="dsc-comments-title">O que estão dizendo</h1>
            <div className="dsc-comments-cards">
                <CommentCard/>
                <CommentCard/>
                <CommentCard/>
                <CommentCard/>
                <CommentCard/>
            </div>
        </section>
      </main>
    </>
  );
}
