"use client"
import ContextWrapper from "@/global/context/Context"
import SubComp from "@/components/toplabel/comp/subcomp"
import Image from "next/image"

const TopLabel = () => {

    return (
        <ContextWrapper>
            <div className="py-2 overflow-hidden border-b text-white bg-myOrange">
                <div className="px-4 max-w-7xl mx-auto flex justify-between items-center">
                    <div>
                        <p className="text-xl"><Image src="https://readme-typing-svg.herokuapp.com?font=maven_pro&pause=1000&color=FFFFFF&width=435&lines=Nice+to+meet+you;Here+to+provide+you+with+best+services;SignUp+to+get+big+deals;++Find+variety+of+different+product;Signup+to+understand+our+policies+" alt="Typing SVG" width={300} height={300}/></p>
                    </div>
                    <SubComp />
                </div>
            </div>
        </ContextWrapper>
    )
}

export default TopLabel