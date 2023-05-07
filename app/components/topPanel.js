import Image from "next/image"
import bookmarkIcon from "@/public/bookmark.svg"
import menuIcon from "@/public/menu.svg"
import cartIcon from "@/public/cart.svg"

const iconSize = 36;

export default function TopPanel() {
  return (
    <div className="p-1 bg-orange-600 w-full flex flex-row justify-between">
      <div>
        <Image 
          src={menuIcon}
          width={iconSize}
          height={iconSize} 
          className="text-white icon-white" 
          alt="Search Icon" 
        />
      </div>
      <div className="flex flex-row">
      <Image 
          src={bookmarkIcon}
          width={iconSize}
          height={iconSize} 
          className="text-white icon-white" 
          alt="Bookmark Icon" 
        />
        <Image 
          src={cartIcon}
          width={iconSize}
          height={iconSize} 
          className="text-white icon-white" 
          alt="Cart Icon" 
        />
      </div>
    </div>
  )
}