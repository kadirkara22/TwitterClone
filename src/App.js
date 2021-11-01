import React from 'react'
import Content from './components/pages/Content'



import Sidebar from './components/sidebar'
import Widegets from './components/widgets'
import MessagesContextProvider from './context/MessagesContex'
import SidebarContextProvider from './context/SidebarContext'
import ThemeContextProvider from './context/ThemeContext'
import TweetContextProvider from './context/TweetContext'
import UserContextProvider from './context/UserContext'


const App = () => {

  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <MessagesContextProvider>
          <SidebarContextProvider>
            <TweetContextProvider>
              <div className="flex max-w-7xl min-h-screen mx-auto">
                <Sidebar />
                <Content />
                <Widegets />
              </div>
            </TweetContextProvider>
          </SidebarContextProvider>
        </MessagesContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  )
}

export default App;


