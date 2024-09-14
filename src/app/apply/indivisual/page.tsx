"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ApplyAsIndividual() {
  const router = useRouter();
  const projectId  = "02";

  const [name, setName] = useState('');
  const [skills, setSkills] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const individualData = {
      projectId,
      name,
      skills: skills.split(',').map(skill => skill.trim()),
    };

    console.log("Individual Application Data:", individualData);
    alert('Individual application submitted!');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Apply as an Individual for Project ID: {projectId}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Skills (comma separated)</label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
            required
          />
        </div>

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
