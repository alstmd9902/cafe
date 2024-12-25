export default function MainBanner() {
  return (
    <div className="w-[92%] m-auto flex flex-col mb-[50px] lg:flex-row lg:mb-[120px] bg-[#f9f9f9] ">
      <div className="relative ">
        <img
          src="https://ecudemo276581.cafe24.com/SkinImg/img/main_map_pc.png"
          alt=""
        />
        <div
          className="absolute leading-[30px] text-[rgba(255,255,255)]
        top-[65%] left-[7%] text-2xl "
        >
          오프라인 스토어
        </div>
      </div>

      <div className="p-[8%]  lg:w-[70%] lg:pt-[3%] lg:pb-[3%] lg:pl-[5%] ">
        <div className="font-medium">
          <p>
            <strong className="text-sm leading-[26px]">주소</strong>
          </p>
          <p className="text-sm text-[#767676] leading-[26px]">
            서울특별시 동작구 보라매로0길 00
          </p>
        </div>
        <p>
          <br></br>
        </p>
        <p>
          <br></br>
        </p>
        <div>
          <p>
            <strong className="text-sm leading-[26px]">운영시간</strong>
          </p>
          <p className="text-sm text-[#767676] leading-[26px]">
            운영시간 : 오전 10시 ~ 오후 06시
          </p>
          <p className="text-sm text-[#767676] leading-[26px]">
            점심시간 : 오후 12시 ~ 오후 01시
          </p>
        </div>
        <div className="pt-[50px]">
          <button className="bg-[#d0ac88] text-white px-[35px] py-[13px] text-xs">
            바로가기
          </button>
        </div>
      </div>
    </div>
  );
}
