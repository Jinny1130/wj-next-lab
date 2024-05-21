import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <div id="header" className="header w-full h-14 flex items-center justify-between px-3 fixed bg-white z-10">
            <Link href={'/'} className="h-full py-2.5 flex items-center font-bold">
                <Image src="/wj.png" alt="woojin_imoji" width={30} height={30} priority /> Woojin | Front-end Dev.
            </Link>

            <div className=""></div>
        </div>
    )
}

export default Header