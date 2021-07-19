import { useTheme } from 'next-themes'
import nightwind from "nightwind/helper"

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggle = () => {
    nightwind.beforeTransition()
    if (theme !== "dark") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <>
      <div className="5w 5w relative">
        <input
          id="toggle"
          className="toggle"
          type="checkbox"
          defaultChecked={true}
          onChange={toggle}
        />
      </div>
    </>
  )
}