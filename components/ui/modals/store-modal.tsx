"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create store"
      description="เพิ่มคลัง เพื่อจัดการสินค้า และประเภทสินค้า"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Create Store Form
    </Modal>
  );
};
