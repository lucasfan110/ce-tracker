import classNames from "classnames";
import "./Tags.scss";

interface Props extends React.ComponentPropsWithRef<"span"> {
    tags: string[];
    extraTagContentRender?: (tag: string) => React.ReactNode;
}

export default function Tags({
    tags,
    extraTagContentRender,
    className,
    ...props
}: Props) {
    function renderTags() {
        return tags.map(tag => {
            return (
                <span key={tag} className="tags__tag">
                    {tag}
                    {extraTagContentRender?.(tag)}
                </span>
            );
        });
    }

    return (
        <span className={classNames("tags", className)} {...props}>
            {renderTags()}
        </span>
    );
}
