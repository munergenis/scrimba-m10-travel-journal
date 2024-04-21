import logo from "../assets/app-logo.png"

export default function Header() {
  return (
    <header className="bg-rose-500 text-white h-14 flex items-center justify-center gap-2">
      <img className="w-6" src={logo} alt="App logo" />
      <h1 className="text-sm font-normal tracking-tight">my travel journal.</h1>
    </header>
  )
}
