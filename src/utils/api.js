const getAnimeResponse = async (resourceURL, params='') => {
    const apiResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resourceURL}?${params}` )
    const responseJSON = await apiResponse.json()
    return responseJSON;
}


const reproduceRecomendationsResponse = async  (data, gap ) => {
    const firstRandom = Math.floor(Math.random() * (data.length) + 1 -gap )
    const secondRandom = firstRandom + gap
    return data.slice(firstRandom, secondRandom)
}


const getRecommendationResponse = async (gap) => {
    const {data} = await getAnimeResponse("recommendations/anime")
    // const recommendationsAnime = data.map(anime => anime.entry.map(entry => entry.title))
    let recommendationsAnime = data.flatMap(anime => anime.entry)
    recommendationsAnime =reproduceRecomendationsResponse(recommendationsAnime, gap)
    return recommendationsAnime
}



export {getAnimeResponse, getRecommendationResponse}