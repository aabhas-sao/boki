import Image from "next/image"
import searchIcon from "../../public/search.svg"

export default function SearchBox() {
  return (
      <div className="w-full h-48  bg-orange-600 flex justify-center items-center">
      <div className="relative w-4/5 flex justify-center items-center">
        <input
          placeholder="what's on your mind?"
          className="border border-gray-400 rounded-lg p-4 w-full !pl-10 !text-gray-800"
        />
        <Image 
          src={searchIcon}
          width={24}
          height={24} 
          className="absolute mr-2 w-10 left-0 pl-2" 
          alt="Search Icon" 
        />
      </div>
    </div>
  )
}