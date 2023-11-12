import Logo from "../Components/Logo";
import "./SignInPage.scss";

export default function SignInPage() {
    const signInType = window.location.pathname;

    return (
        <main>
            <section className="u-container section-sign-in">
                <div className="logo-animation">
                    <Logo enableHoverEffect={false} navigateWhenClick={false} />
                </div>

                <div className="login">
                    <Logo />

                    <form className="login-form">
                        <input />
                        <input />
                        <button>Submit</button>
                    </form>
                </div>
            </section>
        </main>
    );
}
