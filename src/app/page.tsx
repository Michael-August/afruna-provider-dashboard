import NavBar from "../components/Navbar";

import twinklestars from '../assets/images/multi-star.png'
import stripes from '../assets/images/stripes.png'
import bgImg1 from '../assets/images/banner-img1.png'
import bgImg2 from '../assets/images/banner-img2.png'
import bgImg3 from '../assets/images/banner-img3.png'
import bgImg4 from '../assets/images/banner-img4.png'
import mainprofilepic from '../assets/images/main-profile.png'
import star from '../assets/icons/star.png'
import verified from '../assets/icons/verify.png'
import advert from '../assets/images/ad-people.png'
import footerlogo from '../assets/images/foter-logo.png'
import applestorelogo from '../assets/images/apple-logo.png'
import playstorelogo from '../assets/images/google-playstore.png'

import facebook from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.png'
import instagram from '../assets/images/instagram.png'
import linkedin from '../assets/images/linkedin.png'
import youtube from '../assets/images/youtube.png'

import Image from "next/image";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {

  return (
    <div className="">
		<div className="nav-area mb-[75px]">
			<NavBar source="home" />
		</div>
		<main className="w-full">
			<div className="banner relative w-full px-5 lg:px-0 flex gap-2 pt-[54px]">
				<div className="edge-imgs hidden lg:block">
					<div className="twinklestars mb-[75px]">
						<Image src={twinklestars} alt="" />
					</div>
					<div className="strpes">
						<Image src={stripes} alt="" />
					</div>
				</div>
				<div className="banner-contents w-full flex-1">
					<div className="banner-items flex justify-center">
						<div className="left-img">
							<div className="img1 w-[102px] left-[-10px] lg:w-[247px] absolute lg:top-[-17px] lg:left-[130px]">
								<Image src={bgImg1} alt="" />
							</div>
							<div className="img3 w-[80px] left-2 bottom-0 lg:w-[314px] absolute lg:top-[245px] lg:left-[100px]">
								<Image src={bgImg3} alt="" />
							</div>
						</div>
						<div className="welcome-note mt-20 flex flex-col items-center">
							<span className="title text-center text-[40px] lg:text-[64px] font-bold">Reach a wider audience</span>
							<span className="note text-center text-base lg:text-2xl font-normal mb-[50px] mt-[29px]">With Afruna, reach more potential clients with just a click.</span>
							<Link href={'/auth/signup'}>
								<Button className="btn">Become a service Provider</Button>
							</Link>
						</div>
						<div className="right-img hidden lg:block">
							<div className="img2 w-[87px] top-[90px] right-[-30px] lg:w-[238px] absolute lg:top-20 lg:right-14">
								<Image src={bgImg2} alt="" />
							</div>
							<div className="img4 absolute w-[86px] bottom-0 lg:w-[333px] lg:top-[280px] lg:right-40">
								<Image src={bgImg4} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="figures flex items-center flex-col lg:flex-row gap-6 lg:gap-0 justify-evenly mt-[70px] py-5 bg-[#FEE4CA91] w-full relative">
				<div className="stat flex flex-col gap-[5px] items-center justify-center">
					<span className="figure text-4xl text-custom-blue font-black">100,000+</span>
					<span className="for text-[15px] text-custom-blue font-semibold">database of potential service seeking Individuals</span>
				</div>
				<div className="stat flex flex-col gap-[5px] items-center justify-center">
					<span className="figure text-4xl text-custom-blue font-black">28M</span>
					<span className="for text-[15px] text-custom-blue font-semibold">worth of jobs completed</span>
				</div>
				<div className="stat flex flex-col gap-[5px] items-center justify-center">
					<span className="figure text-4xl text-custom-blue font-black">28M</span>
					<span className="for text-[15px] text-custom-blue font-semibold">worth of jobs completed</span>
				</div>
			</div>
			
			<div className="providers bg-[#F2F5F7] px-5 lg:px-[130px] py-[90px] pb-[62px]">
				<div className="top flex flex-col gap-4 mb-6">
					<span className="text-base text-[#F17216]">The Owners</span>
					<span className="text-custom-blue text-4xl font-bold">Service Provider</span>
					<span className="text-[#747582] text-[20px]">Some of our service providers</span>
				</div>
				<div className="provider-list w-full mb-8 flex flex-col gap-6 lg:flex-row lg:flex lg:items-center lg:justify-around">
					<Card className="px-[20px] pt-[31px] lg:w-[314px] pb-[22px] rounded-[8px]">
						<CardContent>
							<div className="pic flex items-center justify-center mb-[18px]">
								<Image src={mainprofilepic} alt="" />
							</div>
							<div className="provider-info flex flex-col mb-5">
								<span className="flex items-center gap-2 text-custom-blue text-base mb-[5px]">Michael August <Image src={verified} alt="" /></span>
								<span className="text-[#707070] mb-[10px]">Plumber</span>
								<div className="rating flex items-center gap-1">
									<div className="stars flex items-center gap-[2px]">
										<Image src={star} alt="" />
										<Image src={star} alt="" />
										<Image src={star} alt="" />
										<Image src={star} alt="" />
									</div>
									<span className="text-sm text-[#707070]">(213)</span>
								</div>
							</div>
							<div className="flex items-center justify-center">
								{/* <Button className="btn-sp">Book Service</Button> */}
							</div>
						</CardContent>
					</Card>
					<Card className="px-[20px] pt-[31px] lg:w-[314px] pb-[22px] rounded-[8px]">
						<CardContent>
							<div className="pic flex items-center justify-center mb-[18px]">
								<Image src={mainprofilepic} alt="" />
							</div>
							<div className="provider-info flex flex-col mb-5">
								<span className="flex items-center gap-2 text-custom-blue text-base mb-[5px]">Shehul Lawal <Image src={verified} alt="" /></span>
								<span className="text-[#707070] mb-[10px]">Video Editing</span>
								<div className="rating flex items-center gap-1">
									<div className="stars flex items-center gap-[2px]">
										<Image src={star} alt="" />
										<Image src={star} alt="" />
										<Image src={star} alt="" />
										<Image src={star} alt="" />
									</div>
									<span className="text-sm text-[#707070]">(213)</span>
								</div>
							</div>
							<div className="flex items-center justify-center">
								{/* <Button className="btn-sp">Book Service</Button> */}
							</div>
						</CardContent>
					</Card>
					<Card className="px-[20px] pt-[31px] lg:w-[314px] pb-[22px] rounded-[8px]">
						<CardContent>
							<div className="pic flex items-center justify-center mb-[18px]">
								<Image src={mainprofilepic} alt="" />
							</div>
							<div className="provider-info flex flex-col mb-5">
								<span className="flex items-center gap-2 text-custom-blue text-base mb-[5px]">Idris Redemption <Image src={verified} alt="" /></span>
								<span className="text-[#707070] mb-[10px]">Architect</span>
								<div className="rating flex items-center gap-1">
									<div className="stars flex items-center gap-[2px]">
										<Image src={star} alt="" />
										<Image src={star} alt="" />
										<Image src={star} alt="" />
										<Image src={star} alt="" />
									</div>
									<span className="text-sm text-[#707070]">(213)</span>
								</div>
							</div>
							<div className="flex items-center justify-center">
								{/* <Button className="btn-sp">Book Service</Button> */}
							</div>
						</CardContent>
					</Card>
				</div>
				
				<div className="pot-customer flex flex-col items-center justify-center mt-[58px]">
					<span className="text-[32px] mb-[38px]">What service do you render?</span>
					<Button className="bg-[#FDD9B3] text-custom-blue font-bold text-base px-10 lg:px-20 py-[30px] hover:bg-[#e2c29f]">Become a Service Provider</Button>
				</div>
			</div>
			
			{/* <swiper-container slides-per-view="3" speed="500" loop="true" css-mode="true">
				<swiper-slide>Slide 1</swiper-slide>
				<swiper-slide>Slide 2</swiper-slide>
				<swiper-slide>Slide 3</swiper-slide>
				...
			</swiper-container> */}
			
			<div className="testimonials px-5 lg:px-[130px] py-[90px] pb-[150px]">
				<div className="top flex flex-col gap-4 mb-[66px]">
					<span className="text-base text-[#F17216]">Testimonials</span>
					<span className="text-custom-blue text-4xl font-bold">See What Service Seekers are saying</span>
				</div>
				<div className="testimonial-slider -mx-5 lg:mx-0 px-5 lg:px-0 flex items-center justify-center bg-[#FEE5CB] pt-[64px] rounded-[4px]">
					<Card className="p-8 rounded-[16px] lg:w-[412px] mb-[-74px] shadow-md">
						<CardContent className="flex flex-col gap-8">
							<span className="text-lg">Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.</span>
							<div className="profile flex items-center gap-4">
								<div className="pic">
									<Image src={mainprofilepic} width={64} height={64} alt="" />
								</div>
								<div className="desc flex flex-col">
									<span className="text-lg">Ralph Edwards</span>
									<span className="text-[#475569] text-base">Math Teacher</span>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
			
			<div className="advert px-5 lg:px-[140px] pt-[90px] lg:pt-[132px] pb-[93px] bg-[#F2F2F2]">
				<div className="people-holder flex-col gap-10 lg:gap-0 px-5 py-[57px] lg:flex-row flex items-start justify-between lg:pl-[70px] lg:h-[423px]">
					<div className="description lg:w-[487px] flex flex-col">
						<span className="text-white font-bold text-[40px] mb-[17px]">Show case your product & Services on Afruna</span>
						<span className="text-white text-[20px] lg:mb-[76px]">What service do you need?</span>
						<Link className="hidden lg:block" href={'/auth/signup'}>
							<span className="join">Join Now</span>
						</Link>
					</div>
					<div className="people lg:mt-[-170px] lg:mr-[-120px]">
						<Image className="mb-1 lg:mb-0" src={advert} alt="" />
						<Link className="lg:hidden" href={'/auth/signup'}>
							<span className="join-mobile">Join Now</span>
						</Link>
					</div>
				</div>
			</div>
			
			<div className="subscribe px-5 bg-[#e6e5e5] py-9 flex flex-col items-center justify-center">
				<span className="text-[32px] text-center font-bold">Subscribe on our newsletter</span>
				<span className="text-base text-center text-[#606060] mb-3">Get daily news on upcoming offers from many suppliers all over the world</span>
				<div className="form flex items-center">
					<input type="text" className="bg-transparent px-1 lg:px-3 py-[14px] border rounded-tl-[8px] rounded-bl-[8px] border-solid border-[#707070]" placeholder="Enter your email address..." />
					<span className="button bg-custom-blue px-1 lg:px-3 py-[14px] text-white cursor-pointer rounded-tr-[8px] rounded-br-[8px] border border-custom-blue">Subscribe</span>
				</div>
			</div>
			
			<div className="footer flex flex-col gap-6 lg:flex-row items-center justify-center pb-[60px] bg-[#FCF5E5]">
				<div className="right">
					<div className="footer-logo mb-[30px]">
						<Image src={footerlogo} alt="" />
					</div>
					<span className="text-base">App coming soon...</span>
					<div className="appstorelogos flex items-center gap-[18px] mt-5">
						<Image src={applestorelogo} alt="" />
						<Image src={playstorelogo} alt="" />
					</div>
				</div>
				<div className="center lg:mx-[100px] lg:gap-[77px] flex flex-col gap-5 items-center lg:flex-row">
					<div className="about flex flex-col gap-1">
						<span className="top text-base mb-2 text-[#1C1C1C] font-bold">About</span>
						<span className="text-base text-custom-blue">About us</span>
						<span className="text-base text-custom-blue">Contact us</span>
						<span className="text-base text-custom-blue">Career</span>
					</div>
					<div className="privacy flex flex-col gap-1">
						<span className="top text-base mb-2 text-[#1C1C1C] font-bold">About</span>
						<span className="text-base text-custom-blue">About us</span>
						<span className="text-base text-custom-blue">Contact us</span>
						<span className="text-base text-custom-blue">Career</span>
					</div>
					<div className="help flex flex-col gap-1">
						<span className="top text-base mb-2 text-[#1C1C1C] font-bold">About</span>
						<span className="text-base text-custom-blue">About us</span>
						<span className="text-base text-custom-blue">Contact us</span>
						<span className="text-base text-custom-blue">Career</span>
					</div>
					<div className="users flex flex-col gap-1">
						<span className="top text-base mb-2 text-[#1C1C1C] font-bold">About</span>
						<span className="text-base text-custom-blue">About us</span>
						<span className="text-base text-custom-blue">Contact us</span>
						<span className="text-base text-custom-blue">Career</span>
					</div>
				</div>
				<div className="left">
					<span className="text-base text-[#505050] font-bold">Follow us</span>
					<div className="socials flex items-center gap-1 mt-[10px]">
						<Image src={facebook} alt="" />
						<Image src={twitter} alt="" />
						<Image src={linkedin} alt="" />
						<Image src={instagram} alt="" />
						<Image src={youtube} alt="" />
					</div>
				</div>
			</div>
			<div className="copyright">
				<span className="text-[#232F3E] text-base">© 2023 Afruna Global Company | All Rights Reserved.</span>
			</div>
		</main>
	</div>
  )
}
