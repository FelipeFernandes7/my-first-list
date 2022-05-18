import '../scss/card.scss';

export function Card(props: {
  name: string,
  time: string;
}) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}
