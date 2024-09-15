"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ApplyAsTeam() {
  const router = useRouter();
  const projectId  = "01";

  const [teamName, setTeamName] = useState('');
  const [teamMembers, setTeamMembers] = useState([{ name: '', role: '' }]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const teamData = {
      projectId,
      teamName,
      teamMembers
    };

    console.log("Team Application Data:", teamData);
    alert('Team application submitted!');
  };

  const handleAddMember = () => {
    setTeamMembers([...teamMembers, { name: '', role: '' }]);
  };

  const handleRemoveMember = (index: number) => {
    const updatedMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(updatedMembers);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Apply as a Team for Project ID: {projectId}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Team Name</label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => {
              const value = e.target.value;
              const regex = /^[A-Za-z\s]*$/;
              
              if (regex.test(value)) {
                setTeamName(value);
              } else {
                alert("Please enter alphabets only.");
              }
            }}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
            required
          />

        </div>

        <h3 className="text-lg font-bold mt-6">Team Members</h3>
        
        {teamMembers.map((member, index) => (
          <div key={index} className="mb-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) => {
                    const value = e.target.value;
                    const regex = /^[A-Za-z\s]*$/;

                    if (regex.test(value)) {
                      const newMembers = [...teamMembers];
                      newMembers[index].name = value;
                      setTeamMembers(newMembers);
                    } else {
                      alert("Please enter alphabets only.");
                    }
                  }}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                  required
                />

              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <input
                  type="text"
                  value={member.role}
                  onChange={(e) => {
                    const value = e.target.value;
                    const regex = /^[A-Za-z\s]*$/;

                    if (regex.test(value)) {
                      const newMembers = [...teamMembers];
                      newMembers[index].role = value;
                      setTeamMembers(newMembers);
                    } else {
                      alert("Please enter alphabets only for the role.");
                    }
                  }}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                  required
                />

              </div>

              <button
                type="button"
                className="mt-7 text-red-500 hover:underline"
                onClick={() => handleRemoveMember(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="text-sm bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          onClick={handleAddMember}
        >
          Add Team Member
        </button>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}
