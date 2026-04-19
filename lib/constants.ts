export const BUSINESS = {
  name: "Pusat Tuisyen Budak Rajin",
  short: "Budak Rajin",
  tagline: "Membentuk Masa Depan Cemerlang Anak Anda",
  address:
    "No. 18, Tingkat 1, Persiaran Seksyen 4/10, Bandar Putra Bertam, 13200 Kepala Batas, Pulau Pinang",
  addressShort: "Bandar Putra Bertam, Kepala Batas",
  phone: "013-946 9192",
  phoneIntl: "+60139469192",
  email: "info@budakrajin.my",
  whatsappDefault:
    "Salam, saya ingin bertanya tentang kelas tuisyen untuk anak saya.",
  hours: {
    weekday: "2:00 PG – 9:30 MLM",
    saturday: "9:00 PG – 1:00 PTG",
    sunday: "Tutup",
  },
  social: {
    facebook: "https://facebook.com/PusatTuisyenBudakRajinBertam",
    instagram: "https://instagram.com/pusattuisyen_budakrajin",
  },
  mapsQuery:
    "Pusat+Tuisyen+Budak+Rajin+Bandar+Putra+Bertam+Kepala+Batas+Pulau+Pinang",
};

export const waLink = (msg: string = BUSINESS.whatsappDefault) => {
  const number = BUSINESS.phoneIntl.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
};

export const NAV_LINKS = [
  { href: "/", label: "Laman Utama" },
  { href: "/program", label: "Program Akademik" },
  { href: "/hubungi", label: "Hubungi Kami" },
];
