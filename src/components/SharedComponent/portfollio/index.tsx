import React from 'react'
import PortfolioCard from '@/components/SharedComponent/portfollio/Portfolio-card'

const Portfolio = () => {
  return (
    <>
      <section>
        <div className='container mx-auto max-w-6xl px-4'>
          <h2 className='sm:text-4xl text-[28px] pb-14 leading-tight font-bold text-midnight_text pt-7 m-auto' >
            Explore My Portfolio Showcase
          </h2>
          <PortfolioCard />
        </div>
      </section>
      <div className="border-t border-border mt-6 py-6">
        <div className="container mx-auto max-w-6xl px-4">
          <p className='text-center text-base text-grey font-medium'>
            All information presented in this portfolio is accurate and verified
          </p>
        </div>
      </div>
    </>
  )
}

export default Portfolio