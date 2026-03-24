import Cards from './Cards/Cards.tsx'
import Section from '../../../../components/ui/landing/Section/Section.tsx'

const Views = () => {
    return (
        <Section
            id="views"
            label="calendar views"
            title="Multiple Ways to View"
            subtitle="Switch between different calendar views to find what works best for you."
        >
            <Cards />
        </Section>
    )
}

export default Views
