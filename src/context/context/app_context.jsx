import { createContext, useReducer } from "react"

import { AppReducer } from "../reducers/app_reducer"

export const AppContext = createContext({
  appState: {},
  appDispatch: () => { },
})

export const AppProvider = (props) => {
  const appInitialState = {
    theme: "dark",
    category: "uiux",
    projects: {
      uiux: [
        {
          title: "Movie App",
          description: "",
          url: "https://www.figma.com/proto/qCAgToNhQB0dkgW2nRQhl1/Movie-App?page-id=0%3A1&type=design&node-id=12-221&viewport=624%2C375%2C0.17&t=pWbvHgBw6Aqoqlbq-1&scaling=scale-down&starting-point-node-id=2%3A311&mode=design",
          image: "https://drive.google.com/file/d/1Ow-7XxKw8c-Mc_GVtSTYi00zvChddzIT/view?usp=sharing",
        },
        {
          title: "Tap Cash",
          description: "Smart Wallet",
          url: "https://www.figma.com/proto/Kt8yRtouY0rHIIrPjcbztV/Tab-Cash?page-id=0%3A1&type=design&node-id=183-1119&viewport=688%2C467%2C0.09&t=T6nnE04yCwggNMTy-1&scaling=min-zoom&starting-point-node-id=167%3A804&mode=design",
          image: "https://drive.google.com/file/d/1Ow-7XxKw8c-Mc_GVtSTYi00zvChddzIT/view?usp=sharing",
        }
      ],
      mobile: [
        {
          title: "Tap Cash",
          description: "Tab Cash is an e-wallet application represented in an Orange Digital Center Hackathon, which makes it easy to you to send and receive money, show your previous transactions, and an additional feature which is parent’s control.",
          url: "https://youtu.be/Qi1tR0xVwsE",
          embed: "https://www.youtube.com/embed/Qi1tR0xVwsE"
        },
        {
          title: "MobiCare: Doctor Demo",
          description: "MobiCare is a mobile application built on blockchain technology, It facilitates the methods of consultation and follow-up between doctors and their patients. It includes all required data about the patient including prescriptions, medical reports, radiology images, diagnoses, treatment plans, allergies, laboratory results, etc…, the patient is allowed to check them whenever he wants and also he can give access to his doctor to get and upload his medical records. The system also provides the patient with an alarm for medication appointments, where he is reminded of the date of each medication that he has entered. The application also allows doctors to upload videos that help spread awareness for users throughout the application.",
          url: "https://youtu.be/YxkTq1KS25I",
          embed: "https://www.youtube.com/embed/YxkTq1KS25I"
        },
        {
          title: "MobiCare: Patient Demo",
          description: "MobiCare is a mobile application built on blockchain technology, It facilitates the methods of consultation and follow-up between doctors and their patients. It includes all required data about the patient including prescriptions, medical reports, radiology images, diagnoses, treatment plans, allergies, laboratory results, etc…, the patient is allowed to check them whenever he wants and also he can give access to his doctor to get and upload his medical records. The system also provides the patient with an alarm for medication appointments, where he is reminded of the date of each medication that he has entered. The application also allows doctors to upload videos that help spread awareness for users throughout the application.",
          url: "https://youtu.be/9tdFveijhKM",
          embed: "https://www.youtube.com/embed/9tdFveijhKM"
        },
        {
          title: "Slim",
          description: "Slim is a mobile application that uses a powerful machine learning (ML) model to help users track their calorie intake and make informed decisions about their nutrition. The app allows users to easily log their meals by taking a photo of their food or searching for it in the app's extensive database of foods and recipes. The ML model then analyzes the image or search query to accurately identify the food and estimate its calorie content based on its ingredients and portion size.",
          url: "https://youtu.be/bhgYoGEkbJ0",
          embed: "https://www.youtube.com/embed/bhgYoGEkbJ0 "
        },
        {
          title: "Shopping App",
          description: "ShopEasy, is a mobile application that is designed to make shopping simple and convenient. With ShopEasy, users can browse and purchase a wide range of products from the comfort of their own mobile device. The app offers a user-friendly interface that allows users to easily search and filter through products by category, price, and other attributes. Users can also save products to their wishlist for later purchase and receive notifications when those products go on sale.",
          url: "https://youtu.be/d_GhAKwJNNo",
          embed: "https://www.youtube.com/embed/d_GhAKwJNNo"
        },
        {
          title: "Movie App",
          description: "a mobile application that is designed to bring the magic of cinema to your fingertips. With MovieStream, users can enjoy a vast selection of movies and TV shows from the comfort of their own mobile device. The app offers a user-friendly interface that allows users to easily search and filter through movies and TV shows by genre, rating, and other attributes.",
          url: "https://youtube.com/shorts/oDM_VHJBN2g?feature=share",
          embed: "https://www.youtube.com/embed/oDM_VHJBN2g"
        },
      ],
      frontend: [
        {
          title: "tik-tok-clone",
          description: "https://tik-tok-clone-abdo.netlify.app/",
          url: "https://tik-tok-clone-abdo.netlify.app/",
          image: "https://abdelrahman-portfolio-kappa.vercel.app/static/media/tiktok.9d1235c8f41096dd4c26.PNG",
        },
        {
          title: "crypto-hunting",
          description: "https://crypto-hunting-abdo.netlify.app/",
          url: "https://crypto-hunting-abdo.netlify.app/",
          image: "https://abdelrahman-portfolio-kappa.vercel.app/static/media/crypto.3168811357b03bdc4b1d.PNG",
        },
        {
          title: "Quizhub",
          description: "https://quizhub-abdo.netlify.app/",
          url: "https://quizhub-abdo.netlify.app/",
          image: "https://abdelrahman-portfolio-kappa.vercel.app/static/media/quiz.af3af7cf933a5a9bd86c.PNG",
        },
        {
          title: "youtube-clone",
          description: "https://youtube-clone-abdo.netlify.app/",
          url: "https://youtube-clone-abdo.netlify.app/",
          image: "https://abdelrahman-portfolio-kappa.vercel.app/static/media/youtube.a0857c63a8c54e5d0b59.PNG",
        },
        {
          title: "movies-hub",
          description: "https://movies-hub-abdo.netlify.app/",
          url: "https://movies-hub-abdo.netlify.app/",
          image: "https://abdelrahman-portfolio-kappa.vercel.app/static/media/movies.0bac0514a60d13258303.PNG",
        },
        {
          title: "Estate",
          description: "https://estate-next-js.vercel.app/",
          url: "https://estate-next-js.vercel.app/",
          image: "https://abdelrahman-portfolio-kappa.vercel.app/static/media/estate.974a3a282e854af4283d.PNG",
        },
        {
          title: "container",
          description: "https://container-eg.shop/",
          url: "https://container-eg.shop/",
          image: "https://abdelrahman-portfolio-kappa.vercel.app/static/media/containerWordpress.812880e82458b3847f6b.png",
        },
        {
          title: "sala",
          description: "https://sala-sa.shop/",
          url: "https://sala-sa.shop/",
          image: "https://abdelrahman-portfolio-kappa.vercel.app/static/media/salaWordpress.015c839a342110f0d53b.png",
        },
        {
          title: "https://midaismael.github.io/news/",
          description: "https://midaismael.github.io/news/",
          url: "https://midaismael.github.io/news/",
          image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_52683-84601.jpg?w=1060&t=st=1689309493~exp=1689310093~hmac=fbadafb93c2022d4a1aa3a9024e02e3929fed6c848ec407e35dd0f4ba89c9e5e",
        },
        {
          title: "https://midaismael.github.io/ecommerce-phone/",
          description: "https://midaismael.github.io/ecommerce-phone/",
          url: "https://midaismael.github.io/ecommerce-phone/",
          image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_52683-84601.jpg?w=1060&t=st=1689309493~exp=1689310093~hmac=fbadafb93c2022d4a1aa3a9024e02e3929fed6c848ec407e35dd0f4ba89c9e5e",
        },
        {
          title: "https://midaismael.github.io/Restaurant/",
          description: "https://midaismael.github.io/Restaurant/",
          url: "https://midaismael.github.io/Restaurant/",
          image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_52683-84601.jpg?w=1060&t=st=1689309493~exp=1689310093~hmac=fbadafb93c2022d4a1aa3a9024e02e3929fed6c848ec407e35dd0f4ba89c9e5e",
        },
        {
          title: "https://midaismael.github.io/emart-clothes/",
          description: "https://midaismael.github.io/emart-clothes/",
          url: "https://midaismael.github.io/emart-clothes/",
          image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_52683-84601.jpg?w=1060&t=st=1689309493~exp=1689310093~hmac=fbadafb93c2022d4a1aa3a9024e02e3929fed6c848ec407e35dd0f4ba89c9e5e",
        },
        {
          title: "https://midaismael.github.io/landing-page/",
          description: "https://midaismael.github.io/landing-page/",
          url: "https://midaismael.github.io/landing-page/",
          image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_52683-84601.jpg?w=1060&t=st=1689309493~exp=1689310093~hmac=fbadafb93c2022d4a1aa3a9024e02e3929fed6c848ec407e35dd0f4ba89c9e5e",
        },
        {
          title: "https://midaismael.github.io/gym-tutorial/",
          description: "https://midaismael.github.io/gym-tutorial/",
          url: "https://midaismael.github.io/gym-tutorial/",
          image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_52683-84601.jpg?w=1060&t=st=1689309493~exp=1689310093~hmac=fbadafb93c2022d4a1aa3a9024e02e3929fed6c848ec407e35dd0f4ba89c9e5e",
        },
        {
          title: "https://midaismael.github.io/Best-Eats/",
          description: "https://midaismael.github.io/Best-Eats/",
          url: "https://midaismael.github.io/Best-Eats/",
          image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_52683-84601.jpg?w=1060&t=st=1689309493~exp=1689310093~hmac=fbadafb93c2022d4a1aa3a9024e02e3929fed6c848ec407e35dd0f4ba89c9e5e",
        },
        {
          title: "https://midaismael.github.io/RealEstate/",
          description: "https://midaismael.github.io/RealEstate/",
          url: "https://midaismael.github.io/RealEstate/",
          image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_52683-84601.jpg?w=1060&t=st=1689309493~exp=1689310093~hmac=fbadafb93c2022d4a1aa3a9024e02e3929fed6c848ec407e35dd0f4ba89c9e5e",
        },
        {
          title: "https://midaismael.github.io/cafe-landing-page/",
          description: "https://midaismael.github.io/cafe-landing-page/",
          url: "https://midaismael.github.io/cafe-landing-page/",
          image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_52683-84601.jpg?w=1060&t=st=1689309493~exp=1689310093~hmac=fbadafb93c2022d4a1aa3a9024e02e3929fed6c848ec407e35dd0f4ba89c9e5e",
        },











      ],
      backend: [
        {
          title: "Backend",
          description: "Backend is a web application that allows users to create, edit, and delete projects.",
          url: "https://backend.com/",
          image: "https://img.freepik.com/free-vector/api-concept-illustration_114360-9822.jpg?w=826&t=st=1689309524~exp=1689310124~hmac=706ea5ed25981969fa0f8e9b093d0ee08ed943e6f7b9de910be951164924fd86",
          tags: ["React", "Redux", "Node", "Express", "MongoDB"],
        },
        {
          title: "Backend",
          description: "Backend is a web application that allows users to create, edit, and delete projects.",
          url: "https://backend.com/",
          image: "https://img.freepik.com/free-vector/api-concept-illustration_114360-9822.jpg?w=826&t=st=1689309524~exp=1689310124~hmac=706ea5ed25981969fa0f8e9b093d0ee08ed943e6f7b9de910be951164924fd86",
          tags: ["React", "Redux", "Node", "Express", "MongoDB"],
        },
        {
          title: "Backend",
          description: "Backend is a web application that allows users to create, edit, and delete projects.",
          url: "https://backend.com/",
          image: "https://img.freepik.com/free-vector/api-concept-illustration_114360-9822.jpg?w=826&t=st=1689309524~exp=1689310124~hmac=706ea5ed25981969fa0f8e9b093d0ee08ed943e6f7b9de910be951164924fd86",
          tags: ["React", "Redux", "Node", "Express", "MongoDB"],
        }
      ],
      testing: [
        {
          title: "Testing",
          description: "Testing is a web application that allows users to create, edit, and delete projects.",
          url: "https://testing.com/",
          image: "https://img.freepik.com/free-vector/tiny-business-people-with-digital-devices-testing-demo-software-beta-testing-new-product-testing-presale-user-experience-concept-bright-vibrant-violet-isolated-illustration_335657-1024.jpg?w=1380&t=st=1689309559~exp=1689310159~hmac=2ada45be2f638258b682b6afb8964abf42157807f8599410a34d343b6aee0c59",
          tags: ["React", "Redux", "Node", "Express", "MongoDB"],
        },
        {
          title: "Testing",
          description: "Testing is a web application that allows users to create, edit, and delete projects.",
          url: "https://testing.com/",
          image: "https://img.freepik.com/free-vector/tiny-business-people-with-digital-devices-testing-demo-software-beta-testing-new-product-testing-presale-user-experience-concept-bright-vibrant-violet-isolated-illustration_335657-1024.jpg?w=1380&t=st=1689309559~exp=1689310159~hmac=2ada45be2f638258b682b6afb8964abf42157807f8599410a34d343b6aee0c59",
          tags: ["React", "Redux", "Node", "Express", "MongoDB"],
        }
      ],
      ai: [
        {
          title: "AI",
          description: "AI is a web application that allows users to create, edit, and delete projects.",
          url: "https://ai.com/",
          image: "https://img.freepik.com/premium-photo/futuristic-robot-artificial-intelligence-concept_31965-4087.jpg?w=1380",
          tags: ["React", "Redux", "Node", "Express", "MongoDB"],
        }
      ],
    },
  }

  const [appState, appDispatch] = useReducer(AppReducer, appInitialState)

  return (
    <AppContext.Provider
      value={{
        appState,
        appDispatch,
      }}>
      {props.children}
    </AppContext.Provider>
  )
}