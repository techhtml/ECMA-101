// import
// 이 JavaScript 파일에서 사용할 다른 JavaScript 파일을 불러오는 행위
import React, { Component } from 'react';

// 이 구문은 CSS를 불러오는 구문
// App.css를 불러와서 사용
import './App.css';

// 자바스크립트에서 데이터를 표현할때는 JSON Format을 주로 사용함
// const DATA = {}

// panelData를 어떻게 구조화 시킬까?
// video인 경우는 어떻게하지?

const data = {
  "navData": [
    {
      "index": 0,
      "href": "#home",
      "text": "Home"
    },
    {
      "index": 1,
      "href": "#",
      "text": "Automotive Life"
    },
    {
      "index": 2,
      "href": "#",
      "text": "Design"
    },
    {
      "index": 3,
      "href": "#",
      "text": "Innovation"
    },
    {
      "index": 4,
      "href": "#",
      "text": "Performance"
    },
    {
      "index": 5,
      "href": "#",
      "text": "Models"
    },
  ],
  "panelData": [
    {
      "index": 0,
      "source": {
        "src": "https://images.unsplash.com/photo-1540315573621-55e7029cd77e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7701080b1446210bab4420ebf7fc70bf&auto=format&fit=crop&w=1900&q=80",
        "type": "image"
      },
      "category": "Design",
      "title": "The secret of our favorite places",
      "href": "#",
      "isWide": true
    },
    {
      "index": 1,
      "source": {
        "src": "https://images.unsplash.com/photo-1540315573621-55e7029cd77e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7701080b1446210bab4420ebf7fc70bf&auto=format&fit=crop&w=1900&q=80",
        "type": "image"
      },
      "category": "Innovation",
      "title": "4 futuristic cities and buildings that actually exist",
      "href": "#",
      "isWide": false
    },
    {
      "index": 2,
      "source": {
        "src": "https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/Design/my-favorite-space/mfs-180919/mfs-00-teaser-high-m.mp4",
        "type": "video"
      },
      "category": "Adive",
      "title": "How to become an ideas machine",
      "href": "#",
      "isWide": false
    }
  ]
}

// 데이터 구조화를 이해하기
// data modeling
// 주어진 개념을 가지고서 데이터를 구조화하는 것
// 데이터로써 뽑아야하는 것들
// 같은 동작을 하는, 혹은 비슷한 동작을 하는 UI가 있을 때, 이 UI의 데이터만 가지고도 특정한 템플릿을 뽑아내고자 할 때
class App extends Component {
  _renderNavList() {
    // map은 배열을 탐색하면서 모든 배열마다 특정한 동작을 수행하고자할 때 사용합니다.
    // 이 때 map의 return 값이 모두 모여서 하나의 객체를 반환합니다.
    return data.navData.map((data) => {
      return (
        <li class="nav-item" key={data.index}><a href={data.href}>{data.text}</a></li>
      )
    })
  }

  _renderPanelList() {
    return data.panelData.map((data) => {
      let panelClassName = "panel";
      let panelSource;

      if(data.isWide === true) {
        panelClassName = "panel panel-wide"
      }

      if(data.source.type === "image") {
        panelSource = <img src={data.source.src} alt="" />
      }

      if(data.source.type === "video") {
        panelSource = <video src={data.source.src} autoPlay="true" />
      }

      return (
        <div class={panelClassName} key={data.index}>
          <a href={data.href} class="panel-container">
            <div class="panel-content">
              <h1 class="panel-title">{data.title}</h1>
              <span class="panel-category">{data.category}</span>
              <span class="panel-more">Read more</span>
            </div>
            <div class="panel-source">
              { panelSource }
            </div>
          </a>
        </div>
      )
    })
  }


  // render 함수가 수행하는 행위는 페이지 상에 최종 UI를 렌더링하는 것
  render() {
    const navList = this._renderNavList();
    const panelList = this._renderPanelList();

    return (
      <div class="wrap">
        <header class="header">
          <h1 class="logo"><a href="#">BMW</a></h1>
          <nav class="nav">
            <ul class="nav-list">
              { navList }
            </ul>
          </nav>
        </header>
        <div class="contents">
          <div class="panel-group">
            { panelList }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
