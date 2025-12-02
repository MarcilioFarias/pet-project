import Logo from '../../../public/logo-project.png'
import Image from "next/image"
import Link from "next/link"
import { Button } from './buttons'
import { NavItems } from './NavItems'

export const Nav = () => {
    return(
        <div className="flex justify-between w-full h-auto bg-amber-600 items-center p-4">
            <Link href="/">
                <Image
                    src={Logo}
                    alt="Logo"
                    width={120}
                    height={120}                
                ></Image>
            </Link>

            <ul className='flex justify-center items-center gap-8 ml-8 mr-8 list-none'>
                {NavItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.url}> {item.label} </Link>    
                    </li>
                ))}                
            </ul>

            <Button />    
        </div>
    )
}