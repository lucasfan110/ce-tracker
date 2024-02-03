import classNames from "classnames";
import "./TextArea.scss";

export interface InputProps extends React.ComponentProps<"textarea"> {}

export default function TextArea({ className, ...props }: InputProps) {
    return (
        <textarea className={classNames("textarea", className)} {...props} />
    );
}
