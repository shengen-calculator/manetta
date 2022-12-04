import * as React from "react";
import TextField from "@mui/material/TextField";

interface Props {
    label: string
    name: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    errorMessage?: string
    variant?: "standard" | "filled" | "outlined"
    value?: string
    type?: "text" | "password"
    sx?: Array<Function | object | boolean> | Function | object
}

const TextInput: React.FC<Props> = ({
                                        label,
                                        name,
                                        onChange,
                                        variant,
                                        value,
                                        type,
                                        errorMessage,
                                        sx}) => {

    const error = !!(errorMessage && errorMessage.length > 0);

    return (
        <TextField
            id={label}
            name={name}
            onChange={onChange}
            label={label}
            variant={variant ? variant : "standard"}
            value={value ? value : ""}
            type={type ? type : "text"}
            error={error}
            helperText={errorMessage ? errorMessage : ""}
            sx={sx ? sx : {}}
        />
    );
};
export default TextInput;