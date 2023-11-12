import { Link } from "react-router-dom";
import Button, { Variation } from "./Button";

interface Props extends React.ComponentPropsWithRef<typeof Link> {
    variation?: Variation;
}

export default function LinkButton({
    className,
    children,
    variation,
    ...props
}: Props) {
    return (
        <Link
            {...props}
            style={{
                display: "block",
            }}
        >
            <Button variation={variation} className={className}>
                {children}
            </Button>
        </Link>
    );
}
