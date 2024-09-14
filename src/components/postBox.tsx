"use client"
import axios from "axios"
import Link from "next/link";
import { useEffect, useState } from "react"

export default function PostBox() {
    const [files, setFiles] = useState<any[]>([]);
    useEffect(() => {
        async function getFiles() {
            try {
                const res = await axios.get('/api/gigs')
                console.log(res.data.gigs)
                setFiles(res.data.gigs)
            } catch (error) {
                console.log('error while getting files', error)
            }
        }
        getFiles()
    }, [setFiles])

    return (
        <div className="flex flex-col items-center space-y-4 p-4">
            
            {files.length > 0 ? files.map((file: any , index) => (
                <div key={file._id} className="w-full max-w-3xl border rounded-lg shadow-lg p-6 bg-white">
                    
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-gray-500">Posted on {new Date(file.createdAt).toLocaleDateString()}</div>
                        <div className="text-sm text-gray-500">{file.duration}</div>
                    </div>
                    
                    
                    <div className="text-xl font-semibold mb-2 text-gray-800">{file.title || "Project Title"}</div>

                    
                    <div className="text-sm text-gray-600 mb-4">
                        Fixed - Intermediate Level - by <span className="font-medium">{file.clientName}</span>
                    </div>

                    
                    <div className="text-sm text-gray-700 mb-4">
                        {file.description}
                    </div>

                   
                    <div className="mb-4">
                        <div className="text-sm font-medium text-gray-600 mb-2">Skills Required:</div>
                        <div className="flex flex-wrap gap-2">
                            {file.skillsRequired?.map((skill: string, index: number) => (
                                <div key={index} className="bg-gray-200 rounded-full px-4 py-1 text-xs text-gray-700">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    
                    <div className="flex gap-4 mt-6">
                        <button className="text-xs bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition">
                        <Link key={index} href={`/apply/team`}>
                            Apply as a Team
                        </Link>
                        </button>
                        <button className="text-xs bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-600 transition">
                        <Link key={index} href={`/apply/indivisual`}>
                            Apply as an Indivisual
                        </Link>
                        </button>
                    </div>
                </div>
            )) : (
                <div>No gigs available</div>
            )}
        </div>
    )
}
