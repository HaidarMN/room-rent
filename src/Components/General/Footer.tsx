const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <nav className="flex w-full flex-col items-center gap-10 bg-secondary py-10 text-white">
      <div className="container grid grid-cols-3 gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">RoomRent</h1>
          <span className="text-light">
            Jalan R.M Harsono No.1 RT09/04 Ragunan, Pasar Minggu, Jakarta
            Selatan Lantai 1-2, South Jakarta City, Jakarta 12550
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">All Locations</h2>
          <span>Jakarta</span>
          <span>Bandung</span>
          <span>Semarang</span>
          <span>SOlo</span>
          <span>Yogyakarta</span>
          <span>Surabya</span>
          <span>Malang</span>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Information</h2>
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
          <span>FAQ</span>
        </div>
      </div>

      <span className="container text-center">
        &copy; {currentYear}. All rights reserved to RoomRent
      </span>
    </nav>
  );
};

export default Footer;
