import { TextField } from "@mui/material";

interface BTTextFieldProps {
    value: string;
    label: string;
    rows?: number;
    onChange(targetValue: string): void;
}

export function BTTextField({ value, label, rows=1, onChange }: BTTextFieldProps) {
    const isMultiline: boolean = rows > 1 ? true : false;

    return (
        <TextField 
        value={ value } 
        label={ label }
        multiline={ isMultiline }
        rows={ rows }
        onChange={ e => onChange(e.target.value)} 
        variant='outlined' 
        className='text-field'/>
    );
}