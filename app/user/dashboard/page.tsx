'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const dashboardCards = [
    { title: 'Active Projects', value: '5' },
    { title: 'Proposals Sent', value: '12' },
    { title: 'Earnings This Month', value: '$2,450' },
    { title: 'Profile Views', value: '238' },
]

const recentActivity = [
    { title: 'New project invitation', description: "You've been invited to submit a proposal for 'E-commerce Website Redesign'", time: '2 hours ago' },
    { title: 'Proposal accepted', description: "Your proposal for 'Mobile App Development' has been accepted", time: '1 day ago' },
    { title: 'New message', description: "You have a new message from client regarding 'Logo Design' project", time: '2 days ago' },
]

export default function Dashboard() {
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Earnings',
                data: [1200, 1900, 3000, 5000, 2000, 3000],
                backgroundColor: 'rgba(99, 102, 241, 0.5)',
            },
        ],
    }

    return (
        <div className="container mx-auto py-8">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-lg shadow-lg mb-8">
                <motion.h1
                    className="text-3xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Welcome back, John Doe!
                </motion.h1>
                <motion.p
                    className="text-xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Heres an overview of your freelancing activities.
                </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {dashboardCards.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {card.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{card.value}</div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>Earnings Overview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Bar data={chartData} />
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {recentActivity.map((activity, index) => (
                                    <li key={index} className="border-b pb-4 last:border-b-0">
                                        <h3 className="font-semibold">{activity.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{activity.description}</p>
                                        <span className="text-xs text-gray-500">{activity.time}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}