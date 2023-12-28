import React, { useRef, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
  altText: string;
  name: string;
  averagePrice: string;
  group: string;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  imgUrl,
  altText,
  name,
  averagePrice,
  group,
}) => {
  const modalOverlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalOverlayRef.current &&
        !modalOverlayRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50'>
          <div ref={modalOverlayRef} className='bg-white p-4 rounded-lg'>
            <img
              src={imgUrl}
              alt={altText}
              style={{ width: 650 }}
              className='max-w-full max-h-full'
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg";
              }}
            />

            <p className='mt-4 text-lg text-gray-900'>Community: {name}</p>
            <p className='mt-1 text-md text-gray-800'>Group: {group}</p>
            <p className='mt-1 text-md text-gray-700'>
              {averagePrice !== "CA$0.00"
                ? `Average Price: ${averagePrice}`
                : "Average Price: No data"}
            </p>

            <button
              onClick={onClose}
              type='button'
              className='bg-white rounded-md p-2 inline-flex items-right justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
            >
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
