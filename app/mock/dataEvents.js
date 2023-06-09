// Database with all events, from 2023, catched by components CarMax.jsx (futur events) and CardMaxPast.jsx, Card.jsx (in Events.jsx)

const dataEvents = [
  {
    id: 3,
    title: "Les jARTdins de Montagny",
    date: "27 et 28 mai 2023",
    location: "Le village",
    description:
      "C'est la vingtième édition de cette manifestation organisée par l'Acam qui accueille près de 5000 visiteurs. \n Depuis 20 ans, attirant un large public de tous horizons, l’événement « les jARTdins de Montagny » est un rendez-vous incontournable du printemps. \nLe village de Montagny-en-Vexin accueille dans ses jardins les réalisations d’artistes plasticiens désirant trouver des lieux d’expositions non conventionnels. \nCroisée des chemins entre l’Ile de France et la Normandie, Montagny-en-Vexin est une porte d’entrée des Hauts-de-France où cette « grande promenade des Arts » démontre le dynamisme et la créativité de nos artistes. \nDurant tout le week-end : des moments musicaux, de danse, de chants, de théâtre... à découvrir.",
    src: "/images/events/202305_jartdins.jpeg",
    alt: "jARTdins de Montagny 2023",
    link: "https://www.lesjartdinsdemontagny.fr/index.html",
    past: false,
    souvenirs: false,
  },
  {
    id: 2,
    title: "On purge bébé",
    date: "22 avril 2023 à 20h30",
    location: "Salle des fêtes, rue de la fontaine",
    description:
      "On purge bébé (également écrit On purge bébé !) est un vaudeville de Georges Feydeau, représenté pour la première fois le 12 avril 1910 au Théâtre des Nouveautés. \n Il s'agit d'une pièce en un acte, composé de six scènes musicales et de théâtre contemporain, dans laquelle des bourgeois élèvent un enfant infernal avec une présence imminente du comique. On purge bébé (également écrit On purge bébé !) est un vaudeville de Georges Feydeau, représenté pour la première fois le 12 avril 1910 au Théâtre des Nouveautés. \n Il s'agit d'une pièce en un acte, composé de six scènes musicales et de théâtre contemporain, dans laquelle des bourgeois élèvent un enfant infernal avec une présence imminente du comique.",
    src: "/images/events/202304_theatre.jpg",
    medias: {
      src1: "/images/souvenirs/20230422/1.jpg",
      src2: "/images/souvenirs/20230422/2.jpg",
      src3: "/images/souvenirs/20230422/3.jpg",
      src4: "/images/souvenirs/20230422/4.jpg",
      // src5: "/images/souvenirs/20230422/5.jpg",
    },
    alt: "Affiche du théatre Feydeau",
    link: "",
    past: false,
    souvenirs: true,
  },
  {
    id: 1,
    title: "Soirée baroque",
    date: "25 mars 2023 à 20h30",
    location: "Salle des fêtes, rue de la fontaine",
    description: "",
    src: "/images/events/20230325_baroque.jpg",
    medias: {
      src1: "/images/souvenirs/20230325/1.jpg",
      src2: "/images/souvenirs/20230325/2.jpg",
      src3: "/images/souvenirs/20230325/3.jpg",
      src4: "/images/souvenirs/20230325/4.jpg",
      src5: "/images/souvenirs/20230325/5.jpg",
    },
    alt: "Soirée baroque",
    link: "",
    past: true,
    souvenirs: true,
  },
];

export default dataEvents;

/* Template objet json
   {
    id: 1,
    title: "Soirée baroque",
    date: "25 mars 2023 à 20h30",
    location: "",
    description: "",
    src: "/images/events/20230325_baroque.jpg",
    alt: "Soirée baroque",
    link: "",
    past: true,
  },
 */
