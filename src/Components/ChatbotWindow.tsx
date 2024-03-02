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
            >
                <div className="chatbot-window__title-bar">
                    <span className="chatbot-window__empty-square" />
                    <span className="chatbot-window__title">Chatbot</span>
                    <Button
                        className="chatbot-window__close-window"
                        onClick={() => setDisplayWindow(false)}
                    >
                        <i className="bi bi-x-lg chatbot-window__close-window-icon" />
                    </Button>
                </div>
                <div className="chatbot-window__chat"></div>
                <div className="chatbot-window__input-box">
                    <form
                        className="chatbot-window__input-form"
                        onSubmit={() => console.log("submitted")}
                    >
                        <Button type="button">
                            <i className="bi bi-emoji-smile" />
                        </Button>
                        <input
                            className="chatbot-window__input"
                            placeholder="Type a message..."
                        />
                        <Button type="submit" className="chatbot-window__send">
                            Send
                        </Button>
                    </form>
                </div>
            </div>
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
