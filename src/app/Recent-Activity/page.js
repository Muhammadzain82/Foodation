import Image from 'next/image'
import { Search} from 'lucide-react'

const recentActivity = [
  { id: 1, donorName: 'Alan Coin', foodList: 'Biryani', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 2, donorName: 'Alan Coin', foodList: 'Pulao', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 3, donorName: 'Alan Coin', foodList: 'Chicken nihari', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 4, donorName: 'Alan Coin', foodList: 'Kabab', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 5, donorName: 'Alan Coin', foodList: 'Fruits', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 6, donorName: 'Alan Coin', foodList: 'Fruit Basket', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 7, donorName: 'Alan Coin', foodList: 'Rice', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 8, donorName: 'Alan Coin', foodList: 'Biryani', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 9, donorName: 'Alan Coin', foodList: 'Karahi', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 10, donorName: 'Alan Coin', foodList: 'Daal Chawal', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 11, donorName: 'Alan Coin', foodList: 'Bakra', date: '04 April, 2021 | 04:00 pm', points: 44 },
  { id: 12, donorName: 'Alan Coin', foodList: 'Chicken', date: '04 April, 2021 | 04:00 pm', points: 44 },
]

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <div>
              <Image src="/image.png" width={32} height={32}/>
            </div>
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
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-8 py-4">
            <h1 className="text-2xl font-semibold text-black">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">Start Donating</button>
              <div><Image src="/coin.png" width={40} height={40}/></div>
              <div><Image src="/Ring.png" width={40} height={40}/></div>
              <div className="flex items-center space-x-2"><div>
              </div><Image src="/logo.png" width={200} height={200}/></div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-black">Recent Activity</h2>
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
                  Sort By <Image src="/sort.png" width={15} height={15}/>
                </div>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="pb-4 font-bold text-green-500">Image</th>
                    <th className="pb-4 font-bold text-green-500">Donor Name</th>
                    <th className="pb-4 font-bold text-green-500">Food List</th>
                    <th className="pb-4 font-bold text-green-500">Date & Time</th>
                    <th className="pb-4 font-bold text-green-500">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivity.map((activity) => (
                    <tr key={activity.id} className="border-t">
                      <td className="py-4">
                        <div>
                          <Image src="/donor.png" width={40} height={40}/>
                        </div>
                      </td>
                      <td className="py-4 font-semibold text-black">{activity.donorName}</td>
                      <td className="py-4 font-semibold text-black">{activity.foodList}</td>
                      <td className="py-4 font-semibold text-black">{activity.date}</td>
                      <td className="py-4 font-semibold text-green-500">{activity.points}</td>
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