import { Button } from '@mui/material';

interface BTButtonProps {
    text: string;
    onClick(): void;
}

export function BTButton({ text, onClick }: BTButtonProps) {
    return (
        <Button 
            variant='contained' 
            size='medium' 
            onClick={ onClick } 
            sx={{ margin: '0 0.5rem 0.5rem 0' }}> 
            { text } 
            
        </Button>
    );
}