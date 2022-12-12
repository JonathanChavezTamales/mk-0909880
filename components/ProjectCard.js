import { useState } from "react";
import randomColor from "randomcolor";
import Modal from "./Modal";

export default function ProjectCard({
  name = "Logout Creation",
  creator = "Jonathan C.",
  creationDate = new Date(),
  empty,
}) {
  const [updates, setUpdates] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const gradient = randomColor({
    count: 2,
    hue: "purple",
    luminosity: "dark",
  });

  return (
    <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {openModal && (
        <Modal open={openModal} closeCb={() => setOpenModal(false)}></Modal>
      )}
      {empty ? (
        <div className="min-h-[30vh] p-9 " onClick={() => setOpenModal(true)}>
          <div className="border-2 border-gray-200 border-dashed rounded-lg max-h-80 py-8 text-center text-gray-500">
            Add project +
          </div>
        </div>
      ) : (
        <div className="min-h-[30vh]">
          <div
            className="w-full  max-w-md  shadow-lg"
            style={{
              background: `linear-gradient(90deg, ${gradient[0]}, ${gradient[1]})`,
            }}
          >
            <div className="px-6 py-4 text-center text-white">
              <h1 className="font-bold text-2xl mb-2">{name}</h1>
            </div>
          </div>
          <div className="px-6 py-4">
            <p className="text-gray-700 text-xs">
              {creationDate.toDateString()}
            </p>
          </div>
          <div className="px-6 py-4">
            <p className="font-bold text-xl mb-2 text-gray-800">Updates:</p>
            <ul>
              {updates.map((update) => (
                <li key={update.id} className="mb-4">
                  <p className="text-gray-700 text-base">{update.text}</p>
                  <p className="text-gray-500 text-sm">({update.date})</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
