'use client'

export default function Home() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget as HTMLDivElement;
    const overlay = e.currentTarget.querySelector('.overlay') as HTMLDivElement;
    // console.log(overlay)
    if (!container || !overlay) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    overlay.style.backgroundPosition = `${x / 5 + y / 5}px ${x / 5 + y / 5}px`;
    
    const rotateX = 4 / 30 * y - 20;
    const rotateY = -1 / 5 * x + 20;
    container.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget as HTMLDivElement;
    const overlay = e.currentTarget.querySelector('.overlay') as HTMLDivElement;

    if (!container || !overlay) return;

    // overlay.style.filter = 'opacity(0)';
    overlay.style.backgroundPosition = `100%`
    container.style.transform = `perspective(350px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <main>
      <div className="aura">
        <div className="aura-content">
          {[...Array(5)].map((_, index) => (
            <div 
              key={index} 
              className="container" 
              onMouseMove={handleMouseMove} 
              onMouseOut={handleMouseOut}
            >
              <div className="overlay"></div>
              <div className="card"></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}