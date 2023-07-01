import PageContainer from '@/components/PageContainer'
import Description from '@/components/Description'
import Title from '@/components/Title'
import Main from '@/components/Main'
import List from '@/components/List'
import Pagination from '@/components/Pagination'

export default async function Home({ searchParams }) {
	const { page } = searchParams
	const pageParam = page === undefined ? 1 : page
	const data = await getPosts(pageParam)

	return (
		<PageContainer>
			<Main>
				<Title>Checkin from others (for me)</Title>
				<Description>a recipe for disaster</Description>
				<List allPosts={data} />
				<Pagination paginationData={data.meta.pagination} />
			</Main>
		</PageContainer>
	)
}

async function getPosts(pageParam) {
	try {
		const response = await fetch(
			`${process.env.API_URL}/api/posts?pagination[page]=${pageParam}&pagination[pageSize]=2`
		)
		const data = await response.json()
		return data
	} catch (error) {
		console.error('Error:', error)
	}
}
