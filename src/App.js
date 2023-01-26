import './App.css';
import s from './App.scss';
// import Navbar from './components/navbar/navbar';
import { Routes, Route } from "react-router-dom";
import Music from './components/music/music';
import Settings from './components/settings/settings';
import DialogsContainer from './components/dialogs/dialogsContainer';
import NewsContainer from './components/news/newsContainer';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/header/headerContainer';
import Login from './components/login/login';
import NavbarContainer from './components/navbar/navbarContainer';

const App = () => {

  return (
      <div className='app-wrapper'>
        <HeaderContainer className={s.app__header}/>
        <NavbarContainer/>
        <div className="main-content">
          <Routes>
            <Route path="/profile/:userId" element={<ProfileContainer/>} />
            <Route path="/dialogs" element={<DialogsContainer/>} />
            <Route path="/news" element={<NewsContainer/>}/>
            <Route path="/music" element={<Music/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/users" element={<UsersContainer/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
