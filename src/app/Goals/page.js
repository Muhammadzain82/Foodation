"use client"
import Image from 'next/image'
import Link from 'next/link'

const goalsList = [
  { id: 1, title: 'Donate a basket of fruit', enrolled: '20/40', points: 200 },
  { id: 2, title: 'Donate a basket of fruit', enrolled: '20/40', points: 200 },
  { id: 3, title: 'Donate a basket of fruit', enrolled: '20/40', points: 200 },
  { id: 4, title: 'Donate a basket of fruit', enrolled: '20/40', points: 200 },
  { id: 5, title: 'Donate a basket of fruit', enrolled: '20/40', points: 200 },
  { id: 6, title: 'Donate a basket of fruit', enrolled: '20/40', points: 200 },
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
]

export default function GoalsDashboard() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white">
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <Image src="/image.png" width={32} height={32} alt="Foodation Logo"/>
            <span className="text-xl font-semibold text-green-500">Foodation</span>
          </div>
        </div>
        <nav className="mt-8">
          <Link href="/Dashboard" className="flex items-center px-4 py-2 text-gray-600 hover:bg-green-500">
            <span className="mr-2">◯</span>
            Dashboard
          </Link>
          <Link href="/Listing" className="flex items-center px-4 py-2 text-gray-600 hover:bg-green-500">
            <span className="mr-2">≡</span>
            My Listing
          </Link>
          <Link href="/Recievers" className="flex items-center px-4 py-2 text-gray-600 hover:bg-green-500">
            <span className="mr-2">⊙</span>
            My Receivers
          </Link>
          <Link href="/Goals" className="flex items-center px-4 py-2 text-gray-700 bg-green-500">
            <span className="mr-2">◎</span>
            My Goals
          </Link>

          <div className="mt-6"> 
            <Link href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-green-500">
              <span className="mr-2">⚙</span>
              Settings
            </Link>
          </div>
          <Link href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-green-500">
            <span className="mr-2">↪</span>
            Sign Out
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white">
          <div className="flex items-center justify-between px-8 py-4">
            <h1 className="text-2xl font-semibold text-black">Goals</h1>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
                Start Donating
              </button>
              <Image src="/coin.png" width={40} height={40} alt="Coin"/>
              <Image src="/Ring.png" alt="Notifications" width={40} height={40}/>  
              <Image src="/logo.png" width={200} height={200} alt="Logo"/>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8 flex text-black">
          {/* Goals List */}
          <div className="flex-1 bg-white rounded-lg shadow-sm mr-8">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search user"
                    className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100"
                  />
                </div>
                <div className="ml-4 flex items-center text-sm text-gray-500">
                  Sort By <Image src="/sort.png" width={15} height={15} alt="Sort Icon"/>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-6">Goals</h3>
              <div className="flex space-x-4 mb-6">
                <Link href="/Goals">
                  <button className="px-4 py-2 text-green-500 bg-green-100 rounded-full">
                    New Goals
                  </button>
                </Link>
                <Link href="/My-Goals">
                  <button className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-full">
                    My Goals
                  </button>
                </Link>
                <Link href="/Completed-Goals">
                  <button className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-full">
                    Completed Goals
                  </button>
                </Link>
              </div>
              <div className="space-y-4">
                {goalsList.map((goal) => (
                  <div key={goal.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Image src="/donor.png" width={40} height={40} alt="Donor"/>
                      <div>
                        <h3 className="font-semibold">{goal.title}</h3>
                        <div className="text-sm text-gray-500">{goal.enrolled} enrolled</div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full mt-1">
                          <div className="w-1/2 h-full bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-green-500">+{goal.points}</div>
                      <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
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
                        <span className="font-semibold">{index + 1}</span>
                        <div className="w-8 h-8 bg-yellow-500 rounded-full">
                          <Image src="/Amirah.png" width={40} height={40} alt="Amirah"/>
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
                <Link href="/Leaderboard">
                  <button className="w-full text-center text-green-500 mt-4">
                    View All
                  </button>
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4 text-black">Recent Activity</h2>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-3 text-black">
                      <Image src="/donor.png" width={40} height={40} alt="Donor"/>
                      <div>
                        <div className="font-semibold">{activity.name}</div>
                        <div className="text-sm text-gray-500">{activity.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/Recent-Activity">
                  <button className="w-full text-center text-green-500 mt-4">
                    View All
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
