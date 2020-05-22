import suffleArray from '../utils/suffleArray';

export const albums = [
  {
    id: 1,
    title: 'Tribo da Periferia - 4° Último',
    image:
      'https://images.suamusica.com.br/i2Lryxgotn2hRXlVHaxuN_52SVw=/300x300/7776778/1369617/cd_cover.jpg',
    owner: 'Tribo da periferia',
  },
  {
    id: 2,
    title: '1000 Trutas 1000 Tretas (Ao Vivo)',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/e/e9/1000_Trutas%2C_1000_Tretas.jpg',
    owner: "Racionais Mc's",
  },
  {
    id: 3,
    title: 'Por Mais Beijos Ao Vivo, Ep1 - Ao Vivo',
    image:
      'https://lh3.googleusercontent.com/3sejRSHjDKz62niW-xgNCZxY-emXnoCDca3Ycope_Vd-6kShVwyhuVzCkXDGkQ36ag8gDBYRM8Lhzp6q=w544-h544-l90-rj',
    owner: 'Zé Neto & Cristiano',
  },
  {
    id: 4,
    title: 'ASTROWORLD',
    image:
      'https://lh3.googleusercontent.com/PSIZ9cf9hpESZwcSz2ylS5I-zIREqCSagxV-X4CJqefrE0sRCktRtFw-a7PlkLygmg7k1nZREKCaSzY=w544-h544-l90-rj',
    owner: 'Travis Scott',
  },
  {
    id: 5,
    title: 'Birds In The Trap Sing McKnight',
    image:
      'https://lh3.googleusercontent.com/4KB4cS7i427tdsareLs5j10tifHVvmP6X3G4umnxCm8Ra9zkG1hYq0C7Lg-B-I-n1i8SP-heKzAKIQXw=w544-h544-l90-rj',
    owner: 'Travis Scott',
  },
  {
    id: 6,
    title: 'La Película',
    image:
      'https://lh3.googleusercontent.com/W4ZqD1DoejD5Auq5R8eSKebI40-DvzjGvtuwAka4yvRcESfWb4oo0n6tpzK-GCNHpM2VePTaFaLlJ_M=w544-h544-l90-rj',
    owner: 'Bruno & Marrone',
  },
  {
    id: 7,
    title: 'Nada Como um Dia Após o Outro Dia, Vol. 1 & 2',
    image:
      'https://lh3.googleusercontent.com/FSZk8Vp72dpbubbJ1vCZKaIN-SedgBRjxFt-qNxk0n72QfUdNL6eiVvt-ixFaWrs1HriSC0Zpu5j4X8=w544-h544-l90-rj',
    owner: "Racionais Mc's",
  },
  {
    id: 8,
    title: 'Buteco do Gusttavo Lima (Deluxe)',
    image:
      'https://lh3.googleusercontent.com/YebIcJ0tYMOBSbUOJH77FhHHDnaRsrfKqrDjBe1pAZK4b8RG6w0rVrQOPqWl48_KHK_T9VTHny3I7Uiu7A=w544-h544-l90-rj',
    owner: 'Gusttavo Lima',
  },
  {
    id: 9,
    title: 'Buteco do Gusttavo Lima, Vol. 2',
    image:
      'https://lh3.googleusercontent.com/Ky2HekPkKH5wrcVno9eKdDPsc77-deFe8t9C200hVkgDr2-UpdUtbvNJjhTAp1_ZPAUv-MBYNZNdKMo=w544-h544-l90-rj',
    owner: 'Gusttavo Lima',
  },
  {
    id: 10,
    title: 'Scorpion',
    image:
      'https://lh3.googleusercontent.com/9Oe4acEXgmAlCKgcgI6JlSXi2Tj30u6anzvfGBrunGO-fLhBTgzy-ei1ugPJpZDD5ArKFod9H4RTA5g0=w544-h544-l90-rj',
    owner: 'Drake',
  },
];

export const sections = [
  {
    id: 1,
    title: 'Tocado recentemente',
    albums: suffleArray(albums),
  },
  {
    id: 2,
    title: 'Suas Playlists',
    albums: suffleArray([...albums].slice(0, albums.length / 2)),
  },
  {
    id: 31,
    title: 'Melhores artistas',
    albums: suffleArray(
      [...albums].slice(albums.length / 2, albums.length - 1),
    ),
  },
  {
    id: 14,
    title: 'Melhores',
    albums: suffleArray([...albums.reverse()]),
  },
];
