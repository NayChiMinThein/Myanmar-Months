import img1 from "../img/1.jpg"
import img2 from "../img/2.jpg"
import img3 from "../img/3.jpg"
import img4 from "../img/4.jpg"
import img5 from "../img/5.jpg"
import img6 from "../img/6.jpg"
import img7 from "../img/7.jpg"
import img8 from "../img/8.jpg"
import img9 from "../img/9.jpg"
import img10 from "../img/10.jpg"
import img11 from "../img/11.jpg"
import img12 from "../img/12.jpg"
import { Link } from "react-router-dom"

const imgUrls = [
    {
        id: 1,
        title: "တန်ခူး",
        img_url: img1
    },
    {
        id: 2,
        title: "ကဆုန်",
        img_url: img2
    },
    {
        id: 3,
        title: "နယုန်",
        img_url: img3
    },
    {
        id: 4,
        title: "ဝါဆို",
        img_url: img4
    },
    {
        id: 5,
        title: "ဝါခေါင်",
        img_url: img5
    },
    {
        id: 6,
        title: "တော်သလင်း",
        img_url: img6
    },
    {
        id: 7,
        title: "သီတင်းကျွတ်",
        img_url: img7
    },
    {
        id: 8,
        title: "တန်ဆောင်မုန်း",
        img_url: img8
    },
    {
        id: 9,
        title: "နတ်တော်",
        img_url: img9
    },
    {
        id: 10,
        title: "ပြာသို",
        img_url: img10
    },
    {
        id: 11,
        title: "တပို့တွဲ",
        img_url: img11
    },
    {
        id: 12,
        title: "တပေါင်း",
        img_url: img12
    }
];

function Home() {
  return (
    <div className="text-white mt-12 md:mt-14 md:mx-12 lg:mt-16 xl:mt-20">
        <h1 className="burmese text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center mb-8 md:mb-10 lg:mb-12 xl:mb-14">
            မြန်မာဆယ့်နှစ်လရာသီ
        </h1>

        <div className="burmese mt-8 md:mt-12 lg:mt-14 xl:mt-16">
            <h2 className="md:text-lg lg:text-xl xl:text-2xl text-center border border-transparent border-b-white w-fit
                mx-auto pb-1 lg:pb-2 xl:pb-3">
                မြန်မာလအသေးစိတ်များ
            </h2>
            <div className="mt-10 md:mt-14 xl:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {imgUrls.map(imgUrl => {
                    return (
                        <div className="mb-8 md:mb-12 xl:mb-14" key={imgUrl.id}>
                            <div className="relative">
                                <img src={imgUrl.img_url} alt="months flower" 
                                    className="w-40 h-64 md:w-5/6 md:h-72 lg:h-80 xl:h-96 object-cover mx-auto opacity-80 
                                    border-4 border-white" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                    <div className="font-medium text-sm lg:text-base">
                                        {imgUrl.title}
                                    </div>
                                    <Link to={`/mmMonths/${imgUrl.id}`}>
                                        <button className="outline rounded-sm py-1 px-2 lg:px-3 xl:px-4 xl:pt-2 text-xs
                                            lg:text-sm mt-2 hover:bg-white hover:text-black hover:outline-none">
                                            ဖတ်ရန်
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Home