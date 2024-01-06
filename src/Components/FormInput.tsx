import classNames from "classnames";
import { ChangeEventHandler, useState } from "react";
import "./FormInput.scss";
import Input from "./Input";

type Validate = {
    validator: (value: string) => boolean;
    invalidMessage: string;
};

interface Props extends React.ComponentPropsWithRef<"input"> {
    label: string;
    // invalidMessage?: string;
    // validator?: (value: string) => boolean;
    validate?: Validate | Validate[];
}

export default function FormInput({
    label,
    // invalidMessage,
    // validator,
    className,
    onChange,
    validate,
    ...props
}: Props) {
    const [changed, setChanged] = useState(false);

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
        setChanged(true);
        onChange?.(event);
    };

    function renderInvalidMessage() {
        if (!changed || !validate) {
            return null;
        }

        let validateArray: Validate[] = [];

        if (!Array.isArray(validate)) {
            validateArray = [validate];
        } else {
            validateArray = validate;
        }

        return validateArray.map(v => {
            if (!v.validator(props.value?.toString() ?? "")) {
                return (
                    <p
                        className="form-input__invalid-message"
                        key={v.invalidMessage}
                    >
                        {v.invalidMessage}
                    </p>
                );
            }

            return null;
        });

        // return <p className="form-input__invalid-message">{invalidMessage}</p>;
    }

    return (
        <div className="form-input">
            <label htmlFor={props.id}>{label}</label>
            <Input
                className={classNames("form-input__input", className)}
                onChange={handleInputChange}
                {...props}
            />

            {renderInvalidMessage()}
        </div>
    );
}
