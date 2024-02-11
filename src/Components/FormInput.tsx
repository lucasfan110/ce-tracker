import classNames from "classnames";
import { ChangeEventHandler, useState } from "react";
import "./FormInput.scss";
import Input, { InputProps } from "./Input";

type Validate = {
    validator: (value: string) => boolean;
    invalidMessage: string;
};

export interface FormInputProps extends InputProps {
    label: string;
    validate?: Validate | Validate[];
}

export default function FormInput({
    label,
    className,
    onChange,
    validate,
    ...props
}: FormInputProps) {
    const [changed, setChanged] = useState(false);

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
        setChanged(true);
        onChange?.(event);
    };

    function renderInvalidMessage() {
        if (!changed || !validate) {
            return null;
        }

        let validateAsArray: Validate[] = [];

        if (!Array.isArray(validate)) {
            validateAsArray = [validate];
        } else {
            validateAsArray = validate;
        }

        return validateAsArray.map(v => {
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
