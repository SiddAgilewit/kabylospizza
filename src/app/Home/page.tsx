"use client"

import { activateRemoteConfig, db, remoteConfig } from "@/FireBase/page"
import { createReview } from "@/lib/action/useraction"
import { collection, getDocs } from "firebase/firestore"
import { getValue } from "firebase/remote-config"
import {PostReview} from  "@/Components/ReviewPost/page";
import { useEffect, useState } from "react"

export const HomePage = () => {
    const [bannerContent, setBannerContent] = useState("")
    const [bannerStatus, setBannerStatus] = useState()



    useEffect(() => {
        const fetch = async () => {
            const Ref: any = collection(db, "Offers")
            const Result = await getDocs(Ref)
            const offers: any = Result.docs.map(doc => doc.data())
            setBannerContent(offers[0].Tittle)
            await activateRemoteConfig();
            const message: any = getValue(remoteConfig, "BannerStatus").asString();
            setBannerStatus(message)
        }
        fetch()
    }, [])
  
    return (
        <div>
            <div className="bg-gray-200 text-black text-center">
                {bannerStatus && <h1 className="md:text-lg text-lg font-semibold">{bannerContent}</h1>}

            </div>
            <div className="bg-gradient-to-r from-pink-500 to-red-600 text-white text-center  py-8">
                <h1 className="text-2xl font-semibold">"One of The Top 6 best NY pizza in Texas"</h1>
                <p className="text-lg font-light mt-4">Washington post, Fort Worth Star-telegram, dallasnews</p>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center gap-2 md:gap-4 bg-grey p-4 m-4">
                <h1 className="text-[35px]">Begin Your Order </h1>
                <button className="bg-blue-300 text-black p-2 rounded-md">Pick-Up</button>
                <p className="text-sm">or</p>
                <button className="bg-blue-300 text-black p-2 rounded-md">Delivery</button>
            </div>
            <video

                src="https://kabylospizza.com/wp-content/uploads/2023/07/362644377_6349901025118245_8456642108863942646_n.mp4"
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload"
            />
            <div className="grid grid-cols-2 items-center gap-4 p-4 md:grid-cols-2">
                <img src="icons/HomePageIconeFour.jpg" className="w-full h-auto rounded-md" alt="Icon 4" />
                <img src="icons/HomePageIconeThree.jpg" className="w-full h-auto rounded-md" alt="Icon 3" />
                <img src="icons/HomePageIconeTwo.jpg" className="w-full h-auto rounded-md" alt="Icon 2" />
                <img src="icons/HomePageiconOne.webp" className="w-full h-auto rounded-md" alt="Icon 1" />
            </div>
              <PostReview/>
            <p className="bg-black text-black text-center m-4 p-4">Copyright © 2025 . All Rights Reserved.</p>

        </div>
    )
}