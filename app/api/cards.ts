// app/api/cards.ts

export async function getCards() {
  // 여기에 실제 API 호출 또는 데이터베이스 쿼리 로직을 추가
  // 예를 들어:
  // const response = await fetch('https://api.example.com/cards')
  // return await response.json()

  // 예시로 더미 데이터 반환
  return {
    totalContents: 5,
    totalPage: 1,
    currentPage: 1,
    currentContents: 5,
    data: [
      { src: '/images/150mewtwo.webp' },
      { src: '/images/raichu.webp' },
      { src: '/images/charizard.webp' },
      { src: '/images/150mewtwo.webp' },
      { src: '/images/charizard.webp' },
    ]
  }
}