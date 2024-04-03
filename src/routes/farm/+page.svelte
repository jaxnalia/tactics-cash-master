<script>
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import {
		tokensEarned,
		tokenBalance,
		tokensStaked,
		lpTokenBalance,
		tokenEmissionPerSec
	} from './(components)/contractData';
	import StakeTokens from './(components)/StakeTokens.svelte';
	import GetContractData from './(components)/GetContractData.svelte';
	import ClaimRewards from './(components)/ClaimRewards.svelte';
	import ApproveTokens from './(components)/ApproveTokens.svelte';
	import WithdrawTokens from './(components)/WithdrawTokens.svelte';
	import { ExternalLink } from 'radix-icons-svelte';
	import { Separator } from "$lib/components/ui/separator";
	import { ethers } from 'ethers';
	import { BigNumber } from 'bignumber.js';
	import {
	Plus,
	Minus
  } from "lucide-svelte";
  	import leancircle from "$lib/images/leancircle.png";
	import pls from "$lib/images/pls.png";
	import plsx from "$lib/images/plsx.png";
	import inc from "$lib/images/inc.png";
	import rob from "$lib/images/rob.png";
	import lit from "$lib/images/litbr.png";
	import lean from "$lib/images/lean.png";

	let earnedTokens;
	let stakedLean;
	let leanBalance;
	let lpBalance;
	let emissionsPerDay;

	tokensEarned.subscribe((earned) => {
		earnedTokens = earned;
	});
	tokensStaked.subscribe((tokens) => {
		stakedLean = tokens;
	});
	tokenBalance.subscribe((tokens) => {
		leanBalance = tokens;
	});
	lpTokenBalance.subscribe((tokens) => {
		lpBalance = tokens;
	});
	tokenEmissionPerSec.subscribe((tokens) => {
		// emissionsPerToken = (tokens * 86400);
		// let BN = new BigNumber(tokens);
		// emissions = BN.times(86400);
		emissionsPerDay = (Number(tokens) * 86400);
	})


</script>
<GetContractData />
<div style="background-color: --background;" class='relative flex flex-col items-center backdrop-blur'>
	<div class="h-10" />
	<h1 class='font-bebas-neue uppercase text-4xl font-black flex flex-col container leading-none'>
		<span
			class="text-6xl"
			style="color: transparent; background-clip: text; -webkit-background-clip: text; background-image: url('https://media1.giphy.com/media/toYOS2FIQKGH1NJ060/giphy.gif');"
			>LEAN Farms</span
		>Stake LP Tokens to earn 💜
	</h1>
	<div class="h-10 h-10" />
	<Tabs.Root value="pools" class="w-96 sm:w-4/5 mb-10" style="max-width: 1000px;">
		<div class="flex justify-end">
			<Tabs.List class="grid w-full grid-cols-2 sm:max-w-xs">
				<Tabs.Trigger value="pools">Pools</Tabs.Trigger>
				<Tabs.Trigger value="earn">Earn LEAN 💜</Tabs.Trigger>
				
			</Tabs.List>
		</div>
		
		<Tabs.Content value="earn">
			<Card.Root class="backdrop-blur w-96 sm:w-auto">
				<Card.Header class="p-5">
					<h1 class="text-3xl font-bold">Earn LEAN 💜</h1>
					<Card.Title>Stake <strong>LEAN-WPLS LP</strong> to earn <strong>LEAN</strong></Card.Title>
				</Card.Header>
				<Card.Content>
					<Card.Description>

						<!-- {#if account.isConnected}
							<GetContractData />
							<script>
								console.log();("true");
							</script>
						{/if} -->
						
						<div class="flex flex-row">
							<div class="flex justify-center flex-col font-dm text-sm font-medium">
								<p class="px-2">LEAN Earned:<br />{earnedTokens}</p>
								<p class="px-2">LEAN/WPLS LP Staked:<br />{stakedLean}</p>
								<p class="px-2">LEAN Balance:<br />{leanBalance}</p>
								<p class="px-2">LP Balance:<br />{lpBalance}</p>
								<!-- <p class="px-2">50000000</p> total -->
								<!-- <Progress value={earnedTokens} max={50000000} /> -->
								<!-- <div style="justify-content:space-between;" class="flex">
									<p>0</p>
									<p>100,000,000</p>
								</div> -->
								<p class="px-2">Daily Distribution:<br />0.0 LEAN</p>
							</div>
							<div class="flex flex-col font-dm text-sm font-medium">
								<p class="px-2">Finished</p>
							</div>
						</div>
					</Card.Description>
				</Card.Content>
				<div style="justify-content: space-around;" class="px-6 flex flex-row">
					<span style="text-decoration: underline;" class="flex flex pb-3">
						<div></div>
						<a
							style="font-size: 12px;"
							href="https://bafybeicjuszlj6w3gg5mfszvo7z6ux4iaafhw62vfyfw27nm65bexodov4.ipfs.dweb.link/#/address/0x0EDD0cFEE6d9987C446c301E4f1960d29F704Eb8"
							target="_blank">View Contract
						</a>
							<ExternalLink size={10} />
							<!-- <Separator orientation="vertical" class="" /> -->
					</span>
					<span style="text-decoration: underline;" class="flex flex pb-3">
							<a
							style="font-size: 12px;"
							href="https://bafybeihiwe3inbfru7h6pesaj4siacbyx7t6o5qp3vwdz25n3p6ewlbnie.ipfs.dweb.link/#/add/V2/PLS/0x1c9b5e57AA89f8b58CA28249E347A6C933726449"
							target="_blank">Add Liquidity
						</a>
							<ExternalLink size={10} />
					</span>
					<span style="text-decoration: underline;" class="flex flex pb-3">
						<a
						style="font-size: 12px;"
						href="https://bafybeihiwe3inbfru7h6pesaj4siacbyx7t6o5qp3vwdz25n3p6ewlbnie.ipfs.dweb.link/#/?outputCurrency=0x1c9b5e57AA89f8b58CA28249E347A6C933726449"
						target="_blank">Trade LEAN
					</a>
						<ExternalLink size={10} />
					</span>
				</div>
				
				
				

				<Card.Footer class="space-x-3 flex justify-center p-4">
					<ApproveTokens />
					<ClaimRewards />

					<AlertDialog.Root>
						<AlertDialog.Trigger asChild let:builder>
							<Button disabled builders={[builder]}>Stake</Button>
						</AlertDialog.Trigger>
						<AlertDialog.Content>
							<AlertDialog.Header>
								<AlertDialog.Title>Stake LEAN/WPLS LP 💜</AlertDialog.Title>
								<!-- <AlertDialog.Description>
										How many tokens do you want to stake?
									</AlertDialog.Description> -->
							</AlertDialog.Header>

							<AlertDialog.Footer>
								<StakeTokens />
								<!-- <Input type="email" placeholder="Amount" />
									<AlertDialog.Action>Claim</AlertDialog.Action>
									<AlertDialog.Cancel>Cancel</AlertDialog.Cancel> -->
							</AlertDialog.Footer>
						</AlertDialog.Content>
					</AlertDialog.Root>

					<AlertDialog.Root>
						<AlertDialog.Trigger asChild let:builder>
							<Button builders={[builder]}>Withdraw</Button>
						</AlertDialog.Trigger>
						<AlertDialog.Content>
							<AlertDialog.Header>
								<AlertDialog.Title>Withdraw LEAN/WPLS LP 💜</AlertDialog.Title>
								<!-- <AlertDialog.Description>
																	How many tokens do you want to stake?
																</AlertDialog.Description> -->
							</AlertDialog.Header>

							<AlertDialog.Footer>
								<WithdrawTokens />
								<!-- <Input type="email" placeholder="Amount" />
																<AlertDialog.Action>Claim</AlertDialog.Action>
																<AlertDialog.Cancel>Cancel</AlertDialog.Cancel> -->
							</AlertDialog.Footer>
						</AlertDialog.Content>
					</AlertDialog.Root>
					
				</Card.Footer>
			</Card.Root>
		</Tabs.Content>
		<Tabs.Content value="pools"> 
			<Card.Root class="backdrop-blur w-96 sm:w-auto">
				<Card.Header class="p-5">
					<h1 class="text-3xl font-bold">Pools</h1>
					<Card.Title>Stake PulseX V2 liquidity and earn <strong>LIT</strong></Card.Title>
				</Card.Header>
				<Card.Content class="p-5 py-0 text-center">
					<div class="flex justify-between mb-2">
						<div class="relative bg-gradient-to-t from-white/5 to-white/15 rounded-sm py-3 px-2 w-full text-right px-3">

							<div style="transform: translate(0, 8px)">
								
								<img style="position: absolute; transform: translate(0px, 0px);" src={lean} alt="LEAN" width="48">
								<img style="position: absolute; transform: translate(0px, 0px);" src={plsx} alt="PLSX" width="20">
							</div>
								
								
							<span class="absolute sm:hidden" style="left:0; transform: translate(72px, 0px); color: #beee11;"><strong class="text-md">0.00</strong>%</span>
							<p class="sm:text-left sm:ml-16">Stake <strong>LEAN-PLSX</strong> Earn <strong>LIT</strong></p>
							
								<div class="flex justify-end">
									<span class="hidden sm:block text-xs p-1 mr-2" style="line-height: 2.2;">APR <span style="color: #beee11;"><strong class="text-lg">0.00</strong>%</span></span>
									<span class="text-xs p-1" style="line-height: 2.2;"><strong>LIT</strong> earned </span>
									<Button variant="outline" class="p-4">247420.0</Button>
									<Button class="p-2 ml-1"><Minus /></Button>
									<Button class="p-2 ml-1"><Plus /></Button>
								</div>
							
						</div>
						
					</div>

					<div class="flex justify-between mb-2">
						<div class="relative bg-gradient-to-t from-white/5 to-white/15 rounded-sm py-3 px-2 w-full text-right px-3">

							<div style="transform: translate(0, 8px)">
								
								<img style="position: absolute; transform: translate(0px, 0px);" src={lit} alt="LIT" width="48">
								<img style="position: absolute; transform: translate(0px, 0px);" src={plsx} alt="PLSX" width="20">
							</div>

								<span class="absolute sm:hidden" style="left:0; transform: translate(72px, 0px); color: #beee11;"><strong class="text-md">0.00</strong>%</span>
								<p class="sm:text-left sm:ml-16">Stake <strong>LIT-PLSX</strong> Earn <strong>LIT</strong></p>
							
								<div class="flex justify-end">
									<span class="hidden sm:block text-xs p-1 mr-2" style="line-height: 2.2;">APR <span style="color: #beee11;"><strong class="text-lg">0.00</strong>%</span></span>
									<span class="text-xs p-1" style="line-height: 2.2;"><strong>LIT</strong> earned </span>
									<Button variant="outline" class="p-4">0.0</Button>
									<Button class="p-2 ml-1"><Minus /></Button>
									<Button class="p-2 ml-1"><Plus /></Button>
								</div>
						</div>
						
					</div>

					<div class="flex justify-between mb-2">
						<div class="relative bg-gradient-to-t from-white/5 to-white/15 rounded-sm py-3 px-2 w-full text-right px-3">

							<div style="transform: translate(0, 8px)">
								
								<img style="position: absolute; transform: translate(0px, 0px);" src={lit} alt="LIT" width="48">
								<img style="position: absolute; transform: translate(0px, 0px);" src={lean} alt="LEAN" width="20">
							</div>

								<span class="absolute sm:hidden" style="left:0; transform: translate(72px, 0px); color: #beee11;"><strong class="text-md">0.00</strong>%</span>
								<p class="sm:text-left sm:ml-16">Stake <strong>LIT-LEAN</strong> Earn <strong>LIT</strong></p>
							
								<div class="flex justify-end">
									<span class="hidden sm:block text-xs p-1 mr-2" style="line-height: 2.2;">APR <span style="color: #beee11;"><strong class="text-lg">0.00</strong>%</span></span>
									<span class="text-xs p-1" style="line-height: 2.2;"><strong>LIT</strong> earned </span>
									<Button variant="outline" class="p-4">0.0</Button>
									<Button class="p-2 ml-1"><Minus /></Button>
									<Button class="p-2 ml-1"><Plus /></Button>
								</div>
						</div>
						
					</div>
					
				</Card.Content>

				<div style="justify-content: space-around;" class="px-6 py-2 flex flex-row">
					<span style="text-decoration: underline;" class="flex flex pb-3">
						<div></div>
						<a
							style="font-size: 12px;"
							href="https://bafybeicjuszlj6w3gg5mfszvo7z6ux4iaafhw62vfyfw27nm65bexodov4.ipfs.dweb.link/#/address/0xbE7f4fFfDe4241cA25eb27616aE3974aF0a023fD"
							target="_blank">View Contract
						</a>
							<ExternalLink size={10} />
							<!-- <Separator orientation="vertical" class="" /> -->
					</span>
					<span style="text-decoration: underline;" class="flex flex pb-3">
							<a
							style="font-size: 12px;"
							href="https://bafybeihiwe3inbfru7h6pesaj4siacbyx7t6o5qp3vwdz25n3p6ewlbnie.ipfs.dweb.link/#/add/V2/PLS/0x1c9b5e57AA89f8b58CA28249E347A6C933726449"
							target="_blank">Add Liquidity
						</a>
							<ExternalLink size={10} />
					</span>
					<span style="text-decoration: underline;" class="flex flex pb-3">
						<a
						style="font-size: 12px;"
						href="https://bafybeihiwe3inbfru7h6pesaj4siacbyx7t6o5qp3vwdz25n3p6ewlbnie.ipfs.dweb.link/#/?outputCurrency=0x1c9b5e57AA89f8b58CA28249E347A6C933726449"
						target="_blank">Trade LEAN
					</a>
						<ExternalLink size={10} />
					</span>
				</div>

				<Card.Footer class="p-0 flex justify-center">
					<!-- <ApproveTokens />
					<ClaimRewards /> -->

					
				</Card.Footer>
			</Card.Root>
		</Tabs.Content>
	</Tabs.Root>
	
	<!-- <div style="justify-content: center;" class="flex"> -->
		<!-- <Button
			target="_blank"
			href="https://app.pulsex.com/swap?outputCurrency=0x1c9b5e57AA89f8b58CA28249E347A6C933726449"
			style="line-height: 1.2; width: 12em; margin-top: 0.5em;"
			class="transition-colors justify-center block shadow-lg text-base text-white hover:text-gray-100 bg-green-500 hover:bg-green-300 hover:backdrop-blur-xl backdrop-blur-lg rounded-md"
		>
			BUY $LEAN
		</Button> -->
		<!-- <button
						style="margin: 10px;"
						class="block shadow-lg px-8 py-3 text-base font-medium text-gray-200 hover:text-gray-100 bg-gray-100/10 hover:bg-gray-200/30 hover:backdrop-blur-xl backdrop-blur-lg rounded-md md:py-4 md:text-lg md:px-8"
					>
						Learn More
					</button> -->
	<!-- </div> -->
</div>

