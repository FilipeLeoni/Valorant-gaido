import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import classnames from "clsx";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import Vandal from "../_assets/img/vandal.png";
import Coin from "../_assets/img/coin.png";
import { RiCloseFill } from "react-icons/ri";
import { motion, useMotionValue, useTransform } from "framer-motion";
import brightLogo from "../_assets/img/bright-logo.png";

const Dialog: any = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger asChild>
        <motion.div
          className="background-weapon
              bg-center
              bg-cover w-[450px] pt-3 h-[248px] rounded-xl cursor-pointer border"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          whileHover={{ scale: 1.03 }}
        >
          <div>
            <motion.div
              className="mt-14 justify-center flex "
              variants={{
                open: { rotate: 20 },
                closed: { rotate: 0 },
              }}
              animate={isHover ? "open" : "closed"}
            >
              <Image src={Vandal} width="350px" height="104px" alt="Weapon" />
            </motion.div>
            <h2 className="ml-8 text-3xl font-bold text-pink font-SansPro">
              VANDAL
            </h2>
          </div>
          <div className="ml-8 mb-3 flex gap-2 mt-[-6px] text-[23px] text-white font-SansPro">
            <div className="mt-[2px]">
              <Image src={Coin} width="17px" height="17px" alt="Coin" />
            </div>
            <p>2.900</p>
          </div>
        </motion.div>
      </DialogPrimitive.Trigger>
      <Transition.Root show={isOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogPrimitive.Overlay
            forceMount
            className="fixed inset-0 z-20 bg-black/50"
          />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <DialogPrimitive.Content
            forceMount
            className={classnames(
              "fixed z-50",
              "md:w-[95vw] max-w-xl rounded-lg p-4 w-[700px] h-[450px]",
              "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
              "bg-gray",
              "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          >
            <motion.div
              className="flex flex-col items-center"
              style={{ x, y, rotateX, rotateY, z: 100 }}
              drag
              dragElastic={0.12}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.div className="flex flex-col items-center">
                <DialogPrimitive.Title className="text-3xl mt-2 font-semibold text-gray-dark">
                  Vandal
                </DialogPrimitive.Title>
                <DialogPrimitive.Description className="text-lg font-medium text-gray-dark">
                  Rifle
                </DialogPrimitive.Description>
              </motion.div>
              <motion.div className="absolute top-[-70px] overflow-hidden object-cover">
                <Image src={brightLogo} alt="logo" draggable="false" />
              </motion.div>
              <div className="flex justify-center">
                <motion.div
                  className="mt-16 drop-shadow-md w-10/12 mr-2"
                  style={{ x, y, rotateX, rotateY, z: 1000000 }}
                  drag
                  dragElastic={0.12}
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  whileTap={{ cursor: "grabbing" }}
                >
                  <Image src={Vandal} draggable="false" alt="Weapon" />
                </motion.div>
              </div>

              <div className="grid grid-cols-2 w-[320px] my-8 text-gray-dark text-lg rounded-xl place-items-center absolute top-72">
                <p>FireRate: 9.75</p>
                <p>FireRate: 9.75</p>
                <p>FireRate: 9.75</p>
                <p>FireRate: 9.75</p>
                <p>FireRate: 9.75</p>
                <p>FireRate: 9.75</p>
              </div>
            </motion.div>

            <DialogPrimitive.Close
              className={classnames(
                "absolute top-3.5 right-3.5 inline-flex text-2xl items-center justify-center rounded-full p-1",
                "focus:outline-none focus-visible:ring focus-visible:ring-pink focus-visible:ring-opacity-75"
              )}
            >
              <RiCloseFill />
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </Transition.Child>
      </Transition.Root>
    </DialogPrimitive.Root>
  );
};

export default Dialog;
