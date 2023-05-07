import Image from 'next/image'
import SearchBox from './components/searchBox'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SearchBox />
    </main>
  )
}
