import {
  QuickCoachingAppShortDesc,
  QuickCoachingAppDesc,
  WeatherShortDesc,
  portShortDesc,
  cakeShortDesc,
  cookingAppShortDesc,
  AdasShortDesc,
} from '../text';
// ---------------------
//    Quick Coaching
// ---------------------
import {
  qcaArray,
  qcaButtonsArray,
  qcaDescArray,
  qcaImgsArray,
} from '../arrays/all';
// ---------------------
//      Cooking
// ---------------------
import {
  caArray,
  caImgsArray,
  caDescArray,
  caButtonsArray,
} from '../arrays/all';
// ---------------------
//        ADAS
// ---------------------
import {
  adasImgsArray,
  adasArray,
  adasButtonsArray,
  adasDescArray,
} from '../arrays/all';
// ---------------------
//        Profile
// ---------------------
import {
  profileImgsArray,
  profileDescArray,
  profileButtonsArray,
  profileArray,
} from '../arrays/all';
// ---------------------
//       Weather
// ---------------------
import {
  weatherArray,
  weatherButtonsArray,
  weatherDescArray,
  weatherImgsArray,
} from '../arrays/all';
// ---------------------
//        Cake
// ---------------------
import {
  cakeArray,
  cakeButtonsArray,
  cakeDescArray,
  cakeImgsArray,
} from '../arrays/all';
// ---------------------
//      To-do-list
// ---------------------
import {
  toDoListArray,
  toDoListButtonsArray,
  toDoListDescArray,
  toDoListImgsArray,
} from '../arrays/all';
// ---------------------

export const  mobileProjects = [
  // -------------------------------------------------
  //              Quick Coaching App
  // -------------------------------------------------
  {
    id: 1,
    projectTitle: 'Quick Coaching App',
    imgC: 'image webImgs',
    projectsImgUrl: 'assets/images/project-screens/project_1.png',
    desc: QuickCoachingAppShortDesc,
    item: 'carousel-item active',

    // Buttons array
    buttons: [
      {
        btnName: 'More Details',
      },
    ],
  },
  // -------------------------------------------------
  //                     Cooking App
  // -------------------------------------------------
  {
    id: 2,
    projectTitle: 'Cooking Apps',
    imgC: 'image webImgs',
    projectsImgUrl: 'assets/images/project-screens/project_2.png',
    desc: cookingAppShortDesc,
    item: 'carousel-item',

    // Buttons array
    buttons: [
      {
        btnName: 'More Details',
      },
    ],
  },
  // -------------------------------------------------
  //                      ADAS
  // -------------------------------------------------
  {
    id: 3,
    projectTitle: 'ADAS App',
    imgC: 'image webImgs',
    projectsImgUrl: 'assets/images/project-screens/project_3.jpg',
    desc: AdasShortDesc,
    item: 'carousel-item',

    // Buttons array
    buttons: [
      {
        btnName: 'More Details',
      },
    ],
  },
  // -------------------------------------------------
]
export const webProjects = [
  // -------------------------------------------------
  //                      Weather
  // -------------------------------------------------
  {
    id: 4,
    projectTitle: 'Weather',
    imgC: 'image webImgs',
    projectsImgUrl: 'assets/images/project-screens/weather.png',
    desc: WeatherShortDesc,
    item: 'carousel-item',

    // Buttons array
    buttons: [
      {
        btnName: 'More Details',
      },
    ],
  },

  // -------------------------------------------------
  //                      Portfoilo
  // -------------------------------------------------
  {
    id: 5,
    projectTitle: 'Portfolio',
    imgC: 'image webImgs',
    projectsImgUrl: 'assets/images/project_5/screen1.png',
    desc: portShortDesc,
    item: 'carousel-item',

    // Buttons array
    buttons: [
      {
        btnName: 'More Details',
      },
    ],
  },
  // -------------------------------------------------
  //                    Cake Ecommerce
  // -------------------------------------------------
  {
    id: 6,
    projectTitle: 'Cake Shop',
    imgC: 'image webImgs',
    projectsImgUrl: 'assets/images/project_6/screen1.png',
    desc: cakeShortDesc,
    item: 'carousel-item',

    // Buttons array
    buttons: [
      {
        btnName: 'More Details',
      },
    ],
  },
  // -------------------------------------------------
  //                    To-do-list
  // -------------------------------------------------
  {
    id: 7,
    projectTitle: 'To Do List',
    imgC: 'image webImgs',
    projectsImgUrl: 'assets/images/project_7/projectScreen.png',
    desc: 'nnn',
    item: 'carousel-item',

    // Buttons array
    buttons: [
      {
        btnName: 'More Details',
      },
    ],
  },
]


export const projectDetails = [
  // -------------------------------------------------
  //              Quick Coaching App
  // -------------------------------------------------
  {
    id: 1,
    item:'carousel-item active',
    pTitle: 'Quick Coaching App',
    title: 'What I did/learned',
    classDesc: 'desc',
    classColTwo:
      'col-lg-6 mt-5 overlay overlay_qca qca_colTwoLines colorTwo boxShadowP',
    //-----------------------------
    //          Arrays
    //-----------------------------
    descArray: qcaDescArray,
    buttonsArray: qcaButtonsArray,
    imgsArray: qcaImgsArray,
    array: qcaArray,
    //-----------------------------
  },
  // -------------------------------------------------

  // -------------------------------------------------
  //                     Cooking App
  // -------------------------------------------------
  {
    id: 2,
    item:'carousel-item ',
    pTitle: 'Cooking App',
    title: 'What I did/learned',
    classDesc: 'desc',
    classColTwo:
      'col-lg-6 mt-5 overlay overlay_qca ca_colTwoLines colorTwo boxShadowP',
    //-----------------------------
    //          Arrays
    //-----------------------------
    descArray: caDescArray,
    buttonsArray: caButtonsArray,
    imgsArray: caImgsArray,
    array: caArray,
    //-----------------------------
  },
  // -------------------------------------------------

  // -------------------------------------------------
  //                      ADAS
  // -------------------------------------------------
  {
    id: 3,
    item:'carousel-item',
    pTitle: 'Alzheimers Disease Assessment Scale App',
    title: 'What I did/learned',
    classDesc: 'desc',
    classColOne: 'col-lg-6 overlay adas_colOneDesc colorOne',
    classColTwo:
      'col-lg-6 mt-5 overlay overlay_qca adas_colTwoLines colorTwo boxShadowP',
    //-----------------------------
    //          Arrays
    //-----------------------------
    descArray: adasDescArray,
    buttonsArray: adasButtonsArray,
    imgsArray: adasImgsArray,
    array: adasArray,
    //-----------------------------
  },
  // -------------------------------------------------

  // -------------------------------------------------
  //                      Weather
  // -------------------------------------------------
  {
    id: 4,
    item:'carousel-item',
    pTitle: 'Weather',
    title: 'What I did/learned',
    classDesc: 'desc',
    classColTwo:
      'col-lg-6 mt-5 overlay overlay_qca weather_colTwoLines colorTwo boxShadowP',
    //-----------------------------
    //          Arrays
    //-----------------------------
    descArray: weatherDescArray,
    buttonsArray: weatherButtonsArray,
    imgsArray: weatherImgsArray,
    array: weatherArray,
    //-----------------------------
  },
  // -------------------------------------------------

  // -------------------------------------------------
  //                      Portfoilo
  // -------------------------------------------------
  {
    id: 5,
    item:'carousel-item',
    pTitle: 'Portfolio',
    title: 'What I did/learned',
    classDesc: 'desc',
    classColTwo:
      'col-lg-6 mt-5 overlay overlay_qca weather_colTwoLines colorTwo boxShadowP',
    //-----------------------------
    //          Arrays
    //-----------------------------
    descArray: profileDescArray,
    buttonsArray: profileButtonsArray,
    imgsArray: profileImgsArray,
    array: profileArray,
    //-----------------------------
  },
  // -------------------------------------------------

  // -------------------------------------------------
  //                    Cake Ecommerce
  // -------------------------------------------------
  {
    id: 6,
    item:'carousel-item',
    pTitle: 'Cake Ecommerce',
    title: 'What I did/learned',
    classDesc: 'desc',
    classColTwo:
      'col-lg-6 mt-5 overlay overlay_qca weather_colTwoLines colorTwo boxShadowP',
    //-----------------------------
    //          Arrays
    //-----------------------------
    descArray: cakeDescArray,
    buttonsArray: cakeButtonsArray,
    imgsArray: cakeImgsArray,
    array: cakeArray,
    //-----------------------------
  },
  // -------------------------------------------------

  // -------------------------------------------------
  //                    To-do-list
  // -------------------------------------------------
  {
    id: 7,
    item:'carousel-item',
    pTitle: 'To-do-list',
    title: 'What I did/learned',
    classDesc: 'desc',
    classColTwo:
      'col-lg-6 mt-5 overlay overlay_qca weather_colTwoLines colorTwo boxShadowP',
    //-----------------------------
    //          Arrays
    //-----------------------------
    descArray: toDoListDescArray,
    buttonsArray: toDoListButtonsArray,
    imgsArray: toDoListImgsArray,
    array: toDoListArray,
    //-----------------------------
  },
  // -------------------------------------------------
];
