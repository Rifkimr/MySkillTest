import { AlignJustify } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger  } from "./ui/sheet"
import Logo from "./Logo"
import Nav from "./Nav"



const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild >
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div>
          <div>
            <Logo/>
            <Nav containerStyles='flex flex-col items-center gap-y-6 ' linkStyles="text-2" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav