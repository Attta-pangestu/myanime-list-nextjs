import prisma from "@/utils/prisma-client"


const POST = async (request) =>{
    const {anime_mal_id, anime_image_url , anime_title, user_email} = await request.json()
    console.log({anime_mal_id, user_email})
    const createCollection = await prisma.collection.create({
        data: {
            user_email,
            anime_mal_id,
            anime_image_url, 
            anime_title, 
        }
    })
    
    if(createCollection) {
        return new Response(JSON.stringify({status: 200, message: "Successfully created collection"}), {status: 200})
    }else {
        return new Response(JSON.stringify({status: 500, message: "Failed to create collection"}), {status: 500})
    }

}


const DELETE = async (request) =>{
    const {anime_mal_id, user_email} = await request.json()
    const delCollection = await prisma.collection.delete({
        where: {
            user_email_anime_mal_id: {
                user_email,
                anime_mal_id
            }
        }
    }
    )

    if(delCollection) {
        return new Response(JSON.stringify({status: 200, message: "Successfully deleted collection"}), {status: 200})
    }else {
        return new Response(JSON.stringify({status: 500, message: "Failed to delete collection"}), {status: 500})
    }
}

export {POST, DELETE}