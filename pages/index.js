import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			<Head>
				<title>SimulaCoin | Craft Financial Reality via Stablecoin Earnings</title>
			</Head>

			<header className="body-font">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<a className="flex title-font font-medium items-center mb-4 md:mb-0">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-primary rounded-full" viewBox="0 0 24 24">
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</svg>

						<span className="ml-3 text-xl">SimulaCoin</span>
					</a>
					<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<Link href="/dashboard">
							<a className="mr-5 hover:text-primary">Dashboard</a>
						</Link>
						<a href="#" className="mr-5 hover:text-primary">Swap</a>
						<a href="#" className="mr-5 hover:text-primary">Discord</a>
						<a href="#" className="mr-5 hover:text-primary">Twitter</a>
					</nav>
				</div>
			</header>

			<main>
				<section className="body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
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
							<p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our tokenomics ensure that users are rewarding for participating in building SimulaCoin. The coin we create together will act as a DAO, to vote for the direction of our community coin, what marketing approaches we take, and even vote on who we choose. Together we can build the coin we want to see.</p>
						</div>

						<div className="flex flex-wrap -m-4 text-center justify-center">
							<div className="p-4 md:w-1/4 sm:w-1/2 w-full">
								<div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-primary w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
										<path d="M8 17l4 4 4-4m-4-5v9"></path>
										<path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
									</svg>

									<h2 className="title-font font-medium text-lg xl:text-3xl">100,000,000,000</h2>
									<p className="leading-relaxed">$SIMULA</p>
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
									<p className="leading-relaxed">per/tx USDC Rewards</p>
								</div>
							</div>

							<div className="p-4 md:w-1/4 sm:w-1/2 w-full">
								<div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-primary w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
										<path d="M3 18v-6a9 9 0 0118 0v6"></path>
										<path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
									</svg>

									<h2 className="title-font font-medium text-lg xl:text-3xl">2%</h2>
									<p className="leading-relaxed">per/tx to Treasury/Liquidity</p>
								</div>
							</div>
						</div>

						<section className="body-font">
							<div className="container px-4 md:px-32 py-24 mx-auto">
								<div className="flex flex-wrap w-full mb-20">
									<div className="lg:w-1/2 w-full mb-6 lg:mb-0 xl:ml-16">
										<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">Success Assured</h1>
										<div className="h-1 w-20 bg-primary rounded"></div>
									</div>

									<div className="relative prose prose-sm">
										<ul>
											<li>We chose x amount of coins because</li>
											<li>5% of every transaction goes back to holders, allower users to profit from even market dips.</li>
											<li>Together, our treasury will be used to create our up coming DAO.</li>
											<li>To ensure your order goes through, please use at least 12% Slippage.</li>
										</ul>
									</div>
								</div>
							</div>
						</section>

						<div className="flex items-center justify-center flex-col md:flex-row">
							<Link href="/dashboard">
								<button className="btn btn-primary mb-2 md:mb-0 md:mr-2 w-48">View Dashboard</button>
							</Link>

							<a href="#">
								<button className="btn btn-primary w-48">Purchase</button>
							</a>
						</div>
					</div>
				</section>
			</main>

			<footer className="text-gray-600 body-font">
				<div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
					<a className="flex title-font font-medium items-center md:justify-start justify-center text-primary-content">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-primary rounded-full" viewBox="0 0 24 24">
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</svg>
						
						<span className="ml-3 text-xl">SimulaCoin</span>
					</a>

					<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
						<a className="ml-3 text-gray-500">
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