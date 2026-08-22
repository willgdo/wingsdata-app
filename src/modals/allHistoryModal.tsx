import * as Dialog from "@radix-ui/react-dialog";
import "./allHistoryModal.css";

type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function Modal({ open, onOpenChange }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay" />

        <Dialog.Content className="content">
          <Dialog.Title>Histórico completo</Dialog.Title>

          <p>Conteúdo aqui...</p>

          <Dialog.Close className="button">Fechar</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
