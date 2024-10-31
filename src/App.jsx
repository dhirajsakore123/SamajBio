import React from 'react'
import GoogleSheetPushData from './Pages/GoogleSheetPushData'
import GoogleSheetFetch from './components/GoogleSheetFetch'
import HomeCompo from './components/HomeCompo'
import AddressAndContacts from './components/AddressAndContacts'
import Notice from './components/Notice'

const App = () => {
  return (
    <div>
      <HomeCompo/>
      <AddressAndContacts/>
      <GoogleSheetPushData/>
      <Notice/>
    </div>
  )
}

export default App



