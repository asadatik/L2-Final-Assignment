'use client'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'


export default function Header(){
const user = useSelector((s: RootState) => s.auth.user)
return (
<header className="w-full border-b py-4">
<div className="max-w-6xl mx-auto flex items-center justify-between">
<Link href="/" className="text-lg font-semibold">TripNest</Link>
<nav className="flex gap-4 items-center">
<Link href="/packages">Packages</Link>
{user ? (
<span>{user.name}</span>
) : (
<Link href="/auth/login">Sign in</Link>
)}
</nav>
</div>
</header>
)
}