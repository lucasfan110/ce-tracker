import "./PopUp.scss";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function PopUp({ open, setOpen, ...props }: Props) {
    if (!open) {
        return null;
    }

    return (
        <>
            <div className="pop-up__mask" />
            <div {...props} className="pop-up"></div>
        </>
    );
}
