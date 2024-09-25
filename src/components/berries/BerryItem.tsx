interface BerryItemProps {
  itemName: string;
}

const BerryItem = ({ itemName }: BerryItemProps) => (
  <div className="item">
    <h3>Artículo</h3>
    <div className="item-info">
      <span>{itemName}</span>
    </div>
  </div>
);

export default BerryItem;
