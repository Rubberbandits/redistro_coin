import Head from 'next/head'
import Script from 'next/script'
import dynamic from 'next/dynamic'

const TokenDashboard = dynamic(() => import('../../components/token_dashboard'), {
	ssr: false
});

export default function Dashboard() {
	return (
		<>
			<Script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.6.1/dist/web3.min.js" strategy="beforeInteractive" />
			<TokenDashboard />
		</>
	)
}