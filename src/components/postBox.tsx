export default function PostBox(){

    const createdAt = "20 min";
    const budgetType = "Hourly: $10-$20";
    const level = "Intermidiate";
    const estTime = "3 Months";
    const clientName = "howling devs";
    const skills = ["howling devs","howling devs","howling devs","howling devs","howling devs","howling devs"];
    const description = `We are seeking an experienced React developer to convert a detailed Figma design into a responsive React web page. This project requires a strong eye for detail and an ability to create pixel-perfect layouts while balancing responsiveness.

Key Requirements:

1. Convert Figma to React: You will be provided with a Figma design, and your task is to transform it into a working React component.
2. Fluid Grid Layout: Use a fluid grid system to ensure the page scales beautifully on larger devices, maintaining a balanced, responsive layout.
3. Time Frame: You will have up to 8 hours to complete the page. Focus on completing as much as possible within this time, prioritizing pixel-perfect accuracy.
4. Pixel Perfection: We are looking for someone who can deliver pixel-perfect accuracy while balancing the need to complete sections.
5. Expand the Job: This is a trial task, and based on how you work and your attention to design detail, we will consider expanding the project for additional pages and features.

What We Provide:

• Figma file with all design details.
• Development guidelines for responsiveness and scaling on larger screens.

If you are a React developer with a strong eye for detail and are available to work within the given timeframe, we love to hear from you!`;

    return<div>
        <div className="border-t-4 border-b-4 p-4">
            <div className="text-[14px] text-[#676767]">Posted at {createdAt}</div>
            <div className="text-2xl">Full Website Creation Using Next.js & Bootstrap – Front-End Developer Needed</div>
            <div className="text-[14px] text-[#676767]">{budgetType} - {level} - {estTime} - by {clientName}</div>
            <div className="text-[14px]">{description}</div>
            <div className="flex gap-10">
                {skills.map((skill)=>{
                    return(<div className="bg-slate-400 rounded-full p-2 px-10">
                        <div>skill</div>
                    </div>)
                })
                
                }
            </div>
        </div>

    </div>
}