const outfits = [
  {
    id: 1,
    images: [
      require("../assets/images/chemise.jpeg"),
      require("../assets/images/pant.jpeg")
    ]
  },
  {
    id: 2,
    images: [
      require("../assets/images/top.jpeg"),
      require("../assets/images/pant2.jpg")
    ]
  },
  {
    id: 3,
    images: [
      require("../assets/images/chemise.jpeg"),
      require("../assets/images/pant3.jpeg")
    ]
  },
  {
    id: 4,
    images: [
      require("../assets/images/top.jpeg"),
      require("../assets/images/pant3.jpeg")
    ]
  }
];

export default class OutfitService {
  getFriendFavOutfit = () => {
    return new Promise((resolve, reject) => {
      resolve(outfits);
    });
  };
}
