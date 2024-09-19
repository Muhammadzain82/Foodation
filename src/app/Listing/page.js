import Image from 'next/image'
import Link from 'next/link'
import { Search, Filter, MoreVertical } from 'lucide-react'

const donationsList = [
  { id: 1, foodName: 'Daal Chawal', weight: '0.5 kg', donorName: 'Donor Name', time: '5h', description: 'Lorem ipsum dolor sit amet, consectetur. Nulla porta sed consequat sed ut. Id eros consequat massa aliquam laoreet. Sed scelerisque et nisi aliquam sed. Ut dui consequat purus feugiat. In egestas sit amet dui.' },
  { id: 2, foodName: 'Daal Chawal', weight: '0.5 kg', donorName: 'Donor Name', time: '5h', description: 'Lorem ipsum dolor sit amet, consectetur. Nulla porta sed consequat sed ut. Id eros consequat massa aliquam laoreet. Sed scelerisque et nisi aliquam sed. Ut dui consequat purus feugiat. In egestas sit amet dui.' },
  { id: 3, foodName: 'Daal Chawal', weight: '0.5 kg', donorName: 'Donor Name', time: '5h', description: 'Lorem ipsum dolor sit amet, consectetur. Nulla porta sed consequat sed ut. Id eros consequat massa aliquam laoreet. Sed scelerisque et nisi aliquam sed. Ut dui consequat purus feugiat. In egestas sit amet dui.' },
  { id: 4, foodName: 'Daal Chawal', weight: '0.5 kg', donorName: 'Donor Name', time: '5h', description: 'Lorem ipsum dolor sit amet, consectetur. Nulla porta sed consequat sed ut. Id eros consequat massa aliquam laoreet. Sed scelerisque et nisi aliquam sed. Ut dui consequat purus feugiat. In egestas sit amet dui.' },
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
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <div>
                <Image src="/image.png" width={40} height={40}/>
            </div>
            <span className="text-xl font-semibold text-green-500">Foodation</span>
          </div>
        </div>
        <nav className="mt-8">
          <a href="/Listing" className="flex items-center px-4 py-2 text-gray-600 hover:bg-green-500">
            <span className="mr-2">◯</span>
            Dashboard
          </a>
          <a href="/Dashboard" className="flex items-center px-4 py-2 text-gray-600 hover:bg-green-500">
            <span className="mr-2">≡</span>
            My Listing
          </a>
          <a href="/Recievers" className="flex items-center px-4 py-2 text-gray-700 bg-green-500">
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
        <header className="bg-white shadow-sm">
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
          {/* Donations List */}
          <div className="flex-1 mr-8">
            <div className="flex items-center mb-6">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search user"
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
              <button className="ml-4 px-4 py-2 bg-green-500 text-white rounded flex items-center">
                Apply Filter
                <Filter className="w-4 h-4 mr-2"/>
              </button>
            </div>
            <div className="space-y-4">
              {donationsList.map((donation) => (
                <div key={donation.id} className="bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-start">
                    <Image src="/Daal.png" width={300} height={300} className="mr-6" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-right space-x-6">
                            <Image src="/profile.png" width={32} height={32}/>
                          </div>
                          <div>
                            <h3 className="font-semibold text-black">{donation.donorName}</h3>
                            <p className="text-sm text-gray-500">{donation.time}</p>
                          </div>
                        </div>
                        <MoreVertical className="w-5 h-5 text-gray-500" />
                      </div>
                      <h2 className="text-lg font-semibold mt-2 text-black">{donation.foodName} ({donation.weight})</h2>
                      <p className="text-sm text-gray-600 mt-1">{donation.description}</p>
                      <button className="mb-4 px-20 bg-green-500 text-white rounded">
                        Accept Donation
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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
                <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
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