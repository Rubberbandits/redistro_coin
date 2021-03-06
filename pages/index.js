import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
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
						<Link href="/dashboard">
							<button className="btn btn-primary btn-wide mb-2 sm:w-min sm:mb-0 sm:mr-5">Dashboard</button>
						</Link>
						<Link href="https://traderjoexyz.com/#/trade?outputCurrency=0x97f56b1db9596196a7B670Dae6e9E3C016e382E4">
							<button className="btn btn-primary btn-wide mb-2 sm:w-min sm:mb-0 sm:mr-5">Swap</button>
						</Link>
						<a href="https://discord.gg/AwEGN7HNrh">
							<button className="btn btn-primary btn-wide mb-2 sm:w-min sm:mb-0 sm:mr-5">Discord</button>
						</a>
						<a href="https://twitter.com/SimulaCoin">
							<button className="btn btn-primary btn-wide sm:w-min sm:mb-0 sm:mr-5">Twitter</button>
						</a>
					</nav>
				</div>
			</header>

			<main>
				<section className="body-font">
					<div className="pb-2 max-w-full w-screen flex items-center justify-center">
						<div className="pt-2" style={{ position: 'relative', width: '100vw' }} className="shadow-inner drop-shadow-xl brightness-75 h-96 md:h-72">
							<Image 
								src="/expand.jpg"
								layout="fill"
								objectFit="cover"
							/>
						</div>

						<div className="absolute z-50 xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 mb-8" viewBox="0 0 975.036 975.036">
								<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
							</svg>
							
							<p className="leading-relaxed text-lg">The only thing you experience is what you created.</p>
							<span className="inline-block h-1 w-10 rounded bg-primary mt-8 mb-6"></span>
							<p className="">Meir Ezra</p>
						</div>
					</div>
				</section>

				<section className="body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="flex flex-col text-center w-full mb-20">
							<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">How it Works</h1>
							<p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our tokenomics ensure that users are rewarded for participating in building SimulaCoin, which gives back 5% of swap transactions to users in $JOE. $JOE can then be staked on Trader Joe's official site for the current 7 day average APR of 40.20787%. With these tokenomics, you are not only getting rewarded for holding SimulaCoin, but also for staking, compounding your investment in multiple ways. The treasury/liquidity will be used to create our upcoming DAO, where members can vote on marketing channels, as well as vote for who we choose to market. The direction of our coin, is in the hand of the people who deserve it the most, the buyers.</p>
						</div>

						<div className="flex flex-wrap -m-4 text-center justify-center">
							<div className="p-4 md:w-1/4 sm:w-1/2 w-full">
								<div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-primary w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>

									<h2 className="title-font font-medium text-lg xl:text-3xl">1,000,000,000,000,000</h2>
									<p className="leading-relaxed">$SIMULA&nbsp;</p>
								</div>
							</div>

							<div className="p-4 md:w-1/4 sm:w-1/2 w-full">
								<div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-primary w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
										<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
										<circle cx="9" cy="7" r="4"></circle>
										<path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
									</svg>

									<h2 className="title-font font-medium text-lg xl:text-3xl">5%</h2>
									<p className="leading-relaxed">per/swap in $JOE Rewards&nbsp;</p>
								</div>
							</div>

							<div className="p-4 md:w-1/4 sm:w-1/2 w-full">
								<div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-primary w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
									</svg>

									<h2 className="title-font font-medium text-lg xl:text-3xl">2%</h2>
									<p className="leading-relaxed">per/swap to Treasury/Liquidity&nbsp;</p>
								</div>
							</div>
						</div>

						<section className="body-font">
							<div className="container px-4 md:px-32 py-24 mx-auto">
								<div className="flex flex-wrap w-full mb-20">
									<div className="lg:w-1/2 w-full mb-6 lg:mb-0 xl:ml-16">
										<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">About</h1>
										<div className="h-1 w-20 bg-primary rounded"></div>
									</div>

									<div className="relative prose prose-sm">
										<ul>
											<li>5% of every transaction goes back to holders, allower users to profit from even market dips.</li>
											<li>Together, our treasury will be used to create our upcoming DAO.</li>
											<li>To ensure your order goes through, please use at least 14% slippage.</li>
										</ul>
									</div>
								</div>
							</div>
						</section>

						<div className="flex items-center justify-center flex-col md:flex-row">
							<Link href="/dashboard">
								<button className="btn btn-primary mb-2 md:mb-0 md:mr-2 w-48">View Dashboard</button>
							</Link>

							<a href="https://traderjoexyz.com/#/trade?outputCurrency=0x97f56b1db9596196a7B670Dae6e9E3C016e382E4">
								<button className="btn btn-primary w-48">Purchase</button>
							</a>
						</div>
					</div>
				</section>
			</main>

			<footer className="body-font">
				<div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
					<a className="flex title-font font-medium items-center md:justify-start justify-center text-content">
						<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-content bg-primary rounded-full pl-1.5 pt-1.5" viewBox="0 0 24 24">
							<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
							<path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
						</svg>
						
						<span className="ml-3 text-xl">SimulaCoin</span>
					</a>

					<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
						<a href="https://twitter.com/SimulaCoin" className="ml-3 text-gray-500">
							<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
								<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
							</svg>
						</a>
					</span>
				</div>
			</footer>
		</>
	)
}
