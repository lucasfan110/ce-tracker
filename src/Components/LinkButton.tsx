import { Link } from "react-router-dom";
import Button, { Variation } from "./Button";

interface Props extends React.ComponentPropsWithRef<typeof Link> {
    variation?: Variation;
}

export default function LinkButton({ children, variation, ...props }: Props) {
    return (
        <Link {...props}>
            <Button variation={variation}>{children}</Button>
        </Link>
    );
}
