import GreetingPhrase from '../../../components/ui/auth/GreetingPhrase/GreetingPhrase.tsx'
import AuthCard from '../../../components/ui/auth/AuthCard/AuthCard.tsx'
import AuthDivider from '../../../components/ui/auth/AuthDivider/AuthDivider.tsx'
import OutlinedButtonLink from '../../../components/ui/common/OutlinedButtonLink/OutlinedButtonLink.tsx'
import Text from '../../../components/ui/auth/Text/Text.tsx'
import CustomLink from '../../../components/ui/auth/CustomLink/CustomLink.tsx'
import Form from './Form/Form.tsx'

const SignIn = () => {
    return (
        <>
            <GreetingPhrase phrase="Welcome back! Sign in to access your calendars." />
            <AuthCard>
                <Form />
                <AuthDivider />
                <OutlinedButtonLink
                    href="#"
                    text="Continue with Google"
                    fontSize={15}
                />
            </AuthCard>
            <Text>
                Don't have an account?{' '}
                <CustomLink href={'/signup'}>Sign up</CustomLink>
            </Text>
        </>
    )
}

export default SignIn
