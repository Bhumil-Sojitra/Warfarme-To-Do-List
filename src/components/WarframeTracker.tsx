"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Warframe {
  name: string;
  image: string;
  farmLocation: string;
}

const warframes: Warframe[] = [
  {
    name: "Ash",
    image: "/Ash.png",
    farmLocation: "Droppable from Grineer Manics",
  },
  {
    name: "Atlas",
    image: "/Atlas.png",
    farmLocation: "Defeat Jordas Golem on Eris",
  },
  {
    name: "Banshee",
    image: "/Banshee.png",
    farmLocation: "Clan Dojo Tenno Lab",
  },
  {
    name: "Baruuk",
    image: "/Baruuk.png",
    farmLocation: "Little Duck Offerings at Fortuna",
  },
  {
    name: "Caliban",
    image: "/Caliban.png",
    farmLocation: "Narmer Bounties on Plains of Eidolon",
  },
  {
    name: "Chroma",
    image: "/Chroma.png",
    farmLocation: "The New Strange Quest",
  },
  {
    name: "Citrine",
    image: "/Citrine.png",
    farmLocation: "Mirror Defense on Tyana Pass, Mars",
  },
  {
    name: "Dagath",
    image: "/Dagath.png",
    farmLocation: "Dagger of Fate Quest",
  },
  { name: "Dante", image: "/Dante.png", farmLocation: "Dante’s Altar on Lua" },
  {
    name: "Cyte-09",
    image: "/Cyte-09.png",
    farmLocation: "Duviri Circuit Rewards",
  },
  {
    name: "Ember",
    image: "/Ember.png",
    farmLocation: "Defeat General Sargas Ruk on Saturn",
  },
  {
    name: "Equinox",
    image: "/Equinox.png",
    farmLocation: "Defeat Tyl Regor on Uranus",
  },
  {
    name: "Excalibur",
    image: "/Excalibur.png",
    farmLocation: "Defeat Lieutenant Lech Kril on Mars",
  },
  {
    name: "Frost",
    image: "/Frost.png",
    farmLocation: "Defeat Lieutenant Lech Kril on Ceres",
  },
  { name: "Gara", image: "/Gara.png", farmLocation: "The Saya’s Vigil Quest" },
  { name: "Garuda", image: "/Garuda.png", farmLocation: "Orb Vallis Bounties" },
  {
    name: "Gauss",
    image: "/Gauss.png",
    farmLocation: "Disruption Missions on Sedna",
  },
  {
    name: "Grendel",
    image: "/Grendel.png",
    farmLocation: "Arbitration Missions",
  },
  { name: "Gyre", image: "/Gyre.png", farmLocation: "Zariman Bounties" },
  {
    name: "Harrow",
    image: "/Harrow.png",
    farmLocation: "Chains of Harrow Quest",
  },
  {
    name: "Hildryn",
    image: "/Hildryn.png",
    farmLocation: "Little Duck Offerings at Fortuna",
  },
  {
    name: "Hydroid",
    image: "/Hydroid.png",
    farmLocation: "Defeat Councilor Vay Hek on Earth",
  },
  {
    name: "Inaros",
    image: "/Inaros.png",
    farmLocation: "The Sands of Inaros Quest",
  },
  { name: "Ivara", image: "/Ivara.png", farmLocation: "Spy Missions" },
  { name: "Jade", image: "/Jade.png", farmLocation: "Upcoming" },
  { name: "Khora", image: "/Khora.png", farmLocation: "Sanctuary Onslaught" },
  { name: "Koumei", image: "/Koumei.png", farmLocation: "Upcoming" },
  {
    name: "Kullervo",
    image: "/Kullervo.png",
    farmLocation: "Kullervo’s Hold in Duviri",
  },
  {
    name: "Lavos",
    image: "/Lavos.png",
    farmLocation: "Father’s Offerings in Deimos",
  },
  {
    name: "Limbo",
    image: "/Limbo.png",
    farmLocation: "The Limbo Theorem Quest",
  },
  {
    name: "Loki",
    image: "/Loki.png",
    farmLocation: "Defeat Hyena Pack on Neptune",
  },
  {
    name: "Mag",
    image: "/Mag.png",
    farmLocation: "Defeat The Sergeant on Phobos",
  },
  {
    name: "Mesa",
    image: "/Mesa.png",
    farmLocation: "Defeat Mutalist Alad V on Eris",
  },
  {
    name: "Mirage",
    image: "/Mirage.png",
    farmLocation: "Hidden Messages Quest",
  },
  {
    name: "Nekros",
    image: "/Nekros.png",
    farmLocation: "Defeat Lephantis on Deimos",
  },
  { name: "Nezha", image: "/Nezha.png", farmLocation: "Clan Dojo Tenno Lab" },
  {
    name: "Nidus",
    image: "/Nidus.png",
    farmLocation: "The Glast Gambit Quest",
  },
  { name: "Nova", image: "/Nova.png", farmLocation: "Defeat Raptor on Europa" },
  {
    name: "Nyx",
    image: "/Nyx.png",
    farmLocation: "Defeat Phorid during Infested Invasions",
  },
  {
    name: "Oberon",
    image: "/Oberon.png",
    farmLocation: "Droppable from Eximus Units",
  },
  {
    name: "Octavia",
    image: "/Octavia.png",
    farmLocation: "Octavia’s Anthem Quest",
  },
  {
    name: "Protea",
    image: "/Protea.png",
    farmLocation: "The Deadlock Protocol Quest",
  },
  {
    name: "Qorvex",
    image: "/Qorvex.png",
    farmLocation: "Duviri Circuit Rewards",
  },
  {
    name: "Revenant",
    image: "/Revenant.png",
    farmLocation: "The Mask of the Revenant Quest",
  },
  {
    name: "Rhino",
    image: "/Rhino.png",
    farmLocation: "Defeat Jackal on Venus",
  },
  {
    name: "Saryn",
    image: "/Saryn.png",
    farmLocation: "Defeat Kela De Thaym on Sedna",
  },
  {
    name: "Sevagoth",
    image: "/Sevagoth.png",
    farmLocation: "Void Storm Missions",
  },
  { name: "Styanax", image: "/Styanax.png", farmLocation: "Kahl’s Garrison" },
  {
    name: "Titania",
    image: "/Titania.png",
    farmLocation: "The Silver Grove Quest",
  },
  {
    name: "Trinity",
    image: "/Trinity.png",
    farmLocation: "Defeat Captain Vor and Lieutenant Lech Kril on Ceres",
  },
  {
    name: "Valkyr",
    image: "/Valkyr.png",
    farmLocation: "Defeat Alad V on Jupiter",
  },
  {
    name: "Vauban",
    image: "/Vauban.png",
    farmLocation: "Nightwave Cred Offerings",
  },
  { name: "Volt", image: "/Volt.png", farmLocation: "Clan Dojo Energy Lab" },
  { name: "Voruna", image: "/Voruna.png", farmLocation: "Lua’s Prey Quest" },
  {
    name: "Wisp",
    image: "/Wisp.png",
    farmLocation: "Defeat Ropalolyst on Jupiter",
  },
  { name: "Wukong", image: "/Wukong.png", farmLocation: "Clan Dojo Tenno Lab" },
  {
    name: "Xaku",
    image: "/Xaku.png",
    farmLocation: "Father’s Offerings in Deimos",
  },
  { name: "Yareli", image: "/Yareli.png", farmLocation: "The Waverider Quest" },
  { name: "Zephyr", image: "/Zephyr.png", farmLocation: "Clan Dojo Tenno Lab" },
];

export default function WarframeTracker() {
  const [ownedFrames, setOwnedFrames] = useState<string[]>([]);
  const [frameOrder, setFrameOrder] = useState<Warframe[]>(warframes);
  const [sortType, setSortType] = useState<string>("default");

  useEffect(() => {
    const storedFrames = JSON.parse(
      localStorage.getItem("ownedWarframes") || "[]"
    ) as string[];
    setOwnedFrames(storedFrames);
  }, []);

  useEffect(() => {
    localStorage.setItem("ownedWarframes", JSON.stringify(ownedFrames));
  }, [ownedFrames]);

  const toggleOwned = (frame: string) => {
    setOwnedFrames((prev) =>
      prev.includes(frame) ? prev.filter((f) => f !== frame) : [...prev, frame]
    );
  };

  const handleDragStart = (
    e: React.DragEvent<HTMLLIElement>,
    index: number
  ) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDrop = (
    e: React.DragEvent<HTMLLIElement>,
    targetIndex: number
  ) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    if (sourceIndex === targetIndex) return;

    const updatedOrder = [...frameOrder];
    const [movedItem] = updatedOrder.splice(sourceIndex, 1);
    updatedOrder.splice(targetIndex, 0, movedItem);
    setFrameOrder(updatedOrder);
  };

  const sortedFrames = () => {
    switch (sortType) {
      case "name":
        return [...frameOrder].sort((a, b) => a.name.localeCompare(b.name));
      case "done":
        return [...frameOrder].sort((a) =>
          ownedFrames.includes(a.name) ? -1 : 1
        );
      case "notDone":
        return [...frameOrder].sort((a) =>
          ownedFrames.includes(a.name) ? 1 : -1
        );
      default:
        return frameOrder;
    }
  };

  const doneCount = ownedFrames.length;
  const notDoneCount = warframes.length - doneCount;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Warframe To-Do List</h1>
      <div className="mb-4">
        <label className="mr-2 font-bold">Sort By:</label>
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="border p-2 rounded "
        >
          <option className="text-black" value="default">
            Default
          </option>
          <option className="text-black" value="name">
            Name
          </option>
          <option className="text-black" value="done">
            Done
          </option>
          <option className="text-black" value="notDone">
            Not Done
          </option>
        </select>
      </div>
      <div className="mb-4 font-bold">
        <p>✅ Done: {doneCount}</p>
        <p>❌ Not Done: {notDoneCount}</p>
      </div>
      <ul>
        {sortedFrames().map(({ name, image, farmLocation }, index) => (
          <li
            key={name}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, index)}
            className={`flex items-center mb-4 border p-3 rounded-lg transition-colors cursor-move ${
              ownedFrames.includes(name)
                ? "bg-green-400 text-black"
                : "bg-neutral-800"
            }`}
          >
            <input
              type="checkbox"
              checked={ownedFrames.includes(name)}
              onChange={() => toggleOwned(name)}
              className="mr-2 w-5 h-5"
            />
            <Image
              key={name}
              src={image}
              alt={name}
              width={85}
              height={100}
              className="w-[80px] h-[100px] rounded-lg mr-3 "
            />
            <div>
              <span className="font-bold text-lg">{name}</span>
              <p className="text-sm text-gray-500">{farmLocation}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
