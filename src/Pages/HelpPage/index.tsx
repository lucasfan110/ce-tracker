import "./index.scss";

export default function HelpPage() {
    return (
        <main className="help-page">
            <section className="help-page__section">
                <h2>How Do I Log In/Sign Up?</h2>
                <p>
                    To log in/sign up, you can click on the button on the top
                    right hand side
                </p>
            </section>

            <section className="help-page__section">
                <h2>How Do I Add A Company?</h2>
                <p>
                    To add a company, log in/sign up to your account, go to
                    dashboard, and then click the green + button on the bottom
                    right side.
                </p>
            </section>

            <section className="help-page__section">
                <h2>How Do I Edit/Delete A Company?</h2>
                <p>
                    In the dashboard page, if you have any companies in your
                    account you should see a list of company cards. The pencil
                    icon at the top right corner of each company card allows you
                    to edit the company. The trash can icon next to it allows
                    you to delete a company
                </p>
            </section>

            <section className="help-page__section">
                <h2>How Do I View The Detail Of A Company</h2>
                <p>
                    Click on the company card, and you'll be directed to the
                    company details page about that company, with 3D map
                    rendering
                </p>
            </section>

            <section className="help-page__section">
                <h2>How Do I Search A Particular Company?</h2>
                <p>
                    Inside the dashboard page, there is a search bar underneath
                    the navbar, where you can type in the search query and press
                    enter.
                </p>
            </section>

            <section className="help-page__section">
                <h2>How Do I Generate A Report?</h2>
                <p>
                    To generate a report, click on your user profile, select
                    Generate Report, and then you can download the report as a
                    pdf.
                </p>
            </section>

            <section className="help-page__section">
                <h2>How Do I Log Out?</h2>
                <p>
                    Click on your user profile at top right corner, which should
                    show a dropdown with list of links, and then click logout
                </p>
            </section>
        </main>
    );
}
