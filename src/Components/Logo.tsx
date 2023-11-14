import classNames from "classnames";
import "./Logo.scss";
import { Link } from "react-router-dom";

interface Props {
    enableHoverEffect?: boolean;

    /**
     * Whether to navigate back to `/` when clicked
     */
    navigateWhenClick?: boolean;

    className?: string;
}

export default function Logo({
    enableHoverEffect = true,
    navigateWhenClick = true,
    className,
}: Props) {
    const elementProps = {
        className: classNames(
            "logo",
            { "logo--hover": enableHoverEffect },
            className
        ),
        children: "CE Tracker",
    };

    if (navigateWhenClick) {
        return <Link to="/" {...elementProps} />;
    }

    return <p {...elementProps} />;
}