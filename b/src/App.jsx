import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'animate.css';
import { Icon } from '@iconify/react';

const Home = () => {
  return (
    <div className='w-full h-screen bg-stone-900'>
      <div className='p-6'>
        <div className='flex items-center flex-rows gap-16 jusify-center'>
          <div className='text-slate-100 font-semibold text-5xl trackig-widest'>
            MICROSOCIETY.
          </div>
          <div className='flex flex-row gap-10 mt-5'>
            <Link to="/" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200'>
              Home
            </Link>
            <Link to="/aboutus" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200'>
              About Us
            </Link>
            <Link to="/whatwedo" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200' >
              What We Do
            </Link>
            <Link to="/achievements" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200' >
              Achievements
            </Link>
          </div>
          <div className='flex flex-row gap-6 absolute top-30 right-8'>
            <button className='p-4 rounded bg-sky-400 font-black tracking-wider hover:bg-sky-800 duration-200 hover:text-slate-100 duration-200'>
              <Link to="/signup">Sign up
              </Link>
            </button>
            <button className='p-4 rounded bg-sky-400 font-black tracking-wider hover:bg-sky-800 duration-200 hover:text-slate-100 duration-200'>
              <Link to="/login">Log in
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-5 flex flex-col text-lg md:text-2xl gap-3 md:gap-5 text-slate-100">
        <a href="https://www.youtube.com/channel/UCQrCDpJ64I4rDXwcptkYWyA" className="rotate-90 hover:text-pink-400 duration-200">
          <Icon icon="akar-icons:youtube-fill" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100069344944940" className="rotate-90 hover:text-pink-400 duration-200">
          <Icon icon="brandico:facebook-rect" />
        </a>
        <a href="https://github.com/LimuruTempestBest" className="rotate-90 hover:text-pink-400 duration-200">
          <Icon icon="fa:github-square" />
        </a>
      </div>
    </div>
  );
}

const AboutUs = () => {
  return (
    <div className='w-full h-screen bg-stone-900'>
      <div className='p-6'>
        <div className='flex items-center flex-rows gap-16 jusify-center'>
          <div className='text-slate-100 font-semibold text-5xl trackig-widest'>
            MICROSOCIETY.
          </div>
          <div className='flex flex-row gap-10 mt-5'>
            <Link to="/" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200'>
              Home
            </Link>
            <Link to="/aboutus" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200'>
              About Us
            </Link>
            <Link to="/whatwedo" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200' >
              What We Do
            </Link>
            <Link to="/achievements" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200' >
              Achievements
            </Link>

          </div>
          <div className='flex flex-row gap-6 absolute top-30 right-8'>
            <button className='p-4 rounded bg-sky-400 font-black tracking-wider hover:bg-sky-800 duration-200 hover:text-slate-100 duration-200'>
              <Link to="/signup">Sign up
              </Link>
            </button>
            <button className='p-4 rounded bg-sky-400 font-black tracking-wider hover:bg-sky-800 duration-200 hover:text-slate-100 duration-200'>
              <Link to="/login">Log in
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mt-52 flex-row gap-10 mt-5 animate__animated animate__fadeInUp'>
        <Link to="/history" className='p-4 rounded bg-sky-400 font-black tracking-wider hover:bg-sky-800 duration-200 hover:text-slate-100 duration-200'>
          History
        </Link>
        <Link to="/elbem" className='p-4 rounded bg-sky-400 font-black tracking-wider hover:bg-sky-800 duration-200 hover:text-slate-100 duration-200'>
          Elbem
        </Link>
        <Link to="/council" className='p-4 rounded bg-sky-400 font-black tracking-wider hover:bg-sky-800 duration-200 hover:text-slate-100 duration-200' >
          Council
        </Link>
        <Link to="/contact" className='p-4 rounded bg-sky-400 font-black tracking-wider hover:bg-sky-800 duration-200 hover:text-slate-100 duration-200' >
          Contact
        </Link>

      </div>
      <div className="absolute bottom-5 left-5 flex flex-col text-lg md:text-2xl gap-3 md:gap-5 text-slate-100">
        <a href="https://www.youtube.com/channel/UCQrCDpJ64I4rDXwcptkYWyA" className="rotate-90 hover:text-pink-400 duration-200">
          <Icon icon="akar-icons:youtube-fill" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100069344944940" className="rotate-90 hover:text-pink-400 duration-200">
          <Icon icon="brandico:facebook-rect" />
        </a>
        <a href="https://github.com/LimuruTempestBest" className="rotate-90 hover:text-pink-400 duration-200">
          <Icon icon="fa:github-square" />
        </a>
      </div>
    </div>
  );
}

const History = () => {
  return (
    <div className='flex flex-col w-full h-screen bg-stone-900'>
      <div className='text-lg tracking-widest font-black text-slate-100 p-10 mt-20 animate__animated animate__fadeInUp'>

        为往后电脑逐渐普遍化做好充分的准备，校方于1982年成立了电脑学会，
        由陈昌新、
        石锦才、郑淑娴三位导师担任顾问。在老师们的悉心指导及会员们的努力耕耘下，一个有
        纪律、效率高且办事能力高的“电脑学会”终于诞生了！↓本原属辅导处管理之课外活动团
        体，后于1984年脱离辅导处，成为电脑中心属下之学术性团体。到了1985年，电脑学
        会正式地改名为电脑协会，成为了一个服务性学术团体。2015年，电脑中心改名为资讯
        处。2016年，由资讯处与联课处共同管理。
        1996年6月，本协会出版了第一期的《电脑快讯》一一创T刊号。《电脑快讯》是
        一份双月刊，其中的内容除了包括最新的电脑资讯外，还介绍一些实用有趣的网站，更为
        同学们解答电脑难题，让师生们更充分的利用电脑，掌握电脑资讯，走在时代的尖端。本
        协会在2005年以及2007年成功出版了两份《电脑快讯》特刊，颇受好评。而今，《电
        脑快讯》已经进入了第20个年头，成功出版了71期的《电脑快讯》。2014年8月，高
        三会员设计并开发了宽艺网。宽艺网的目标是通过帮助各课外活动团体建立形像和分享创
        作，培养学生的创造力。2015年，本协会举办了第一届Robocode机器人编程比赛。
        2016年，由于单班制的实施，迎来了首批初中会员的加入，为协会注入了新朝气！除此
        之外，亦增加了Rero,Audio、电绘等学习组。3月，本协会主办了与吉隆坡中华独立中学
        的交流营。在上会课之余，康乐组也安排了一些康乐活动，增进会员们之间的感情。此外
        协会也参加每两年一次的三协交流营，促进各团之间的感情。不仅如此，会所的墙壁也重
        新粉刷及设计，让会员们能够享受一个全新的环境。到了2017年，电脑协会的目标为所
        有会员都必须会基本的编程和培养自学的能力并注入了电协双核精神，让会员们更加团结
        更有纪律。2018年，资讯资源处和电脑室都搬迁至新建的郭钦鉴楼，为会员提供新的环
        境学习。同时，电脑协会会所也从宽友楼搬到福建会馆楼
        第28届理事层当中更增加了副财政、副总务、副文书、技术和查账这些职位，以
        肩负本协会的工作。此外，第31届理事层也决定将流星工作室关闭，其工作将交由
        Video Editing组接手。在第33届理事层中废除了查账职位，并将各工作组组长职位增加
        至2位，心情职务则由康乐组接手。在第38届理事层中，除了吕务组，其余工作组组长
        减至一人。在第39届理事层中废除了技术职位，其虹作由研教接手。在第40届理事层中
        增加了查账职位。跨越二十一世纪，电脑协会不知吓觉已迈入第四十个年头，即将面对新
        的挑战与改革，希望电脑协会的每一份子在理事们英明的领导之下，能走向更光明、更美
        好的前途。
        受新冠肺炎疫情和行动管制令影响，本团于2020年4月22日第一次召开线上会员大会。
      </div>
      <div className="flex flex-row items-center gap-2 absolute bottom-10 right-10">
        <Link to="/aboutus">
          <Icon className="text-lg md:text-2xl text-slate-100 hover:text-rose-400 duration-200" icon="bi:arrow-left-square-fill" />
        </Link>
        <div className="text-slate-100 text-xs md:text-lg font-semibold tracking-wider">
          BACK TO LAST PAGE
        </div>
      </div>
    </div >
  );
}

const Elbem = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen bg-stone-900'>
      <div>
        <img className='rounded animate__animated animate__fadeInUp' src="https://www.foonyew.edu.my/uploads/image/co_curriculars/badge/1530689364_computer_society.jpeg"></img>
        <div className='flex flex-col gap-3 justify-center items-center mt-6 animate__animated animate__fadeInUp animate__delay-1s'>
          <div className='text-2xl text-sky-500 font-black '> 蓝色 === 团结一致，发奋图强</div>
          <div className='text-2xl text-rose-500 font-black'>红色 === 友爱，温馨</div>
          <div className='text-2xl text-slate-100 font-black'>白色 === 美好未来</div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 absolute bottom-10 right-10">
        <Link to="/aboutus">
          <Icon className="text-lg md:text-2xl text-slate-100 hover:text-rose-400 duration-200" icon="bi:arrow-left-square-fill" />
        </Link>
        <div className="text-slate-100 text-xs md:text-lg font-semibold tracking-wider">
          BACK TO LAST PAGE
        </div>
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-stone-900'>
      <div className='text-slate-100 font-bold text-5xl animate__animated animate__fadeInUp'>
        Contact
      </div>
      <div className='flex flex-col gap-3 tracking-widest mt-32'>
        <div className='text-sky-500 font-black text-2xl animate__animated animate__fadeInUp animate__delay-1s'>
          FB === FYMCS 新山寬柔中學電腦協會
        </div>
        <div className='text-red-500 font-black text-2xl animate__animated animate__fadeInUp animate__delay-2s'>
          IG === @fymcs_jb
        </div>
        <div className='text-lime-500 font-black text-2xl animate__animated animate__fadeInUp animate__delay-3s'>
          联课活动处号码：+607-2224446
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 absolute bottom-10 right-10">
        <Link to="/aboutus">
          <Icon className="text-lg md:text-2xl text-slate-100 hover:text-rose-400 duration-200" icon="bi:arrow-left-square-fill" />
        </Link>
        <div className="text-slate-100 text-xs md:text-lg font-semibold tracking-wider">
          BACK TO LAST PAGE
        </div>
      </div>
    </div>
  )
}
const WhatWeDo = () => {
  return (
    <div className='w-full h-screen bg-stone-900'>
      <div className='p-6'>
        <div className='flex items-center flex-rows gap-16 jusify-center'>
          <div className='text-slate-100 font-semibold text-5xl trackig-widest'>
            MICROSOCIETY.
          </div>
          <div className='flex flex-row gap-10 mt-5'>
            <Link to="/" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200'>
              Home
            </Link>
            <Link to="/aboutus" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200'>
              About Us
            </Link>
            <Link to="/whatwedo" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200' >
              What We Do
            </Link>
            <Link to="/achievements" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200' >
              Achievements
            </Link>

          </div>
          <div className='flex flex-row gap-6 absolute top-30 right-8'>
            <button className='p-4 rounded bg-sky-400 font-black tracking-wider hover:bg-sky-800 duration-200 hover:text-slate-100 duration-200'>
              <Link to="/signup">Sign up
              </Link>
            </button>
            <button className='p-4 rounded bg-sky-400 font-black tracking-wider hover:bg-sky-800 duration-200 hover:text-slate-100 duration-200'>
              <Link to="/login">Log in
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Achievements = () => {
  return (
    <div className='w-full h-screen bg-stone-900'>
      <div className='p-6'>
        <div className='flex items-center flex-rows gap-16 jusify-center'>
          <div className='text-slate-100 font-semibold text-5xl trackig-widest'>
            MICROSOCIETY.
          </div>
          <div className='flex flex-row gap-10 mt-5'>
            <Link to="/" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200'>
              Home
            </Link>
            <Link to="/aboutus" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200'>
              About Us
            </Link>
            <Link to="/whatwedo" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200' >
              What We Do
            </Link>
            <Link to="/achievements" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200' >
              Achievements
            </Link>

          </div>
          <div className='flex flex-row gap-6 absolute top-30 right-8'>
            <button className='p-4 rounded bg-sky-400 font-black tracking-wider hover:bg-sky-800 duration-200 hover:text-slate-100 duration-200'>
              <Link to="/signup">Sign up
              </Link>
            </button>
            <button className='p-4 rounded bg-sky-400 font-black tracking-wider hover:bg-sky-800 duration-200 hover:text-slate-100 duration-200'>
              <Link to="/login">Log in
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const SignUp = () => {
  return (
    <div className='w-full h-screen bg-stone-900'>
      <div className='p-6'>
        <div className='flex items-center flex-rows gap-16 jusify-center'>
          <div className='text-slate-100 font-semibold text-5xl trackig-widest'>
            MICROSOCIETY.
          </div>
          <div className='flex flex-row gap-10 mt-5'>
            <Link to="/" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200'>
              Home
            </Link>
            <Link to="/aboutus" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200'>
              About Us
            </Link>
            <Link to="/whatwedo" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200' >
              What We Do
            </Link>
            <Link to="/achievements" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200' >
              Achievements
            </Link>

          </div>
          <div className='flex flex-row gap-6 absolute top-30 right-8'>
            <button className='p-4 rounded bg-sky-400 font-black tracking-wider hover:bg-sky-800 duration-200 hover:text-slate-100 duration-200'>
              <Link to="/signup">Sign up
              </Link>
            </button>
            <button className='p-4 rounded bg-sky-400 font-black tracking-wider hover:bg-sky-800 duration-200 hover:text-slate-100 duration-200'>
              <Link to="/login">Log in
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const LogIn = () => {
  return (
    <div className='w-full h-screen bg-stone-900'>
      <div className='p-6'>
        <div className='flex items-center flex-rows gap-16 jusify-center'>
          <div className='text-slate-100 font-semibold text-5xl trackig-widest'>
            MICROSOCIETY.
          </div>
          <div className='flex flex-row gap-10 mt-5'>
            <Link to="/" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200'>
              Home
            </Link>
            <Link to="/aboutus" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200'>
              About Us
            </Link>
            <Link to="/whatwedo" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200' >
              What We Do
            </Link>
            <Link to="/achievements" className='text-slate-100 font-semibold text-2xl tracking-wider hover:text-sky-500 duration-200' >
              Achievements
            </Link>

          </div>
          <div className='flex flex-row gap-6 absolute top-30 right-8'>
            <button className='p-4 rounded bg-sky-400 font-black tracking-wider hover:bg-sky-800 duration-200 hover:text-slate-100 duration-200'>
              <Link to="/signup">Sign up
              </Link>
            </button>
            <button className='p-4 rounded bg-sky-400 font-black tracking-wider hover:bg-sky-800 duration-200 hover:text-slate-100 duration-200'>
              <Link to="/login">Log in
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/whatwedo" element={<WhatWeDo />}></Route>
        <Route path="/achievements" element={<Achievements />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/elbem" element={<Elbem />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

      </Routes>
    </Router>
  )
}

export default App;
