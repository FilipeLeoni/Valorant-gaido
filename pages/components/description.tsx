type descriptionProps = {
  description: string;
};

export const Description = ({ description }: descriptionProps) => {
  return <p className="text-gray-lighter mt-4 text-sm">{description}</p>;
};
