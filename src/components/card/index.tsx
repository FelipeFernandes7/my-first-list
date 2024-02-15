interface CardProps {
  name: string;
  time: Date;
}

export function Card({ name, time }: CardProps) {
  const format = (date: Date) => {
    const formatter = new Intl.DateTimeFormat("pt-BR", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
      timeZone: "UTC",
    });

    return formatter.format(date);
  };

  return (
    <div className="w-full flex justify-between items-center bg-neutral-900 rounded-lg px-6 p-3.5 cursor-pointer hover:scale-105 transition-all duration-300">
      <strong className="text-sm text-red-700 font-medium">{name}</strong>
      <small className="text-xs text-white">{format(time)}</small>
    </div>
  );
}
