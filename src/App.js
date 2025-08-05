import './App.css';

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="landing">
      {/* Hero Section */}
      <header className="hero">
        <h1 className="app-name">今駕有影</h1>
        <h2 className="tagline">行車輔助記錄器</h2>
        <p className="description">
          用手機即可記錄行車影像，智慧偵測、事故提醒、雲端備份，一鍵分享，全面保障您的行車安全。
        </p>
        <div className="cta">
          <a className="btn primary" href="#download">立即下載</a>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h3>1080P 高畫質錄影</h3>
          <p>清晰捕捉每個關鍵瞬間</p>
        </div>
        <div className="feature">
          <h3>AI 碰撞偵測</h3>
          <p>自動鎖檔避免重要片段被覆蓋</p>
        </div>
        <div className="feature">
          <h3>GPS 速度定位</h3>
          <p>同步紀錄行車速度與路線</p>
        </div>
        <div className="feature">
          <h3>雲端備份</h3>
          <p>一鍵上傳，永不遺失</p>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="download">
        <h2>立即下載 今駕有影</h2>
        <p>iOS 與 Android 雙平台免費體驗</p>
        <div className="store-badges">
          <a href="#" aria-label="App Store" className="badge">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
            />
          </a>
          <a href="#" aria-label="Google Play" className="badge">
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
            />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {currentYear} 今駕有影. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
