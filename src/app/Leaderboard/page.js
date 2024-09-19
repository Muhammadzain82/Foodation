import Image from 'next/image'
import { Search,} from 'lucide-react'

const leaderboardData = [
  { rank: 1, name: 'Alan Coin', donations: '34.5k', points: 44 },
  { rank: 2, name: 'Alan Coin', donations: '34.5k', points: 44 },
  { rank: 3, name: 'Alan Coin', donations: '34.5k', points: 44 },
  { rank: 4, name: 'Alan Coin', donations: '34.5k', points: 44 },
  { rank: 5, name: 'Alan Coin', donations: '34.5k', points: 44 },
  { rank: 6, name: 'Alan Coin', donations: '34.5k', points: 44 },
  { rank: 7, name: 'Alan Coin', donations: '34.5k', points: 44 },
  { rank: 8, name: 'Alan Coin', donations: '34.5k', points: 44 },
  { rank: 9, name: 'Alan Coin', donations: '34.5k', points: 44 },
  { rank: 10, name: 'Alan Coin', donations: '34.5k', points: 44 },
  { rank: 11, name: 'Alan Coin', donations: '34.5k', points: 44 },
  { rank: 12, name: 'Alan Coin', donations: '34.5k', points: 44 },
]

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white">
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <Image src="/image.png" width={32} height={32}/>
            <span className="text-xl font-semibold text-green-500">Foodation</span>
          </div>
        </div>
        <nav className="mt-8">
          <a href="/Dashboard" className="flex items-center px-4 py-2 text-gray-700 bg-green-500">
            <span className="mr-2">◯</span>
            Dashboard
          </a>
          <a href="/Listing" className="flex items-center px-4 py-2 text-gray-600 hover:bg-green-500">
            <span className="mr-2">≡</span>
            My Listing
          </a>
          <a href="Recievers" className="flex items-center px-4 py-2 text-gray-600 hover:bg-green-500">
            <span className="mr-2">⊙</span>
            My Receivers
          </a>
          <a href="Goals" className="flex items-center px-4 py-2 text-gray-600 hover:bg-green-500">
            <span className="mr-2">◎</span>
            My Goals
          </a>

          <div className="mt-6">
            <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-green-500">
             <span className="mr-2">⚙</span>
             Settings
            </a>
          </div>    
          <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-green-500">
            <span className="mr-2">↪</span>
            Sign Out
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white">
          <div className="flex items-center justify-between px-8 py-4">
            <h1 className="text-2xl font-semibold text-black">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
                Start Donating
              </button>
              <div><Image src="/coin.png" width={40} height={40}/> </div>
              <Image src="/Ring.png" width={40} height={40}/>
              <div className="flex items-center space-x-2">
                <Image src="/logo.png" width={200} height={200}/>
              </div>
            </div>
          </div>
        </header>

        {/* Leaderboard */}
        <main className="p-8">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-black">Leader board</h2>
              <div className="flex items-center mb-4">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search user"
                    className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100"
                  />
                  <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
                <div className="ml-4 flex items-center text-sm text-black">
                  Sort By <Image src="/sort.png" width={15} height={15}/>
                </div>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-green-500">
                    <th className="pb-4 font-bold">Rank</th>
                    <th className="pb-4 font-bold">Image</th>
                    <th className="pb-4 font-bold">Name</th>
                    <th className="pb-4 font-bold">Donations</th>
                    <th className="pb-4 font-bold">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((user) => (
                    <tr key={user.rank} className="border-t">
                      <td className="py-4 text-black">{user.rank}</td>
                      <td className="py-4">
                        <Image src="/Amirah.png" width={32} height={32}/>
                      </td>
                      <td className="py-4 text-black">{user.name}</td>
                      <td className="py-4 text-black">{user.donations}</td>
                      <td className="py-4 text-green-500">{user.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}