import LinkButton from "../Components/LinkButton";
import "./IndexPage.scss";

export default function IndexPage() {
    return (
        <main>
            <section className="section-intro">
                <div className="u-container">
                    <h1 className="heading">Lorem ipsum dolor sit amet</h1>
                    <p className="paragraph">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quisquam a quia molestias, assumenda excepturi
                        natus pariatur voluptate earum ut adipisci, est
                        voluptatibus non ullam culpa! Cumque vel optio fugit
                        ipsum?
                    </p>
                    <LinkButton
                        variation="secondary"
                        className="get-started"
                        to="/signup"
                    >
                        Get started
                    </LinkButton>
                </div>
            </section>
        </main>
    );
}
