const currentUser = {
  id: 0,
  pseudo: "Charly8",
  img: "../assets/images/profil.png",
  outfits: [
    {
      id: 1,
      images: [
        require("../assets/images/chemise.jpeg"),
        require("../assets/images/pant.jpeg")
      ],
      isUserFav: true
    },
    {
      id: 2,
      images: [
        require("../assets/images/top.jpeg"),
        require("../assets/images/pant2.jpg")
      ],
      isUserFav: false
    },
    {
      id: 3,
      images: [
        require("../assets/images/chemise.jpeg"),
        require("../assets/images/pant3.jpeg")
      ],
      isUserFav: true
    },
    {
      id: 4,
      images: [
        require("../assets/images/top.jpeg"),
        require("../assets/images/pant3.jpeg")
      ],
      isUserFav: false
    }
  ]
};
export default class UserService {
  getCurrentUserData = () => {
    return new Promise((resolve, reject) => {
      resolve(currentUser);
    });
  };
  getFavOutfits = () => {
    return new Promise((resolve, reject) => {
      resolve(currentUser.outfits.filter(outfit => outfit.isUserFav));
    });
  };
}
