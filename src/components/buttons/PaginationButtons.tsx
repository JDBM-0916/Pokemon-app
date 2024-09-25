// PaginationButtons.tsx
import React from 'react';
import { IoAddCircleOutline, IoRemoveOutline } from 'react-icons/io5';

interface PaginationButtonsProps {
  showMore: () => void;
  showLess: () => void;
  canShowLess: boolean;
  currentCount: number;
  totalCount: number;
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  showMore,
  showLess,
  canShowLess,
  currentCount,
  totalCount,
}) => {
  return (
    <div className="button-wrapper view-mores">
      {canShowLess && (
        <button onClick={showLess} className="btn show-less">
          <IoRemoveOutline className="centrar-icono" size={20} />
        </button>
      )}
      
      <button onClick={showMore} className="btn show-more">
        <IoAddCircleOutline className="centrar-icono" size={20} />
      </button>
      <div>
        <p className="pagination-number">
          {currentCount} de {totalCount}
        </p>
      </div>
    </div>
  );
};

export default PaginationButtons;
