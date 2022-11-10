import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import classnames from "clsx";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import Vandal from "../_assets/img/vandal.png";
import Coin from "../_assets/img/coin.png";
import { RiCloseFill } from "react-icons/ri";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface Props {}

const Dialog: any = () => {
  let [isOpen, setIsOpen] = useState(false);

  const wrapperVariants = {
    initial: {
      clipPath: "polygon(30% 50%, 0 12%, 0 62%, 6% 69%);",
      transition: { duration: 0.4 },
    },
    animate: {
      clipPath: "polygon(69% 100%, 0 12%, 0 62%, 30% 100%);",
      transition: { duration: 0.4 },
    },
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger asChild>
        <div className="bg-white w-[350px] pt-3  h-auto rounded-xl cursor-pointer">
          <div className="justify-center flex items-center flex-col">
            <h2 className="justify-center flex mb-6 text-3xl font-semibold text-gray-dark">
              Vandal
            </h2>
            <Image src={Vandal} width="300px" height="90px" alt="Weapon" />
          </div>
          <div className="ml-8 mt-4 mb-3 flex gap-2 text-xl text-gray-dark font-semibold ">
            <div className="mt-[2px]">
              <Image src={Coin} width="17px" height="17px" alt="Coin" />
            </div>
            <p>2.900</p>
          </div>
        </div>
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
              "w-[95vw] max-w-md rounded-lg p-4 md:w-full",
              "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
              "bg-gray",
              "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          >
            <motion.div className="flex flex-col items-center">
              <DialogPrimitive.Title className="text-2xl mt-2 font-semibold text-gray-dark">
                Vandal
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="text-md font-medium text-gray-dark">
                Rifle
              </DialogPrimitive.Description>
            </motion.div>

            <motion.div
              className="mt-8 "
              style={{ x, y, rotateX, rotateY, z: 100 }}
              drag
              dragElastic={0.16}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ cursor: "grabbing" }}
            >
              <Image src={Vandal} draggable="false" alt="Weapon" />
            </motion.div>

            <div className="grid grid-cols-2 w-[320px] ml-[70px] my-8 text-gray-dark">
              <p>FireRate: 9.75</p>
              <p>FireRate: 9.75</p>
              <p>FireRate: 9.75</p>
              <p>FireRate: 9.75</p>
              <p>FireRate: 9.75</p>
              <p>FireRate: 9.75</p>
            </div>

            <DialogPrimitive.Close
              className={classnames(
                "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
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
