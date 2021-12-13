import React from "react";
import Head from "next/head";
import Link from "next/link";
import detectEthereumProvider from '@metamask/detect-provider';

const ERC20_ADDRESS = "0x97f56b1db9596196a7B670Dae6e9E3C016e382E4";
const ERC20_INTERFACE = JSON.parse("[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_dexRouter\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_marketingAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_wAVAX\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amountAVAX\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amountBOG\",\"type\":\"uint256\"}],\"name\":\"AutoLiquify\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"}],\"name\":\"BuybackMultiplierActive\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MASK\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"Sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"WAVAX\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"_isFree\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"_maxTxAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"_maxWallet\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"approveMax\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"adr\",\"type\":\"address\"}],\"name\":\"authorize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"autoBuybackEnabled\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"autoLiquidityReceiver\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"}],\"name\":\"checkFree\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"clearBuybackMultiplier\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"distributorAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCirculatingSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"accuracy\",\"type\":\"uint256\"}],\"name\":\"getLiquidityBacking\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMultipliedFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getOwner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"selling\",\"type\":\"bool\"}],\"name\":\"getTotalFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"adr\",\"type\":\"address\"}],\"name\":\"isAuthorized\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"target\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"accuracy\",\"type\":\"uint256\"}],\"name\":\"isOverLiquified\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"isOwner\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"launch\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"launchedAt\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"launchedAtTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"marketingFeeReceiver\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pair\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"router\",\"outputs\":[{\"internalType\":\"contract IDEXRouter\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_enabled\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"_cap\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_period\",\"type\":\"uint256\"}],\"name\":\"setAutoBuybackSettings\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"numerator\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"denominator\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"length\",\"type\":\"uint256\"}],\"name\":\"setBuybackMultiplierSettings\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_minPeriod\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minDistribution\",\"type\":\"uint256\"}],\"name\":\"setDistributionCriteria\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"gas\",\"type\":\"uint256\"}],\"name\":\"setDistributorSettings\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_autoLiquidityReceiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_marketingFeeReceiver\",\"type\":\"address\"}],\"name\":\"setFeeReceivers\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_liquidityFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_buybackFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_reflectionFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_marketingFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_feeDenominator\",\"type\":\"uint256\"}],\"name\":\"setFees\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"}],\"name\":\"setFree\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"exempt\",\"type\":\"bool\"}],\"name\":\"setIsDividendExempt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"exempt\",\"type\":\"bool\"}],\"name\":\"setIsFeeExempt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"exempt\",\"type\":\"bool\"}],\"name\":\"setIsTxLimitExempt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setMaxWallet\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_enabled\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"setSwapBackSettings\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_target\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_denominator\",\"type\":\"uint256\"}],\"name\":\"setTargetLiquidity\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setTxLimit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"swapEnabled\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"swapThreshold\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"adr\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"triggerBuybackMultiplier\",\"type\":\"bool\"}],\"name\":\"triggerZeusBuyback\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"}],\"name\":\"unSetFree\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"adr\",\"type\":\"address\"}],\"name\":\"unauthorize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}]");

const DISTRIBUTOR_ADDRESS = "0xb172D5f32CBD19DF669f184EF5C9CBc9080f7B8f";
const DISTRIBUTOR_INTERFACE = [
	{
		"inputs": [
			{
			"internalType": "address",
			"name": "_router",
			"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "claimDividend",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
	"inputs": [],
	"name": "dividendsPerShare",
	"outputs": [
		{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
	},
	{
	"inputs": [],
	"name": "dividendsPerShareAccuracyFactor",
	"outputs": [
		{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
	},
	{
	"inputs": [
		{
		"internalType": "address",
		"name": "shareholder",
		"type": "address"
		}
	],
	"name": "getUnpaidEarnings",
	"outputs": [
		{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
	},
	{
	"inputs": [],
	"name": "minDistribution",
	"outputs": [
		{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
	},
	{
	"inputs": [],
	"name": "minPeriod",
	"outputs": [
		{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
	},
	{
	"inputs": [
		{
		"internalType": "uint256",
		"name": "gas",
		"type": "uint256"
		}
	],
	"name": "process",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
	},
	{
	"inputs": [
		{
		"internalType": "uint256",
		"name": "_minPeriod",
		"type": "uint256"
		},
		{
		"internalType": "uint256",
		"name": "_minDistribution",
		"type": "uint256"
		}
	],
	"name": "setDistributionCriteria",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
	},
	{
	"inputs": [
		{
		"internalType": "address",
		"name": "shareholder",
		"type": "address"
		},
		{
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
		}
	],
	"name": "setShare",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
	},
	{
	"inputs": [
		{
		"internalType": "address",
		"name": "",
		"type": "address"
		}
	],
	"name": "shares",
	"outputs": [
		{
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
		},
		{
		"internalType": "uint256",
		"name": "totalExcluded",
		"type": "uint256"
		},
		{
		"internalType": "uint256",
		"name": "totalRealised",
		"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
	},
	{
	"inputs": [],
	"name": "totalDistributed",
	"outputs": [
		{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
	},
	{
	"inputs": [],
	"name": "totalDividends",
	"outputs": [
		{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
	},
	{
	"inputs": [],
	"name": "totalShares",
	"outputs": [
		{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		}
	],
	"stateMutability": "view",
	"type": "function"
	}
];

const STABLE_ADDRESS = "0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd";
const STABLE_INTERFACE = JSON.parse("[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"chainId\",\"type\":\"uint256\"}],\"name\":\"AddSupportedChainId\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"contractAddress\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"supplyIncrement\",\"type\":\"uint256\"}],\"name\":\"AddSwapToken\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"newBridgeRoleAddress\",\"type\":\"address\"}],\"name\":\"MigrateBridgeRole\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"feeAddress\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"feeAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"originTxId\",\"type\":\"bytes32\"}],\"name\":\"Mint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"contractAddress\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"supplyDecrement\",\"type\":\"uint256\"}],\"name\":\"RemoveSwapToken\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Swap\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"chainId\",\"type\":\"uint256\"}],\"name\":\"Unwrap\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"chainId\",\"type\":\"uint256\"}],\"name\":\"addSupportedChainId\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"contractAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"supplyIncrement\",\"type\":\"uint256\"}],\"name\":\"addSwapToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burnFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"chainIds\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newBridgeRoleAddress\",\"type\":\"address\"}],\"name\":\"migrateBridgeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"feeAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"feeAmount\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"originTxId\",\"type\":\"bytes32\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"contractAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"supplyDecrement\",\"type\":\"uint256\"}],\"name\":\"removeSwapToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"swap\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"swapSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"chainId\",\"type\":\"uint256\"}],\"name\":\"unwrap\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]");

const SWAP_ADDRESS = "0x9bFf4a52F78a8FAa6Efaf036ecAB72C0A4959C4c";

export default class TokenDashboard extends React.Component {
	constructor(props) {
		super(props);

		this.ConnectWallet = this.ConnectWallet.bind(this);
		this.DetectProvider = this.DetectProvider.bind(this);
		this.handleAccountsChanged = this.handleAccountsChanged.bind(this);
		this.GetWalletData = this.GetWalletData.bind(this);
	}

	state = {
		currentAddress: "",
		web3: null,
		balanceSIMULA: 0,
		balanceUSDC: 0,
		currentEarnings: 0
	}

	async DetectProvider() {
		const provider = await detectEthereumProvider();
	
		if (provider) {
			return provider;
		} else {
			alert('Please install MetaMask!');
		}
	}

	async handleAccountsChanged(accounts) {
		if (accounts.length === 0) {
			console.log('Please connect to MetaMask.');
		} else if (this.state.currentAddress !== accounts[0]) {
			this.setState({
				currentAddress: accounts[0]
			});
	
			await this.GetWalletData(accounts[0]);
		}
	}

	async ConnectWallet() {
		let accounts = await ethereum
			.request({ method: 'eth_requestAccounts' })
			.catch(err => {
				if (err.code === 4001) {
					// EIP-1193 userRejectedRequest error
					// If this happens, the user rejected the connection request.
					alert('Please connect to MetaMask.');
				} else {
					console.error(err);
				}
			});

		this.handleAccountsChanged(accounts);
	}

	async componentDidMount() {
		let provider = await this.DetectProvider();

		this.setState({
			web3: new Web3(provider)
		})

		ethereum.on('accountsChanged', this.handleAccountsChanged);
		ethereum.on('chainChanged', (chainId) => {
			if (chainId !== "0xa86a") {
				alert("We only support Avalanche, please switch chains.")
			}

			// Handle the new chain.
			// Correctly handling chain changes can be complicated.
			// We recommend reloading the page unless you have good reason not to.
			window.location.reload();
		});
	}

	async GetWalletData(address) {
		let web3 = this.state.web3;

		if (!web3) return;

		let erc20 = new web3.eth.Contract(ERC20_INTERFACE, ERC20_ADDRESS);
		let distributor = new web3.eth.Contract(DISTRIBUTOR_INTERFACE, DISTRIBUTOR_ADDRESS);
		let stable = new web3.eth.Contract(STABLE_INTERFACE, STABLE_ADDRESS);

		erc20.methods.balanceOf(address).call({from: address})
			.then(result => {
				this.setState({
					balanceSIMULA: web3.utils.fromWei(result, "wei")
				})
			})

		distributor.methods.getUnpaidEarnings(address).call({from: address})
			.then(result => {
				this.setState({
					currentEarnings: web3.utils.fromWei(result)
				})
			})

		stable.methods.balanceOf(address).call({from: address})
			.then(result => {
				this.setState({
					balanceUSDC: web3.utils.fromWei(result)
				})
			})
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
							<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white bg-primary rounded-full pl-1.5 pt-1.5" viewBox="0 0 24 24">
								<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
								<path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
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
								<button className="btn btn-primary" onClick={this.ConnectWallet}>
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

														<span className="font-semibold text-lg">
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
															$JOE BALANCE
														</h5>

														<span className="font-semibold text-lg">
															{balanceUSDC} $JOE
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

													<span className="font-semibold text-lg">
														{currentEarnings} $JOE
													</span>

													<button 
														className="btn btn-primary btn-sm w-full mt-8"
														onClick={() => {
															let web3 = this.state.web3;
															let distributor = new web3.eth.Contract(DISTRIBUTOR_INTERFACE, DISTRIBUTOR_ADDRESS);

															distributor.methods.claimDividend().send({from: this.state.currentAddress})
																.on("confirmation", () => {
																	this.GetWalletData(this.state.currentAddress);
																})
														}}
													>
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