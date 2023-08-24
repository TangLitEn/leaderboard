// ----- USER SHEET VARIABLE ----- //
var Update_Leaderboard_tabName = "Update Leaderboard"
var Leaderboard_tabName = "Leaderboard"

var Key_Column_Update_Leaderboard = 1
var Key_Column_Leaderboard = 1

var Value_Column_Update_Leaderboard = 2 //  the points column
var Value_Column_Leaderboard = 3

// ------ CHECKING -----------------//

function checkSortUpdate() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var Update_Leaderboard_Sheet = ss.getSheetByName(Update_Leaderboard_tabName);
  var Update_Leaderboard_Data = Update_Leaderboard_Sheet.getDataRange().getValues();

  var Leaderboard_Sheet = ss.getSheetByName(Leaderboard_tabName);
  var Leaderboard_Data = Leaderboard_Sheet.getDataRange().getValues();

  var Post_workshop_data = []

  var attend = 0

  // check whether the person is a LEARNOVA MEMBER, if it is a GREEN then it is a LEARNOVA member
  for(var LEARNOVA_PARTICIPANTS = 1 ; LEARNOVA_PARTICIPANTS < Leaderboard_Data.length ; LEARNOVA_PARTICIPANTS++){
    for(var WORKSHOP_PARTICIPANTS = 1 ; WORKSHOP_PARTICIPANTS < Update_Leaderboard_Data.length ; WORKSHOP_PARTICIPANTS++){
      if(Update_Leaderboard_Data[WORKSHOP_PARTICIPANTS][Key_Column_Update_Leaderboard-1].trim().toLowerCase() == Leaderboard_Data[LEARNOVA_PARTICIPANTS][Key_Column_Update_Leaderboard-1].trim().toLowerCase()){
        attend = 1 
        var original_points = Leaderboard_Data[LEARNOVA_PARTICIPANTS][Value_Column_Leaderboard-1]
        var additional_points = Update_Leaderboard_Data[WORKSHOP_PARTICIPANTS][Value_Column_Update_Leaderboard-1]
        updateRowColor(Update_Leaderboard_tabName,WORKSHOP_PARTICIPANTS+1,'#00FF00')
      }
    }

    var temp = []

    if(attend == 1){
      // the member join workshops
      temp.push(Leaderboard_Data[LEARNOVA_PARTICIPANTS][0])
      temp.push(Leaderboard_Data[LEARNOVA_PARTICIPANTS][1])
      temp.push(original_points + additional_points)
        
      Post_workshop_data.push(temp)
      
    }
    else{
      // the member didn't join the workshops
      temp.push(Leaderboard_Data[LEARNOVA_PARTICIPANTS][0])
      temp.push(Leaderboard_Data[LEARNOVA_PARTICIPANTS][1])
      temp.push(Leaderboard_Data[LEARNOVA_PARTICIPANTS][2])

      Post_workshop_data.push(temp)
    }
    
    attend = 0
  }

  console.log(Post_workshop_data)

  // sort the leaderboard 
  Post_workshop_data.sort(function(a, b){
  let x = a[2]
  let y = b[2]
  if (x < y) {return 1;}
  if (x > y) {return -1;}
  return 0;
  });

  console.log(Post_workshop_data)


  // update the information
  for(var LEARNOVA_PARTICIPANTS = 0 ; LEARNOVA_PARTICIPANTS < Post_workshop_data.length ; LEARNOVA_PARTICIPANTS++){
    for(var column = 0 ; column < Post_workshop_data[0].length ; column++){
      Leaderboard_Sheet.getRange(LEARNOVA_PARTICIPANTS+2, column+1).setValue(Post_workshop_data[LEARNOVA_PARTICIPANTS][column]); // reason for +2 is to offset the header
    }
  }
}

function updateRowColor(sheetName, row, color) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);
  
  if (!sheet) {
    Logger.log("Sheet '" + sheetName + "' not found.");
    return;
  }
  
  var dataRange = sheet.getRange(row, 1, 1, sheet.getLastColumn());
  dataRange.setBackground(color);
}
