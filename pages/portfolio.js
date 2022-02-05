import Image from "next/image";
import Navbar from "../components/navbar";
import portfolio1 from "../public/portfolio.png";
import portfolio2 from "../public/portfolio1.png";

export default function Portfolio() {
    return (
        <>
            <Navbar />

            <section className="hero">
                <div className="container">
                    <div className="text-wrapper text-full">
                        <h4 className="section-title">Portfolio</h4>
                        <p className="desc">
                            Portfolio yang sudah dibuat sebagai berikut:
                        </p>

                        <div className="portfolio-wrapper">
                            <div className="portfolio-item">
                                <Image
                                    src={portfolio1}
                                    alt="#"
                                    className="portfolio-img"
                                />

                                <h4 className="portfolio-name">
                                    Company Profile Information System
                                </h4>
                                <div className="portfolio-category">
                                    Frontend Developer
                                </div>
                            </div>

                            <div className="portfolio-item">
                                <Image
                                    src={portfolio2}
                                    alt="#"
                                    className="portfolio-img"
                                />

                                <h4 className="portfolio-name">Courses App</h4>
                                <div className="portfolio-category">
                                    UI Design
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
