"use client"

import type React from "react"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

export default function DriverManagement() {
  const [driverName, setDriverName] = useState("")
  const [experience, setExperience] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  // Sample user data for the table
  const users = [
    {
      name: "Ansh Mehta",
      joined: "21/03/2024",
      email: "anshme21@gmail.com",
      contact: "Super-B",
      status: "Active",
      trailerType: "Percentage",
    },
    {
      name: "Ansh Mehta",
      joined: "21/03/2024",
      email: "anshme21@gmail.com",
      contact: "Super-B",
      status: "Active",
      trailerType: "Percentage",
    },
    {
      name: "Ansh Mehta",
      joined: "21/03/2024",
      email: "anshme21@gmail.com",
      contact: "Super-B",
      status: "Active",
      trailerType: "Percentage",
    },
    {
      name: "Ansh Mehta",
      joined: "21/03/2024",
      email: "anshme21@gmail.com",
      contact: "Super-B",
      status: "Active",
      trailerType: "Percentage",
    },
    {
      name: "Ansh Mehta",
      joined: "21/03/2024",
      email: "anshme21@gmail.com",
      contact: "Super-B",
      status: "Active",
      trailerType: "Percentage",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ driverName, experience, email, phone })
  }

  return (
    <div className=" bg-loadDarkGray p-4 text-white">
      <div className="space-y-8">
        {/* Add Driver Details Form */}
        <div className="bg-loadGray rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Add Driver Details</h2>
          
          <form onSubmit={handleSubmit} className="bg-loadGray">
            <div className="space-y-4">
              <div>
                <label htmlFor="driverName" className="block mb-1 ">
                  Driver Name
                </label>
                <input
                  id="driverName"
                  type="text"
                  placeholder="Gurmeet Singh"
                  className="w-full bg-loadGray  placeholder:text-white border border-zinc-700 rounded p-2 text-white"
                  value={driverName}
                  onChange={(e) => setDriverName(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="skills" className="block mb-1">
                    Skills
                  </label>
                  <select
                    id="skills"
                    className="w-full bg-loadGray  placeholder:text-white border border-zinc-700 rounded p-2 text-white appearance-none"
                  >
                    <option>Eg:(Off-roading)</option>
                    <option>Highway</option>
                    <option>City</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="experience" className="block mb-1">
                    Year of Experience
                  </label>
                  <input
                    id="experience"
                    type="text"
                    placeholder="Eg: (04 YEARS)"
                    className="w-full bg-loadGray  placeholder:text-white border border-zinc-700 rounded p-2 text-white"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="languages" className="block mb-1">
                    Known Languages
                  </label>
                  <select
                    id="languages"
                    className="w-full bg-loadGray  placeholder:text-white border border-zinc-700 rounded p-2 text-white appearance-none"
                  >
                    <option>--</option>
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Punjabi</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact" className="block mb-1">
                    Contact Info:
                  </label>
                  <input
                    id="contact"
                    type="text"
                    placeholder="Phone number"
                    className="w-full bg-loadGray  placeholder:text-white border border-zinc-700 rounded p-2 text-white"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="license" className="block mb-1">
                    License Proof
                  </label>
                  <button
                    type="button"
                    className="w-full bg-loadGray  placeholder:text-white border border-zinc-700 rounded p-2 text-white text-left"
                  >
                    Upload Document
                  </button>
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Eg:(gurmeet21@gmail.com)"
                    className="w-full bg-loadGray  placeholder:text-white border border-zinc-700 rounded p-2 text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-start-2">
                  <label htmlFor="insurance" className="block mb-1">
                    Insurance Proof
                  </label>
                  <button
                    type="button"
                    className="w-full bg-loadGray  placeholder:text-white border border-zinc-700 rounded p-2 text-white text-left"
                  >
                    Upload Document
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Add Driver
              </button>
            </div>
          </form>
        </div>

        {/* User Details Table */}
        <div className="bg-loadGray rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">User Details</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm">
                  <th className="py-2 px-4">User Name</th>
                  <th className="py-2 px-4">Joined Date</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Contact Info</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Trailer Type</th>
                  <th className="py-2 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="border-t border-zinc-800">
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.joined}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">{user.contact}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {user.status}
                      </div>
                    </td>
                    <td className="py-3 px-4">{user.trailerType}</td>
                    <td className="py-3 px-4">
                      <button title="title" className="p-1 rounded-full hover:bg-zinc-800">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
