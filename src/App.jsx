import { useState } from 'react'
import SideBar from './components/sidebar'
import FolderLists from './components/folderLists'
import FolderDetails from './components/UI/folderDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-[20%_25%_55%]'>
      <SideBar />
      <FolderLists />
      <FolderDetails />
    </div>
  )
}

export default App
