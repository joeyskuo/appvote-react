import AppData from './AppData';

class chartService {

  static initializeDates(){
    let emptyDates = {};

    // Starting date for line chart
    let day = new Date(2019, 0, 14);

    const today = new Date().getDate();

    // While date is not today
    while (day.getDate() <= today) {

       // create simplified date ISO string
       let tempDay = day.toISOString().substr(0,10) + "T07:00:00.000Z";

       // set voteCount to 0
       emptyDates[tempDay] = 0;

       // move on to next day
       day.setDate(day.getDate() + 1);
    }

    return emptyDates;
  }

  static formatData(appVoteDates) {

    let data = {
      dataByTopic: []
    };

    // initial appId
    let appId = 1;

    // Create list of all dates since Oct 1 with empty vote counts
    let dateList = this.initializeDates();

    // for Facebook, Twitter, Instagram, etc...
    for (var appName in appVoteDates){

      // Copy list of empty dates
      let tempDate = Object.assign({}, dateList);

      // If app was found in any vote object, add one to vote count for that day
      appVoteDates[appName].forEach((date) => tempDate[date] += 1);

      // Format vote data as a list of dates and number of votes for that day
      let dates = [];
      for(var voteDate in tempDate) dates.push({fullDate: voteDate, value: tempDate[voteDate]});

      // Add all data for current app
      data.dataByTopic.push(new AppData(appName, appId, dates));

      // Next App
      appId += 1;
    }

    // Return data formatted for d3 rendering
    return data;
  }

}

export default chartService;
