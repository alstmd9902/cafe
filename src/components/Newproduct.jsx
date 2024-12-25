export default function Newproduct() {
  return (
    <article className="w-[92%] m-auto ">
      <div className="lg:hidden">
        <div className="mb-[30px] relative">
          <span className="absolute left-0 top-0 w-[20px] h-[2px] bg-[#d0ac88]"></span>
          <h2 className="font-sans text-[22px] pt-5 ">New Product</h2>
          <p className="text-[#8888] text-xs pt-3 pb-[22px]">
            새롭게 입고된 신상품들을 만나보세요
          </p>
        </div>

        {/* img-list */}
        <div>
          <section className="flex flex-wrap mb-[50px]">
            <ul className="w-[50%] max-md:w-[33.33%]">
              <li className="mb-[35px]  mr-[5px] ml-[5px]">
                <a href="">
                  <img
                    className="pb-[10px]"
                    src={
                      "https://ecudemo276581.cafe24.com/web/product/medium/202304/9590e27416e6a15095689f723acf33f4.png"
                    }
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span className="text-[#555555] text-sm pb-[10px] font-jost">
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

            <ul className="w-[50%] max-md:w-[33.33%]">
              <li className="mb-[35px] mr-[5px] ml-[5px]">
                <a href="">
                  <img
                    className="pb-[10px]"
                    src={
                      "https://ecudemo276581.cafe24.com/web/product/medium/202304/80ec0a85b53e6a9b381dc0302908bb11.png"
                    }
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span className="text-[#555555] text-sm pb-[10px] font-jost">
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

            <ul className="w-[50%] max-md:w-[33.33%]">
              <li className="mb-[35px] mr-[5px] ml-[5px] relative">
                <a href="">
                  <img
                    className="pb-[10px]"
                    src={
                      "https://ecudemo276581.cafe24.com/web/product/medium/202304/ee8538531e7da3ca0a44c5c184ca85cc.png"
                    }
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span className="text-[#555555] text-sm pb-[10px] font-jost">
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

            <ul className="w-[50%] max-md:w-[33.33%]">
              <li className="mb-[35px] mr-[5px] ml-[5px]">
                <a href="">
                  <img
                    className="pb-[10px]"
                    src={
                      "https://ecudemo276581.cafe24.com/web/product/medium/202304/9590e27416e6a15095689f723acf33f4.png"
                    }
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span className="text-[#555555] text-sm pb-[10px] font-jost">
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

            <ul className="w-[50%] max-md:w-[33.33%]">
              <li className="mb-[35px] mr-[5px] ml-[5px] relative">
                <a href="">
                  <img
                    className="pb-[10px]"
                    src={
                      "https://ecudemo276581.cafe24.com/web/product/medium/202304/34af6cc25537b0e00a40d013749033e7.png"
                    }
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span className="text-[#555555] text-sm pb-[10px] font-jost">
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

            <ul className="w-[50%] max-md:w-[33.33%]">
              <li className="mb-[35px] mr-[5px] ml-[5px] relative">
                <a href="">
                  <img
                    className="pb-[10px]"
                    src={
                      "https://ecudemo276581.cafe24.com/web/product/medium/202304/bff9aac3a73455301205acb54b5be682.png"
                    }
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span className="text-[#555555] text-sm pb-[10px] font-jost">
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

            <ul className="w-[50%] max-md:w-[33.33%]">
              <li className="mb-[35px] mr-[5px] ml-[5px] relative">
                <a href="">
                  <img
                    className="pb-[10px]"
                    src={
                      "https://ecudemo276581.cafe24.com/web/product/medium/202304/450ff31088a3067b15b7533e953b1575.png"
                    }
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span className="text-[#555555] text-sm pb-[10px] font-jost">
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
                    <div className="flex pb-[5px]">
                      <span className="w-3 h-3 bg-[#a37e65] mr-[2px]"></span>
                      <span className="w-3 h-3 bg-[#9e9e9e]"></span>
                    </div>
                  </div>
                  <div className="w-10 h-10 absolute bg-[#d0ac88] rounded-full  top-[15px] right-[15px] flex items-center justify-center text-white">
                    40%
                  </div>
                </a>
              </li>
            </ul>

            <ul className="w-[50%] max-md:w-[33.33%]">
              <li className="mb-[35px] mr-[5px] ml-[5px]">
                <a href="">
                  <img
                    className="pb-[10px]"
                    src={
                      "https://ecudemo276581.cafe24.com/web/product/medium/202304/5c07ff99fd60aacf341128c25d4fb700.png"
                    }
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span className="text-[#555555] text-sm pb-[10px] font-jost">
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
          </section>
        </div>
      </div>

      {/* 1024px 영역 */}
      <div className="lg:block hidden">
        <div className="mb-[30px] relative">
          <span className="absolute left-0 top-0 w-[20px] h-[2px] bg-[#d0ac88]"></span>
          <h2 className="text-[27px] pt-5 font-medium">New Product</h2>
          <p className="text-[#8888] text-sm pt-3 pb-[22px]">
            새롭게 입고된 신상품들을 만나보세요
          </p>
        </div>

        {/* img-list */}
        <section className="flex flex-wrap mb-[50px] mx-[-10px]">
          <ul className="w-[25%] mb-[70px]">
            <li className="mx-[10px]">
              <div className="mb-[10px]">
                <a href="">
                  <img
                    className=" "
                    src={
                      "https://ecudemo276581.cafe24.com/web/product/medium/202304/9590e27416e6a15095689f723acf33f4.png"
                    }
                    alt=""
                  />
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-[#555555] text-sm pb-[10px] font-jost">
                  미니 원목 화장대 타입B
                </span>
                <span className="text-xs  text-[#8c8c8c] font-jost pb-[10px]">
                  상품 요약설명입니다.
                </span>
                <strong className="pb-[5px] font-jost text-sm">50.000원</strong>
                <div className="flex pb-[5px]">
                  <span className="w-3 h-3 bg-[#a37e65] mr-[2px]"></span>
                  <span className="w-3 h-3 bg-[#9e9e9e]"></span>
                </div>
              </div>
            </li>
          </ul>

          <ul className="w-[25%] mb-[70px]">
            <li className="mx-[10px]">
              <div className="mb-[10px]">
                <a href="">
                  <img
                    className="pb-[10px]"
                    src={
                      "https://ecudemo276581.cafe24.com/web/product/medium/202304/80ec0a85b53e6a9b381dc0302908bb11.png"
                    }
                    alt=""
                  />
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-[#555555] text-sm pb-[10px] font-jost">
                  패브릭 체어
                </span>
                <span className="text-xs  text-[#8c8c8c] font-jost pb-[10px]">
                  상품 요약설명입니다.
                </span>
                <strong className="pb-[5px] font-jost text-sm">10.000원</strong>
              </div>
            </li>
          </ul>

          <ul className="w-[25%] mb-[70px]">
            <li className=" mx-[10px] relative">
              <div className="mb-[10px]">
                <a href="">
                  <img
                    className="pb-[10px]"
                    src={
                      "https://ecudemo276581.cafe24.com/web/product/medium/202304/ee8538531e7da3ca0a44c5c184ca85cc.png"
                    }
                    alt=""
                  />
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-[#555555] text-sm pb-[10px] font-jost">
                  개방형 원목 협탁탁
                </span>
                <span className="text-xs  text-[#8c8c8c] font-jost pb-[10px]">
                  상품 요약설명입니다.
                </span>
                <del className="pb-[5px] font-jost text-[13px] text-[#737373] ">
                  100.000원
                </del>
                <strong className="pb-[5px] font-jost text-sm">50.000원</strong>
                <div className="flex pb-[5px]">
                  <span className="w-3 h-3 bg-[#a37e65] mr-[2px]"></span>
                  <span className="w-3 h-3 bg-[#9e9e9e]"></span>
                </div>
              </div>
              <div className="w-10 h-10 absolute bg-[#d0ac88] rounded-full  top-[15px] right-[15px] flex items-center justify-center text-white">
                50%
              </div>
            </li>
          </ul>

          <ul className="w-[25%] mb-[70px]">
            <li className="mx-[10px]">
              <div className="mb-[10px]">
                <a href="">
                  <img
                    className="pb-[10px]"
                    src={
                      "https://ecudemo276581.cafe24.com/web/product/medium/202304/9590e27416e6a15095689f723acf33f4.png"
                    }
                    alt=""
                  />
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-[#555555] text-sm pb-[10px] font-jost">
                  미니 원목 화장대 타입B
                </span>
                <span className="text-xs  text-[#8c8c8c] font-jost pb-[10px]">
                  상품 요약설명입니다.
                </span>
                <strong className="pb-[5px] font-jost text-sm">50.000원</strong>
                <div className="flex pb-[5px]">
                  <span className="w-3 h-3 bg-[#a37e65] mr-[2px]"></span>
                  <span className="w-3 h-3 bg-[#9e9e9e]"></span>
                </div>
              </div>
            </li>
          </ul>

          <ul className="w-[25%] mb-[70px]">
            <li className="mx-[10px] relative">
              <div className="mb-[10px]">
                <a href="">
                  <img
                    className="pb-[10px]"
                    src={
                      "https://ecudemo276581.cafe24.com/web/product/medium/202304/34af6cc25537b0e00a40d013749033e7.png"
                    }
                    alt=""
                  />
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-[#555555] text-sm pb-[10px] font-jost">
                  미니 원목 화장대 타입A
                </span>
                <span className="text-xs  text-[#8c8c8c] font-jost pb-[10px]">
                  상품 요약설명입니다.
                </span>
                <del className="pb-[5px] font-jost text-[13px] text-[#737373] ">
                  100.000원
                </del>
                <strong className="pb-[5px] font-jost text-sm">50.000원</strong>
                <div className="flex pb-[5px]">
                  <span className="w-3 h-3 bg-[#a37e65] mr-[2px]"></span>
                  <span className="w-3 h-3 bg-[#9e9e9e]"></span>
                </div>
              </div>
              <div className="w-10 h-10 absolute bg-[#d0ac88] rounded-full  top-[15px] right-[15px] flex items-center justify-center text-white">
                50%
              </div>
            </li>
          </ul>

          <ul className="w-[25%] mb-[70px]">
            <li className="mx-[10px] relative">
              <div className="mb-[10px]">
                <a href="">
                  <img
                    className="pb-[10px]"
                    src={
                      "https://ecudemo276581.cafe24.com/web/product/medium/202304/bff9aac3a73455301205acb54b5be682.png"
                    }
                    alt=""
                  />
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-[#555555] text-sm pb-[10px] font-jost">
                  블랙 가죽 체어
                </span>
                <span className="text-xs  text-[#8c8c8c] font-jost pb-[10px]">
                  상품 요약설명입니다.
                </span>
                <del className="pb-[5px] font-jost text-[13px] text-[#737373] ">
                  100.000원
                </del>
                <strong className="pb-[5px] font-jost text-sm">80.000원</strong>
                <div className="flex pb-[5px]">
                  <span className="w-3 h-3 bg-[#a37e65] mr-[2px]"></span>
                  <span className="w-3 h-3 bg-[#9e9e9e]"></span>
                </div>
              </div>
              <div className="w-10 h-10 absolute bg-[#d0ac88] rounded-full  top-[15px] right-[15px] flex items-center justify-center text-white">
                50%
              </div>
            </li>
          </ul>

          <ul className="w-[25%] mb-[70px]">
            <li className="mx-[10px] relative">
              <div className="mb-[10px]">
                <a href="">
                  <img
                    className="pb-[10px]"
                    src={
                      "https://ecudemo276581.cafe24.com/web/product/medium/202304/450ff31088a3067b15b7533e953b1575.png"
                    }
                    alt=""
                  />
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-[#555555] text-sm pb-[10px] font-jost">
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
                <div className="flex pb-[5px]">
                  <span className="w-3 h-3 bg-[#a37e65] mr-[2px]"></span>
                  <span className="w-3 h-3 bg-[#9e9e9e]"></span>
                </div>
              </div>
              <div className="w-10 h-10 absolute bg-[#d0ac88] rounded-full  top-[15px] right-[15px] flex items-center justify-center text-white">
                40%
              </div>
            </li>
          </ul>

          <ul className="w-[25%] mb-[70px]">
            <li className="mx-[10px]">
              <div className="mb-[10px]">
              <a href="">
                <img
                  className="pb-[10px]"
                  src={
                    "https://ecudemo276581.cafe24.com/web/product/medium/202304/5c07ff99fd60aacf341128c25d4fb700.png"
                  }
                  alt=""
                />
                </a>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#555555] text-sm pb-[10px] font-jost">
                    르네상스 액자
                  </span>
                  <span className="text-xs  text-[#8c8c8c] font-jost pb-[10px]">
                    상품 요약설명입니다.
                  </span>
                  <strong className="pb-[5px] font-jost text-sm">
                    50.000원
                  </strong>
                </div>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
