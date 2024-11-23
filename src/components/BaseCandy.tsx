interface Props {
  bgStyle: string;
}

export default function BaseCandy({ bgStyle }: Props) {
  return (
    <div
      className={`w-[36px] h-[36px] rounded-full border-[0.5px] ${bgStyle}`}
    ></div>
  );
}
