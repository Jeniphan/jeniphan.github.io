import '@styles/globals.css'
import '@styles/variables.less'
import type { AppProps } from 'next/app'
import Layout from '@layout/Layout'
import { ContextWrapper } from '@hooks/context'
import 'bootstrap/dist/css/bootstrap.css'
// import 'antd/dist/antd.css';
import 'animate.css';
import Fade from 'react-reveal/Fade';

function MyApp({ Component, pageProps }: AppProps) {

	return (
		<ContextWrapper>
			<Fade butoom>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Fade>

		</ContextWrapper>
	)
}

export default MyApp
