import Head from 'next/head'
import Link from 'next/link'

export default function Stake() {
	return (
		<>
			<Head>
				<title>SimulaCoin | Craft Financial Reality via Stablecoin Earnings</title>

				<meta content="SimulaCoin" property="og:title" />
				<meta content="Reality becomes what you make it. Join us to help craft our own via Stablecoin Earnings." property="og:description" />

				<meta content='/seesall.png' property='og:image' />
				<meta name="theme-color" content="#570df8" />

				<link type="application/json+oembed" href="/embed.json" />
			</Head>

			<main className="min-h-screen">
				<header className="body-font">
					<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
						<a className="flex title-font font-medium items-center mb-4 md:mb-0">
							<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-content bg-primary rounded-full pl-1.5 pt-1.5" viewBox="0 0 24 24">
								<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
								<path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
							</svg>

							<span className="ml-3 text-xl">SimulaCoin</span>
						</a>
						<nav className="md:ml-auto flex flex-col sm:flex-row flex-wrap items-center text-base justify-center">
							<Link href="/">
								<button className="btn btn-primary btn-wide mb-2 sm:w-min sm:mb-0 sm:mr-5">Home</button>
							</Link>
							<Link href="/dashboard">
								<button className="btn btn-primary btn-wide mb-2 sm:w-min sm:mb-0 sm:mr-5">Dashboard</button>
							</Link>
							<Link href="/swap">
								<button className="btn btn-primary btn-wide mb-2 sm:w-min sm:mb-0 sm:mr-5">Swap</button>
							</Link>
						</nav>
					</div>
				</header>

				<div className="w-full h-max">
					<iframe src={`https://traderjoexyz.com/#/stake`} style={{width: "100%", height: "90.5vh"}} title="TraderJoe Stake" />
				</div>
			</main>
		</>
	)
}