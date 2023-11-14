import classNames from "classnames";
import "./Input.scss";

interface Props extends React.ComponentPropsWithRef<"input"> {}

export default function Input({ className, ...props }: Props) {
    return <input className={classNames("input", className)} {...props} />;
}
