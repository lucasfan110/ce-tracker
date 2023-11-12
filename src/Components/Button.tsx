import classNames from "classnames";
import "./Button.scss";

export type Variation = "primary" | "secondary";

interface Props extends React.ComponentPropsWithRef<"button"> {
    variation?: Variation;
}

export default function Button({ className, variation, ...props }: Props) {
    return (
        <button
            className={classNames(
                "btn",
                { [`btn--${variation}`]: variation },
                className
            )}
            {...props}
        />
    );
}
