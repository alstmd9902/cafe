export default function Footer() {
  return (
    <footer className="w-[92%] m-auto lg:pt-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div>
        <img
          className="w-[100px] pt-[30px] pb-[45px] lg:pb-[50px] lg:pt-0"
          src={
            "https://ecudemo276581.cafe24.com/web/upload/category/logo/v2_043c8f4d2cead2d428fb5fe23064c4ab_u6jVyWO4TI_bottom.jpg"
          }
          alt=""
        />
        
        <div className="lg:flex lg:flex-wrap">
        
        <strong className="text-sm mb-[10px] block">쇼핑몰 기본정보</strong>
        <div className="flex flex-wrap mb-[30px]">
          <div className="mr-[10px] text-xs leading-[1.8] text-[#1a1a1a] tracking-tighter
          lg:text-[13px]">
            <span className="font-bold">상호명</span>
            <span>OOO</span>
          </div>
          <div className="mr-[10px] text-xs leading-[1.8] text-[#1a1a1a] tracking-tighter
          lg:text-[13px]">
            <span className="font-bold">대표자명</span>
            <span>OOO</span>
          </div>
          <div className="mr-[10xp] text-xs leading-[1.8] text-[#1a1a1a] tracking-tighterlg:text-[13px]">
            <span className="font-bold">사업장 주소</span>
            <span>07071 서울특별시 동작구 보라매로5길 15</span>
          </div>
          <div className="text-xs leading-[1.8] text-[#1a1a1a] tracking-tighter mr-[10px]lg:text-[13px]">
            <span className="font-bold">대표 전화 </span>
            <span>OOOO OOOO</span>
          </div>
          <div className=" text-xs leading-[1.8] text-[#1a1a1a] tracking-tighter mr-[10px]lg:text-[13px]">
            <span className="font-bold">사업자 등록번호</span>
            <span>OOO OO OOOOO</span>
          </div>
          <div className="text-xs leading-[1.8] text-[#1a1a1a] mr-[10px] tracking-tighterlg:text-[13px]">
            <span className="font-bold">통신판매업 신고번호</span>
            <span>기타</span>
          </div>
          <div className="mr-[10xp] text-xs leading-[1.8] text-[#1a1a1a] tracking-tighterlg:text-[13px]">
            <span className="font-bold">개인정보보호책임자</span>
            <span>OOO</span>
          </div>
        </div>
        </div>
        </div>

        <div className="lg:flex lg:flex-col">
        <div className="mb-[20px] lg:mb-[50px]">  {/* 맨끝부분으로 보내는것 알아보기 order 사용시 안됨 */}
          <ul className="flex flex-wrap lg:justify-end ">
            <li className="mr-[25px] mb-[10px]">
              <a href="" className="text-[13px]">
                회사소개
              </a>
            </li>
            <li className="mr-[25px] mb-[10px]">
              <a href="">이용약관</a>
            </li>
            <li className="mr-[25px] mb-[10px] font-bold">
              <a href="">개인정보처리방침</a>
            </li>
            <li className="mr-[25px] mb-[10px]">
              <a href="">이용안내</a>
            </li>
          </ul>
        </div>
        <div className=" lg:flex lg:justify-between">
        <div className="mr-[55px] mb-[30px] font-jost lg:mr-[55px]">
          <div className="mb-[10px] tracking-tighter leading-6 text-sm ">
            <strong>고객센터 정보</strong>
          </div>
          <div className="tracking-tighter leading-6 text-xs mb-[10px] ">
            <span className="pr-[10px] font-bold">상담/주문전화</span>
            <span>0000-0000</span>
          </div>
          <div className="tracking-tighter leading-6 text-xs mb-[10px] ">
            <span className="font-bold ">상담/주문 이메일</span>
            <br />
            <span>test@test.com</span>
          </div>
          <div className="tracking-tighter leading-6 text-xs mb-[10px]">
            <span className="font-bold ">CS운영시간</span>
            <br></br>
            <span>
              Daily : 10:00 - 18:00 <br></br>Lunch : 12:00 - 13:00<br></br>Sat
              &amp; Sun &amp; Holiday : Day Off
            </span>
          </div>
        </div>

        <div className="mr-[55px] mb-[30px]">
          <div className="mb-[10px] tracking-tighter leading-6 text-sm">
            <strong>결제정보</strong>
          </div>
          <div className="tracking-tighter leading-6 text-xs">
            <span className="font-bold">무통장 계좌정보</span>
          </div>
          <div className="tracking-tighter leading-6 text-xs">
            <span className="pr-[10px]">은행 </span>
            <span className="pr-[10px]">0000-000-00000</span>
            <span>예금주</span>
          </div>
        </div>
        <div className="tracking-tighter leading-6 mb-[20px]">
          <strong className="mb-[10px] text-sm">SNS</strong>
          <div className=" mb-[10px] tracking-tighter leading-6 text-xs flex flex-wrap
          lg:flex-col">
            <a href="" className="mr-[25px]">
              insragram
            </a>
            <a href="" className="mr-[25px]">
              facebook
            </a>
            <a href="" className="mr-[25px]">
              kakao
            </a>
            <a href="" className="mr-[25px]">
              twitter
            </a>
            <a href="" className="mr-[25px]">
              youtube
            </a>
            <a href="" className="mr-[25px]">
              blog
            </a>
          </div>
        </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
