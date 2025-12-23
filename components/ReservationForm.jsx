"use client";
import { useState } from "react";

export default function ReservationForm({ date, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [pittermenchen, setPittermenchen] = useState(0);

  const times = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"];

  const resetForm = () => {
    setName("");
    setEmail("");
    setTime("");
    setGuests(1);
    setPittermenchen(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
Reservierung:
Name: ${name}
E-Mail: ${email}
Datum: ${date.toLocaleDateString("de-DE")}
Uhrzeit: ${time}
Gäste: ${guests}
Pittermännchen: ${pittermenchen}
    `);

    resetForm();
    onClose();
  };

  const handleCancel = () => {
    resetForm();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">
        Reservierung am{" "}
        {date.toLocaleDateString("de-DE", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })}
      </h2>

      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 mt-1 border text-black rounded"
        />
      </div>

      <div>
        <label>E-Mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 mt-1 border text-black rounded"
        />
      </div>

      <div>
        <label>Uhrzeit</label>
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="w-full p-2 mt-1 border text-black rounded"
        >
          <option value="">Bitte wählen</option>
          {times.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Anzahl der Gäste</label>
        <input
          type="number"
          min="1"
          max="20"
          value={guests}
          onChange={(e) => {
            const val = Number(e.target.value);
            setGuests(val);
            if (pittermenchen > val) setPittermenchen(val);
          }}
          required
          className="w-full p-2 mt-1 border text-black rounded"
        />
      </div>

      <div>
        <label>Anzahl Pittermännchen</label>
        <input
          type="number"
          min="0"
          max={guests}
          value={pittermenchen}
          onChange={(e) => setPittermenchen(Number(e.target.value))}
          required
          className="w-full p-2 mt-1 border text-black rounded"
        />
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 border rounded hover:bg-red-500"
        >
          Abbrechen
        </button>
        <button
          type="submit"
          className="px-4 py-2 border text-black  rounded hover:bg-green-500"
        >
          Reservieren
        </button>
      </div>
    </form>
  );
}
