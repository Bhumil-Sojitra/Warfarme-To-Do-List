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
    image: "/ash.png",
    farmLocation: "Droppable from Grineer Manics",
  },
  {
    name: "Atlas",
    image: "/atlas.png",
    farmLocation: "Defeat Jordas Golem on Eris",
  },
  {
    name: "Banshee",
    image: "/banshee.png",
    farmLocation: "Clan Dojo Tenno Lab",
  },
  {
    name: "Baruuk",
    image: "/baruuk.png",
    farmLocation: "Little Duck Offerings at Fortuna",
  },
  {
    name: "Caliban",
    image: "/caliban.png",
    farmLocation: "Narmer Bounties on Plains of Eidolon",
  },
  {
    name: "Chroma",
    image: "/chroma.png",
    farmLocation: "The New Strange Quest",
  },
  {
    name: "Citrine",
    image: "/citrine.png",
    farmLocation: "Mirror Defense on Tyana Pass, Mars",
  },
  {
    name: "Dagath",
    image: "/dagath.png",
    farmLocation: "Dagger of Fate Quest",
  },
  { name: "Dante", image: "/dante.png", farmLocation: "Dante’s Altar on Lua" },
  {
    name: "Cyte-09",
    image: "/cyte-09.png",
    farmLocation: "Duviri Circuit Rewards",
  },
  {
    name: "Ember",
    image: "/ember.png",
    farmLocation: "Defeat General Sargas Ruk on Saturn",
  },
  {
    name: "Equinox",
    image: "/equinox.png",
    farmLocation: "Defeat Tyl Regor on Uranus",
  },
  {
    name: "Excalibur",
    image: "/excalibur.png",
    farmLocation: "Defeat Lieutenant Lech Kril on Mars",
  },
  {
    name: "Frost",
    image: "/frost.png",
    farmLocation: "Defeat Lieutenant Lech Kril on Ceres",
  },
  { name: "Gara", image: "/gara.png", farmLocation: "The Saya’s Vigil Quest" },
  { name: "Garuda", image: "/garuda.png", farmLocation: "Orb Vallis Bounties" },
  {
    name: "Gauss",
    image: "/gauss.png",
    farmLocation: "Disruption Missions on Sedna",
  },
  {
    name: "Grendel",
    image: "/grendel.png",
    farmLocation: "Arbitration Missions",
  },
  { name: "Gyre", image: "/gyre.png", farmLocation: "Zariman Bounties" },
  {
    name: "Harrow",
    image: "/harrow.png",
    farmLocation: "Chains of Harrow Quest",
  },
  {
    name: "Hildryn",
    image: "/hildryn.png",
    farmLocation: "Little Duck Offerings at Fortuna",
  },
  {
    name: "Hydroid",
    image: "/hydroid.png",
    farmLocation: "Defeat Councilor Vay Hek on Earth",
  },
  {
    name: "Inaros",
    image: "/inaros.png",
    farmLocation: "The Sands of Inaros Quest",
  },
  { name: "Ivara", image: "/ivara.png", farmLocation: "Spy Missions" },
  { name: "Jade", image: "/jade.png", farmLocation: "Upcoming" },
  { name: "Khora", image: "/khora.png", farmLocation: "Sanctuary Onslaught" },
  { name: "Koumei", image: "/koumei.png", farmLocation: "Upcoming" },
  {
    name: "Kullervo",
    image: "/kullervo.png",
    farmLocation: "Kullervo’s Hold in Duviri",
  },
  {
    name: "Lavos",
    image: "/lavos.png",
    farmLocation: "Father’s Offerings in Deimos",
  },
  {
    name: "Limbo",
    image: "/limbo.png",
    farmLocation: "The Limbo Theorem Quest",
  },
  {
    name: "Loki",
    image: "/loki.png",
    farmLocation: "Defeat Hyena Pack on Neptune",
  },
  {
    name: "Mag",
    image: "/mag.png",
    farmLocation: "Defeat The Sergeant on Phobos",
  },
  {
    name: "Mesa",
    image: "/mesa.png",
    farmLocation: "Defeat Mutalist Alad V on Eris",
  },
  {
    name: "Mirage",
    image: "/mirage.png",
    farmLocation: "Hidden Messages Quest",
  },
  {
    name: "Nekros",
    image: "/nekros.png",
    farmLocation: "Defeat Lephantis on Deimos",
  },
  { name: "Nezha", image: "/nezha.png", farmLocation: "Clan Dojo Tenno Lab" },
  {
    name: "Nidus",
    image: "/nidus.png",
    farmLocation: "The Glast Gambit Quest",
  },
  { name: "Nova", image: "/nova.png", farmLocation: "Defeat Raptor on Europa" },
  {
    name: "Nyx",
    image: "/nyx.png",
    farmLocation: "Defeat Phorid during Infested Invasions",
  },
  {
    name: "Oberon",
    image: "/oberon.png",
    farmLocation: "Droppable from Eximus Units",
  },
  {
    name: "Octavia",
    image: "/octavia.png",
    farmLocation: "Octavia’s Anthem Quest",
  },
  {
    name: "Protea",
    image: "/protea.png",
    farmLocation: "The Deadlock Protocol Quest",
  },
  {
    name: "Qorvex",
    image: "/qorvex.png",
    farmLocation: "Duviri Circuit Rewards",
  },
  {
    name: "Revenant",
    image: "/revenant.png",
    farmLocation: "The Mask of the Revenant Quest",
  },
  {
    name: "Rhino",
    image: "/rhino.png",
    farmLocation: "Defeat Jackal on Venus",
  },
  {
    name: "Saryn",
    image: "/saryn.png",
    farmLocation: "Defeat Kela De Thaym on Sedna",
  },
  {
    name: "Sevagoth",
    image: "/sevagoth.png",
    farmLocation: "Void Storm Missions",
  },
  { name: "Styanax", image: "/styanax.png", farmLocation: "Kahl’s Garrison" },
  {
    name: "Titania",
    image: "/titania.png",
    farmLocation: "The Silver Grove Quest",
  },
  {
    name: "Trinity",
    image: "/trinity.png",
    farmLocation: "Defeat Captain Vor and Lieutenant Lech Kril on Ceres",
  },
  {
    name: "Valkyr",
    image: "/valkyr.png",
    farmLocation: "Defeat Alad V on Jupiter",
  },
  {
    name: "Vauban",
    image: "/vauban.png",
    farmLocation: "Nightwave Cred Offerings",
  },
  { name: "Volt", image: "/volt.png", farmLocation: "Clan Dojo Energy Lab" },
  { name: "Voruna", image: "/voruna.png", farmLocation: "Lua’s Prey Quest" },
  {
    name: "Wisp",
    image: "/wisp.png",
    farmLocation: "Defeat Ropalolyst on Jupiter",
  },
  { name: "Wukong", image: "/wukong.png", farmLocation: "Clan Dojo Tenno Lab" },
  {
    name: "Xaku",
    image: "/xaku.png",
    farmLocation: "Father’s Offerings in Deimos",
  },
  { name: "Yareli", image: "/yareli.png", farmLocation: "The Waverider Quest" },
  { name: "Zephyr", image: "/zephyr.png", farmLocation: "Clan Dojo Tenno Lab" },
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
          className="border p-2 rounded"
        >
          <option value="default">Default</option>
          <option value="name">Name</option>
          <option value="done">Done</option>
          <option value="notDone">Not Done</option>
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
              src={image}
              alt={name}
              width={80}
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
