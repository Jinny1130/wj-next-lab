interface OwnProps {
  title?: String;
  size: String;
}

export default function Title({ title, size }: OwnProps) {
  return (
    <div
      className={`blue_title text-sky-500 font-semibold ${size === 'M' ? 'text-2xl sm:text-3xl' : size === 'S' ? 'text-lg sm:text-xl' : 'text-4xl'}`}
    >
      {title}.
    </div>
  );
}
