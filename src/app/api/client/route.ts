import { Client } from "@/lib/db";
import { error } from "console";
import { NextResponse } from "next/server";

export async function GET(req:Request) {
    const { username } = await req.json();

    try{        
        const client = await Client.find({_id:username});
        return NextResponse.json({ client }, {status: 200});
    }catch{
        return NextResponse.json({ error: "Internal DataBase Error & unable to fetch Entry" }, { status: 500 });
    }
}

export async function POST(req:Request){
    const {
        username ,
        email ,   
        passwordHash ,
        profile                   
    } = await req.json();

    try{        
        await Client.create({
            username,
            email,   
            passwordHash,
            profile: {
              companyName:profile.companyName,
              contactName:profile.contactName,
              description:profile.description,
            },
            postedGigs:[], 
            createdAt: new Date()                
          });
        return NextResponse.json({ msg:"Entry Created" }, {status: 200});
    }catch(err){
        console.log(err);
        return NextResponse.json({ error: "Internal DataBase Error & unable to create Entry" }, { status: 500 });
    }
}

export async function UPDATE(req:Request) {
    const {
        userId,
        username ,
        email ,   
        passwordHash ,
        profile ,
        postedGigs,                   
    } = await req.json()

    try{        
        await Client.updateOne({
            username,
            email,   
            passwordHash,
            profile: {
              companyName:profile.companyName,
              contactName:profile.companyName,
              description:profile.description,
            },
            postedGigs                  
          },{
            _id:userId
        });
        return NextResponse.json({ msg:"Entry Updated" }, {status: 200});
    }catch{
        return NextResponse.json({ error: "Internal DataBase Error & unable to Update Entry" }, { status: 500 });
    }

}

export async function DELETE(req:Request) {
    const {userId} = await req.json()

    try{
        await Client.deleteOne({
            _id:userId
        });
        return NextResponse.json({ msg:"Entry deleted" }, {status: 200});
    }catch{
        return NextResponse.json({ error: "Internal DataBase Error & unable to delete Entry" }, { status: 500 });
    }
}