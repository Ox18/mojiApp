const searchByName = async (name) => {
  let result = {
    message: '',
    messageDetail: '',
    data: [],
  }
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    );
    const data = await response.json();
    const drinks = data.drinks;
    
    var info = [];
    let count = 0;
    for(let n in drinks){
      let drink = drinks[n];
      info.push(drink);
      count++;
    }
    if(count > 0){
      result.message = 'Ok';
      result.messageDetail = 'Search is Successful';
      result.data = info;
    }else{
      result.message = 'Error';
      result.messageDetail = "Sorry. The search was not found.";
      result.data = [];
    }
  } catch (ex) {
    result.message = 'Error';
    result.messageDetail = "I'm sorry. The search was not found.";
  }
  return result;
};

export default searchByName;