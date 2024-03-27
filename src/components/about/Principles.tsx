interface PrinciplesProps {
    title: string
    text: string
}

const Principles = ({title, text}: PrinciplesProps) => {
  return (
    <div className="sm:w-96 sm:h-96 flex flex-col items-center gap-4 bg-colorBege p-4 rounded-lg">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-center">
        {text}
      </p>
    </div>
  );
};

export default Principles;
