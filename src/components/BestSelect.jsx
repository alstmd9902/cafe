export default function BestSelect() {
  return (
    <article className="mb-[50px] w-[92%] m-auto lg:mb-[120px]">
      <div className="lg:hidden">
      <div className="mb-[15px]">
        <div className=" relative mb-5">
          <span className="absolute left-0 top-0 w-[20px] h-[2px] bg-[#d0ac88]"></span>
          <h2 className="text-[22px] font-sans pt-5 mb-[15px]">Best Select</h2>
          <p className="font-sans text-xs text-[#8888] ">
            고객님들이 셀렉한 베스트 아이템
          </p>
        </div>
        <ul className="flex pb-[15px]">
          <li className="relative">
            <button
              className="pt-[15px] pb-[13px] text-[#d0ac88] font-bold 
             after:content-[''] after:absolute after:w-full after:h-[2px]
             after:bg-[#d0ac88] after:left-0 after:bottom-[2px]
              transition-all duration-300
            "
            >
              Tables
            </button>
          </li>
          <li>
            <button className="pt-[15px] pb-[13px] ml-[15px]">
              Bed Frames
            </button>
          </li>
          <li>
            <button className="pt-[15px] pb-[13px] ml-[15px]">
              Sideboards
            </button>
          </li>
          <li>
            <button className="pt-[15px] pb-[13px] ml-[15px]">Couches</button>
          </li>
        </ul>
      </div>

      {/* img-scroll */}
      <section className="overflow-x-scroll scrollbar-hide">
        <div className=" flex justify-start items-start w-[calc(133px*8)]">
          <ul className="">
            <li className="mb-[35px]  mr-[10px] ">
              <a href="">
                <img
                  className="pb-[10px]"
                  src={
                    "https://ecudemo276581.cafe24.com/web/product/medium/202304/9590e27416e6a15095689f723acf33f4.png"
                  }
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="text-[#555555] text-sm pb-[10px] font-jost leading-[18px]">
                    미니 원목 화장대 타입B
                  </span>
                  <span className="text-xs  text-[#8c8c8c] font-jost pb-[10px]">
                    상품 요약설명입니다.
                  </span>
                  <strong className="pb-[5px] font-jost text-sm">
                    50.000원
                  </strong>
                  <div className="flex pb-[5px]">
                    <span className="w-3 h-3 bg-[#a37e65] mr-[2px]"></span>
                    <span className="w-3 h-3 bg-[#9e9e9e]"></span>
                  </div>
                </div>
              </a>
            </li>
          </ul>

          <ul className=" ">
            <li className="mb-[35px]  mr-[10px]">
              <a href="">
                <img
                  className="pb-[10px]"
                  src={
                    "https://ecudemo276581.cafe24.com/web/product/medium/202304/80ec0a85b53e6a9b381dc0302908bb11.png"
                  }
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="text-[#555555] text-sm pb-[10px] font-jost leading-[18px]">
                    패브릭 체어
                  </span>
                  <span className="text-xs  text-[#8c8c8c] font-jost pb-[10px]">
                    상품 요약설명입니다.
                  </span>
                  <strong className="pb-[5px] font-jost text-sm">
                    10.000원
                  </strong>
                </div>
              </a>
            </li>
          </ul>

          <ul className=" ">
            <li className="mb-[35px]  mr-[10px] relative">
              <a href="">
                <img
                  className="pb-[10px]"
                  src={
                    "https://ecudemo276581.cafe24.com/web/product/medium/202304/ee8538531e7da3ca0a44c5c184ca85cc.png"
                  }
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="text-[#555555] text-sm pb-[10px] font-jost leading-[18px]">
                    개방형 원목 협탁탁
                  </span>
                  <span className="text-xs  text-[#8c8c8c] font-jost pb-[10px]">
                    상품 요약설명입니다.
                  </span>
                  <del className="pb-[5px] font-jost text-[13px] text-[#737373] ">
                    100.000원
                  </del>
                  <strong className="pb-[5px] font-jost text-sm">
                    50.000원
                  </strong>
                  <div className="flex pb-[5px]">
                    <span className="w-3 h-3 bg-[#a37e65] mr-[2px]"></span>
                    <span className="w-3 h-3 bg-[#9e9e9e]"></span>
                  </div>
                </div>
                <div className="w-10 h-10 absolute bg-[#d0ac88] rounded-full  top-[15px] right-[15px] flex items-center justify-center text-white">
                  50%
                </div>
              </a>
            </li>
          </ul>

          <ul className=" ">
            <li className="mb-[35px]  mr-[10px] relative">
              <a href="">
                <img
                  className="pb-[10px]"
                  src={
                    "https://ecudemo276581.cafe24.com/web/product/medium/202304/34af6cc25537b0e00a40d013749033e7.png"
                  }
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="text-[#555555] text-sm pb-[10px] font-jost leading-[18px]">
                    6단 와이드 서랍장
                  </span>
                  <span className="text-xs  text-[#8c8c8c] font-jost pb-[10px]">
                    상품 요약설명입니다.
                  </span>
                  <del className="pb-[5px] font-jost text-[13px] text-[#737373] ">
                    100.000원
                  </del>
                  <strong className="pb-[5px] font-jost text-sm">
                    50.000원
                  </strong>
                  <div className="flex pb-[5px]">
                    <span className="w-3 h-3 bg-[#a37e65] mr-[2px]"></span>
                    <span className="w-3 h-3 bg-[#9e9e9e]"></span>
                  </div>
                </div>
              </a>
            </li>
          </ul>

          <ul className=" ">
            <li className="mb-[35px]  mr-[10px] relative">
              <a href="">
                <img
                  className="pb-[10px]"
                  src={
                    "https://ecudemo276581.cafe24.com/web/product/medium/202304/bff9aac3a73455301205acb54b5be682.png"
                  }
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="text-[#555555] text-sm pb-[10px] font-jost leading-[18px]">
                    블랙 가죽 체어
                  </span>
                  <span className="text-xs  text-[#8c8c8c] font-jost pb-[10px]">
                    상품 요약설명입니다.
                  </span>
                  <del className="pb-[5px] font-jost text-[13px] text-[#737373] ">
                    100.000원
                  </del>
                  <strong className="pb-[5px] font-jost text-sm">
                    80.000원
                  </strong>
                </div>
                <div className="w-10 h-10 absolute bg-[#d0ac88] rounded-full  top-[15px] right-[15px] flex items-center justify-center text-white">
                  50%
                </div>
              </a>
            </li>
          </ul>

          <ul className=" ">
            <li className="mb-[35px]  mr-[10px] relative">
              <a href="">
                <img
                  className="pb-[10px]"
                  src={
                    "https://ecudemo276581.cafe24.com/web/product/medium/202304/9590e27416e6a15095689f723acf33f4.png"
                  }
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="text-[#555555] text-sm pb-[10px] font-jost leading-[18px]">
                    미니 원목 화장대 타입A
                  </span>
                  <span className="text-xs  text-[#8c8c8c] font-jost pb-[10px]">
                    상품 요약설명입니다.
                  </span>
                  <del className="pb-[5px] font-jost text-[13px] text-[#737373] ">
                    100.000원
                  </del>
                  <strong className="pb-[5px] font-jost text-sm">
                    50.000원
                  </strong>
                </div>
                <div className="w-10 h-10 absolute bg-[#d0ac88] rounded-full  top-[15px] right-[15px] flex items-center justify-center text-white">
                  50%
                </div>
              </a>
            </li>
          </ul>

          <ul className=" ">
            <li className="mb-[35px]  mr-[10px] relative">
              <a href="">
                <img
                  className="pb-[10px]"
                  src={
                    "https://ecudemo276581.cafe24.com/web/product/medium/202304/450ff31088a3067b15b7533e953b1575.png"
                  }
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="text-[#555555] text-sm pb-[10px] font-jost leading-[18px]">
                    사무용 의자
                  </span>
                  <span className="text-xs  text-[#8c8c8c] font-jost pb-[10px]">
                    상품 요약설명입니다.
                  </span>
                  <del className="pb-[5px] font-jost text-[13px] text-[#737373] ">
                    200.000원
                  </del>
                  <strong className="pb-[5px] font-jost text-sm">
                    120.000원
                  </strong>
                </div>
                <div className="w-10 h-10 absolute bg-[#d0ac88] rounded-full  top-[15px] right-[15px] flex items-center justify-center text-white">
                  40%
                </div>
              </a>
            </li>
          </ul>

          <ul className=" ">
            <li className="mb-[35px]  mr-[10px] ">
              <a href="">
                <img
                  className="pb-[10px]"
                  src={
                    "https://ecudemo276581.cafe24.com/web/product/medium/202304/450ff31088a3067b15b7533e953b1575.png"
                  }
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="text-[#555555] text-sm pb-[10px] font-jost leading-[18px]">
                    르네상스 액자
                  </span>
                  <span className="text-xs  text-[#8c8c8c] font-jost pb-[10px]">
                    상품 요약설명입니다.
                  </span>
                  <strong className="pb-[5px] font-jost text-sm">
                    50.000원
                  </strong>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      </div>

      {/* 1024 영역 */}
      <div className="lg:block hidden">
      <div className="flex justify-start">
      <div className="mb-[15px] flex flex-col flex-1">
        <div className=" relative mb-[60px]">
          <span className="absolute left-0 top-0 w-[20px] h-[2px] bg-[#d0ac88]"></span>
          <h2 className="text-[27px] pt-5 mb-[15px]">Best Select</h2>
          <p className="text-xs text-[#8888] ">
            고객님들이 셀렉한 베스트 아이템
          </p>
        </div>
        <ul className="flex pb-[15px] flex-wrap justify-start">
          <li className=" mb-10 w-1/2">
            <button
              className=" text-[#d0ac88] font-bold relative
             after:content-[''] after:absolute after:w-full after:h-[2px]
             after:bg-[#d0ac88] after:left-0 after:bottom-[-8px]
              transition-all duration-300 text-xl leading-[1] 
            "
            >
              Tables
            </button>
          </li>
          <li className="mb-10 w-1/2">
            <button className=" text-xl leading-[1]">
              Bed Frames
            </button>
          </li>
          <li className="mb-10 w-1/2"> 
            <button className=" text-xl leading-[1]">
              Sideboards
            </button>
          </li>
          <li className="mb-10 w-1/2">
            <button className="text-xl leading-[1]">Couches</button>
          </li>
        </ul>
      </div>

      {/* img-scroll */}

        <div className="flex w-[75%] relative">
            <ul className="flex">
              <li className="w-[33.33%]  cursor-pointer group">
                    <div className="relative mx-[10px]">
                      <a href="">
                        <img src="https://ecudemo276581.cafe24.com/web/product/medium/202304/9590e27416e6a15095689f723acf33f4.png" alt="" />
                      </a>

                    <div className="absolute  left-0 right-0 bottom-0 pt-[5%] pl-[3%] pb-[5%] pr-[5%]
                    bg-[rgb(1,1,1,0.5)] opacity-0 
                    transform translate-y-[40px] transition-transform duration-[0.8s] ease-in-out group-hover:opacity-100 group-hover:translate-y-0 mt-[30px]">
                    <div className="flex flex-col">
                    <span className="text-white text-sm pb-[10px]  font-jost leading-[18px]">
                    미니 원목 화장대 타입B
                    </span>
                    <span className="text-xs  text-white font-jost pb-[10px]">
                      상품 요약설명입니다.
                    </span>
                    <strong className="text-white pb-[5px] font-jost text-sm">
                      50.000원
                    </strong>
                    <div className="flex pb-[5px]">
                    <span className="w-3 h-3 bg-[#a37e65] mr-[2px] border border-stone-50"></span>
                    <span className="w-3 h-3 bg-[#9e9e9e] border border-stone-50"></span>
                  </div>
                  </div>
                  </div>
                  </div>
              </li>

              <li className="w-[33.33%]  cursor-pointer group">
                    <div className="relative mx-[10px]">
                      <a href="">
                        <img src="https://ecudemo276581.cafe24.com/web/product/medium/202304/80ec0a85b53e6a9b381dc0302908bb11.png" alt="" />
                      </a>

                    <div className="absolute  left-0 right-0 bottom-0 pt-[5%] pl-[3%] pb-[5%] pr-[5%]
                    bg-[rgb(1,1,1,0.5)] opacity-0 
                    transform translate-y-[40px] transition-transform duration-[0.8s] ease-in-out group-hover:opacity-100 group-hover:translate-y-0 mt-[30px]">
                    <div className="flex flex-col">
                    <span className="text-white text-sm pb-[10px]  font-jost leading-[18px]">
                    패브릭 체어
                    </span>
                    <span className="text-xs  text-white font-jost pb-[10px]">
                      상품 요약설명입니다.
                    </span>
                    <strong className="text-white pb-[5px] font-jost text-sm">
                      10.000원
                    </strong>
                  </div>
                  </div>
                  </div>
              </li>

              <li className="w-[33.33%]  cursor-pointer group">
                    <div className="relative mx-[10px]">
                      <a href="">
                        <img src="https://ecudemo276581.cafe24.com/web/product/medium/202304/ee8538531e7da3ca0a44c5c184ca85cc.png" alt="" />
                      </a>

                    <div className="absolute  left-0 right-0 bottom-0 pt-[5%] pl-[3%] pb-[5%] pr-[5%]
                    bg-[rgb(1,1,1,0.5)] opacity-0 
                    transform translate-y-[40px] transition-transform duration-[0.8s] ease-in-out group-hover:opacity-100 group-hover:translate-y-0 mt-[30px]">
                    <div className="flex flex-col">
                    <span className="text-white text-sm pb-[10px]  font-jost leading-[18px]">
                    개방형 원목 협탁탁
                    </span>
                    <span className="text-xs  text-white font-jost pb-[10px]">
                      상품 요약설명입니다.
                    </span>
                    <del className="pb-[5px] font-jost text-[13px] text-white">
                    100.000원
                  </del>
                    <strong className="text-white pb-[5px] font-jost text-sm">
                      50.000원
                    </strong>
                    <div className="flex pb-[5px]">
                    <span className="w-3 h-3 bg-[#a37e65] mr-[2px] border border-stone-50"></span>
                    <span className="w-3 h-3 bg-[#9e9e9e] border border-stone-50"></span>
                  </div>
                  </div>
                  </div>
                  </div>
              </li>
            </ul>

              <span className="block bg-[#f6eee7] w-full h-1 absolute bottom-[-50px] left-0 "></span>
              <span className="block bg-[#d0ac88] w-64 h-1 absolute bottom-[-50px] left-0 "></span>
        </div>
      </div>
      </div>
    </article>
  );
}
