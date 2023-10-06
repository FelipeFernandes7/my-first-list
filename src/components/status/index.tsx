import On from "../assets/online.png";
import Off from "../assets/off.png";
import Warning from "../assets/alert.png";
import "../scss/screen.scss";

export type Status = {
  completed: boolean;
  processing: boolean;
  incomplete: boolean;
};

type Props = {
  status: Status;
};

export function Status({ status }: Props) {
  if (status.completed) {
    return <img className="on" src={On} height={12} width={12} alt="Ativo" />;
  }
  if (status.completed) {
    return (
      <img
        className="warning"
        src={Warning}
        height={14}
        width={14}
        alt="Atenção"
      />
    );
  }
  return <img className="off" src={Off} height={12} width={12} alt="Inativo" />;
}
