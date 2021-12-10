import React from "react";
import Head from "next/head";
import Link from "next/link";

const ERC20_ADDRESS = "0x3f3fea5dd9b1940c2ee4822d7b7a06f19d58656e";
const STABLE_ADDRESS = "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664";
const SWAP_ADDRESS = "0xfaac0c7ffc3976f9714a6c81bca9c4d9124042f1";

export default class TokenDashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		currentAddress: "0x7aa4720178a05654D48182aCF853b4eC1fe5f7E5",
		balanceSIMULA: 0,
		balanceUSDC: 0,
		currentEarnings: 0
	}

	render() {
		let currentAddress = this.state.currentAddress;
		let balanceSIMULA = this.state.balanceSIMULA;
		let balanceUSDC = this.state.balanceUSDC
		let currentEarnings = this.state.currentEarnings;

		return (
			<>
				{currentAddress.length > 0 ? 
					<Head>
						<title>SimulaCoin Dashboard</title>
					</Head>
				: 
					<Head>
						<title>Login | SimulaCoin Dashboard</title>
					</Head>
				}

				<header className="body-font">
					<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
						<a className="flex title-font font-medium items-center mb-4 md:mb-0">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-primary rounded-full" viewBox="0 0 24 24">
								<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
							</svg>

							<span className="ml-3 text-xl">SimulaCoin</span>
						</a>

						<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
							<Link href="/">
								<button className="btn btn-primary mr-5">Home</button>
							</Link>

							{currentAddress.length > 0 ? 
								<button className="btn btn-disabled lowercase">
									{`${currentAddress.slice(0, 6)}...${currentAddress.slice(-6)}`}
								</button>
							: 
								<button className="btn btn-primary">
									Connect Wallet
								</button>
							}
						</nav>
					</div>
				</header>

				<main className="container mx-auto p-5">
					<div className="flex flex-col w-full">
						<div className="flex flex-col">
							<div className="flex flex-col lg:flex-row xl:justify-center mt-4">
								<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
									<div className="relative flex flex-col min-w-0 break-words bg-neutral rounded mb-6 xl:mb-0 shadow-lg">
										<div className="flex-auto p-4">
											<div className="flex flex-wrap">
												<div className="flex w-full max-w-full flex-col flex-grow flex-1 justify-evenly items-center h-32">
													<div className="flex flex-col items-center">
														<h5 className="uppercase font-bold text-xs">
															$SIMULA BALANCE
														</h5>

														<span className="font-semibold text-xl">
															{balanceSIMULA} $SIMULA
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
									<div className="relative flex flex-col min-w-0 break-words bg-neutral rounded mb-6 xl:mb-0 shadow-lg">
										<div className="flex-auto p-4">
											<div className="flex flex-wrap">
												<div className="flex w-full max-w-full flex-col flex-grow flex-1 justify-evenly items-center h-32">
													<div className="flex flex-col items-center">
														<h5 className="uppercase font-bold text-xs">
															$USDC BALANCE
														</h5>

														<span className="font-semibold text-xl">
															{balanceUSDC} $USDC
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
									<div className="relative flex flex-col min-w-0 break-words bg-neutral rounded mb-6 xl:mb-0 shadow-lg">
										<div className="flex-auto p-4">
											<div className="flex flex-wrap">
												<div className="flex w-full max-w-full flex-col flex-grow flex-1 justify-evenly items-center h-32">
													<h5 className="uppercase font-bold text-xs">
														UNCLAIMED REWARDS
													</h5>

													<span className="font-semibold text-xl">
														{currentEarnings} $USDC
													</span>

													<button className="btn btn-primary btn-sm w-full mt-8">
														CLAIM
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col mt-4">
							<div className="flex h-5/6 justify-center items-center m-4">
								<iframe src={`https://dexscreener.com/avalanche/${SWAP_ADDRESS}`} className="w-full h-128" title="DEXScreener" />
							</div>
						</div>
					</div>
				</main>
			</>
		)
	}
}