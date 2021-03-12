import React from 'react'
import Benefits from './Benefits'
import CategorySection from './CategorySection'
import Hero from './Hero'
import HeroEnde from './heroEnde'
import KitSection from './KitSection'
import ProductsSection from './ProductsSection'

export default function Home() {
    return (
        <>
            <Hero />
            <CategorySection />
            <KitSection/>
            <ProductsSection/>
            <Benefits/>
            <HeroEnde/>
        </>
    )
}
