import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [field, setField] = useState("Citara");
  const [time, setTime] = useState("6:30");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/resultado", { state: { field, time } });
  };

  return (
    <div className="w-full lg:w-[897px] lg:relative lg:left-[196px] bg-[#5AB980] p-6 shadow-md rounded-lg my-4">
      <form onSubmit={handleSearch} className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
        <div className="flex flex-col lg:relative lg:left-[114px] top 0px">
          <label className="text-white font-semibold">Ubicación:</label>
          <input
            type="text"
            value="Quibdó"
            readOnly
            className="border border-gray-300 rounded p-2 bg-white"
          />
        </div>
        <div className="flex flex-col lg:relative lg:left-[114px] top 0px">
          <label className="text-white font-semibold">Campo:</label>
          <select value={field} onChange={(e) => setField(e.target.value)} className="border border-gray-300 rounded p-2 bg-white">
            <option>Sau Pablo</option>
            <option>Citara</option>
            <option>Bernabéu</option>
            <option>A otro nivel</option>
            <option>Chipi chipi</option>
          </select>
        </div>
        <div className="flex flex-col lg:relative lg:left-[114px] top 0px">
          <label className="text-white font-semibold">Hora:</label>
          <select value={time} onChange={(e) => setTime(e.target.value)} className="border border-gray-300 rounded p-2 bg-white">
            {/* Horarios */}
            <option>6:30</option>
            <option>7:30</option>
            <option>8:30</option>
            <option>9:30</option>
            <option>10:30</option>
            <option>11:30</option>
            <option>13:30</option>
            <option>14:30</option>
            <option>15:30</option>
            <option>16:30</option>
            <option>17:30</option>
            <option>18:30</option>
            <option>19:30</option>
            <option>20:30</option>
            <option>21:30</option>
            <option>22:30</option>
            <option>23:30</option>
          </select>
        </div>
        <button type="submit" className="bg-[#4C9FCE] text-black font-semibold border-white-700 w-32 rounded p-2 hover:bg-blue-500 transition duration-200 lg:relative lg:left-[114px] top-11px">
          Buscar
        </button>
      </form>
    </div>
  );
}

export default Form;
