import CardContainer from "../card-container/card-container.component";
import { Community } from "../../App";

type SearchResultsProps = {
  searchResults: Community[];
};

const CardList: React.FC<SearchResultsProps> = ({ searchResults }) => {
  return (
    <>
      <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
          <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
            {searchResults.map((card) => {
              return <CardContainer card={card} key={card.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardList;
