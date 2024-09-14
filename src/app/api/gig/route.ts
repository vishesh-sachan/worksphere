import { Gigs } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { projectId: string } }) {
    const { projectId } = params;

    try {
        const gig = await Gigs.findById(projectId);

        if (!gig) {
            return NextResponse.json({ error: "Gig not found" }, { status: 404 });
        }

        return NextResponse.json({ gig }, { status: 200 });
    } catch (error) {
        console.error('Error fetching gig:', error);
        return NextResponse.json({ error: "Internal Database Error" }, { status: 500 });
    }
}
