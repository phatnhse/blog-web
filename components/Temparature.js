import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import Link from "next/link";
import Api from "../utils/WeatherAPI"

export default function Temparature() {
  const [temp, setTemp] = useState(0.0)

  useEffect(() => {
    Api.getCurrentTemp()
      .then((result) => {
        if (result) {
          setTemp(result)
        }
      },
        (error) => {
          console.log(error)
        })
  }, [])

  if (temp > 0.0) {
    return <Link href="https://openweathermap.org/city/1580578">
      <a className="ml-2">
        <p className="max-w-min rounded-xl bg-gray-100 dark:bg-gray-700 shadow ml-2 mr-2 pl-2 pr-2 pt-1 pb-1 flex justify-between">
          <span className="text-base font-medium mr-2">26ºC</span>
          <span className={temp > 25 ? "weather-icon mt-1 sun" : "weather-icon mt-1 cloud"}></span>
        </p>
      </a>
    </Link>
  } else {
    return null
  }
}