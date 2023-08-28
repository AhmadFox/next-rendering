// Packages:
import useSWR from 'swr';

// Components:
import Section from '@/components/ui/Section';

const fetcher = async () => {
    const res = await fetch('https://next-server-two.vercel.app/dashbaord')
    const data = await res.json()
    return data
}

function dashbaordSWR() {
    const { data, error } = useSWR('dashboard', fetcher);

    if (error) return 'An error occurd'
    if (!data) return 'Loading...'

    return (
        <Section styled={'py-7'}>
			<h1 className="text-2xl capitalize mb-9">Dashboard</h1>
			<div className="grid gap-4">
                <p className="font-bold">Posts: {data.posts}</p>
                <p className="font-bold">liks: {data.liks}</p>
                <p className="font-bold">followers: {data.followers}</p>
                <p className="font-bold">following: {data.following}</p>
            </div>
		</Section>
    )
}

export default dashbaordSWR
