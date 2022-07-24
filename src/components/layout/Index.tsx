import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import SideContent from './SideContent';

function Index() {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen ">
        <main className="grid grid-cols-9">
            <Navbar />
            <Outlet></Outlet>
            <SideContent />
        </main>
    </div>
  )
}

export default Index
