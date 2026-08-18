import React from 'react'
import HeroContent from './Fragments/HeroContent'
import HeroSlider from './Fragments/‌HeroSlider'

function HeroSection() {
    return (
        <section className="container relative overflow-hidden rounded-3xl min-h-150 mt-2.5">
            {/* Slider / Images */}
            <div className="">
                <HeroSlider />
            </div>

            {/* Content */}
            <div className="absolute inset-0 z-10">
                <HeroContent />
            </div>
        </section>
    )
}

export default HeroSection