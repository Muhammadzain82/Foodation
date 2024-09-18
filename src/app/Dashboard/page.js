"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import Nextpage from '../Leaderboard/page'
import GoalsDashboard from '../Goals/page'
import MyReceiversDashboard from '../Listing/page'

export default function Dashboard() {
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard')

  // Define the active tab state for goals (unfinished or completed)
  const [activeTab, setActiveTab] = useState('unfinished')

  // State for managing fruit quantities input
  const [fruitQuantities, setFruitQuantities] = useState('')

  const menuItems = ['Create Goal', 'Dashboard', 'User Listing', 'My Donors', 'Goals', 'Settings', 'Sign Out']
  const stats = [
    { title: "Today's Receiving", value: '7,222', subtext: '+20% from yesterday' },
    { title: "Last Week's Receiving", value: '7,222', subtext: '+15% from previous week' },
    { title: "Last Month's Receiving", value: '7,222', subtext: '+10% from previous month' },
  ]
  const leaderboard = [
    { name: 'Amirah', position: 1, points: 44, donations: '4.5k' },
    { name: 'Amirah', position: 2, points: 44, donations: '4.5k' },
    { name: 'Amirah', position: 3, points: 44, donations: '4.5k' },
    { name: 'Amirah', position: 3, points: 44, donations: '4.5k' },
  ]
  const recentActivity = [
    { name: 'Saylani Welfare', action: '04 April, 2021 |', time: '04:00 PM' },
    { name: 'Saylani Welfare', action: '04 April, 2021 |', time: '04:00 PM' },
    { name: 'Saylani Welfare', action: '04 April, 2021 |', time: '04:00 PM' },
    { name: 'Saylani Welfare', action: '04 April, 2021 |', time: '04:00 PM' },
  ]
  
  // Separate goals into unfinished and completed
  const unfinishedGoals = [
    { title: 'Donate a basket of fruit', progress: 40, target: +200 },
    { title: 'Donate a basket of fruit', progress: 40, target: +200 },
  ]

  const completedGoals = [
    { title: 'Donate a basket of fruit', progress: 100, target: +200 },
    { title: 'Donate a basket of vegetables', progress: 100, target: +300 },
  ]

  const unfinishedCount = unfinishedGoals.length;
  const completedCount = completedGoals.length;

  // Choose goals based on the active tab
  const goals = activeTab === 'unfinished' ? unfinishedGoals : completedGoals;

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow">
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <Image src="/image.png" width={32} height={32}/>
            <span className="text-xl font-semibold text-green-500">Foodation</span>
          </div>
        </div>
        <nav className="mt-8">
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-green-500">
            <span className="mr-2">◯</span>
            Dashboard
          </a>
          <a href="Listing" className="flex items-center px-4 py-2 text-gray-600 hover:bg-green-500">
            <span className="mr-2">≡</span>
            My Listing
          </a>
          <a href="Recievers" className="flex items-center px-4 py-2 text-gray-600 hover:bg-green-500">
            <span className="mr-2">⊙</span>
            My Receivers
          </a>
          <a href="/Goals" className="flex items-center px-4 py-2 text-gray-600 hover:bg-green-500">
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
      <div className="flex-1 p-4 lg:p-8 overflow-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-black mb-4 lg:mb-0">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded">Start Donating</button>
            <div><Image src="/coin.png" width={40} height={40}/></div>
            <Image src="/Ring.png" alt="Notifications" width={50} height={50} />
            <div className="flex items-center space-x-2 text-green-500">
              <Image src="/logo.png" alt="User avatar" width={200} height={200}/>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-blue-100 p-4 rounded-lg shadow">
              <p className="text-3xl font-bold mb-1 text-black">{stat.value}</p>
              <h3 className="text-lg font-semibold text-gray-400 mb-2">{stat.title}</h3>
              <p className="text-sm text-green-500">{stat.subtext}</p>
            </div>
          ))}
        </div>

        {/* Map and Leaderboard */}
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 mb-8">
          <div className="flex-grow bg-white p-4 rounded-lg shadow">
            <Image src="/map.png" alt="Map" width={600} height={300} className="w-full h-auto" />
          </div>
          <div className="w-full lg:w-1/3 bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4 text-black">Leader board</h3>
            {leaderboard.map((leader, index) => (
              <div key={index} className="flex items-center justify-between mb-4 text-black">
                <div className="flex items-center">
                  <span className="text-green-500 font-bold mr-2">{leader.position}.</span>
                  <Image src="/Amirah.png" alt={leader.name} width={40} height={40} className="rounded-full mr-2" />
                  <div>
                    <p className="font-semibold">{leader.name}</p>
                    <p className="text-sm text-gray-500">Donations {leader.donations}</p>
                  </div>
                </div>
                <span className="bg-green-500 text-white px-2 py-1 rounded-full">{leader.points}</span>
              </div>
            ))}
            <div className="mt-6 text-center">
                <button className="text-green-500 font-semibold flex items-center mx-auto">
                    <Link href="/Leaderboard">
                      View All
                    </Link>
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
            </div>
          </div>
        </div>

        {/* Goals and Recent Activity */}
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 text-black font-bold">
          <div className="flex-grow bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-black">Goals</h3>
              <button className="bg-green-500 text-white px-4 py-2 rounded">Create New goal</button>
            </div>

            {/* Tabs for Unfinished and Completed Goals */}
            <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
       <Tabs defaultValue="new" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="new" className="data-[state=active]:border-b-2 data-[state=active]:border-green-500">
            New Goals <span className="ml-2 bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">10</span>
          </TabsTrigger>
          <TabsTrigger value="my"><Link href="/My-Goals"></Link>My Goals</TabsTrigger>
          <TabsTrigger value="completed">
           <Link href="/Completed-Goals">Completed Goals</Link><span className="ml-2 bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">10</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="new">
          {goals.map((goal) => (
            <div key={goal.id} className="flex items-center space-x-4 mb-4 p-4 bg-gray-50 rounded-lg">
              <Image
                src="/donor.png"
                alt="Fruit basket"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div className="flex-grow">
                <h3 className="font-semibold text-lg">{goal.title}</h3>
                <p className="text-sm text-gray-500">{goal.details}</p>
                <div value={(goal.enrolled / goal.total) * 100} className="h-2 mt-2" />
                <p className="text-xs text-gray-500 mt-1">{goal.enrolled}/{goal.total} enrolled</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-green-500 font-semibold mb-2">+${goal.amount}</span>
                <button className="bg-green-500 hover:bg-green-600 text-white">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </TabsContent>
       </Tabs>
    </div>
          </div>

          <div className="w-full lg:w-1/3 bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-black">Recent Activity</h3>
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center mb-4 text-black">
                <Image src="/donor.png" alt="Activity icon" width={40} height={40} className="mr-4" />
                <div>
                  <p className="font-semibold">{activity.name}</p>
                  <p className="text-sm text-gray-500">{activity.action} • {activity.time}</p>
                </div>
              </div>
            ))}
            <div className="mt-6 text-center">
                <button className="text-green-500 font-semibold flex items-center mx-auto">
                    <Link href="/Recent-Activity">
                     View All
                    </Link>
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
