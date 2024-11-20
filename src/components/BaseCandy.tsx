interface Props {
  bgStyle: string;
  rowIndex: number;
  colIndex: number;
}

export default function BaseCandy({ bgStyle, rowIndex, colIndex }: Props) {
  return (
    <div
      onClick={() => console.log(rowIndex, colIndex)}
      className={`w-[36px] h-[36px] rounded-full border-[1px] ${bgStyle}`}
    ></div>
  );
}
