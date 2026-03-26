import GreetingPhrase from '../../../components/ui/auth/GreetingPhrase/GreetingPhrase.tsx'
import Text from '../../../components/ui/auth/Text/Text'
import CustomLink from '../../../components/ui/auth/CustomLink/CustomLink.tsx'
import AuthCard from '../../../components/ui/auth/AuthCard/AuthCard.tsx'
import AuthDivider from '../../../components/ui/auth/AuthDivider/AuthDivider.tsx'
import OutlinedButtonLink from '../../../components/ui/common/OutlinedButtonLink/OutlinedButtonLink.tsx'
import Form from './Form/Form.tsx'
import { Box } from '@mui/material'

const SignUp = () => {
    return (
        <>
            <GreetingPhrase phrase="Create your account and start organizing your life." />
            <AuthCard>
                <Form />
                <AuthDivider />
                <OutlinedButtonLink
                    href="#"
                    text="Continue with Google"
                    fontSize={15}
                />
                <Box
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    <Text>
                        By signing up, you agree to our{' '}
                        <CustomLink href={'#'}>Terms of Service</CustomLink> and{' '}
                        <CustomLink href={'#'}>Privacy Policy</CustomLink>.
                    </Text>
                </Box>
            </AuthCard>
            <Text>
                Already have an account?{' '}
                <CustomLink href={'/signin'}>Sign in</CustomLink>
            </Text>
        </>
    )
}

export default SignUp
