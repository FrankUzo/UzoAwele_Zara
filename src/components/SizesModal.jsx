import React, { useContext, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import ModalOffCanvas from "./ModalOffCanvas";
// import { ShopContext } from "../context/ShopContext";

const SizesModal = ({ size, setOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const { filterProducts } = useContext(ShopContext);?
  return (
    <div className=" w-full">
      <div>
        <table className="justify-center w-full">
          <caption class="border-collapse border border-gray-400 py-1 bg-slate-200">
            <div className="flex items-center justify-between mx-3">
              <b>SELECT SIZES</b>
              <IoMdCloseCircle
                size={20}
                onClick={() => {
                  setOpenModal(false);
                }}
                className="cursor-pointer"
              />
            </div>
          </caption>
          <tbody className="text-center bg-white font-semibold">
            <tr>
              <td class="border border-gray-300">{size[0]}</td>
              <td class="border border-gray-300">{size[1]}</td>
            </tr>
            <tr>
              <td class="border border-gray-300">{size[2]}</td>
              <td class="border border-gray-300">{size[3]}</td>
            </tr>
            <tr>
              <td class="border border-gray-300">{size[4]}</td>
              <td class="border border-gray-300">{size[5]}</td>
            </tr>
            <tr className=" border border-gray-400 py-1 bg-slate-200">
              <td
                onClick={() => setIsOpen(true)}
                class="border border-gray-300 cursor-pointer"
              >
                <p>FIT FINDER</p>
              </td>
              <td class="border border-gray-300 cursor-pointer">
                <p>MEASURMENTS</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <ModalOffCanvas isOpen={isOpen} setIsOpen={setOpenModal} />
      </div>
    </div>
  );
};

export default SizesModal;
