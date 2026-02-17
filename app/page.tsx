import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Welcome to FairShare
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Split expenses fairly with friends and family. Track who owes what, settle debts, and keep your finances organized.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/register"
            className="rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="rounded-md border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Sign In
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-3 text-gray-900">Easy Splitting</h3>
          <p className="text-gray-600">
            Split expenses evenly or by custom amounts with just a few clicks.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-3 text-gray-900">Track Balances</h3>
          <p className="text-gray-600">
            See who owes what at a glance and keep track of all your shared expenses.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-3 text-gray-900">Settle Up</h3>
          <p className="text-gray-600">
            Record payments and settle debts easily to keep everyone square.
          </p>
        </div>
      </div>
    </div>
  );
}
