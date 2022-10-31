const ideas = [
  {
    Name: "Meditation-Minute", //if applicable
    Type: "Mobile",
    Description:
      "This App will ring(a gong) on a specific interval of time ,like 1 minute or 3minute or any other time interval till that time meditator have to try to focus his/her mind on the meditation object like breath or any other meditation object",//As detailed as possible
    Industry: "Wellness",
    Video: "", //if applicable
    Link: "",   //if applicable
    MatrixBreaker: "true" //Here Matrix breaker means if the app will help the user to came out negative Habit patterns Like- addiction, Hatered,lust ,cling to materialism and Take him/her to better control of mind ,Innerpeace ,More awareness ,Minimilism, Warriorness ,Self realisation ,Patience and love etc.
  },
  {
    Name: "Ice-Box",
    Type: "Mobile",
    Description: "This app will constantly track your pulse rating and if your stressed it the app will suggest you different ideas to calm yourself down or suggest you some activites to do and control your stress.",
    Industry: "Wellness",
    Video: "",
    Link: "",
    TeckStack: [],
    MatrixBreaker: "true"
  },
  {
    Name: "I am - Daily affirmations",
    Type: "Mobile",
    Description: "This app will provide daily affirmations so that the user stays motivated and confident throughout the day. The user can also customise the affirmations shown.",
    Industry: "Wellness and mental health",
    Video: "",
    Link: "",
    TeckStack: [],
    MatrixBreaker: "true"
  },
  {
    Name: "City-route",
    Type: "Mobile",
    Description: "The app will be embedded into commercial vehicles like tricycles." +
      " With the use of a loction service like google maps, the app helps" +
      " the tech company or the state develop a more accurate map with the" +
      " correct street names, houses, landmarks etc. This will work by allowing" +
      " the vehicle owner to add or verify the name/label of a location he/she" +
      " makes a stop at. Since they carry lots of passengers daily, it will" +
      " be faster to get the whole layout of a city, maybe within weeks or" +
      " months. This is especially useful in developing countries. It will" +
      " help with a lot of things like regional planning, enchancing accuracy" +
      " of delivery services, more accurate directions etc. This will also" +
      " help should the company be a transport type like Uber. Users can easily" +
      " select the location of where they want to go with a very high accuracy" +
      " right on the app, and a driver who can take them there is sent to them....",
    Industry: "Transport/Navigation",
    Video: "",
    Link: "",
    TeckStack: [],
    MatrixBreaker: "False"
  },
  {
    Name: "Saloon-and-hairstyle-finder",
    Type: "Mobile",
    Description: "A mobile application that helps to find saloons and different hairstyles, when a person designs his/her hair at a saloon he can take a picture of his new style and update it, the saloon too can do the same by updating their hair designs, overall its a hairstyle database.",
    Industry: "Wellness/grooming/quality-of-life",
    Video: "", //if applicable
    Link: "",   //if applicable
    MatrixBreaker: "false"
  },
  {
    Name: "EcoEat",
    Type: "Mobile",
    Description: "Allow restaurants to sell food they were about to waste at discounted prices",
    Industry: "Food",
    Video: "",
    Link: "",
    TeckStack: [],
    MatrixBreaker: "false"
  },
  {
    Name: "YourFish",
    Type: "Mobile",
    Description:
      "This app is dedicated to pet lovers specifically fish lovers. They will have a variety of species both salt-water and fresh-water to buy which will be picked from the local ornamental fish farmers and delevired to the consumer within a week of purchase.",//As detailed as possible
    Industry: "Lifestyle/Online-Business",
    Video: "",
    Link: "",
    MatrixBreaker: "false"
  },
  {
    Name: "The bright side",
    Type: "Mobile",
    Description: "Write your negative thought and receive an answer which make it positive to help you look on the bright side of life",
    Industry: "Mental health",
    Video: "",
    Link: "",
    TeckStack: [],
    MatrixBreaker: "true"
  },
  {
    Name: "Money Bill Reader",
    Type: "Mobile",
    Description: "An app that identifies money bills and coins and speaks on the phone speaker the value and currency, that works with the most diverse currencies in the world",
    Industry: "Accessibility",
    Video: "",
    Link: "",
    TeckStack: [],
    MatrixBreaker: "false"
  },
  {
    Name: "Best Spot Finder",
    Type: "Mobile",
    Description: "This app lets you enter your favoured scenery, an image (or even a drawing), time of the vacation, preferred activity, budget and other variables and one AI shows you the top places.",
    Industry: "Relax/Have fun",
    Video: "",
    Link: "",
    TeckStack: [],
    MatrixBreaker: "false"
  },
  {
    Name: "Can I Order?",
    Type: "Mobile",
    Description: "This app lets you put in a property address and see a list of food delivery services that can reach the address. It will show a map of the area and the 'cut off' points of other deliver services to help buyers/renters choose a desired property to rent,",
    Industry: "Real Estate",
    Video: "",
    Link: "",
    TeckStack: [],
    MatrixBreaker: "false"
  },

    {
    Name: "Taskovania",
    Type: "Mobile",
    Description: "This app will basically be a game-cum-to-do list app, where the user will setup some tasks he/she has to complete in a day and the app will feature either a medieval creature like dragon etc or an medival rpg character like knight or mage etc (which user can choose). The more tasks the user completes in a day the more points he/she can earn as a reward,the faster they complete the task more the reward, these points can then be traded for upgrading the character. This app can also be developed in such a way that different people can then use their characters to compete in pvp battles. So basically the more productive a person is in a day the stronger his/her character will be which in turn will boost their ranking say on a leaderboard",
    Industry: "Productivity",
    Video: "",
    Link: "",
    TeckStack: [],
    MatrixBreaker: "false"
  },
  {
    Name: "Wishlist",
    Type: "Mobile",
    Description: 
      "This app will notify you if there is specif items with price discount in any market place based on your wishlist.",
    UseCases:
      "You can define if you have a preference for a specific store or not. The app help you to find the better prices.",
    Industry: "market place",
    MatrixBreaker: "false"
  },
    {
    Name: "College-buddy",
      Type: "Mobile",
      Description: "This app can be the best college buddy of students ,show students their class time table ,give notification for next class with room number of the class, students can track their spenditure by noting it, and also note the deadlines of Assigments thus giving students a reminder notification before the selected number of days.",
      Industry: "College",
      Video: "",
      Link: "",
      TeckStack: [],
      MatrixBreaker: "true"
  },
  {
    Name: "Hey Mentor!",
    Type: "Mobile",
    Description: "This app will let you find a mentor of category or a topic of your choice.",
    Industry: "Career",
    Video: "",
    Link:"",
    MatrixBreaker: "false"
  },
  {
    Name: "ExerCycle",
    Type: "Mobile",
    Description:"This app will give users the ability to track their menstrual cycle, mood and symptoms, in each of the 4 phases (menstruation, follicular, ovulation and luteal). Users can also track, find workouts and create workout plans that will best benefit them in order to achieve their workout goals.",
    Industry: "Wellness, Fitness",
    Video: "",
    Link: "",
    TeckStack: [],
    MatrixBreaker: "false" 
  },
  {
    Name: "Cheapest Product Nearby", 
    Type: "Mobile",
    Description:"This app allows users to locate a store offering their desired goods at the most affordable price nearby. For instance, the app generates the stores' locations where a  user can purchase a water-bottle based on the cost and distance between them.",
    Industry: "Utility",
    Video: "", 
    Link:"",   
    TeckStack:[],  
    MatrixBreaker: "false", 
  }
];

