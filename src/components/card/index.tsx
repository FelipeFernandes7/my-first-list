import "./styles.scss";

interface CardProps {
  name: string;
  time: Date;
}
export function Card({ name, time }: CardProps) {
  return (
    <div className="card">
      <strong>{name}</strong>
      <small>{time.getHours()}</small>
    </div>
  );
}
