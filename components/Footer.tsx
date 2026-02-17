import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            © 2026 FairShare. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
