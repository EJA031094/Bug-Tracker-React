import { TextField } from "@mui/material";

interface BTTextFieldProps {
    value: string;
    label: string;
    onChange(targetValue: string): void;
}

export function BTTextField({ value, label, onChange }: BTTextFieldProps) {
    return (
        <TextField value={ value } label={ label } onChange={ e => onChange(e.target.value)} variant='outlined' className='text-field'/>
    );
}