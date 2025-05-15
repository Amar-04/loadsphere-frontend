import { ArrowRight } from "lucide-react";
import Image from "next/image";

type User = {
  id: string;
  name: string;
  joinedDate: string;
  email: string;
  status: "Active" | "Inactive" | "inactive";
  role: "Broker" | "Carrier" | "Driver";
  avatar: string;
};

const UserTable = () => {
  const users: User[] = [
    {
      id: "1",
      name: "John R.",
      joinedDate: "Mar 20, 2025",
      email: "johnruth2@gmail.com",
      status: "Active",
      role: "Broker",
      avatar: "https://ui-avatars.com/api/?name=JR&background=random&color=ffffff",
    },
    {
      id: "2",
      name: "Emma S.",
      joinedDate: "Feb 20, 2025",
      email: "emmasmi@gmail.com",
      status: "Inactive",
      role: "Carrier",
      avatar: "https://ui-avatars.com/api/?name=ES&background=random&color=ffffff",
    },
    {
      id: "3",
      name: "Shawn N.",
      joinedDate: "Jan 20, 2025",
      email: "shaddy02@gmail.com",
      status: "Active",
      role: "Broker",
      avatar: "https://ui-avatars.com/api/?name=SN&background=random&color=ffffff",
    },
    {
      id: "4",
      name: "Emily S.",
      joinedDate: "Jan 18, 2025",
      email: "Emilyarts@gmail.com",
      status: "inactive",
      role: "Driver",
      avatar: "https://ui-avatars.com/api/?name=ES&background=random&color=ffffff",
    },
    {
      id: "5",
      name: "John K.",
      joinedDate: "Jan 10, 2025",
      email: "johnKid2@gmail.com",
      status: "Active",
      role: "Carrier",
      avatar: "https://ui-avatars.com/api/?name=JK&background=random&color=ffffff",
    },
    {
      id: "6",
      name: "Mona L.",
      joinedDate: "Dec 10, 2024",
      email: "Mona2109@gmail.com",
      status: "Active",
      role: "Broker",
      avatar: "https://ui-avatars.com/api/?name=ML&background=random&color=ffffff",
    },
    {
      id: "7",
      name: "Mike J.",
      joinedDate: "Dec 09, 2024",
      email: "Mikey04@gmail.com",
      status: "Active",
      role: "Carrier",
      avatar: "https://ui-avatars.com/api/?name=MJ&background=random&color=ffffff",
    },
    {
      id: "8",
      name: "John Ruth",
      joinedDate: "Nov 20, 2024",
      email: "johnruth2@gmail.com",
      status: "Inactive",
      role: "Driver",
      avatar: "https://ui-avatars.com/api/?name=JR&background=random&color=ffffff",
    },
    {
      id: "9",
      name: "Carl B.",
      joinedDate: "Sep 21, 2024",
      email: "Carlburg07@gmail.com",
      status: "inactive",
      role: "Carrier",
      avatar: "https://ui-avatars.com/api/?name=CB&background=random&color=ffffff",
    },
    {
      id: "10",
      name: "Bob M.",
      joinedDate: "Sep 20, 2024",
      email: "BobMarley1@gmail.com",
      status: "Active",
      role: "Carrier",
      avatar: "https://ui-avatars.com/api/?name=BM&background=random&color=ffffff",
    },
  ];
  return (
    <div className="bg-loadGray mt-8 p-4 rounded-xl">
      <h2 className="text-white text-xl font-medium mb-4">User Details</h2>

      <div className="grid grid-cols-12 text-sm my-2 px-4">
        <div className="col-span-2">User Name</div>
        <div className="col-span-2">Joined Date</div>
        <div className="col-span-3">Email</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-2">Role</div>
        <div className="col-span-1"></div>
      </div>

      <div className="space-y-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="grid grid-cols-12 items-center border border-white rounded-lg p-4  transition-colors"
          >
            <div className="col-span-2 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-zinc-700 flex items-center justify-center">
                <Image
                  src={user.avatar || "/placeholder.svg"}
                  alt="avatar"
                  width={32}
                  height={32}
                  className="object-cover"
                  unoptimized
                />
              </div>
              <span className="text-white">{user.name}</span>
            </div>
            <div className="col-span-2 ">{user.joinedDate}</div>
            <div className="col-span-3 ">{user.email}</div>
            <div className="col-span-2">
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    user.status === "Active" ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <span className="">{user.status}</span>
              </div>
            </div>
            <div className="col-span-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  user.role === "Broker"
                    ? "bg-red-500/20 text-red-300"
                    : user.role === "Carrier"
                    ? "bg-blue-500/20 text-blue-300"
                    : "bg-teal-500/20 text-teal-300"
                }`}
              >
                {user.role}
              </span>
            </div>
            <div className="col-span-1">
              <button className="">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTable;
