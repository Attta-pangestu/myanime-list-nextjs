import prisma from "@/utils/prisma-client"

const POST = async (request) =>{
    const {comment, anime_mal_id, user_email, anime_rating, anime_title} = await request.json()
    const createComment = await prisma.comment.create({
        data: {
            comment,
            anime_mal_id,
            user_email,
            anime_rating,
            anime_title
        }
    })
    if(createComment) {
        return new Response(JSON.stringify({status: 200, message: "Successfully created comment"}), {status: 200})
    }else {
        return new Response(JSON.stringify({status: 500, message: "Failed to create comment"}), {status: 500})
    }
}

export {POST}