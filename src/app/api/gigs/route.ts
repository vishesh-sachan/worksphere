import { Gigs } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    
    try{        
        const gigs = await Gigs.find({});
        return NextResponse.json({ gigs }, {status: 200});
    }catch{
        return NextResponse.json({ error: "Internal DataBase Error & unable to fetch Entry" }, { status: 500 });
    }
    
}

export async function POST(req:Request) {
    const {
        clientName,
        clientId,          
        title,             
        description,       
        skillsRequired,   
        budget,            
        duration,           
        status,              
        createdAt              
    } = await req.json()

    try{        
        await Gigs.create({
            clientName,          
            clientId,          
            title,             
            description,       
            skillsRequired,   
            budget,            
            duration,           
            appliedFreelancers: [],
            isAssigned: false,        
            assignedFreelancerId: null,
            status,              
            createdAt,             
            updatedAt: createdAt       
          });
        return NextResponse.json({ msg:"Entry Created" }, {status: 200});
    }catch{
        return NextResponse.json({ error: "Internal DataBase Error & unable to create Entry" }, { status: 500 });
    }
}


export async function UPDATE(req:Request) {
    const {
        gigId,
        clientName,
        clientId,          
        title,             
        description,       
        skillsRequired,   
        budget,            
        duration,
        appliedFreelancers,
        assignedFreelancerId,       
        status              
    } = await req.json()

    try{        
        await Gigs.updateOne({
            clientName,          
            clientId,          
            title,             
            description,       
            skillsRequired,   
            budget,            
            duration,           
            appliedFreelancers,
            isAssigned: false,        
            assignedFreelancerId,
            status,                         
            updatedAt : new Date()         
          },{
            _id:gigId
          });
        return NextResponse.json({ msg:"Entry updated" }, {status: 200});
    }catch{
        return NextResponse.json({ error: "Internal DataBase Error & unable to update Entry" }, { status: 500 });
    }
}

export async function DELETE(req:Request) {
    const {gigId} = await req.json()

    try{
        await Gigs.deleteOne({
            _id:gigId
        });
        return NextResponse.json({ msg:"Entry deleted" }, {status: 200});
    }catch{
        return NextResponse.json({ error: "Internal DataBase Error & unable to delete Entry" }, { status: 500 });
    }
}