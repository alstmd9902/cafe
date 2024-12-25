export default function Lifestyle() {
  return (
    <article className="w-[92%] m-auto mb-[50px] lg:mb-[120px]">
      <div className="lg:hidden">
        <div className="overflow-x-auto  scrollbar-hide ">  {/* 스크롤바 없애는거 알아보기 스크롤widht none 했는데 안됨 */}
          <div className="pt-5 pb-[30px] relative">
            <span className="absolute left-0 top-0 w-[20px] h-[2px] bg-[#d0ac88]"></span>
            <h2 className="text-[22px] font-sans">Lifestyle</h2>
            <p className="pt-3 font-sans text-xs text-[#8888]">
              프리미엄 라이프스타일의 완성
            </p>
          </div>

          <div className="w-[calc(291px*4)]  flex max-w-[1480px]">
            <div className="relative w-[291px] mr-4 ">
              <img
                src={
                  "https://ecudemo276581.cafe24.com/SkinImg/img/main_banner01_pc.png"
                }
                alt=""
              />

              <div
                className="absolute bg-white bottom-0 flex flex-col 
          pt-[25px] pr-0 pb-[20px] pl-[25px] ml-[30px] gap-5 right-0 cursor-pointer"
              >
                <span className="text-[18px] font-sans">
                  편안함이 느껴지는 원목 소파
                </span>
                <span className="font-sans text-sm text-[#8888] hover:underline">
                  자세히 살펴보기
                </span>
              </div>
            </div>

            <div className="relative w-[291px]  mr-4 ">
              <img
                src={
                  "https://ecudemo276581.cafe24.com/SkinImg/img/main_banner02_pc.png"
                }
                alt=""
              />

              <div
                className="absolute bg-white bottom-0 flex flex-col 
          pt-[25px] pr-0 pb-[20px] pl-[25px] ml-[30px] gap-5 right-0 cursor-pointer"
              >
                <span className="text-[18px] font-sans">
                  감성 인테리어 소품 시즌 OFF
                </span>
                <span className="font-sans text-sm text-[#8888] hover:underline">
                  자세히 살펴보기
                </span>
              </div>
            </div>

            <div className="relative w-[291px]">
              <img
                src={
                  "https://ecudemo276581.cafe24.com/SkinImg/img/main_banner03_pc.png"
                }
                alt=""
              />

              <div
                className="absolute bg-white bottom-0 flex flex-col 
          pt-[25px] pr-0 pb-[20px] pl-[25px] ml-[30px] gap-5 right-0 cursor-pointer"
              >
                <span className="text-[18px] font-sans">
                  감각적인 디자인 브랜드
                </span>
                <span className="font-sans text-sm text-[#8888] hover:underline">
                  자세히 살펴보기
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 1024 영역 */}
      <div className="lg:block hidden">
        <div>
          <div className="pt-5 mb-[30px] relative">
          <span className="absolute left-0 top-0 w-[20px] h-[2px] bg-[#d0ac88]"></span>
            <h2 className="text-[22px] ">Lifestyle</h2>
            <p className="pt-3 text-xs text-[#8888]">
              프리미엄 라이프스타일의 완성
            </p>
          </div>

          <div className="inline-flex justify-between m-[-10px] mb-[30px] max-w-[1440px]">
            <div className=" px-[10px] max-w-[500px]">
              <a href="" className="relative">
                <img
                  src={
                    "https://ecudemo276581.cafe24.com/SkinImg/img/main_banner01_pc.png"
                  }
                  alt=""
                />

                <div
                  className="absolute bg-white bottom-0  right-0 cursor-pointer
              ml-[60px] pt-[35px] pb-[20px] pl-[35px]"
                >
                  <div className="text-[23px] leading-[1.2] font-medium">
                    편안함이 느껴지는 원목 소파
                  </div>
                  <div className="pt-[20px] text-sm text-[#8888] hover:underline leading-[1.5]">
                    자세히 살펴보기
                  </div>
                </div>
              </a>
            </div>

            <div className="px-[10px] max-w-[500px]">
              <a href="" className="relative ">
                <img
                  src={
                    "https://ecudemo276581.cafe24.com/SkinImg/img/main_banner02_pc.png"
                  }
                  alt=""
                />

                <div
                  className="absolute bg-white bottom-0  right-0 cursor-pointer
              ml-[60px] pt-[35px] pb-[20px] pl-[35px]"
                >
                  <div className="text-[23px] leading-[1.2] font-medium">
                    감성 인테리어 소품 시즌 OFF
                  </div>
                  <div className="text-sm text-[#8888] hover:underline pt-[20px] leading-[1.5]">
                    자세히 살펴보기
                  </div>
                </div>
              </a>
            </div>

            <div className=" px-[10px] max-w-[500px]">
              <a href="" className="relative">
                <img
                  src={
                    "https://ecudemo276581.cafe24.com/SkinImg/img/main_banner03_pc.png"
                  }
                  alt=""
                />

                <div
                  className="absolute bg-white bottom-0 flex flex-col 
                pt-[35px] pr-0 pb-[20px] pl-[35px] ml-[60px] right-0 cursor-pointer"
                >
                  <span className="text-[23px] leading-[1.2] font-medium">
                    감각적인 디자인 브랜드
                  </span>
                  <span className="text-sm text-[#8888] hover:underline pt-[20px] leading-[1.5]">
                    자세히 살펴보기
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

("https://ecudemo276581.cafe24.com/SkinImg/img/main_banner02_pc.png");

("https://ecudemo276581.cafe24.com/SkinImg/img/main_banner03_pc.png");
