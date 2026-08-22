import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { AircraftSaved } from "../../types/aircraft";
import "./History.css";
import { Modal } from "../../modals/allHistoryModal";

type HistoryProps = {
  data: AircraftSaved[];
  onClear: () => void;
};

export const History = ({ data, onClear }: HistoryProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const empty = data.length === 0;

  return (
    <section id="history">
      {empty ? (
        <div>{t("history.empty")}</div>
      ) : (
        <>
          {data.map((item) => (
            <div key={item.id} className="chip-history">
              {item.aircraft?.registration}
            </div>
          ))}
          <button onClick={onClear}>Limpar</button>
          <button onClick={() => setIsOpen(true)}>
            Ver histórico completo
          </button>
          <Modal open={isOpen} onOpenChange={setIsOpen} />
        </>
      )}
    </section>
  );
};
