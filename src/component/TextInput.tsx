import * as React from "react";
import TextField from "@mui/material/TextField";
import {SxProps, Theme} from "@mui/material";

interface Props {
    label: string
    name: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    errorMessage?: string
    variant?: "standard" | "filled" | "outlined"
    value?: string
    type?: "text" | "password"
    sx?: SxProps<Theme> | undefined
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
    const propSx = sx ? sx : {};

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
            InputProps={{
                sx: propSx
            }}
        />
    );
};
export default TextInput;