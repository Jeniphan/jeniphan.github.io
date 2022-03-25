import '@styles/globals.css'
import '@styles/variables.less'
import type { AppProps } from 'next/app'
import Layout from '@layout/Layout'
import { ContextWrapper } from '@hooks/context'
import 'bootstrap/dist/css/bootstrap.css'
// import 'antd/dist/antd.css';
import 'animate.css';
import Fade from 'react-reveal/Fade';
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {

	return (
		<ContextWrapper>

			<Script strategy="lazyOnload" id="my-script1" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

			<Script strategy="lazyOnload" id="my-script2">
				{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
				page_path: window.location.pathname,
				});
		`}
			</Script>

			<Fade butoom>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Fade>

		</ContextWrapper>
	)
}

export default MyApp
