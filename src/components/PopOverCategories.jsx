'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router'


function capitalizeFirstLetter(text) {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}



function PopOverCategories({ tipo, items }) {
  return (
    <Popover className="relative">
      {({ close }) => (
        <>
          {/* Botón */}
          <PopoverButton className="flex text-secondary-content hover:bg-base-300 hover:text-primary rounded-md px-3 py-2 text-sm font-medium">
            {tipo}
            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-secondary-content" />
          </PopoverButton>

          {/* Panel */}
          <PopoverPanel className="absolute top-full -left-8 z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-base-100 shadow-lg ring-1 ring-base-300 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
            <div className="p-4">
              {items.map((item) => (
                <div
                  key={item}
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-base-200"
                >
                  <div className="flex-auto">
                    <Link
                      to={`/category/${item}`}
                      onClick={() => close()}
                      className="block font-semibold text-base-content"
                    >
                      {capitalizeFirstLetter(item)}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
}


export default PopOverCategories;