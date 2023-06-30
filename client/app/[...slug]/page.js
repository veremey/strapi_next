import Centered from '@/components/Centered'
import Description from '@/components/Description'
import LeftGrid from '@/components/LeftGrid'
import RightGrid from '@/components/RightGrid'
import Content from '@/components/Content'
import Main from '@/components/Main'
import PageContainer from '@/components/PageContainer'
import Title from '@/components/Title'

export default async function Blog({ params }) {
	const { slug } = params
	const data = await getPage(slug)
	const posts = data.data[0]

	return (
		<PageContainer>
			<LeftGrid>
				<Centered>
					<Title>{posts.attributes.title}</Title>
					<Description className='text-black text-base font-semibold'>
						by <span className='text-red-500'> {posts.attributes.author} </span> on{' '}
						{reformatDate(posts.attributes.date)}
					</Description>

					<Back>
						<Link href='/'> &larr; go back home</Link>
					</Back>
				</Centered>
			</LeftGrid>
			<RightGrid>
				<Centered>
					<Content>{posts.attributes.body}</Content>
				</Centered>
			</RightGrid>
		</PageContainer>
	)
}

async function getPage(pageSlug) {
	try {
		const response = await fetch(
			`${process.env.API_URL}/api/posts?filters[slug][$eq]=${pageSlug}`
		)
		const data = await response.json()
		return data
	} catch (error) {
		console.error('Error:', error)
	}
}
