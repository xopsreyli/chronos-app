import Cards from './Cards/Cards.tsx'
import Section from '../../../../components/ui/landing/Section/Section.tsx'

const Features = () => {
    return (
        <Section
            id="features"
            label="features"
            title="Everything You Need"
            subtitle="Powerful features to help you manage your time effectively and stay on top of your commitments."
        >
            <Cards />
        </Section>
    )
}

export default Features
