'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const earningsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Earnings',
      data: [1500, 2000, 1800, 2500, 3000, 2800],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
}

const recentTransactions = [
  { id: 1, project: 'E-commerce Website', amount: 2500, date: '2024-06-15' },
  { id: 2, project: 'Mobile App Development', amount: 3000, date: '2024-06-01' },
  { id: 3, project: 'Logo Design', amount: 800, date: '2024-05-20' },
]

const goals = [
  { id: 1, title: 'Monthly Target', current: 2800, target: 5000 },
  { id: 2, title: 'Yearly Target', current: 25000, target: 60000 },
]

export default function Earnings() {
  const [withdrawAmount, setWithdrawAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const totalEarnings = recentTransactions.reduce((sum, transaction) => sum + transaction.amount, 0)

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically make an API call to process the withdrawal
    alert(`Withdrawal of $${withdrawAmount} via ${paymentMethod} initiated.`)
    setWithdrawAmount('')
  }

  return (
    <div className="container mx-auto py-8">
      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white p-8 rounded-lg shadow-lg mb-8">
        <motion.h1
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Earnings Overview
        </motion.h1>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Track your income, set goals, and manage your finances.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Earnings Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <Line data={earningsData} />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <li key={transaction.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{transaction.project}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{transaction.date}</p>
                    </div>
                    <span className="text-lg font-bold text-green-600">${transaction.amount}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Earnings Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {goals.map((goal) => (
                <div key={goal.id}>
                  <div className="flex justify-between mb-2">
                    <span>{goal.title}</span>
                    <span>{`$${goal.current} / $${goal.target}`}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${(goal.current / goal.target) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Withdraw Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleWithdraw} className="space-y-4">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium mb-1">Amount to Withdraw</label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  min="0"
                  max={totalEarnings}
                  required
                />
              </div>
              <div>
                <label htmlFor="paymentMethod" className="block text-sm font-medium mb-1">Payment Method</label>
                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                  <option value="PayPal">PayPal</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Crypto Wallet">Crypto Wallet</option>
                </Select>
              </div>
              <Button type="submit">Withdraw Funds</Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}