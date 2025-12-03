import FaceBook from '../../../../public/socials/Facebook.png'
import WhatsApp from '../../../../public/socials/Whatsapp.png'
import Instagram from '../../../../public/socials/Instagram.png'
import Link from "next/link"
import Image from "next/image"

export const Bottom = () => {
    return(
        <div className="flex justify-around w-full h-20 bg-gray-800 shadow-md items-center p-4">
            <div>©pet projet</div>
            <div className="flex gap-1">
                <Link href={'http://facebook.com/pet-project'} className="text-white">
                    <Image src={FaceBook} alt="terms" width={30} height={30} className="inline mr-1"/>
                </Link>
                <Link href={'http://web.whatsap.com/pet-project'} className="text-white">
                    <Image src={WhatsApp} alt="privacy" width={30} height={30} className="inline mr-1"/>
                </Link>
                <Link href={'http://instagram.com/pet-project'} className="text-white">
                    <Image src={Instagram} alt="cookies" width={30} height={30} className="inline"/>
                </Link>               
            </div>        
        </div>
    )
}