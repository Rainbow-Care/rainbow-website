import styles from './styles.module.css';
import NeedForSobati from './sections/NeedForSobati';
import PalliativeCare from './sections/PalliativeCare';
import Beneficiary from './sections/Beneficiary';
import ComprehensiveServices from './sections/ComprehensiveServices';
import SobatiDifference from './sections/SobatiDifference';
import Header from './sections/Header';
import Footer from './sections/Footer';

const HeroSection = () => {
  return (
    <section
      className={styles.gradient}
      style={{ width: '100%', height: '650px' }}
    >
      <Header />
      {/* Why Sobati? */}
      <NeedForSobati />
      {/* What is Palliative Care? */}
      <PalliativeCare />
      {/* Who Can Benefit? */}
      <Beneficiary />
      {/* Our Comprehensive Services */}
      <ComprehensiveServices />
      {/* The Sobati Difference */}
      <SobatiDifference />
      <Footer />
    </section>
  );
};
export default HeroSection;
