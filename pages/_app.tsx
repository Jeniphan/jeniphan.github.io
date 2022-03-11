import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@layout/Layout'
import { ContextWrapper } from '@hooks/context'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ContextWrapper>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ContextWrapper>
	)
}

export default MyApp
