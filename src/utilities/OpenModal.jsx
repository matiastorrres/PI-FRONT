import { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

export const openModal = () => {
  const Modal = lazy(() => import("../components/Modal/Modal"));
  const ModalDiv = document.createElement("div");
  ModalDiv.id = "modal";
  document.body.appendChild(ModalDiv);
  const root = createRoot(ModalDiv);
  root.render(
    <Suspense fallback={<>cargando el modal</>}>
      <Modal root={root} title="modal de Prueba">
        contenido de modal
      </Modal>
    </Suspense>
  );
};
