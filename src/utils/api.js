const getAnimeResponse = async (resourceURL, params='') => {
    const apiResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resourceURL}?${params}` )
    const responseJSON = await apiResponse.json()
    return responseJSON;
}

export {getAnimeResponse}