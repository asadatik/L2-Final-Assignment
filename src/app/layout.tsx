import './globals.css'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import Header from '@/components/header/Header'



export const metadata = { title: 'TripNest', description: 'Book trips with TripNest' }


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="bn">
<body>
<Provider store={store}>
<Header />
<main className="max-w-6xl mx-auto p-4">{children}</main>
</Provider>
</body>
</html>
)
}