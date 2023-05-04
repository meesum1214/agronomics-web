import { Divider, Image } from "@mantine/core"
import Link from "next/link"

export default ({ heading, src, imgUrl, description, onClick }) => {
    return (
        <Link href={src}>
            <div onClick={onClick} className='bg-white shadow-2sm h-40 mx-2 px-2 transition-all rounded-md cursor-pointer hover:scale-105 flex items-center mb-3'>
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <div className='md:text-lg text-xl font-bold'>{heading}</div>
                        <Image
                            src={`/${imgUrl}.png`}
                            alt="image not available"
                            width={80}
                        />
                    </div>
                    <Divider className="w-full" my={6} />
                    <div className="">{description}</div>
                </div>
            </div>
        </Link>
    )
}