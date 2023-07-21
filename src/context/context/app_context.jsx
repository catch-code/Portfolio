import { createContext, useReducer } from "react";
import { AppReducer } from "../reducers/app_reducer";
export const AppContext = createContext({
  appState: {},
  appDispatch: () => {},
});

export const AppProvider = (props) => {
  const appInitialState = {
    theme: "dark",
    category: "uiux",
    projects: {
      uiux: [
        {
          title: "Tasaly Flex",
          description: "",
          url: "https://www.behance.net/gallery/146845217/Tasaly-Flex-UIUX-Design",
          image:
            "https://mir-s3-cdn-cf.behance.net/projects/808/68f6f4146845217.Y3JvcCw4MDgsNjMyLDAsMA.png",
        },
        {
          title: "Hiring Truck Drivers",
          description: "A hiring truck drivers UI design for websites",
          url: "https://www.behance.net/gallery/168780343/A-hiring-truck-drivers-UI-design-for-websites",
          image:
            "https://mir-s3-cdn-cf.behance.net/projects/808/ba480c168780343.Y3JvcCwxMzA5LDEwMjQsNjQsMA.png",
        },
        {
          title: "Tap Cash - landing page",
          description: "Tab Cash is an e-wallet application represented in an Orange Digital Center Hackathon, which makes it easy to you to send and receive money, show your previous transactions, and an additional feature which is parent’s control.",
          url: "https://www.behance.net/gallery/170466605/Tap-Cash-(E-wallet-)-Landing-page-ODC-Hackathon",
          image:
            "https://mir-s3-cdn-cf.behance.net/projects/808/62c554170466605.Y3JvcCwxMzA5LDEwMjQsNjQsMA.png",
        },
        {
          title: "Tap Cash App",
          description: "Tab Cash is an e-wallet application represented in an Orange Digital Center Hackathon, which makes it easy to you to send and receive money, show your previous transactions, and an additional feature which is parent’s control.",
          url: "https://www.figma.com/proto/Kt8yRtouY0rHIIrPjcbztV/Tab-Cash?page-id=0%3A1&type=design&node-id=183-1119&viewport=688%2C467%2C0.09&t=T6nnE04yCwggNMTy-1&scaling=min-zoom&starting-point-node-id=167%3A804&mode=design",
          image:
            "https://mir-s3-cdn-cf.behance.net/projects/808/b711f2170432403.Y3JvcCw5MjMsNzIyLDAsMA.png",
        },
        {
          title: "Time Management App",
          description: "Time Management App",
          url: "https://www.behance.net/gallery/169361441/Case-study-of-time-management-App",
          image:
            "https://mir-s3-cdn-cf.behance.net/projects/808/b9c95b169361441.Y3JvcCwyMzk3LDE4NzUsNDYyLDA.png",
        },
        {
          title: "Movie App",
          description: "",
          url: "https://www.behance.net/gallery/170432403/E-Wallet-App-(Tap-Cash)-ODC-Hackathon",
          image: "https://img.freepik.com/free-vector/display-template-with-clapperboard-glasses_79603-1244.jpg?w=1380&t=st=1689945417~exp=1689946017~hmac=e752a24a9c7101319e728f925638e86a937c47bfed42b7b13334373eac7d0b0a",
        },
        
      ],
      mobile: [
        {
          title: "Tap Cash",
          description:
            "Tab Cash is an e-wallet application represented in an Orange Digital Center Hackathon, which makes it easy to you to send and receive money, show your previous transactions, and an additional feature which is parent’s control.",
          url: "https://youtu.be/Qi1tR0xVwsE",
          embed: "https://www.youtube.com/embed/Qi1tR0xVwsE",
        },
        {
          title: "MobiCare: Doctor Demo",
          description:
            "MobiCare is a mobile application built on blockchain technology, It facilitates the methods of consultation and follow-up between doctors and their patients. It includes all required data about the patient including prescriptions, medical reports, radiology images, diagnoses, treatment plans, allergies, laboratory results, etc…, the patient is allowed to check them whenever he wants and also he can give access to his doctor to get and upload his medical records. The system also provides the patient with an alarm for medication appointments, where he is reminded of the date of each medication that he has entered. The application also allows doctors to upload videos that help spread awareness for users throughout the application.",
          url: "https://youtu.be/YxkTq1KS25I",
          embed: "https://www.youtube.com/embed/YxkTq1KS25I",
        },
        {
          title: "MobiCare: Patient Demo",
          description:
            "MobiCare is a mobile application built on blockchain technology, It facilitates the methods of consultation and follow-up between doctors and their patients. It includes all required data about the patient including prescriptions, medical reports, radiology images, diagnoses, treatment plans, allergies, laboratory results, etc…, the patient is allowed to check them whenever he wants and also he can give access to his doctor to get and upload his medical records. The system also provides the patient with an alarm for medication appointments, where he is reminded of the date of each medication that he has entered. The application also allows doctors to upload videos that help spread awareness for users throughout the application.",
          url: "https://youtu.be/9tdFveijhKM",
          embed: "https://www.youtube.com/embed/9tdFveijhKM",
        },
        {
          title: "Slim",
          description:
            "Slim is a mobile application that uses a powerful machine learning (ML) model to help users track their calorie intake and make informed decisions about their nutrition. The app allows users to easily log their meals by taking a photo of their food or searching for it in the app's extensive database of foods and recipes. The ML model then analyzes the image or search query to accurately identify the food and estimate its calorie content based on its ingredients and portion size.",
          url: "https://youtu.be/bhgYoGEkbJ0",
          embed: "https://www.youtube.com/embed/bhgYoGEkbJ0 ",
        },
        {
          title: "Shopping App",
          description:
            "ShopEasy, is a mobile application that is designed to make shopping simple and convenient. With ShopEasy, users can browse and purchase a wide range of products from the comfort of their own mobile device. The app offers a user-friendly interface that allows users to easily search and filter through products by category, price, and other attributes. Users can also save products to their wishlist for later purchase and receive notifications when those products go on sale.",
          url: "https://youtu.be/d_GhAKwJNNo",
          embed: "https://www.youtube.com/embed/d_GhAKwJNNo",
        },
        {
          title: "Movie App",
          description:
            "a mobile application that is designed to bring the magic of cinema to your fingertips. With MovieStream, users can enjoy a vast selection of movies and TV shows from the comfort of their own mobile device. The app offers a user-friendly interface that allows users to easily search and filter through movies and TV shows by genre, rating, and other attributes.",
          url: "https://youtube.com/shorts/oDM_VHJBN2g?feature=share",
          embed: "https://www.youtube.com/embed/oDM_VHJBN2g",
        },
      ],
      web: [
        {
          title: "https://tik-tok-clone-abdo.netlify.app/",
          description: "https://tik-tok-clone-abdo.netlify.app/",
          url: "https://tik-tok-clone-abdo.netlify.app/",
          image:
            "https://cdn.dribbble.com/users/1636225/screenshots/15155331/tiktok-clone-1600x1200.png",
        },
        {
          title: "https://crypto-hunting-abdo.netlify.app/",
          description: "https://crypto-hunting-abdo.netlify.app/",
          url: "https://crypto-hunting-abdo.netlify.app/",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP2C8cwxezhOpvoQCPPYHkfnb0T0Suv3MTfw&usqp=CAU",
        },
        {
          title: "https://youtube-clone-abdo.netlify.app/",
          description: "https://youtube-clone-abdo.netlify.app/",
          url: "https://youtube-clone-abdo.netlify.app/",
          image:
            "https://reactjsexample.com/content/images/2022/06/Code-2022-18-51-54.jpg",
        },
        {
          title: "https://estate-next-js.vercel.app/",
          description: "https://estate-next-js.vercel.app/",
          url: "https://estate-next-js.vercel.app/",
          image:
            "https://fixthephoto.com/blog/UserFiles/real-estate-cover-photos-820x340.jpg",
        },
        {
          title: "https://sala-sa.shop/",
          description: "https://sala-sa.shop/",
          url: "https://sala-sa.shop/",
          image:
            "https://sala-sa.shop/wp-content/uploads/2023/02/2.png.webp",
        },
        {
          title: "Landing-page: Dorsin",
          description:
            "The landing page is an important part of any website, and React JS makes it easier than ever to create a beautiful and effective page. React JS is a JavaScript library that allows developers to create user interfaces with ease. It provides the tools needed for creating dynamic web pages that are highly interactive, responsive, and easy-to-use. With its powerful features, you can quickly design an attractive landing page that will draw customers in and keep them engaged on your site. ",
          url: "https://midaismael.github.io/landing-page/",
          image:
            "https://themesbrand.com/dorsin/images/demo/index_2.png",
        },
        {
          title: "GYM-tutorial",
          description: "The homepage of the GYM-landing-page website features several sections that make it easy for potential customers to find what they’re looking for in no time at all. Customers can view featured gyms, check out different membership options, explore special deals and discounts available on fitness equipment purchases, see upcoming events hosted by the gym such as classes or seminars, read reviews from other members about their experiences at the gym ,and even contact customer service representatives directly if needed . All this information makes it easy for customers to choose which option best fits their needs without having to spend hours researching online before making any decisions .",
          url: "https://midaismael.github.io/gym-tutorial/",
          image:
            "https://midaismael.github.io/gym-tutorial/static/media/banner.8f5b3dec684b36f286ac.png",
        },
        {
          title: "Best-Eats",
          description: "The Best-Eats website page is designed to help customers find the best places to eat in their local area. It uses React JS, a popular JavaScript library, to create an interactive and user-friendly experience for its users.",
          url: "https://midaismael.github.io/Best-Eats/",
          image:
            "https://bk.asia-city.com/sites/default/files/u142691/besteats_fb01.jpg",
        },
        {
          title: "RealEstate",
          description: "The estate website page created using React JS will be highly customizable according to customer needs. This includes the ability for customers to customize their search criteria such as location, price range, amenities offered etc.",
          url: "https://midaismael.github.io/RealEstate/",
          image:
            "https://midaismael.github.io/RealEstate/static/media/hero-img.6bf08fe8a2341a0eff67.jpg",
        },
        {
          title: "cafe-landing-page",
          description: "The Cafe-Landing Page website page with React js is a great way to showcase your cafe and all the wonderful things it has to offer. With this powerful web page, you can easily create an attractive, user-friendly landing page that will help draw in potential customers. The React js framework allows for quick loading times and smooth navigation while providing beautiful visuals that are sure to make visitors take notice. ",
          url: "https://midaismael.github.io/cafe-landing-page/",
          image:
            "https://screenshots.webflow.com/sites/607d3f3b88d1c85f6691eff2/20210419114759_246d885cbcec8bebf7bb651f8e928c78.png",
        },
        {
          title: "News",
          description:
            "The news website page with HTML, CSS and JavaScript is designed to be an easy-to-navigate source of information for customers. The home page provides a concise overview of the latest news stories, as well as links to other sections on the site such as sports, entertainment and business. Each section contains a list of headlines that can be clicked on in order to view more detailed articles about each topic. Additionally, users have access to search functions so they can quickly locate specific topics or keywords within the content available on this web page.",
          url: "https://midaismael.github.io/news/",
          image: "https://midaismael.github.io/news/images/02.jpg",
        },
        {
          title: "Ecommerce-phone",
          description:
            "The Ecommerce-phone website page with React js is an innovative and efficient way to shop for the latest mobile phones. This web page allows customers to easily browse through a wide selection of top brands, compare features side by side, and purchase their desired phone in one convenient location. Customers can also access product reviews from other users before making their final decision. ",
          url: "https://midaismael.github.io/ecommerce-phone/",
          image:
            "https://midaismael.github.io/ecommerce-phone/static/media/img1.aff43e06b85a6d64ae09.jpg",
        },
        {
          title: "Restaurant",
          description:
            "The Restaurant website page with React js is an amazing way to create a modern and interactive web experience for customers. It provides the ability to quickly build dynamic, responsive user interfaces that can be used on any device or platform. With React js, developers have access to powerful tools such as state management, routing and data fetching which make creating complex applications much easier than before.",
          url: "https://midaismael.github.io/Restaurant/",
          image:
            "https://midaismael.github.io/Restaurant/static/media/3.12c392d279429f82935c.jpg",
        },
        {
          title: "https://container-eg.shop/",
          description: "https://container-eg.shop/",
          url: "https://container-eg.shop/",
          image:
            "https://container-eg.shop/wp-content/uploads/2023/05/324917916_879772270034122_7934994869216878925_n.jpg",
        },
        {
          title: "https://movies-hub-abdo.netlify.app/",
          description: "https://movies-hub-abdo.netlify.app/",
          url: "https://movies-hub-abdo.netlify.app/",
          image:
            "https://vijaysolution.com/wp-content/uploads/2023/05/All-Movies-Hub-download-APK-300MB-Bollywood-Hindi-1.jpg",
        },
        {
          title: "Emart-clothes",
          description:
            "Emart-clothes is an online apparel store that uses React JS to provide customers with a dynamic and intuitive shopping experience. The website page has been designed to make it easy for customers to find the items they are looking for.",
          url: "https://midaismael.github.io/emart-clothes/",
          image:
            "",
        },
        {
          title: "https://quizhub-abdo.netlify.app/",
          description: "https://quizhub-abdo.netlify.app/",
          url: "https://quizhub-abdo.netlify.app/",
          image:
            "https://quizhub-abdo.netlify.app/quiz.svg",
        },
      ],
      // backend: [
      //   {
      //     title: "Backend",
      //     description:
      //       "Backend is a web application that allows users to create, edit, and delete projects.",
      //     url: "https://backend.com/",
      //     image:
      //       "https://img.freepik.com/free-vector/api-concept-illustration_114360-9822.jpg?w=826&t=st=1689309524~exp=1689310124~hmac=706ea5ed25981969fa0f8e9b093d0ee08ed943e6f7b9de910be951164924fd86",
      //     tags: ["React", "Redux", "Node", "Express", "MongoDB"],
      //   },
      //   {
      //     title: "Backend",
      //     description:
      //       "Backend is a web application that allows users to create, edit, and delete projects.",
      //     url: "https://backend.com/",
      //     image:
      //       "https://img.freepik.com/free-vector/api-concept-illustration_114360-9822.jpg?w=826&t=st=1689309524~exp=1689310124~hmac=706ea5ed25981969fa0f8e9b093d0ee08ed943e6f7b9de910be951164924fd86",
      //     tags: ["React", "Redux", "Node", "Express", "MongoDB"],
      //   },
      //   {
      //     title: "Backend",
      //     description:
      //       "Backend is a web application that allows users to create, edit, and delete projects.",
      //     url: "https://backend.com/",
      //     image:
      //       "https://img.freepik.com/free-vector/api-concept-illustration_114360-9822.jpg?w=826&t=st=1689309524~exp=1689310124~hmac=706ea5ed25981969fa0f8e9b093d0ee08ed943e6f7b9de910be951164924fd86",
      //     tags: ["React", "Redux", "Node", "Express", "MongoDB"],
      //   },
      // ],
      // testing: [
      //   {
      //     title: "Testing",
      //     description:
      //       "Testing is a web application that allows users to create, edit, and delete projects.",
      //     url: "https://testing.com/",
      //     image:
      //       "https://img.freepik.com/free-vector/tiny-business-people-with-digital-devices-testing-demo-software-beta-testing-new-product-testing-presale-user-experience-concept-bright-vibrant-violet-isolated-illustration_335657-1024.jpg?w=1380&t=st=1689309559~exp=1689310159~hmac=2ada45be2f638258b682b6afb8964abf42157807f8599410a34d343b6aee0c59",
      //     tags: ["React", "Redux", "Node", "Express", "MongoDB"],
      //   },
      //   {
      //     title: "Testing",
      //     description:
      //       "Testing is a web application that allows users to create, edit, and delete projects.",
      //     url: "https://testing.com/",
      //     image:
      //       "https://img.freepik.com/free-vector/tiny-business-people-with-digital-devices-testing-demo-software-beta-testing-new-product-testing-presale-user-experience-concept-bright-vibrant-violet-isolated-illustration_335657-1024.jpg?w=1380&t=st=1689309559~exp=1689310159~hmac=2ada45be2f638258b682b6afb8964abf42157807f8599410a34d343b6aee0c59",
      //     tags: ["React", "Redux", "Node", "Express", "MongoDB"],
      //   },
      // ],
      // ai: [
      //   {
      //     title: "AI",
      //     description:
      //       "AI is a web application that allows users to create, edit, and delete projects.",
      //     url: "https://ai.com/",
      //     image:
      //       "https://img.freepik.com/premium-photo/futuristic-robot-artificial-intelligence-concept_31965-4087.jpg?w=1380",
      //     tags: ["React", "Redux", "Node", "Express", "MongoDB"],
      //   },
      // ],
    },
  };

  const [appState, appDispatch] = useReducer(AppReducer, appInitialState);

  return (
    <AppContext.Provider
      value={{
        appState,
        appDispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
