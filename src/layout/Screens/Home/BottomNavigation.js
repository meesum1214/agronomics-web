import { Image } from "@mantine/core"
import Link from "next/link"


export default ({ src, iconUrl, title }) => {
    return (
        <div className="flex flex-col items-center font-bold">
            <Link href={src}>
                <div className="flex flex-col items-center hover:scale-105 transition-all">
                    <Image
                        src={`/${iconUrl}.png`}
                        alt='bottom-logo'
                        width={139}
                        className='cursor-pointer'
                    />
                    <div className="mt-2">{title}</div>
                </div>
            </Link>
        </div>
    )
}