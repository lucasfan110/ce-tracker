import LinkButton from "../../Components/LinkButton";
import "./index.scss";

export default function IndexPage() {
    return (
        <main>
            <section className="section-intro">
                <div className="u-container">
                    <h1 className="heading">CE Tracker</h1>
                    <p className="paragraph">
                        The tool to revolutionize bussiness storage and
                        management
                    </p>
                    <LinkButton
                        variation="secondary"
                        className="get-started"
                        to="/sign-in?type=signup"
                    >
                        Get started
                    </LinkButton>
                </div>
            </section>
        </main>
    );
}
