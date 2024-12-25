import meun_bar from "../assets/menu_bar.png";
import search from "../assets/search.png";
import arrow from "../assets/arrow.png";
import person from "../assets/person.png";
import cart from "../assets/cart.png";

export default function Header() {
  return (
    <header>
      {/* 모바일 영역 */}
      <div className="lg:hidden w-[92%] m-auto x">
        <div className="w-full flex justify-between items-center h-[65px]">
          <a
            href=""
            className="flex items-center  justify-center w-[30px] h-full
            border-b-orange-600"
          >
            <img src={meun_bar} className="w-[30px] h-[35px]" alt="menu" />
          </a>
          <a href="">
            <img
              className="w-[107px]"
              src={
                "https://ecudemo276581.cafe24.com/web/upload/category/logo/v2_043c8f4d2cead2d428fb5fe23064c4ab_NtYzQARYwK_top.jpg"
              }
              alt=""
            />
          </a>
          <a href="">
            <img className="w-6" src={search} alt="" />
          </a>
        </div>
      </div>
      {/* 1025px 영억억 */}
      <div className="hidden lg:block w-[92%] m-auto max-w-[1480px]">
        <div className="h-[70px] flex justify-end items-center">
          <ul className="flex">
            <li className="ml-[15px]">
              <a href="" className="text-[#666]">
                회원가입
              </a>
            </li>
            <li className="ml-[15px]">
              <a href="" className="text-[#666]">
                로그인
              </a>
            </li>
            <li className="ml-[15px]">
              <a href="" className="text-[#666]">
                주문조회
              </a>
            </li>
            <li className="ml-[15px]">
              <a href="" className="text-[#666]">
                최근본상품
              </a>
            </li>
            <li className="ml-[15px] flex items-end">
              <a href="" className="text-[#666]">
                고객센터
              </a>
              <img className="w-[8px] h-[8px] ml-[10px]" src={arrow} alt="" />
            </li>
            <li className="flex items-end">
              <a href="" className="w-[8px] h-[8px]"></a>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-between h-20">
          <div>
            <a href="">
              <img
                src={
                  "https://ecudemo276581.cafe24.com/web/upload/category/logo/v2_043c8f4d2cead2d428fb5fe23064c4ab_NtYzQARYwK_top.jpg"
                }
                alt=""
              />
            </a>
          </div>

          <div className="ml-[25px] flex justify-between items-center flex-1">
            <ul className="flex">
              <li className="px-4">
                <a href="" className="text-[15px]">
                  Tables
                </a>
              </li>
              <li className="px-4">
                <a href="" className="text-[15px]">
                  Bed Frames
                </a>
              </li>
              <li className="px-4">
                <a href="" className="text-[15px]">
                  Sideboards
                </a>
              </li>
              <li className="px-4">
                <a href="" className="text-[15px]">
                  Couches
                </a>
              </li>
              <li className="px-4">
                <a href="" className="text-[15px]">
                  Furniture
                </a>
              </li>
            </ul>

            <div className="flex ">
              <a href="" className="w-6 h-6 px-4">
                <img src={person} className="w-6 h-6" alt="" />
              </a>
              <a href="" className="w-6 h-6 px-4">
                <img src={cart} className="w-6 h-6" alt="" />
              </a>
              <a href="" className="w-6 h-6 pl-4">
                <img src={search} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
