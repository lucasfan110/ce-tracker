import "./ErrorMessage.scss";

interface Props extends React.ComponentPropsWithRef<"p"> {
    show?: boolean;
}

export default function ErrorMessage({
    className,
    show = true,
    ...props
}: Props) {
    if (!props.children || !show) {
        return null;
    }

    return <p className={`error-message ${className}`} {...props} />;
}
