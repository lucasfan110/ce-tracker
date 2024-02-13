import "./Section.scss";

export default function Section(
    props: React.ComponentPropsWithoutRef<"section">
) {
    return <section {...props} className={`section ${props.className}`} />;
}
