
interface BerryFlavorsProps {
  flavors: { flavor: { name: string }; potency: number }[];
  name:string;
}

const BerryFlavors = ({ flavors, name }: BerryFlavorsProps) => (
  <div className="flavors">
    <h2>Sabores de la baya - {name}</h2>
    <div className="flavors-list">
      {flavors.map((flavor) => (
        <span key={flavor.flavor.name}>
          {flavor.flavor.name}: {flavor.potency}
        </span>
      ))}
    </div>
  </div>
);


export default BerryFlavors;
