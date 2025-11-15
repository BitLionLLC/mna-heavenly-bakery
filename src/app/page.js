import Image from 'next/image';
import breadImage from './assets/bread.jpg';
import ThemeToggle from './components/ThemeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <ThemeToggle />
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            MNA Heavenly Bakery
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light">
            Fresh baked goods made with love
          </p>
        </div>
      </header>

      {/* Important Notices */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-600 dark:border-blue-400 p-6 rounded-lg mb-8">
          <h2 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">Important Information</h2>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>$25 fee for changes to Delivery/Pickup date</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>Delivery cost is based on distance</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>Each order can be customized</span>
            </li>
          </ul>
        </div>

        {/* Menu Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-8 text-center">Our Menu</h2>

          {/* Cookies Section */}
          <section className="mb-12">
            <h3 className="text-3xl font-semibold text-blue-800 dark:text-blue-200 mb-6 pb-2 border-b-2 border-blue-200 dark:border-blue-700">
              Cookies
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <MenuItem name="Chocolate Chip Cookies" price="$15 for 6" price2="$25 for 12" />
              <MenuItem name="Brownie Cookies" price="$12 for 6" price2="$20 for 12" />
              <MenuItem name="Chocolate Chip Oatmeal Cookies" price="$15 for 6" price2="$25 for 12" />
              <MenuItem name="Oatmeal Cookies" price="$10 for 6" price2="$15 for 12" />
              <MenuItem name="Peanut Butter Cookies" price="$10 for 6" price2="$15 for 12" />
              <MenuItem name="M&M Cookies" price="$15 for 6" price2="$25 for 12" />
              <MenuItem name="Peanut Butter Oatmeal Cookies" price="$15 for 6" price2="$25 for 12" />
              <MenuItem name="Chocolate Cookies" price="$12 for 6" price2="$20 for 12" />
            </div>
          </section>

          {/* Cakes Section */}
          <section className="mb-12">
            <h3 className="text-3xl font-semibold text-blue-800 dark:text-blue-200 mb-6 pb-2 border-b-2 border-blue-200 dark:border-blue-700">
              Cakes
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <MenuItem name="Small Cake" price="$40 per layer" note="Special Filling + $5 - $15" />
              <MenuItem name="Medium Cake" price="$55 per layer" note="Special Filling + $5 - $15" />
              <MenuItem name="Large Cake" price="$70 per layer" note="Special Filling + $5 - $15" />
              <MenuItem name="Brownie Cake" price="$30 for small" note="+ $15 per size" />
            </div>
          </section>

          {/* Other Desserts Section */}
          <section className="mb-12">
            <h3 className="text-3xl font-semibold text-blue-800 dark:text-blue-200 mb-6 pb-2 border-b-2 border-blue-200 dark:border-blue-700">
              Other Desserts
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <MenuItem name="Brownies" price="$20 per tray" />
              <MenuItem name="Coffee Cake" price="$30" />
              <MenuItem name="Banana Pudding" price="$35" />
              <MenuItem name="Creme Brulé" price="$5 each" />
            </div>
          </section>

          {/* Banana Bread Section */}
          <section>
            <h3 className="text-3xl font-semibold text-blue-800 dark:text-blue-200 mb-6 pb-2 border-b-2 border-blue-200 dark:border-blue-700">
              Banana Bread
            </h3>
            <div className="flex justify-center mb-6">
              <Image
                src={breadImage}
                alt="Fresh baked bread"
                width={300}
                height={200}
                className="rounded-lg shadow-2xl max-w-full h-auto"
                priority
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <MenuItem name="Banana Bread" price="$25" />
              <MenuItem name="Chocolate Chip Banana Bread" price="$35" />
              <MenuItem name="Walnut Banana Bread" price="$35" />
              <MenuItem name="Cinnamon Banana Bread" price="$25" />
              <MenuItem name="Chocolate Banana Bread" price="$30" />
            </div>
          </section>
        </div>

        {/* Contact/Order Section */}
        <footer className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us to place your custom order today!
          </p>
          
          {/* Contact Details */}
          <div className="mb-8 space-y-3 text-blue-100">
            <p className="text-lg">
              8535 Greenbrier, San Antonio, TX, United States, Texas
            </p>
            <p className="text-lg">
              <a href="tel:+12103468303" className="hover:text-white transition-colors underline flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                (210) 346-8303
              </a>
            </p>
            <p className="text-lg">
              <a href="mailto:btippen98@gmail.com" className="hover:text-white transition-colors underline flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                btippen98@gmail.com
              </a>
            </p>
            <p className="text-lg">
              <a href="https://instagram.com/Drkness89" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                Instagram
              </a>
            </p>
            <p className="text-lg">
              <a href="https://www.facebook.com/profile.php?id=61577015690219" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                Facebook
              </a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12103468303"
              className="bg-white text-blue-800 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
              Call Us
            </a>
            <a
              href="mailto:btippen98@gmail.com"
              className="bg-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}

function MenuItem({ name, price, price2, note }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 p-6 rounded-lg border border-blue-200 dark:border-gray-600 hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">{name}</h4>
      <div className="space-y-1">
        <p className="text-lg font-medium text-blue-800 dark:text-blue-200">{price}</p>
        {price2 && (
          <p className="text-lg font-medium text-blue-800 dark:text-blue-200">{price2}</p>
        )}
        {note && (
          <p className="text-sm text-blue-600 dark:text-blue-300 italic">{note}</p>
        )}
      </div>
    </div>
  );
}
