import { STATUS } from "../Services/user";
import On from "../assets/online.png";
import Off from "../assets/off.png";
import Warning from "../assets/alert.png";
import "../scss/screen.scss";

type Props = {
  status: STATUS;
};

export function Status(props: Props) {
  if (props.status === STATUS.CONCLUIDO) {
    return <img className="on" src={On} height={12} width={12} alt="Ativo" />;
  }
  if (props.status === STATUS.PROCESSANDO) {
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
