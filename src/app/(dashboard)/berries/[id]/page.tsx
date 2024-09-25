// pages/berry/[id]/page.tsx
import { Metadata } from 'next';
import './stylesdetalles.css';
import { generateBerryMetadata, getBerriesById } from '@/services/berries/get-berries-by-id';
import { notFound } from 'next/navigation';
import BerryImage from '@/components/berries/BerryImage';
import BerryFlavors from '@/components/berries/BerryFlavors';
import BerryAttributes from '@/components/berries/BerryAttributes';
import BerryItem from '@/components/berries/BerryItem';
import BerryNaturalGift from '@/components/berries/BerryNaturalGift';
import { ArgumentIDByUrl } from '@/interfaces/argument-by-url-interface';
import BackButton from '@/components/buttons/BackButton';


export async function generateMetadata({ params }: ArgumentIDByUrl): Promise<Metadata> {
  return generateBerryMetadata(params.id);
}

export default async function BerryPage({ params }: ArgumentIDByUrl) {
  const berryData = await getBerriesById(params.id);

  if (!berryData) {
    return notFound();
  }
  return (
    <div className="berry-card">
      <BackButton />
      <BerryImage name={berryData.name} />
      <div className="berry-info">
        <BerryFlavors flavors={berryData.flavors} name={berryData.name} />
        <BerryAttributes
          firmness={berryData.firmness.name}
          growthTime={berryData.growth_time}
          maxHarvest={berryData.max_harvest}
          size={berryData.size}
          smoothness={berryData.smoothness}
          soilDryness={berryData.soil_dryness}
        />
        <BerryNaturalGift
          power={berryData.natural_gift_power}
          type={berryData.natural_gift_type.name}
        />
        <BerryItem itemName={berryData.item.name} />
      </div>
    </div>
  );
}
