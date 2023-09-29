/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { FaAngleRight } from 'react-icons/fa'
import Videos from './components/videos'

export default function Home() {
  return (<>
    <div className="absolute top-10 right-0 z-20 pointer-events-none hidden lg:block">
      <Image src="/hero-bg-desktop.png" alt="hero image" width={732} height={876} className="" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
    </div>

    <main className='bg-black max-w-[1200px] mx-auto px-6 md:px-8 pt-6 justify-center items-center relative'>
      <header className="lg:h-screen overflow-y-hidden">
        <nav className="flex justify-between items-center">
          <a href="">
            <Image src="/logo.png" width={77} height={24} alt="logo" />
          </a>

          <div>  <button className="text-[16px] font-[600] border-none text-[#ffffff80] cursor-pointer w-full rounded-[100px] transition-all bg-[#ffffff0d] hover:bg-[#ffffff1a] px-3 py-2">
            <a href=" ">Log In</a>
          </button>
          </div>
        </nav>

        <section id="hero" className="flex flex-col lg:flex-row items-center md:md:pr-[32px] h-full">
          <div className='lg:w-[60%] h-full flex flex-col items-center lg:items-start gap-8 lg:gap-[48px] justify-center mt-14 lg:mt-0'>
            <a href="http://https://www.producthunt.com/posts/tiles-2" target="_blank" rel="noopener noreferrer"
              className='flex items-center gap-1 md:gap-2 font-[Inter] font-[400] text-xs md:text-[14px] text-[#f9f9f9cc] bg-[#ffffff1a] rounded-[100px] transition-all w-fit px-2 md:px-3 py-1 border border-[#ffffff26] hover:border-[#3ad69166] whitespace-nowrap'>
              <span className="">Voted <b>Product of the day</b> on Product Hunt</span>
              <FaAngleRight size={12} className="lg:-mb-1" />
            </a>
            <h1 className='text-[48px] md:text-[56px] lg:text-[60px] leading-[110%] font-[500] text-[#f9f9f9e6] text-center lg:text-start'>
              The most beautiful link in bio on the internet
            </h1>
            <button className='flex py-[24px] px-[32px] flex-row items-center gap-3 rounded-full border border-[#ffffff1a] font-[500] text-[20px] text-[#3ad691] cursor-pointer w-fit bg-[linear-gradient(180deg,#0F3021_0%,#071610_100%)] shadow-[0_4px_8px_#00000080]'>
              <Image src="/logo1.png" alt="" width={32} height={32} />
              Create your Tiles
            </button>
          </div>

          <div className='lg:w-auto mt-[52px]'>
            <Image src="/hero-bg.png" alt="hero image" width={718} height={787} className="lg:hidden" />
          </div>
        </section>
      </header>


      <section className='justify-center item-center flex mb-[96px] max-w-[720px] mt-[120px] md:mt-[160px] lg:mt-[200px] text-[100%] leading-[120%]'>
        <div className='items-center justify-center'>
          <h1 className='mb-[16px] text-[#f9f9f9e6] text-[40px] md:text-[48px] font-[600] leading-[120%] md:leading-[160%]'>
            Don`t just show your links,<br />
            Tile it!
          </h1>
          <p className='font-[400] text-[20px] md:text-[24px] text-[#f9f9f9cc] leading-[160%] md:leading-7'>
            Organize and show everything you want to the world. Share your social profiles, websites, newsletters, videos and many more in the most elegant way.
          </p>
        </div>
      </section>

      <section className='flex justify-center flex-col gap-[40px] '>
        <div className='p-6 md:p-[64px] flex min-h-[450px] w-full md:min-h-[450px] bg-contain bg-[#030c08] bg-bottom bg-no-repeat rounded-[40px] border-solid border-slate-600' style={{
          backgroundImage: 'url(/links-bg.png)'
        }}>
          <div className="flex flex-col justify-start w-full">
            <img className='rounded-[16px] md:rounded-[24px] mb-[32px] w-[56px] md:w-[72px] h-[56px] md:h-[72px] shadow-[0_0_64px_#1878f1]' src="icon-link.svg" alt="icon" />

            <h3 className='mt-2 md:mt-0 leading-[120%] font-[500] text-[#f9f9f9cc] text-[24px] mb-[12px]'>Links      </h3>
            <p className='md:max-w-[440px] text-[18px] text-[#f9f9f9cc] mb-[8px] leading-[160%] font-[400] flex flex-wrap'>
              Link tiles comes with rich content preview so that <br />visitors can easily find what they are looking.
            </p>
          </div>

        </div>
      </section>

      <section className='flex flex-col md:flex-row gap-[40px] justify-center'>
        <div className='mt-12 md:mt-0 item-start justify-start flex-row p-6 md:p-[64px] flex min-h-[450px] w-full md:min-h-[548px] bg-contain bg-[#030c08] bg-bottom bg-no-repeat rounded-[40px] border-solid border-slate-600 ' style={{
          backgroundImage: 'url(/Socials-bg.png)',
          backgroundPosition: 'bottom'
        }}>
          <div className="flex flex-col justify-start text-[100%]">
            <img className='rounded-[16px] md:rounded-[24px] mb-[32px] w-[56px] md:w-[72px] h-[56px] md:h-[72px] shadow-[0_0_64px_#1878f1]' src="icon-social.svg" alt="icon" />

            <h3 className='mt-2 md:mt-0 leading-[120%] font-[500] text-[#f9f9f9cc] text-[24px] mb-[12px]'>Social profiles</h3>
            <p className='max-w-[440px] text-[18px] text-[#f9f9f9cc] mb-[8px] leading-[160%] font-[400]'>
              Integrate all your social media profiles, allowing <br /> your followers to easily connect with you.
            </p>
          </div>

        </div>

        <div className='mt-12 md:mt-0 p-6 md:p-[64px] flex min-h-[450px] w-full md:min-h-[548px] bg-contain bg-[#030c08] bg-bottom bg-no-repeat rounded-[40px] border-solid border-slate-600 ' style={{
          backgroundImage: 'url(/Locations-bg.png)'
        }}>
          <div className="flex flex-col justify-start text-[100%]">
            <img className='rounded-[16px] md:rounded-[24px] mb-[32px] w-[56px] md:w-[72px] h-[56px] md:h-[72px] shadow-[0_0_64px_#44ff73]' src="icon-location.svg" alt="icon" />

            <h3 className='mt-2 md:mt-0 leading-[120%] font-[500] text-[#f9f9f9cc] text-[24px] mb-[12px]'>Location    </h3>
            <p className='max-w-[440px] text-[18px] text-[#f9f9f9cc] mb-[8px] leading-[160%] font-[400]'>
              Provide your location to give people insight into <br /> your origins and current time reference.</p>
          </div>

        </div>
      </section>

      <section className='flex flex-col md:flex-row gap-[40px] justify-center'>
        <div className='mt-12 md:mt-0 item-start justify-start flex-row p-6 md:p-[64px] flex min-h-[450px] w-full md:min-h-[548px] bg-contain bg-[#030c08] bg-bottom bg-no-repeat rounded-[40px] border-solid border-slate-600 ' style={{
          backgroundImage: 'url(/Videos-bg.png)',
          backgroundPosition: 'bottom'
        }}>
          <div className="flex flex-col justify-start text-[100%]">
            <img className='rounded-[16px] md:rounded-[24px] mb-[32px] w-[56px] md:w-[72px] h-[56px] md:h-[72px] shadow-[0_0_64px_#ff4266]' src="icon-video.svg" alt="icon" />

            <h3 className='mt-2 md:mt-0 leading-[120%] font-[500] text-[#f9f9f9cc] text-[24px] mb-[12px]'>Videos      </h3>
            <p className='max-w-[440px] text-[18px] text-[#f9f9f9cc] mb-[8px] leading-[160%] font-[400]'>
              Enable your visitors to effortlessly navigate <br />through your favorite videos and playlists.
            </p>
          </div>

        </div>

        <div className='mt-12 md:mt-0 p-6 md:p-[64px] flex min-h-[450px] w-full md:min-h-[548px] bg-contain bg-[#030c08] bg-bottom bg-no-repeat rounded-[40px] border-solid border-slate-600 ' style={{
          backgroundImage: 'url(/Images-bg.png)'
        }}>
          <div className="flex flex-col justify-start text-[100%]">
            <img className='rounded-[16px] md:rounded-[24px] mb-[32px] w-[56px] md:w-[72px] h-[56px] md:h-[72px] shadow-[0_0_64px_#34fff3]' src="icon-image.svg" alt="icon" />

            <h3 className='mt-2 md:mt-0 leading-[120%] font-[500] text-[#f9f9f9cc] text-[24px] mb-[12px]'>Images    </h3>
            <p className='max-w-[440px] text-[18px] text-[#f9f9f9cc] mb-[8px] leading-[160%] font-[400]'>
              Images provide an effortless means for you to <br />express yourself, personal or marketing visuals.</p>
          </div>

        </div>
      </section>

      <section className='flex flex-col md:flex-row gap-[40px] justify-center'>
        <div className='mt-12 md:mt-0 item-start justify-start flex-row p-6 md:p-[64px] flex min-h-[450px] w-full md:min-h-[548px] bg-contain bg-[#030c08] bg-bottom bg-no-repeat rounded-[40px] border-solid border-slate-600 ' style={{
          backgroundImage: 'url(/Music-bg.png)',
          backgroundPosition: 'bottom'
        }}>
          <div className="flex flex-col justify-start text-[100%]">
            <img className='rounded-[16px] md:rounded-[24px] mb-[32px] w-[56px] md:w-[72px] h-[56px] md:h-[72px] shadow-[0_0_64px_#fda428]' src="icon-music.svg" alt="icon" />

            <h3 className='mt-2 md:mt-0 leading-[120%] font-[500] text-[#f9f9f9cc] text-[24px] mb-[12px]'>Music      </h3>
            <p className='max-w-[440px] text-[18px] text-[#f9f9f9cc] mb-[8px] leading-[160%] font-[400]'>
              Celebrate your love for music by sharing your <br />favorite tunes with everyone using this tile.
            </p>
          </div>

        </div>

        <div className='mt-12 md:mt-0 p-6 md:p-[64px] flex min-h-[450px] w-full md:min-h-[548px] bg-contain bg-[#030c08] bg-bottom bg-no-repeat rounded-[40px] border-solid border-slate-600 ' style={{
          backgroundImage: 'url(/Header-bg.png)'
        }}>
          <div className="flex flex-col justify-start text-[100%]">
            <img className='rounded-[16px] md:rounded-[24px] mb-[32px] w-[56px] md:w-[72px] h-[56px] md:h-[72px] shadow-[0_0_64px_#b71fff]' src="icon-header.svg" alt="icon" />

            <h3 className='mt-2 md:mt-0 leading-[120%] font-[500] text-[#f9f9f9cc] text-[24px] mb-[12px]'>Header    </h3>
            <p className='max-w-[440px] text-[18px] text-[#f9f9f9cc] mb-[8px] leading-[160%] font-[400]'>
              Remove all uncertainty and proudly showcase <br /> your authentic self and unique style.</p>
          </div>

        </div>
      </section>

      <section className="pt-[160px] md:pr-[32px]">
        <div className="mb-[80px] max-w-[720px] text-[100%] ">
          <h2 className='mb-[16px] leading-[120%] font-[500] text-[40px] md:text-[48px] text-[#f9f9f9e6]'>
            Copy. Paste. Publish.
          </h2>
          <p className=' font-[400] text-[20px] text-[#f9f9f9cc] leading[160%]'>
            Copy your links, paste them inside Tiles and publish on the go; all within a few minutes.
          </p>
        </div>

        <Videos />
      </section>

      <section className="pt-[160px] md:pr-[32px] m-auto">
        <div className="mb-[80px] text-[100%] ">
          <div className="mb-[80px]">
            <h2 className='mb-[16px] leading-[120%] font-[500] text-[40px] md:text-[48px] text-[#f9f9f9e6]'>
              Grab your link today!
            </h2>
            <p className=' font-[400] text-[20px] text-[#f9f9f9cc] leading[160%]'>
              Flaunt your Tiles link on your profile and stand out from the rest. Don’t wait or someone might take your favourite username.
            </p>
          </div>

          <button className='flex py-4 px-5 flex-row items-center justify-center gap-3 rounded-[32px] border border-[#ffffff1a] font-[500] text-[24px] md:text-[48px] text-[#3ad691] cursor-pointer w-full h-[20vh] md:h-[30vh] bg-[linear-gradient(180deg,#0F3021_0%,#071610_100%)] shadow-[0_4px_8px_#00000080] hover:shadow-[0_0_80px_#00ff9140] transition-all'>
            <Image src="/logo1.png" alt="" width={72} height={72} className="w-[40px] md:w-[72px] h-[40px] md:h-[72px]" />
            Create your Tiles
          </button>
        </div>
      </section>

      <footer className="pt-[100px] md:pt-[160px] md:pr-[32px] m-auto mb-6">
        <nav className="flex justify-between items-center">
          <a href="flex">
            <Image src="/logo.png" width={77} height={24} alt="logo" />
          </a>

          <div className='flex items-center gap-1 md:gap-2'>
            <a href=""><button className="text-sm md:text-[16px] font-[400] border-none text-[#ffffff80] cursor-pointer w-full rounded-[100px] transition-all hover:text-white px-1 md:px-3 py-2">
              Contact
            </button></a>
            <a href=""><button className="text-sm md:text-[16px] font-[400] border-none text-[#ffffff80] cursor-pointer w-full rounded-[100px] transition-all hover:text-white px-1 md:px-3 py-2">
              Tutorials
            </button></a>
            <a href=""><button className="text-sm md:text-[16px] font-[600] border-none text-[#ffffff80] cursor-pointer w-full rounded-[100px] transition-all bg-[#ffffff0d] hover:bg-[#ffffff1a] px-1 md:px-3 py-2">
              Log In
            </button></a>
          </div>
        </nav>
      </footer>
    </main>
  </>)
}
