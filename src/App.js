import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import Topbar from './components/Topbar';
import GitHub from './assets/github-white.svg';
import Linkedin from './assets/linkedin-white.svg';
import './App.css';

const importAll = (r) => r.keys().map(r);

const markdownFiles = importAll(require.context('./posts', false, /\.md$/))
  .sort()
  .reverse();

const  App = () =>  {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetchMD();
    window.addEventListener('resize', updateDimensions);
  }, []);
  
  const fetchMD = async() => {
    const rawPosts = await Promise.all(markdownFiles.map(
      file => fetch(file).then(res => res.text())
      )
    );
    setPosts(rawPosts);
  };

  const updateDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  const paginate = () => {
    const page = posts;
    return page.slice((pageNumber - 1) * 100, pageNumber * 100);
  }

  // FUTURE PAGINATION 
  const handleChangePage = type => {
    setPageNumber(pageNumber + type);
  }

  return (
    <div className="App" >
      <div className="App-content" > 
        { windowWidth > 768?
          <div className="title-area">
            <h1 className="title-wide">Today I Learned</h1>  
          </div>
          :
          <Topbar/>
        }
        <div className={windowWidth > 768? "wide-card-list":"card-list"}>
          {
            paginate().map((post, idx) => (
              <div className="card" key={idx}>
                <div className="card-content">
                  <ReactMarkdown source={post} />
                </div>
              </div>
            ))
          }
        </div>
        {windowWidth >= 860 &&
          <div className="wide-img-container">
            <a href="https://github.com/GustavoMatsuo" className="wide-img-area" id="github">
              <img src={GitHub} alt="github" className="wide-img"/>
            </a>
            <a href="https://www.linkedin.com/in/gustavo-matsuo-fuji-79a977172/" className="wide-img-area" id="linkedin">
              <img src={Linkedin} alt="github" className="wide-img"/>
            </a>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
