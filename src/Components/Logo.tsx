import classNames from "classnames";
import "./Logo.scss";

interface Props {
    enableHoverEffect?: boolean;
    className?: string;
}

export default function Logo({ enableHoverEffect = true, className }: Props) {
    return (
        <p
            className={classNames(
                "logo",
                { "logo--hover": enableHoverEffect },
                className
            )}
        >
            CE Tracker
        </p>
    );
}
