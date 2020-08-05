const initialState = {
  Starter: [
    {
      id: 1,
      name: 'Chicken 65',
      taste:'indian',
      price: 240
    },
    {
      id: 2,
      name: 'Chicken 555',
      taste:'north indian',
      price: 250
    }
  ],
  MainCourse: [
    {
      id: 101,
      name: 'Special Chicken Biryani',
      taste:'Andhra',
      price: 240
    },
    {
      id: 102,
      name: 'Prawns Biryani',
      taste:'North Indian',
      price: 320
    }
  ],
  Dessert: [
    {
      id: 201,
      name: 'Special Fruit Salad',
      taste:'punjabi',
      price: 110
    },
    {
      id: 202,
      name: 'Kaddu Ka Kheer',
      taste:'indian',
      price: 70
    }
  ],
  Drinks: [
    {
      id: 301,
      name: 'Coke',
      taste:'Drink',
      price: 40
    },
    {
      id: 302,
      name: 'Red Bull',
      taste:'Energy Drink',
      price: 100
    }
  ]
};

const menuReducer = (state = initialState, { type, payload }) => {
  return state;
};

export default menuReducer;