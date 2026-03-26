import { Link } from 'react-router'
import { Button } from '@mui/material'

type Props = {
    href: string
    text: string
    fontSize?: number
}

const OutlinedButtonLink = ({ href, text, fontSize = 16 }: Props) => {
    return (
        <Button
            to={href}
            component={Link}
            variant="outlined"
            size="large"
            sx={{
                borderColor: 'grey.300',
                textTransform: 'none',
                color: 'text.primary',
                fontSize: fontSize,
                py: 1.5,
                px: 4,
                '&:hover': {
                    borderColor: 'grey.400',
                    backgroundColor: 'grey.50',
                },
            }}
        >
            {text}
        </Button>
    )
}

export default OutlinedButtonLink
