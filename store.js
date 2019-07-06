// The core logic of the store will go here.

//  Store js called and instance of the store is created
//  IIFE will create single instance of the store which will be shared as a global instance

var store = (function(){

  var storetasksData = [{
        "taskName":"Get Up",
        "state":"open"
  },
  {
        "taskName":"Submit Electricity Bill",
        "state":"closed"
  },
  {
        "taskName":"Open New bank account",
        "state":"open"
  },
  {
        "taskName":"Get Fruits From Store",
        "state":"open"
  }]

  var storeOriginalData = Object.freeze(storetasksData);

  function getStoreOriginalData(){
      let originaldataObj = Object.assign([],storeOriginalData);
      return originaldataObj;
  }

  function setLatestData(latestDataToSet){
      storetasksData = Object.assign([],latestDataToSet);
  }

  function getLatestData(){
     return storetasksData;
  }

  return {
      getOriginalData:getStoreOriginalData,
      setLatestData:setLatestData,
      getLatestSavedData:getLatestData
  }

})()
