import { Burger, Divider, Drawer, Image } from "@mantine/core"
import { useState } from "react"
import { CgClose } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";
import Btn from "./Btn";
import { useRouter } from "next/router";

export default () => {

    const [opened, setOpened] = useState(false)
    const router = useRouter()

    return (
        <>
            <div className="shadow-3xl bg-white p-4 flex justify-between items-center">
                <Image
                    src="/logo.png"
                    width={200}
                    alt="logo"
                />

                <Burger opened={opened} onClick={() => { setOpened(!opened) }} color="#cc9441" />
            </div>

            <Drawer
                opened={opened}
                onClose={() => { setOpened(!opened) }}
                padding={0}
                withCloseButton={false}
            >
                <div className="flex justify-between items-center bg-secondary p-4">
                    <Image
                        src="/logo-white.png"
                        width={160}
                        alt="logo"
                    />
                    <CgClose size={32} className="text-white" onClick={() => setOpened(false)} />
                </div>

                <div className="p-6 text-sm text-primary font-semibold">
                    <div className="mb-5">HOME</div>
                    <div className="mb-5">MAP</div>
                    <div className="mb-5">STORIES</div>
                    <div>NOTIFICATIONS</div>
                </div>

                <Divider />

                <div className="p-6 flex items-center">
                    <IoLogOut size={25} className="mr-3 text-secondary" />
                    <div className="font-semibold text-primary">LOGOUT</div>
                </div>

                <Divider />

                <div className="p-6 flex justify-center items-center">
                    <a href="https://play.google.com/store/apps/details?id=com.agronomics.app&hl=en_US&gl=US&pli=1" target="_blank">
                        <Btn>GET MOBILE APP</Btn>
                    </a>
                </div>
            </Drawer>
        </>
    )
}