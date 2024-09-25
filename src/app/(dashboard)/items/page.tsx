import { getItems } from '@/services/items/get-items';
import '../styles.css';
import { Metadata } from 'next';
import { ItemsGrid } from '@/components/items/itemsGrid';


export const metadata: Metadata = {
  title: 'Objetos',
  description: 'listado de todos los Objetos Pokemon',
};


export default async function ItemsPage() {

  const cant_Items = 100;
  const Items = await getItems(cant_Items);
  return (
    <div>
      <h1 className="main-title">
        listado de Objetos
      </h1>
      <ItemsGrid Items={Items} />
    </div>
  );
}
