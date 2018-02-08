const initialState = [{
     "id": 1,
     "name": "Christmas dinner form",
     "description": "Christmas dinner is a meal traditionally eaten at Christmas.",
     "image": "http://res.freestockphotos.biz/pictures/5/5686-abstract-background-of-blue-rays-pv.jpg",
     "data": [{
        "type": "list",
        "label": "Guests",
        "values": ["uncle John", "aunt Ella", "John McClane", "Bob Marley"]
    },
    {
        "type": "integer",
        "label": "Money",
        "value": 10500
    },
    {
        "type": "list",
        "label": "Dishes",
        "values": ["Pizza", "Rassolnik", "Salami", "Spaghetti", "Gazpacho", "Ragout"]
    },
    {
        "type": "double",
        "label": "Start",
        "value": 19.20
    },
    {
        "type": "bool",
        "label": "Alcohol",
        "value": true
    }]
 },
 {
    "id": 2,
     "name": "Car form",
     "description": "A car (or automobile) is a wheeled motor vehicle used for transportation.",
     "image": "https://www.cstatic-images.com/stock/570x380/15/img-1276321340-1509471668915.jpg",
     "data": [{
        "type": "string",
        "label": "Model",
        "value": "BMW M3"
    },
    {
        "type": "integer",
        "label": "Price",
        "value": 100500
    },
    {
        "type": "list",
        "label": "Interior layout",
        "values": ["model-specific badges", "sports seats", "performance-themed instrumentation", "luetooth and USB connectivity"]
    },
    {
        "type": "list",
        "label": "Driving",
        "values": ["twin-turbocharged 425bhp", "launch control system", "dual-clutch automatic transmission"]
    },
    {
        "type": "double",
        "label": "Miles per gallon",
        "value": 35
    },
    {
        "type": "integer",
        "label": "Max speed",
        "value": 360
    },
    {
        "type": "integer",
        "label": "Boot capacity",
        "value": 480
    },
    {
        "type": "text",
        "label": "Description",
        "value": "he BMW M3 is a seriously quick and capable four-door saloon. It competes with the Mercedes-AMG C63 and Alfa Romeo Giulia Quadrifoglio, although the latter has the most power of the three."
    }]
 },
 {
    "id": 3,
     "name": "Home form",
     "description": "A home or domicile is a dwelling-place used as a permanent or semi-permanent residence for an individual, family, household or several families in a tribe.",
     "image": "http://glush.info/wp-content/uploads/2017/10/home-modest-on-for-jomtien-condo-estate-19.jpg",
     "data": [{
        "type": "integer",
        "label": "Price",
        "value": 360000
    },
    {
        "type": "integer",
        "label": "SQFT",
        "value": 1272
    },
    {
        "type": "integer",
        "label": "Year",
        "value": 1989
    },
    {
        "type": "integer",
        "label": "Flors",
        "value": 1
    },
    {
        "type": "string",
        "label": "Type",
        "value": "Single Family"
    },
    {
        "type": "string",
        "label": "Subdivision",
        "value": "Fuller Ranch"
    },
    {
        "type": "list",
        "label": "Constructions",
        "values": ["Roof: Comp Shingle", "Fencing: Block", "Cooling Refrigeration", "Heating Electric Heat", "Plumbing N/A", "Water City Water", "Sewer Sewer - Public", "Elementary School Robson Elementary School"]
    },
    {
        "type": "list",
        "label": "Images",
        "values": ["https://i.pinimg.com/736x/7f/be/50/7fbe50ec634c65709d7fe6ac267c4e6f--large-garage-plans-house-plans-large-family.jpg", "https://www.theplancollection.com/Upload/Plans/SubCategory/070415121006_SmallHouse1201831_600_400.jpg"]
    },
    {
        "type": "bool",
        "label": "Sales",
        "value": false
    }]
 },
  {
    "id": 4,
     "name": "Park form",
     "description": "A park is an area of natural, semi-natural or planted space set aside for human enjoyment and recreation or for the protection of wildlife or natural habitats.",
     "image": "https://threerivers-drupal.s3.us-east-2.amazonaws.com/public/2017-02/PTF_CedarLake_PicnicArea_Grid_01.jpg",
     "data": [   {
        "type": "double",
        "label": "SQFT",
        "value": 1025.8
    },
    {
        "type": "list",
        "label": "Trees",
        "values": ["chestnut", "olive", "myrtle", "lilac", "eucalyptus", "ash", "acacia", "baobab", "fir tree", "linden"]
    },
    {
        "type": "integer",
        "label": "Counts",
        "value": 154822158
    },
    {
        "type": "list",
        "label": "Enimals",
        "values": ["stork", "shark", "ox", "crow", "gorilla", "turtledove", "vulture", "caterpillar", "goosee", "lark", "giraffe", "beetle", "turkey", "buzzard"]
    }]
 },
  {
    "id": 5,
     "name": "Developers form",
     "description": "JavaScript often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language.",
     "image": "http://www.unixstickers.com/image/cache/data/stickers/js/js-shaped-600x600.jpg",
     "data": [{
        "type": "string",
        "label": "Position",
        "value": "Front-end developer"
    },
    {
        "type": "list",
        "label": "Skils",
        "values": ["HTML", "CSS", "JS", "React", "Redux", "Flux", "SCSS", "HTTP", "BEM"]
    },
    {
        "type": "list",
        "label": "Experience",
        "values": ["Wargaming", "Plarium"]
    }]
 }];

export default function(state = initialState, {type, payload} = {}) {

  if (type === 'DELETE_FORM') {
    return [
      ...state.filter(item => item.id !== payload)
    ];
  }

  if (type === 'SAVE_FORM') {
    return [
      ...state.map(item => {
        return item.id !== payload.id ? item : {
          ...item,
          data: payload.data
        };
      })
    ];
  }


  return state;
}
