import { Outlet } from "react-router-dom";

interface Props {
    children?: React.ReactNode;
}

export default function ContainerLayout({ children }: Props) {
    return (
        <>
            <div className="u-container">{children ?? <Outlet />}</div>
        </>
    );
}
