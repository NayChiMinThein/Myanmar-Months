import { Link, useParams } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6";
import data from "../MyanmarMonths.json"
import tagu from "../img/tagu.jpg"
import kason from "../img/kason.jpg"
import nayon from "../img/nayon.jpg"
import waso from "../img/waso.jpg"
import wagaung from "../img/wagaung.jpg"
import tawthalin from "../img/tawthalin.jpg"
import thadingyut from "../img/thadingyut.jpg"
import tazaungmon from "../img/tazaungmon.jpg"
import nadaw from "../img/nadaw.jpg"
import pyatho from "../img/pyatho.jpg"
import tabodwe from "../img/tabodwe.jpg"
import tabaung from "../img/tabaung.jpg"

const imgUrls = [
  {
    id: 1,
    img_url: tagu
  },
  {
    id: 2,
    img_url: kason
  },
  {
    id: 3,
    img_url: nayon
  },
  {
    id: 4,
    img_url: waso
  },
  {
    id: 5,
    img_url: wagaung
  },
  {
    id: 6,
    img_url: tawthalin
  },
  {
    id: 7,
    img_url: thadingyut
  },
  {
    id: 8,
    img_url: tazaungmon
  },
  {
    id: 9,
    img_url: nadaw
  },
  {
    id: 10,
    img_url: pyatho
  },
  {
    id: 11,
    img_url: tabodwe
  },
  {
    id: 12,
    img_url: tabaung
  }
];

function Details() {
  const {Tbl_Months} = data
  const {monthId} = useParams()

  const match = Tbl_Months.find(month => month.Id === +monthId)
  const image = imgUrls.find(imgUrl => imgUrl.id === match.Id)

  return (
    <div className="burmese text-white mx-4 md:mt-3 xl:mt-4">
      <Link to="/">
        <button className="text-black bg-white hover:bg-slate-200 my-4 px-2 py-1 rounded-md text-sm xl:text-base 
          md:ms-4 xl:ms-8">
          <FaArrowLeft/>
        </button>
      </Link>

      <div className="my-5 xl:my-8">
        <h2 className="text-center md:text-lg lg:text-xl xl:text-2xl">
          {match.MonthMm}
          <span className="english ms-1 md:text-lg lg:text-xl xl:text-2xl">
            ({match.MonthEn})
          </span>
        </h2>
        <h2 className="text-center mt-1 xl:mt-2 mb-5 lg:mb-6 lg:text-lg xl:text-xl">
          {match.FestivalMm}
          <span className="english ms-1 lg:text-lg xl:text-xl">
            ({match.FestivalEn})
          </span>
        </h2>
        <img src={image.img_url} alt="monthCover" className="mx-auto" />
        <div className="mt-4 md:mt-6 lg:mt-8 text-sm leading-6 xl:leading-7 md:mx-24 lg:mx-28 xl:mx-36">
          <p>
            {match.Description}
          </p>
          <div className="mt-6 xl:mt-7">
            <h6 className="border border-transparent border-b-white w-fit">
              အသေးစိတ်ဖတ်ရန်
            </h6>
            <p className="mt-4 xl:mt-5">
              {match.Detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details