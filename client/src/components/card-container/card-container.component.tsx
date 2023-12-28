import { Community } from "../../App";
import { useState } from "react";
import Modal from "../modal/modal";

type CommunityProps = {
  card: Community;
};

const CardContainer = ({ card }: CommunityProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div key={card.id} className='group'>
        <div
          className='delay-150 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'
          onClick={openModal}
        >
          {card.imgUrl ? (
            <img
              src={card.imgUrl}
              alt={card.name}
              className='h-full w-full object-cover object-center group-hover:opacity-75 cursor-pointer'
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg";
              }}
            />
          ) : (
            <img
              src='https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg'
              alt='No-image'
              className='h-full w-full object-cover object-center group-hover:opacity-75 cursor-pointer'
            />
          )}
        </div>
        <p className='mt-4 text-lg text-gray-900'>Community: {card.name}</p>
        <p className='mt-1 text-md text-gray-900'>Group: {card.group}</p>
        <p className='mt-1 text-md text-gray-700'>
          {card.averagePrice !== "CA$0.00"
            ? `Average Price: ${card.averagePrice}`
            : "Average Price: No data"}
        </p>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imgUrl={
          card.imgUrl ||
          "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg"
        }
        altText={card.name}
        name={card.name}
        group={card.group}
        averagePrice={card.averagePrice}
      />
    </>
  );
};

export default CardContainer;
