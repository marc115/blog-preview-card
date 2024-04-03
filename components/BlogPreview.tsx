import Image from "next/image";

export const BlogPreview = () => {
  return <div className="bg-custom-yellow flex items-center justify-center w-screen h-screen">
    <div className="bg-white p-[24px] rounded-lg border-2 border-solid border-black flex flex-col hover:shadow-custom-active 
    shadow-custom gap-y-[24px] sm:w-[384px] w-[327px]">
      <Image
        src='/images/illustration-article.svg'
        className="w-[279px] sm:w-[336px] rounded-lg"
        height={200} width={100}
        alt="illustration" />

      <div className="flex flex-col gap-y-[12px] items-start">
        <span className="px-[12px] py-[4px] text-black bg-custom-yellow rounded font-bold table">Learning</span>
        <p>Published 21 Dec 2023</p>
        <h1 className="font-bold text-2xl hover:text-custom-yellow cursor-pointer">HTML CSS foundations</h1>
        <p className="text-wrap text-gray-600">These languages are the backbone of every website, defining structure, content, and presentation.</p>
      </div>

      <div className="flex items-center gap-x-[12px]">
        <Image
          src='/images/image-avatar.webp'
          className="rounded-full"
          width={32}
          height={32}
          alt="avatar"
        />
        <p className="font-bold">Greg Hooper</p>
      </div>
    </div>
  </div>;
};
