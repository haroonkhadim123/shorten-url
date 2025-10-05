import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
export  async function POST(request){
    try {
        const body= await request.json()
        
        const client= await clientPromise
        const db= client.db("bitlinks")
        const collection= db.collection("urls")

        const doc=await collection.findOne({shorturl:body.shorturl});

        if(doc){
            return NextResponse.json({
                success:false,error:true,message:'Shorturl already exists'
            },{
                status:400
            })
        }
        await collection.insertOne({
            url:body.url,
            shorturl:body.shorturl,
            clicks:0,
        })
        return NextResponse.json({
            success:true,error:false,message:'Shorturl generated successfully'
        },{
            status:200
        })

        
    } catch (error) {
        console.log('API error',error)
        return NextResponse.json({
            success:false,error:true,message:'Internal server error'
        },{
            status:500
        })

        
    }
}