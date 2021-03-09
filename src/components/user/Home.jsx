import React from 'react'
import Benefits from './Benefits'
import CategorySection from './CategorySection'
import Hero from './Hero'
import KitDetail from './KitDetail'
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
        </>
    )
}
