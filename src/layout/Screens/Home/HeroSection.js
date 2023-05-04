import { getPromoImages } from "@/layout/API/add"
import { Carousel } from "@mantine/carousel"
import { Image } from "@mantine/core"
import { showNotification } from "@mantine/notifications"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { useLayoutEffect, useState } from "react"

export default () => {

    const [images, setImages] = useState([])

    useLayoutEffect(() => {
        getPromoImages().then(res => {
            // console.log(res)
            setImages(res)
        }).catch(err => {
            // console.log(err)
            showNotification({
                title: 'Error',
                message: err.response.data.message,
                color: 'red',
                autoClose: 3000,
            })
        })
    }, [])

    return (
        <>
            <Carousel
                mx="auto"
                height={107}
                nextControlIcon={<IconArrowRight size={16} />}
                previousControlIcon={<IconArrowLeft size={16} />}
            >
                {
                    images.map(({ image }, i) => (
                        <Carousel.Slide key={i}>
                            <Image
                                src={image}
                                alt="Promo Image"
                                fit="cover"
                                width="100%"
                            />
                        </Carousel.Slide>
                    ))
                }
            </Carousel>

            <div className="text-red-500 text-center font-bold flex justify-center">Service Available for Pakistan only, Soon will be global.</div>

            <marquee direction="left" height="30" width="100%" scrollamount='5' className='font-semibold'>
                The minimum support price of Wheat crop for 2021-22 is PKR. 2,200/- per 40kg
            </marquee>
        </>
    )
}