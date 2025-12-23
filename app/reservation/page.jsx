"use client";
import { useState } from "react";
import DaySlotPicker from "@/components/DaySlotPicker";
import ReservationModal from "@/components/ReservationModal";
import ReservationForm from "@/components/ReservationForm";

export default function ReservationPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="p-4">
      <DaySlotPicker
        onSelect={(date) => {
          setSelectedDate(date);
          setModalOpen(true);
        }}
      />

      <ReservationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <ReservationForm
          date={selectedDate}
          onClose={() => setModalOpen(false)}
        />
      </ReservationModal>
    </div>
  );
}
