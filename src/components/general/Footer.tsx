import { Icon } from "@iconify/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full flex-col items-center gap-6 bg-secondary py-6 text-light lg:py-10">
      <h1 className="container text-4xl font-bold">RoomRent</h1>
      <div className="container grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-light">
            Jalan R.M Harsono No.1 RT09/04 Ragunan, Pasar Minggu, Jakarta
            Selatan Lantai 1-2, South Jakarta City, Jakarta 12550
          </span>
          <div className="flex flex-row items-center gap-2">
            <Icon icon="simple-icons:whatsapp" className="text-2xl" />
            <a
              href="https://wa.me/6285235118859"
              className="hover:text-primary"
            >
              +62 852 3511 8859
            </a>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Icon icon="simple-icons:gmail" className="text-2xl" />
            <a href="mailto:help@roomrent.id" className="hover:text-primary">
              help@roomrent.id
            </a>
          </div>
          <div className="flex flex-row items-center gap-4">
            <a href="https://instagram.com">
              <Icon icon="simple-icons:instagram" className="text-2xl" />
            </a>
            <a href="https://linkedin.com">
              <Icon icon="simple-icons:linkedin" className="text-2xl" />
            </a>
            <a href="https://tiktok.com">
              <Icon icon="simple-icons:tiktok" className="text-2xl" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">All Locations</h2>
          <span>Jakarta</span>
          <span>Bandung</span>
          <span>Semarang</span>
          <span>Solo</span>
          <span>Yogyakarta</span>
          <span>Surabaya</span>
          <span>Malang</span>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Information</h2>
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
          <span>FAQ</span>
        </div>
      </div>

      <div className="container">
        <div className="w-full border-t border-light"></div>
      </div>

      <span className="container text-center">
        &copy; {currentYear}. All rights reserved to RoomRent
      </span>
    </footer>
  );
};

export default Footer;
