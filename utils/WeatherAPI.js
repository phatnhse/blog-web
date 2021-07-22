export default class Api {
  static getCurrentTemp = async () => {
    const token = "ed36cf446fb810753c76f0b43556a2f3"
    const city = "Ho Chi Minh City"
    const unit = "metric" // Cencius
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${token}`)
    const json = await response.json()
    return json['main']['temp']
  }
}