// Global variables
let level;
let classChoice;
let familyName;
let selectedStudent;

const students = [
  { name: 'يلالي', classChoice: 's10', level: '1', score: 9 },
  { name: 'مام', classChoice: 's10', level: '1', score: 15 },
  { name: 'م', classChoice: 's10', level: '1', score: 10 },
  { name: 'ام', classChoice: 's10', level: '1', score: 5 }
 
];


// Function to handle level selection
function chooseLevel(selectedLevel) {
  level = selectedLevel;
  if (level === '1') {
    const url = `level.html?level=${selectedLevel}`;
    window.location.href = url;
  } else if (level === '2') {
    const url = `class.html?level=${selectedLevel}`;
    window.location.href = url;
  }
}

// Function to handle class selection
function chooseClass(selectedClass) {
  const urlParams = new URLSearchParams(window.location.search);
  const level = urlParams.get('level');
  const url = `name.html?level=${level}&classChoice=${selectedClass}`;
  window.location.href = url;
}

// Function to check if family name matches and display score
function checkFamilyName() {
  const urlParams = new URLSearchParams(window.location.search);
  const level = urlParams.get('level');
  const classChoice = urlParams.get('classChoice');
  const familyName = document.getElementById('familyName').value;

  const matchingStudent = students.find(student =>
    student.name.toLowerCase() === familyName.toLowerCase() &&
    student.level === level &&
    student.classChoice === classChoice
  );

  if (matchingStudent) {
  const score = matchingStudent.score;
  const scoreElement = document.getElementById('score');

  if (score >= 15 && score <= 20) {
    const perfectEmoji = "🏆";
    scoreElement.textContent = perfectEmoji + score + ": نتائج مشرفة ! استمر هكذا، " + familyName + "!";
  } else if (score >= 10 && score < 15) {
    const goodEmoji = "👏";
    scoreElement.textContent = goodEmoji + score + ": درجات جيدة! يمكنك تحقيق المزيد، " + familyName + ".";
  } else if (score >= 6 && score < 10) {
    const canDoMoreEmoji = "💪";
    scoreElement.textContent = canDoMoreEmoji + score + ": عليك بمضاعفة المجهود ، " + familyName + ". استمر في العمل!";
  } else if (score >= 0 && score < 6) {
    const workMoreEmoji = "📚";
    scoreElement.textContent = workMoreEmoji + score + ": تحتاج إلى العمل بجد أكثر، " + familyName + ".";
  }
}
 else {
    alert(`لم يتم العثور على تلميذ(ة)  بهذا الإسم : ${familyName}`);
  }
}

// Function to navigate back to the previous page
function goBack() {
  window.history.back();
}

function readCSVFile(file) {
      var reader = new FileReader();

      // Handle the file load event
      reader.onload = function (event) {
        var csvData = event.target.result;
        processData(csvData);
      };

      // Read the file as text
      reader.readAsText(file);
    }

    function processData(csvData) {
      var lines = csvData.split("\n");

      // Iterate over each line and alert the data
      for (var i = 0; i < lines.length-1; i++) {
        var cells = lines[i].split(",");

        // Alert the data
        
		var newStudent = {
          name: cells[0],
          classChoice: cells[1],
          level: cells[2],
          score: parseInt(cells[3])
        };
		

	    
        // Append the new student to the students array
        students.push(newStudent);
		alert(newStudent.name + ", " + newStudent.classChoice + ", " + newStudent.level + ", " + newStudent.score);
      }
    }