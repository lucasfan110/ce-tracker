import { useState } from "react";

const DEFAULT_IMAGE_SOURCE =
    "https://www.invoicera.com/wp-content/uploads/2023/11/default-image.jpg";

interface Props extends React.ComponentPropsWithRef<"img"> {
    defaultImg?: string;
}

export default function ImageOrDefault({
    defaultImg = DEFAULT_IMAGE_SOURCE,
    ...props
}: Props) {
    const [imageSrc, setImageSrc] = useState(props.src || defaultImg);

    function loadDefaultThumbnail() {
        setImageSrc(defaultImg);
    }

    return <img {...props} src={imageSrc} onError={loadDefaultThumbnail} />;
}
