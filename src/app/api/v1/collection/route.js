import prisma from "@/utils/prisma-client"


const POST = async (request) =>{
    const {anime_mal_id, user_email} = await request.json()
    console.log({anime_mal_id, user_email})
    const createCollection = await prisma.collection.create({
        data: {
            user_email,
            anime_mal_id
        }
    })
    
    if(createCollection) {
        return new Response(JSON.stringify(createCollection), {
            status: 200, 
            message: "Collection created successfully"
        })
    }else {
        return new Response(JSON.stringify(createCollection), {
            status: 500, 
            message: "Failed to create collection"
        })
    }

}

export {POST}