import Image from "next/image";
import Navbar from "../components/navbar";
import portfolio1 from "../public/portfolio1.png";
import portfolio2 from "../public/portfolio2.png";

export default function Portfolio() {
    return (
        <>
            <Navbar />

            <section className="hero">
                <div className="container">
                    <div className="text-wrapper text-full">
                        <h4 className="section-title">Portfolio</h4>
                        <p className="desc">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                        </p>

                        <div className="portfolio-wrapper">
                            <div className="portfolio-item">
                                <Image
                                    src={portfolio1}
                                    alt="#"
                                    className="portfolio-img"
                                />

                                <h4 className="portfolio-name">
                                    Buildings App
                                </h4>
                                <div className="portfolio-category">
                                    Web Developer
                                </div>
                            </div>

                            <div className="portfolio-item">
                                <Image
                                    src={portfolio2}
                                    alt="#"
                                    className="portfolio-img"
                                />

                                <h4 className="portfolio-name">
                                    Medical Consultant App
                                </h4>
                                <div className="portfolio-category">
                                    Web Developer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
