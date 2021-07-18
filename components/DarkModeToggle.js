import { useTheme } from 'next-themes'

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <div className="5w 5w relative">
        <input
          id="toggle"
          className="toggle"
          type="checkbox"
          defaultChecked={true}
          onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      </div>
    </>
  )
}