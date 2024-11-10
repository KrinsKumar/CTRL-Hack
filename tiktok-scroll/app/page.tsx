import Video from "@/components/Video"
import Image from "next/image"
import { FaHome, FaInbox, FaTv, FaUser, FaUserFriends } from "react-icons/fa"
import { FaGolang, FaMagnifyingGlass } from "react-icons/fa6"

export default function Home() {
    return (
        <div className="max-h-screen h-screen overflow-hidden flex flex-col items-center md:w-1/2 mx-auto">
            {/* Top Part */}
            <div className="flex md:w-1/2 w-full flex-0 py-4 px-4 justify-center space-x-14 items-center">
                <FaTv />
                <div className="flex space-x-3">
                    <p className="border-b">Explore</p>
                    <p className="text-gray-500">Following</p>
                    <p className="text-gray-500">FYP</p>
                </div>
                <FaMagnifyingGlass />
            </div>
            {/* Video Section */}
            <div className="flex-1 px-2 overflow-y-scroll snap-y snap-mandatory flex flex-col items-center">
                <div className="min-h-full snap-start flex items-center justify-center">
                    <Video url="/1.mp4" />
                </div>
                <div className="min-h-full snap-start flex items-center justify-center">
                    <Video url="/2.mp4" />
                </div>
            </div>
            {/* Bottom Part */}
            <div className="flex justify-around py-4 md:w-1/2 w-full">
                <div className="flex flex-col justify-center items-center">
                    <FaHome />
                    Home
                </div>
                <div className="flex flex-col justify-center items-center">
                    <FaUserFriends />
                    Friends
                </div>
                <div className="flex flex-col justify-center items-center">
                    <FaInbox />
                    Inbox
                </div>
                <div className="flex flex-col justify-center items-center">
                    <FaUser />
                    Profile
                </div>
            </div>
        </div>
    )
}
