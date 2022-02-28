import { Button, SxProps } from '@mui/material';

interface BTButtonProps {
    text: string;
    sxProp?: SxProps;
    onClick(): void;
}

export function BTButton({ text, sxProp={}, onClick }: BTButtonProps) {
    return (
        <Button 
            variant='contained' 
            size='medium' 
            onClick={ onClick } 
            sx={{ ...sxProp, margin: '0 0.5rem 0.5rem 0' }}> 
            { text } 
            
        </Button>
    );
}