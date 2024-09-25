'use client'
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa'; // Importa el ícono
import './styles.css';

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <button className="back-button" onClick={handleBack}>
      <FaArrowLeft className="icon" /> Regresar
    </button>
  );
};

export default BackButton;
