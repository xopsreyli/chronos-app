import { Link, Stack, Typography } from '@mui/material'

const SECTIONS = [
    {
        title: 'product',
        links: [
            {
                label: 'features',
                href: '#features',
            },
            {
                label: 'views',
                href: '#views',
            },
        ],
    },
]

const Navigation = () => {
    return (
        <Stack direction="row" spacing={6} useFlexGap>
            {SECTIONS.map((section) => (
                <Stack key={section.title} spacing={2} useFlexGap>
                    <Typography
                        component="h6"
                        sx={{
                            textTransform: 'capitalize',
                            color: '#fff',
                            fontWeight: 'bold',
                        }}
                    >
                        {section.title}
                    </Typography>
                    <Stack spacing={1} useFlexGap>
                        {section.links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                underline="hover"
                                variant="body2"
                                color="grey.400"
                                sx={{
                                    textTransform: 'capitalize',
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </Stack>
                </Stack>
            ))}
        </Stack>
    )
}

export default Navigation
