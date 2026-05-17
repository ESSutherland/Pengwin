import React from "react";
import commands from "./data/commands.json";

const CommandsPage = () => {
  return (
    <div className=" mt-48 mb-10 px-4 overflow-auto z-[50] bg-black/10 rounded-xl py-10">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="text-left border-b border-white/10">
            <th className="px-4 py-3 rounded-tl-lg">Command</th>
            <th className="px-4 py-3">Cooldown</th>
            <th className="px-4 py-3 rounded-tr-lg">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan={3} className="bg-sky-700">
              Gamble Commands
            </th>
          </tr>
          {commands.gamble.map((el) => (
            <tr
              className="even:bg-black/10 hover:bg-white/10 h-20"
              key={el.command}
            >
              <td className="px-4 py-3">{el.command}</td>
              <td className="px-4 py-3">{el.cooldown}</td>
              <td className="px-4 py-3">{el.description}</td>
            </tr>
          ))}
          <tr>
            <th colSpan={3} className="bg-sky-700">
              General Commands
            </th>
          </tr>
          {commands.general.map((el) => (
            <tr
              className="even:bg-black/10 hover:bg-white/10 h-20"
              key={el.command}
            >
              <td className="px-4 py-3">{el.command}</td>
              <td className="px-4 py-3">{el.cooldown}</td>
              <td className="px-4 py-3">{el.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommandsPage;
