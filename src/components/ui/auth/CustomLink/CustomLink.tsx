import { Link } from '@mui/material'
import type { ReactNode } from 'react'
import { Link as RRLink } from 'react-router'

type Props = {
    href: string
    children: ReactNode
}

const CustomLink = ({ href, children }: Props) => {
    return (
        <Link to={href} component={RRLink} underline="hover" color="primary">
            {children}
        </Link>
    )
}

export default CustomLink
