import { useState } from "react";
import Logo from "../../Components/Logo";
import Tabs, { Tab } from "../../Components/Tabs";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import "./index.scss";
import { Link } from "react-router-dom";

export default function SignInPage() {
    const searchParams = new URLSearchParams(
        // I'm not using `window.location.search` because it doesn't work with hash router
        window.location.href.split("?")[1]
    );
    const signInType = searchParams.get("type") || "login";
    const [activeTab, setActiveTab] = useState(signInType);

    const tabs: Tab[] = [
        {
            label: "login",
            title: "Log In",
            content: <LogIn />,
        },
        {
            label: "signup",
            title: "Sign Up",
            content: <SignUp />,
        },
    ];

    function handleTabSwitch(tabLabel: string) {
        setActiveTab(tabLabel);
    }

    return (
        <main>
            <section className="u-container section-sign-in">
                <div className="logo-animation">
                    <Logo enableHoverEffect={false} />
                </div>

                <div className="sign-in">
                    <Link to="/" className="sign-in__logo-link">
                        <Logo className="sign-in__logo" />
                    </Link>
                    <Tabs
                        tabs={tabs}
                        activeTabLabel={activeTab}
                        onTabSwitch={handleTabSwitch}
                    />
                </div>
            </section>
        </main>
    );
}
