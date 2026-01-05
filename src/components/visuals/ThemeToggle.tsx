import { useTheme } from "@/core/contexts/ThemeContext";
import { IoDesktop, IoDesktopOutline, IoMoon, IoMoonOutline, IoSunny, IoSunnyOutline } from "react-icons/io5";


export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full flex justify-between items-center mx-auto mb-4 px-2 py-2 rounded-full bg-[var(--grid-block-15)]/50">
      <button
        className={`p-4 w-full items-center justify-center flex rounded-full hover:text-[var(--accent)] ${theme === 'light' ? 'bg-[var(--grid-block-15)]' : ''}`}
        onClick={() => setTheme('light')}>
        {theme === 'light' ? <IoSunny size={24} /> : <IoSunnyOutline size={24} />}

      </button>
      <button
        className={`p-4 w-full items-center justify-center flex rounded-full hover:text-[var(--accent)] ${theme === 'dark' ? 'bg-[var(--grid-block-15)]' : ''}`}
        onClick={() => setTheme('dark')}>
        {theme === 'dark' ? <IoMoon size={24} /> : <IoMoonOutline size={24} />}
      </button>
      <button
        className={`p-4 w-full items-center justify-center flex rounded-full hover:text-[var(--accent)] ${theme === 'system' ? 'bg-[var(--grid-block-15)]' : ''}`}
        onClick={() => setTheme('system')}>
        {theme === 'system' ? <IoDesktop size={24} /> : <IoDesktopOutline size={24} />}
      </button>
    </div>
  );
}