import classNames from "classnames";
import "./Logo.scss";
import { Link } from "react-router-dom";

interface Props {
    enableHoverEffect?: boolean;

    /**
     * Whether to navigate back to `/` when clicked
     */
    navigateWhenClick?: boolean;
}

export default function Logo({
    enableHoverEffect = true,
    navigateWhenClick = true,
}: Props) {
    const elementProps = {
        className: classNames("logo", { "logo--hover": enableHoverEffect }),
        children: "CE Tracker",
    };

    if (navigateWhenClick) {
        return <Link to="/" {...elementProps} />;
    }

    return <p {...elementProps} />;
}
