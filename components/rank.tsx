import Image from "next/image";
import { Tiers } from "../entities/rank";

interface Props {
  data: Tiers;
}

const RankComponent: React.FC<Props> = ({ data: { tierName, largeIcon } }) => {
  return (
    <div>
      <div>
        <Image
          src={largeIcon}
          alt={tierName}
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
