import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from 'react-icons/io';

const Modal = ({
  isOpen,
  onChange,
  children
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange} className='relative z-100'>
      
      <Dialog.Portal>

        <Dialog.Overlay 
          className="bg-neutral-300/80 -backdrop-blur-sm fixed inset-0 z-[100]" 
        />

        <Dialog.Content
          className="fixed z-[100] drop-shadow-md border-2 border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[90vh] w-full md:w-[90vw] md:max-w-fit translate-x-[-50%] translate-y-[-50%] rounded-md bg-[#c7aded] bg-opacity-50 p-[30px] focus:outline-none">

          <div className='sm:h-[50rem] sm:w-[50rem]'>
            {children}
          </div>

          <Dialog.Close asChild>

            <button
              className="text-[#31255e] absolute z-[500] top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none" aria-label="Close"
            >
              <IoMdClose className='text-3xl' />
            </button>

          </Dialog.Close>

        </Dialog.Content>

      </Dialog.Portal>

    </Dialog.Root>
  )
}

export default Modal