'use client'

import Link from 'next/link'

import Description from '@/components/Description'
import Main from '@/components/Main'
import PageContainer from '@/components/PageContainer'
import Title from '@/components/Title'
import Back from '@/components/Back'

export default function Error({ props, error }) {
	return (
		<PageContainer>
			<Main>
				<Title>Error 404</Title>
				<Description>{error.message}</Description>
				<br />
				<Back>
					&larr; Try back to <Link href='/'>home page</Link>
				</Back>
			</Main>
		</PageContainer>
	)
}
