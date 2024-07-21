'use client'

import { useCallback, useEffect, useState } from 'react'
import { throttle } from 'lodash'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CardImage from './components/card'

type Card = {
  src: string
}

export default function Home({
  cards = {
    totalContents: 5,
    totalPage: 1,
    currentPage: 1,
    currentContents: 5,
    data: [
      { src: '/images/150mewtwo.webp' },
      { src: '/images/150mewtwo.webp' },
      { src: '/images/150mewtwo.webp' },
      { src: '/images/150mewtwo.webp' },
      { src: '/images/150mewtwo.webp' },
    ]
  }
}) {

  const handleMouseMove = useCallback(
    throttle((e: React.MouseEvent<HTMLDivElement>) => {
      const container = e.currentTarget as HTMLDivElement
      const overlay = e.currentTarget?.querySelector('.overlay') as HTMLDivElement
      if (!container || !overlay) return

      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const overlayX = x - 110
      const overlayY = y - 155
      // console.log(overlayX, overlayY)
      // overlay.style.backgroundPosition = `${overlayX / 5 + overlayY / 5}px ${overlayX / 5 + overlayY / 5}px`
      overlay.style.backgroundPosition = `${100 - ((overlayX / 110 * 100) + (overlayY / 155 * 100))}% 100%`
      
      const rotateX = 4 / 30 * y - 20
      const rotateY = -1 / 5 * x + 20
      container.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }, 50), // 50ms throttle
    []
  )

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget as HTMLDivElement
    const overlay = e.currentTarget?.querySelector('.overlay') as HTMLDivElement

    if (!container || !overlay) return
    overlay.style.backgroundPosition = `100%`
    container.style.transform = `perspective(350px) rotateX(0deg) rotateY(0deg)`
  }

  return (
    <main>
      <div className='aura'>
        <div className='aura-content'>
          {cards.data.map((card:Card, index) => (
            <div 
              key={index} 
              className='container' 
              onMouseMove={handleMouseMove} 
              onMouseOut={handleMouseOut}
            >
              <div className='overlay'></div>
              <CardImage src={card.src} alt='card image' />
            </div>
          ))
          }
        </div>
      </div>
    </main>
  )
}