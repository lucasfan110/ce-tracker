import { useEffect, useState } from "react";
import Button from "./Button";
import "./ChatbotWindow.scss";
import classNames from "classnames";

export default function ChatbotWindow() {
    const [displayWindow, setDisplayWindow] = useState(false);
    const [noAnimation, setNoAnimation] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setNoAnimation(false);
        }, 1000);
    }, []);

    return (
        <div className="chatbot-window">
            <div
                className={classNames(
                    "chatbot-window__window",
                    {
                        "chatbot-window__window--active": displayWindow,
                        "chatbot-window__window--inactive": !displayWindow,
                    },
                    {
                        "u-no-animation": noAnimation,
                    }
                )}
            ></div>
            <Button
                className={classNames("chatbot-window__button", {
                    "chatbot-window__button--active": !displayWindow,
                    "chatbot-window__button--inactive": displayWindow,
                })}
                variation="secondary"
                onClick={() => setDisplayWindow(true)}
            >
                <i className="bi bi-chat" />
            </Button>
        </div>
    );
}
