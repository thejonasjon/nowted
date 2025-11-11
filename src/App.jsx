import SideBar from './components/sidebar'
import FolderLists from './components/folderLists'
import FolderDetails from './components/folderDetails'

function App() {

  return (
    <div className='grid grid-cols-[20%_25%_55%]'>
      <SideBar />
      <FolderLists />
      <FolderDetails />
    </div>
  )
}

export default App
