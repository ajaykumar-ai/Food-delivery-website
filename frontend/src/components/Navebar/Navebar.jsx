import React, { useContext, useState, useEffect } from 'react';
import './Navebar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/Storecontext';

const Navebar = ({ setshowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);

  const { getTotalCartAmount, token, setToken, food_list } = useContext(StoreContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = food_list.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  }, [searchQuery, food_list]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const foodDisplay = document.getElementById('food-display');
      if (foodDisplay) {
        foodDisplay.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleViewMenu = () => {
    const menuSection = document.getElementById('explore-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
      setMenu("menu");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>Home</Link>
        <button className={menu === "menu" ? "active" : ""} onClick={handleViewMenu}>Menu</button>
        <button className={menu === "mobile-app" ? "active" : ""} onClick={() => {
          setMenu("mobile-app");
          const appDownload = document.getElementById('app-download');
          if (appDownload) appDownload.scrollIntoView({ behavior: 'smooth' });
        }}>Mobile App</button>
        <button className={menu === "contact us" ? "active" : ""} onClick={() => {
          setMenu("contact us");
          const footer = document.getElementById('footer');
          if (footer) footer.scrollIntoView({ behavior: 'smooth' });
        }}>Contact Us</button>
      </ul>
      <div className="navbar-right">
        <div className="search-wrapper">
          <img 
            src={assets.search_icon} 
            alt="search" 
            onClick={() => setShowSearch(!showSearch)} 
          />
          {showSearch && (
            <div className="search-box">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search for food..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </form>
              {filteredItems.length > 0 && (
                <div className="search-results">
                  {filteredItems.map((item) => (
                    <div 
                      key={item._id} 
                      className="search-item"
                      onClick={() => {
                        setShowSearch(false);
                        setSearchQuery("");
                        const foodDisplay = document.getElementById('food-display');
                        if (foodDisplay) foodDisplay.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <p>{item.name}</p>
                      <span>{item.category}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? <button onClick={() => setshowLogin(true)}>sign in</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

export default Navebar;