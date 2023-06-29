import Description from '@/components/Description'
import Main from '@/components/Main'
import PageContainer from '@/components/PageContainer'
import Title from '@/components/Title'

export default async function Blog({ params }) {
	const { slug } = params
	const data = await getPage(slug)
	const posts = data.data[0]

	return (
		<PageContainer>
			<Main>
				<Title>{slug}</Title>
				<Description>Some description for this page {slug}</Description>
				<p className='ml-6 pb-4 text-black leading-normal text-base max-w-xl m-0'>
					{posts.attributes.body}
				</p>
			</Main>
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
