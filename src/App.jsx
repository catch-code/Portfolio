import { AppProvider } from "./context/context/app_context"

import "./App.css"

import Skills from "./components/skills/skills"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"
import WhatWeDo from "./components/whatWeDo/WhatWeDo"
import Banner from "./components/banner/Banner"
import Header from "./components/navbar/Header"

import { skills } from "./components/skills/skillImages"

const App = () => {
  return <div className="app">
    <AppProvider>
      <Header />
      <Banner />
      <WhatWeDo />
      <Skills />
      <Contact />
      <Footer />

      <div>
        <img src={skills['gcp']} />
        <img src={skills['html']} />
        <img src={skills['photoshop']} />
        <img src={skills['illustrator']} />
        <img src={skills['docker']} />
        <img src={skills['adobeXd']} />
        <img src={skills['afterEffects']} />
        <img src={skills['css']} />
        <img src={skills['angular']} />
        <img src={skills['javascript']} />
        <img src={skills['nextJS']} />
        <img src={skills['nuxtJS']} />
        <img src={skills['react']} />
        <img src={skills['svelte']} />
        <img src={skills['typescript']} />
        <img src={skills['vue']} />
        <img src={skills['bootstrap']} />
        <img src={skills['bulma']} />
        <img src={skills['capacitorjs']} />
        <img src={skills['coffeescript']} />
        <img src={skills['memsql']} />
        <img src={skills['mongoDB']} />
        <img src={skills['mysql']} />
        <img src={skills['postgresql']} />
        <img src={skills['tailwind']} />
        <img src={skills['vitejs']} />
        <img src={skills['vuetifyjs']} />
        <img src={skills['c']} />
        <img src={skills['cplusplus']} />
        <img src={skills['csharp']} />
        <img src={skills['dart']} />
        <img src={skills['go']} />
        <img src={skills['java']} />
        <img src={skills['julia']} />
        <img src={skills['kotlin']} />
        <img src={skills['matlab']} />
        <img src={skills['php']} />
        <img src={skills['python']} />
        <img src={skills['ruby']} />
        <img src={skills['swift']} />
        <img src={skills['adobeaudition']} />
        <img src={skills['aws']} />
        <img src={skills['deno']} />
        <img src={skills['django']} />
        <img src={skills['firebase']} />
        <img src={skills['gimp']} />
        <img src={skills['git']} />
        <img src={skills['graphql']} />
        <img src={skills['lightroom']} />
        <img src={skills['materialui']} />
        <img src={skills['nginx']} />
        <img src={skills['numpy']} />
        <img src={skills['opencv']} />
        <img src={skills['premierepro']} />
        <img src={skills['pytorch']} />
        <img src={skills['selenium']} />
        <img src={skills['strapi']} />
        <img src={skills['tensorflow']} />
        <img src={skills['webix']} />
        <img src={skills['wordpress']} />
        <img src={skills['azure']} />
        <img src={skills['blender']} />
        <img src={skills['fastify']} />
        <img src={skills['figma']} />
        <img src={skills['flutter']} />
        <img src={skills['haxe']} />
        <img src={skills['ionic']} />
        <img src={skills['markdown']} />
        <img src={skills['microsoftoffice']} />
        <img src={skills['picsart']} />
        <img src={skills['sketch']} />
        <img src={skills['unity']} />
        <img src={skills['wolframalpha']} />
        <img src={skills['canva']} />      </div>
    </AppProvider>
  </div>
}

export default App
