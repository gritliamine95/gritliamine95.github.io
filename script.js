// Global variables
let level;
let classChoice;
let familyName;
let selectedStudent;

const students = [
  { name: 'a', classChoice: 's10', level: '1', score: 15.5 },
  { name: 'Sara Ahmed', classChoice: 's13', level: '1', score: 18.2 },
  { name: 'Mohammed Ali', classChoice: 's15', level: '1', score: 12.8 },
  { name: 'Fatima Hassan', classChoice: '2 sciences 2', level: '2', score: 19.6 },
  { name: 'Ahmed Khalid', classChoice: '2 info 2', level: '2', score: 16.9 }
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

  if (score >= 15) {
    const bravoEmoji = "\uD83D\uDC4F";
    scoreElement.textContent = bravoEmoji + score  +  ': لقد تحصلت على المعدل   '+ familyName +  '  ممتاز '  ;
  } else if (score < 10) {
    const courageEmoji = "\uD83D\uDCAA";
    scoreElement.textContent = courageEmoji + score + ' : محاولة جيدة! يمكنك القيام بذلك بشكل أفضل، ثق بنفسك   ' + familyName;
  } else if (score >= 10 && score < 15) {
    const motivationEmoji = "\uD83D\uDE4C";
    scoreElement.textContent = motivationEmoji + score + ' : أنت قريب من القمة، استمر   ' + familyName;
  }
}
 else {
    alert(`No student found with the family name ${familyName}`);
  }
}


