import Image from 'next/image'
import SearchBox from './components/searchBox'
import TopPanel from './components/topPanel'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <TopPanel />
      <SearchBox />
    </main>
  )
}
