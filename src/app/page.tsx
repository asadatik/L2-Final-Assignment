import Link from 'next/link'


export default function Home(){
return (
<div>
<h1 className="text-3xl font-bold">স্বাগতম — TripNest</h1>
<p className="mt-4">কঠোরভাবে নির্বাচিত ভ্রমণ প্যাকেজ খুঁজে নাও।</p>
<Link href="/packages" className="inline-block mt-6 underline">প্যাকেজ দেখো</Link>
</div>
)
}