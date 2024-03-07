import Image from "next/image";

const EventCard = ({ bgColor, imageSrc }) => {
  return (

    <div className={`min-w-[456px] h-[204px] bg-[${bgColor}] rounded-xl p-[18px] pb-[38px] flex gap-2`}>
      <div className="h-full">
        <Image
          className="w-11 h-11"
          src={imageSrc}
          width={500}
          height={500}
          alt="vector"
        />
      </div>
      <div className="max-w-[368px] h-full flex flex-col gap-2">
        <h3 className="max-w-[347px] font-medium text-[14px] leading-5">
          Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis
          enim tincidunt.
        </h3>
        <p className="max-w-[365px] font-normal text-[14px] text-[#3E5765] leading-5">
          Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
          faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.
          Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra
          natoque lacinia libero enim.
        </p>
      </div>
    </div>
  );
};

export default EventCard;