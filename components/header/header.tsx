import { TopBar } from "./top-bar"
import { MainHeader } from "./main-header"
import { Navigation } from "./navigation"

export function Header() {
  return (
    <header>
      <TopBar />
      <MainHeader />
      <Navigation />
    </header>
  )
}

