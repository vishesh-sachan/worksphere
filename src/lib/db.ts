import mongoose from "mongoose";

const DBurl = process.env.MONGODB_CONNECTION_STRING || ''

if(!mongoose.connections[0].readyState){
  try {
      mongoose.connect(DBurl)
      
  } catch (error) {
      console.log({msg:"error while connecting to DB"} , error)
  }

}

const FreelancerSchema = new mongoose.Schema({
    username: String,                   
    email: String,                      
    passwordHash: String,              
    profile: {
      name: String,                     
      title: String,                   
      bio: String,                     
      skills: [String],               
      hourlyRate: Number,               
      rating: Number,                   
      totalEarnings: Number             
    },
    portfolio: [
        {
          title: String,                
          description: String,          
          url: String
        }                   
    ],
    appliedGigs: [String],            
    createdAt: Date                   
}) 


const ClientSchema = new mongoose.Schema({
      username: String,
      email: String,   
      passwordHash: String,
      profile: {
        companyName: String,
        contactName: String,
        description: String,
      },
      postedGigs: [String], 
      createdAt: Date                     
    }
)

const GigsSchema = new mongoose.Schema(
    {
      clientName: String,          
      clientId: String,          
      title: String,             
      description: String,       
      skillsRequired: [String],   
      budget: Number,            
      duration: String,           
      appliedFreelancers: [
        {
          freelancerId: String,   
          appliedAt: Date         
        }
      ],
      isAssigned: Boolean,        
      assignedFreelancerId: String,
      status: String,              
      createdAt: Date,             
      updatedAt: Date              
    }
)



// export const User = mongoose.model("User" , FreelancerSchema)
// export const Client = mongoose.model("User" , ClientSchema)
// export const Gigs = mongoose.model("User" , GigsSchema)
export const User = mongoose.models.User || mongoose.model("User" , FreelancerSchema)
export const Client = mongoose.models.Client || mongoose.model("Client" , ClientSchema)
export const Gigs = mongoose.models.Gigs || mongoose.model("Gigs" , GigsSchema)