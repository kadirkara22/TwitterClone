import React from 'react'
import Content from './components/pages/Content'



import Sidebar from './components/sidebar'
import Widegets from './components/widgets'
import MessagesContextProvider from './context/MessagesContex'
import SidebarContextProvider from './context/SidebarContext'
import ThemeContextProvider from './context/ThemeContext'


const App = () => {

  return (
    <ThemeContextProvider>
      <MessagesContextProvider>
        <SidebarContextProvider>
          <div className="flex max-w-7xl min-h-screen mx-auto">
            <Sidebar />
            <Content />
            <Widegets />
          </div>
        </SidebarContextProvider>
      </MessagesContextProvider>
    </ThemeContextProvider>
  )
}

export default App;


