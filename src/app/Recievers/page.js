import Link from 'next/link'
import Image from 'next/image'
import { Search, Bell, ChevronDown } from 'lucide-react'

const receiversList = [
  { id: 1, receiverName: 'Alam Coin', date: '04 April, 2021 | 04:00 pm' },
  { id: 2, receiverName: 'Alam Coin', date: '04 April, 2021 | 04:00 pm' },
  { id: 3, receiverName: 'Alam Coin', date: '04 April, 2021 | 04:00 pm' },
  { id: 4, receiverName: 'Alam Coin', date: '04 April, 2021 | 04:00 pm' },
  { id: 5, receiverName: 'Alam Coin', date: '04 April, 2021 | 04:00 pm' },
  { id: 6, receiverName: 'Alam Coin', date: '04 April, 2021 | 04:00 pm' },
  { id: 7, receiverName: 'Alam Coin', date: '04 April, 2021 | 04:00 pm' },
  { id: 8, receiverName: 'Alam Coin', date: '04 April, 2021 | 04:00 pm' },
  { id: 9, receiverName: 'Alam Coin', date: '04 April, 2021 | 04:00 pm' },
  { id: 10, receiverName: 'Alam Coin', date: '04 April, 2021 | 04:00 pm' },
  { id: 11, receiverName: 'Alam Coin', date: '04 April, 2021 | 04:00 pm' },
  { id: 12, receiverName: 'Alam Coin', date: '04 April, 2021 | 04:00 pm' },
  { id: 13, receiverName: 'Alam Coin', date: '04 April, 2021 | 04:00 pm' },
]

const leaderboard = [
  { id: 1, name: 'Amirah', donations: '34.5k', points: 44 },
  { id: 2, name: 'Amirah', donations: '34.5k', points: 44 },
  { id: 3, name: 'Amirah', donations: '34.5k', points: 44 },
  { id: 4, name: 'Amirah', donations: '34.5k', points: 44 },
]

const recentActivity = [
  { id: 1, name: 'Donor Name', date: '04 April 2023 | 04:00 PM' },
  { id: 2, name: 'Donor Name', date: '04 April 2023 | 04:00 PM' },
  { id: 3, name: 'Donor Name', date: '04 April 2023 | 04:00 PM' },
  { id: 4, name: 'Donor Name', date: '04 April 2023 | 04:00 PM' },
]

export default function MyReceiversDashboard() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 ">
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <div>
                <Image src="/image.png" width={40} height={40}/>
            </div>
            <span className="text-xl font-semibold text-green-500">Foodation</span>
          </div>
        </div>
        <nav className="mt-8">
          <a href="/Dashboard" className="flex items-center px-4 py-2 text-gray-600 hover:bg-green-500">
            <span className="mr-2">◯</span>
            Dashboard
          </a>
          <a href="/Listing" className="flex items-center px-4 py-2 text-gray-600 hover:bg-green-500">
            <span className="mr-2">≡</span>
            My Listing
          </a>
          <a href="Recievers" className="flex items-center px-4 py-2 text-gray-700 bg-green-500">
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
        <header className="bg-white ">
          <div className="flex items-center justify-between px-8 py-4">
            <h1 className="text-2xl font-semibold text-black">My Receivers</h1>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
                Start Donating
              </button>
              <div><Image src="/coin.png" width={40} height={40}/></div>
              <div><Image src="/Ring.png" width={40} height={40}/></div>               
              <div className="flex items-center space-x-2">
                <div>
                <Image src="/logo.png" width={200} height={200}/>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8 flex">
          {/* Receivers List */}
          <div className="flex-1 bg-white rounded-lg shadow-sm mr-8">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search user"
                    className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100"
                  />
                  <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
                <div className="ml-4 flex items-center text-sm text-gray-500">
                  Sort By<Image src="/sort.png" width={15} height={15}/>
                </div>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="pb-4 font-bold text-green-500 ">Food</th>
                    <th className="pb-4 font-bold text-green-500 text-center">Receiver Name</th>
                    <th className="pb-4 font-bold text-green-500 text-center">Date & Time</th>
                  </tr>
                </thead>
                <tbody>
                  {receiversList.map((receiver) => (
                    <tr key={receiver.id} className="border-t">
                      <td className="py-4">
                        <div>
                            <Image src="/donor.png" width={40} height={40}/>
                        </div>
                      </td>
                      <td className="py-4 text-black text-center">{receiver.receiverName}</td>
                      <td className="py-4 text-black text-center">{receiver.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-80">
            {/* Leaderboard */}
            <div className="bg-white rounded-lg shadow-sm mb-8">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4 text-black">Leader board</h2>
                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <div key={user.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold text-green-500">{index + 1}</span>
                        <div>
                            <Image src="/Amirah.png" width={40} height={40}/>
                        </div>
                        <div>
                          <div className="font-semibold text-black">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.donations}</div>
                        </div>
                      </div>
                      <div className="text-green-500">{user.points}</div>
                    </div>
                  ))}
                </div>
                <button className="w-full text-center text-green-500 mt-4">
                    <Link href="/Leaderboard">
                      View All
                    </Link>  
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4 text-black">Recent Activity</h2>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-3">
                      <div>
                        <Image src="/donor.png" width={40} height={40}/>
                      </div>
                      <div>
                        <div className="font-semibold text-black">{activity.name}</div>
                        <div className="text-sm text-gray-500">{activity.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full text-center text-green-500 mt-4">
                    <Link href="/Recent-Activity">
                     View All
                    </Link>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}