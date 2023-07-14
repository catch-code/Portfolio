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
          title: "UIUX",
          description: "UIUX is a web application that allows users to create, edit, and delete projects.",
          url: "https://uiux.com/",
          image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=1380&t=st=1689309378~exp=1689309978~hmac=ff8f5f2910e1bf8cbf7d13837c86fdc14bb1dcdf615245c34074b92208c09042",
          tags: ["React", "Redux", "Node", "Express", "MongoDB"],
        },
        {
          title: "UIUX",
          description: "UIUX is a web application that allows users to create, edit, and delete projects.",
          url: "https://uiux.com/",
          image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=1380&t=st=1689309378~exp=1689309978~hmac=ff8f5f2910e1bf8cbf7d13837c86fdc14bb1dcdf615245c34074b92208c09042",
          tags: ["React", "Redux", "Node", "Express", "MongoDB"],
        }
      ],
      mobile: [
        {
          title: "Mobile",
          description: "Mobile is a web application that allows users to create, edit, and delete projects.",
          url: "https://mobile.com/",
          image: "https://img.freepik.com/free-vector/charity-app-concept_23-2148608518.jpg?w=1380&t=st=1689309416~exp=1689310016~hmac=87f15fdce3a9be37a80915eab3e0778668812cb1f08c4a921af41a41d3ec8205",
          tags: ["React", "Redux", "Node", "Express", "MongoDB"],
        },
        {
          title: "Mobile",
          description: "Mobile is a web application that allows users to create, edit, and delete projects.",
          url: "https://mobile.com/",
          image: "https://img.freepik.com/free-vector/charity-app-concept_23-2148608518.jpg?w=1380&t=st=1689309416~exp=1689310016~hmac=87f15fdce3a9be37a80915eab3e0778668812cb1f08c4a921af41a41d3ec8205",
          tags: ["React", "Redux", "Node", "Express", "MongoDB"],
        },
        {
          title: "Mobile",
          description: "Mobile is a web application that allows users to create, edit, and delete projects.",
          url: "https://mobile.com/",
          image: "https://img.freepik.com/free-vector/charity-app-concept_23-2148608518.jpg?w=1380&t=st=1689309416~exp=1689310016~hmac=87f15fdce3a9be37a80915eab3e0778668812cb1f08c4a921af41a41d3ec8205",
          tags: ["React", "Redux", "Node", "Express", "MongoDB"],
        }
      ],
      frontend: [
        {
          title: "Frontend",
          description: "Frontend is a web application that allows users to create, edit, and delete projects.",
          url: "https://frontend.com/",
          image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_52683-84601.jpg?w=1060&t=st=1689309493~exp=1689310093~hmac=fbadafb93c2022d4a1aa3a9024e02e3929fed6c848ec407e35dd0f4ba89c9e5e",
          tags: ["React", "Redux", "Node", "Express", "MongoDB"],
        },
        {
          title: "Frontend",
          description: "Frontend is a web application that allows users to create, edit, and delete projects.",
          url: "https://frontend.com/",
          image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_52683-84601.jpg?w=1060&t=st=1689309493~exp=1689310093~hmac=fbadafb93c2022d4a1aa3a9024e02e3929fed6c848ec407e35dd0f4ba89c9e5e",
          tags: ["React", "Redux", "Node", "Express", "MongoDB"],
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