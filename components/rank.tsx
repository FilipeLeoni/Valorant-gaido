import Image from "next/image";

const RankComponent = ({ data: { tierName, largeIcon } }: any) => {
  return (
    <div className="">
      <div>
        <Image
          src={largeIcon}
          alt="d"
          width="60"
          height="60"
          layout="fixed"
          objectFit="contain"
          className="object-scale-down rounded-lg"
        />
      </div>
    </div>
  );
};

export default RankComponent;
