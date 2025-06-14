import HA from "../assets/HA.png";
import BookStore from  "../assets/Book Store.png";
import Portfolio from "../assets/Portfolio.png";

export let projectList = [
  {
    pid: Math.random().toString(),
    pimg:HA ,
    ptilte: "HealthBridge Ayeyarwady",
    planguages: ["html", "css", "javascript"],
    pdescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            minus quia ad laudantium. A ratione reprehenderit esse laboriosam
            ipsam aspernatur inventore vel neque consequatur, nostrum provident,
            impedit praesentium repellendus tempora?`,
    plink: "https://lamin2005.github.io/HealthBridge-Ayeyarwady/",
  },

  {
    pid: Math.random().toString(),
    pimg:BookStore,
    ptilte: "BookStore Shop",
    planguages: ["React", "css"],
    pdescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            minus quia ad laudantium. A ratione reprehenderit esse laboriosam
            ipsam aspernatur inventore vel neque consequatur, nostrum provident,
            impedit praesentium repellendus tempora?`,
    plink: "https://book-store-six-plum-84.vercel.app/",
  },

  {
    pid: Math.random().toString(),
    pimg: Portfolio,
    ptilte: "Portfolio",
    planguages: ["React","css"],
    pdescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            minus quia ad laudantium. A ratione reprehenderit esse laboriosam
            ipsam aspernatur inventore vel neque consequatur, nostrum provident,
            impedit praesentium repellendus tempora?`,
    plink: "https://laminhein-rbs8.vercel.app/",
  },
];
