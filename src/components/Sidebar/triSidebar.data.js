// import { GiBoxingGlove } from "react-icons/gi";

const triSidebarData = {
  "sidebarData": {
    "items": [
      {
        "id": 1,
        "title": "Add Triangle",
        "icon": "GiBoxingGlove",
        "children": [
          {
            "id": 100,
            "title": "From File",
            "from:": "file",
            "children": [
              {
                "id": 1000,
                "title": "From .rky",
                "from": "rky"
              },
              {
                "id": 1001,
                "title": "From Excel",
                "from": "excel"
              },
              {
                "id": 1002,
                "title": "From CSV",
                "from": "csv"
              }
            ]
          },
          {
            "id": 101,
            "title": "From Clipboard",
            "from": "clipboard"
          },
          {
            "id": 102,
            "title": "Sample Triangle",
            "from": "sample",
            "children": [
              {
                "id": 1020,
                "title": "Taylor-Ashe (Mack 1994)",
                "from": "taylor-ashe"
              },
              {
                "id": 1021,
                "title": "Dahms (2010)",
                "from": "dahms"
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "title": "Clear Triangle",
        // "icon": <GiBoxingGlove />,
        "children": []
      },
    ]
  }

  // if(rockyState.tri.hasTri) {
  //   rockyState.tri.data.forEach((triangle, index) => {
  //     let triangleItem = {
  //       "id": 1000 + index,
  //       "title": triangle.name,
  //       "tri": triangle,
  //     };
  //   sidebarData.items[1].children.push(triangleItem);
  //   })
  // }

  // return sidebarData;
}

export default triSidebarData;