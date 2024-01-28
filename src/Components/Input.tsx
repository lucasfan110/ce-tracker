import classNames from "classnames";
import "./Input.scss";

export interface InputProps extends React.ComponentProps<"input"> {}

export default function Input({ className, ...props }: InputProps) {
    return <input className={classNames("input", className)} {...props} />;
}
