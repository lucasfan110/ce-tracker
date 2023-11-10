import classNames from "classnames";
import "./Button.scss";

export type Variation = "primary";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
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
