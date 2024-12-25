export default function Radio() {
  return (

      <div className="relative mb-[50px] lg:mb-[120px] ">
        <div>
        <div className="bg-[#d0ac88] w-1/2 h-[60%] absolute top-0 left-0"></div>
        <div className="pt-[50px] lg:pt-[120px]  w-[92%] m-auto max-w-[1080px]">
          <div className=" pb-[56.99%] relative ">
            <iframe
              className="aspect-auto w-full h-full  absolute top-0 left-0 right-0 bottom-0"
              src={
                "https://m-img.cafe24.com/images/ec/sde/video/wooden_1366x720.mp4"
              }
            ></iframe>
          </div>
          <div className="text-center relative">
            <h2 className="pt-[18px] font-jost text-lg  lg:pt-[50px] lg:text-[25px]">
              우드톤 컬로 완성하는 나만의 공간
            </h2>
            <p className="pt-[5px] text-lg font-jost font-medium text-[#777777] lg:text-sm">
              아늑하고 따스한무드를 담은 홈스타일링
            </p>
          </div>
        </div>
        </div>
      </div>
  );
}
