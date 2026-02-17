export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Dashboard</h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Total Expenses</h3>
            <p className="text-3xl font-bold text-gray-900">$0.00</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-sm font-medium text-gray-600 mb-2">You Owe</h3>
            <p className="text-3xl font-bold text-red-600">$0.00</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-sm font-medium text-gray-600 mb-2">You Are Owed</h3>
            <p className="text-3xl font-bold text-green-600">$0.00</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="p-8 text-center">
            <p className="text-gray-500">No expenses yet. Start by adding your first expense!</p>
            <button className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 font-medium">
              Add Expense
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
