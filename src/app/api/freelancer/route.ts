import { User } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req:Request) {
    const {username} = await req.json();

    try{        
        const freelancer = await User.find({_id:username});
        return NextResponse.json({ freelancer }, {status: 200});
    }catch{
        return NextResponse.json({ error: "Internal DataBase Error & unable to fetch Entry" }, { status: 500 });
    }
}

export async function POST(req:Request) {
    const {
        username,                   
        email,                      
        passwordHash,              
        profile,
        portfolio                 
    } = await req.json()

    try{        
        await User.create({
            username,                   
            email,                      
            passwordHash,              
            profile: {
              name:profile.name,                     
              title:profile.title,                   
              bio:profile.bio,                     
              skills:profile.skills,               
              hourlyRate: profile.hourlyRate,               
              rating: 0,                   
              totalEarnings: 0             
            },
            portfolio,
            appliedGigs: [],            
            createdAt: new Date()             
        });
        return NextResponse.json({ msg:"Entry Created" }, {status: 200});
    }catch{
        return NextResponse.json({ error: "Internal DataBase Error & unable to create Entry" }, { status: 500 });
    }

}


export async function UPDATE(req:Request) {
    const {
        userId,
        username,                   
        email,                      
        passwordHash,              
        profile,
        portfolio,
        appliedGigs               
    } = await req.json()

    try{        
        await User.updateOne({
            username,                   
            email,                      
            passwordHash,              
            profile: {
              name:profile.name,                     
              title:profile.title,                   
              bio:profile.bio,                     
              skills:profile.skills,               
              hourlyRate: profile.hourlyRate,               
              rating: 0,                   
              totalEarnings: 0             
            },
            portfolio,
            appliedGigs                  
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
        await User.deleteOne({
            _id:userId
        });
        return NextResponse.json({ msg:"Entry deleted" }, {status: 200});
    }catch{
        return NextResponse.json({ error: "Internal DataBase Error & unable to delete Entry" }, { status: 500 });
    }
}