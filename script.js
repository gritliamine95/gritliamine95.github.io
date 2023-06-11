// Global variables
let level;
let classChoice;
let familyName;
let selectedStudent;

const students = [
  { name: 'محمد أمين الفيلالي', classChoice: 's10', level: '1', score: 19.5 },
  { name: 'ملاك حمام', classChoice: 's10', level: '1', score: 17 },
  { name: 'نورس بنمحفوظ', classChoice: 's10', level: '1', score: 9 },
  { name: 'شمس الدين القماطي', classChoice: 's10', level: '1', score: 5.5 },
  { name: 'مجدي باي', classChoice: 's10', level: '1', score: 5 },
  { name: 'يحي رجب', classChoice: 's10', level: '1', score: 14.5 },
  { name: 'يوسف صالحي', classChoice: 's10', level: '1', score: 7 },
  { name: 'محمد الحبيب المهتلي', classChoice: 's10', level: '1', score: 13.5 },
  { name: 'سيرين المحمدي', classChoice: 's10', level: '1', score: 5 },
  { name: 'فاطمة علية حسينة', classChoice: 's10', level: '1', score: 18 },
  { name: 'فاطمة الزهراء القماطي', classChoice: 's10', level: '1', score: 9 },
  { name: 'فاطمة التاجوري', classChoice: 's10', level: '1', score: 6 },
  { name: 'لميس الاسود', classChoice: 's10', level: '1', score: 19 },
  { name: 'سندة حمام', classChoice: 's10', level: '1', score: 15 },
  { name: 'نيجار المكاري', classChoice: 's10', level: '1', score: 10 },
  { name: 'يوسف القربي', classChoice: 's10', level: '1', score: 5.5 },
  { name: 'ملاك القابسي', classChoice: 's10', level: '1', score: 11 },
  { name: 'مي بنرحومة', classChoice: 's10', level: '1', score: 2.5 },
  { name: 'مرام القصوري', classChoice: 's10', level: '1', score: 8.5 },
  { name: 'زينب الحجري', classChoice: 's10', level: '1', score: 9.5 },
  { name: 'حمزة اليزيدي', classChoice: 's10', level: '1', score: 14.5 },
  { name: 'رندلين بننصر', classChoice: 's10', level: '1', score: 14 },
  { name: 'سليمة الشوشاني', classChoice: 's10', level: '1', score: 12.5 },
  { name: 'رغد بنالكيلاني', classChoice: 's10', level: '1', score: 19.5 },
  { name: 'امنة شويخة', classChoice: 's10', level: '1', score: 6 },
  { name: 'زيد لشهب', classChoice: 's10', level: '1', score: 17.5 },
  { name: 'اسماء المهذبي', classChoice: 's10', level: '1', score: 16 },
  { name: 'الاء الطرابلسي', classChoice: 's10', level: '1', score: 12.5 },
  { name: 'رانبة بنفظل', classChoice: 's10', level: '1', score: 9.5 },
  { name: 'امان الله الاسود', classChoice: 's10', level: '1', score: 17.5 },
  { name: 'دينا الاندلسي', classChoice: 's10', level: '1', score: 10.5 },
  { name: 'اسراء الطرابلسي', classChoice: 's10', level: '1', score: 11.5 },
  { name: 'حازم بنمحمد', classChoice: 's10', level: '1', score: 18 },
  { name: 'الاء كحلون', classChoice: 's10', level: '1', score: 17.5 },
  { name: 'اية المؤدب', classChoice: 's10', level: '1', score: 19.5 },
  { name: 'رنا السنوسي', classChoice: 's10', level: '1', score: 12.5 },
  { name: 'ادم صالح', classChoice: 's10', level: '1', score: 19.5 },
  { name: 'زينب البرصالي', classChoice: 's13', level: '1', score: 19.5 },
  { name: 'مرام بنابراهيم', classChoice: 's13', level: '1', score: 8 },
  { name: 'ميساء بنخيرية', classChoice: 's13', level: '1', score: 4.5 },
  { name: 'محمد امين الحري', classChoice: 's13', level: '1', score: 2.5 },
  { name: 'محمد كمال القربي', classChoice: 's13', level: '1', score: 5 },
  { name: 'محمد بوزيد', classChoice: 's13', level: '1', score: 2.5 },
  { name: 'علي التليلي', classChoice: 's13', level: '1', score: 7 },
  { name: 'جاد سالم', classChoice: 's13', level: '1', score: 5.5 },
  { name: 'عبد القادر الغربي', classChoice: 's13', level: '1', score: 6 },
  { name: 'شهم بنعلية', classChoice: 's13', level: '1', score: 8.5 },
  { name: 'زين الدين بنمعاوية', classChoice: 's13', level: '1', score: 17 },
  { name: 'ويام الحجري', classChoice: 's13', level: '1', score: 6 },
  { name: 'انس العويني', classChoice: 's13', level: '1', score: 16 },
  { name: 'يوسف ساسي', classChoice: 's13', level: '1', score: 5 },
  { name: 'ياسين بنعزونة', classChoice: 's13', level: '1', score: 4.5 },
  { name: 'ملاك التليلي', classChoice: 's13', level: '1', score: 8.5 },
  { name: 'يسر بنساسي', classChoice: 's13', level: '1', score: 13.5 },
  { name: 'غفران الشعباني', classChoice: 's13', level: '1', score: 7 },
  { name: 'رنيم المهتلي', classChoice: 's13', level: '1', score: 14 },
  { name: 'ياسمين اليزيدي', classChoice: 's13', level: '1', score: 8 },
  { name: 'بلقيس المستور', classChoice: 's13', level: '1', score: 13 },
  { name: 'محمد بنسليمان', classChoice: 's13', level: '1', score: 7 },
  { name: 'منار تيرة', classChoice: 's13', level: '1', score: 16 },
  { name: 'ريان حوالة', classChoice: 's13', level: '1', score: 15 },
  { name: 'اية بنسلطانة', classChoice: 's13', level: '1', score: 12.5 },
  { name: 'رتاج التونسي', classChoice: 's13', level: '1', score: 13.5 },
  { name: 'هديل بنسلطانة', classChoice: 's13', level: '1', score: 7.5 },
  { name: 'اسماء الصفاقسي', classChoice: 's13', level: '1', score: 12 },
  { name: 'حمزة القاسمي', classChoice: 's13', level: '1', score: 2 },
  { name: 'فرح الحري', classChoice: 's13', level: '1', score: 7.5 },
  { name: 'محمد امين النويصر', classChoice: 's13', level: '1', score: 1.5 },
  { name: 'عصام بنعزيزة', classChoice: 's13', level: '1', score: 0 },
  { name: 'اية حمام', classChoice: 's13', level: '1', score: 17.5 },
  { name: 'زينب المهذبي', classChoice: 's13', level: '1', score: 15 },
  { name: 'ابتهال الصغير', classChoice: 's13', level: '1', score: 12.5 },
  { name: 'شيماء دبيش', classChoice: 's13', level: '1', score: 17 },
  { name: 'الاء المهذبي', classChoice: 's13', level: '1', score: 13.5 },
  { name: 'سارة بوريسة حمام', classChoice: 's13', level: '1', score: 19 },
  { name: 'روى بنعلية', classChoice: 's13', level: '1', score: 19.5 }
  
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
	
	// Function to filter students based on entered name
// Function to filter students based on entered name
// Function to filter students based on entered name
function filterStudents() {
    const enteredName = document.getElementById('familyName').value;
    const resultsContainer = document.getElementById('resultsContainer');
    const results = resultsContainer.getElementsByClassName('resultItem');
    const classChoice = getClassChoiceFromURL(); // Get class choice from URL

    // Remove previous selection
    for (let i = 0; i < results.length; i++) {
      results[i].classList.remove('selected');
    }

    filteredStudents = students.filter(student =>
      student.name.startsWith(enteredName) &&
      student.classChoice === classChoice // Filter by class choice
    );

    // Sort the filtered results alphabetically
    filteredStudents.sort((a, b) => a.name.localeCompare(b.name));

    // Display filtered results
    resultsContainer.innerHTML = '';

    filteredStudents.forEach(student => {
      const studentDiv = document.createElement('div');
      studentDiv.textContent = student.name;
      studentDiv.classList.add('resultItem');
      studentDiv.addEventListener('click', () => selectStudent(studentDiv));
      resultsContainer.appendChild(studentDiv);
    });
  }

  // Function to get the class choice from the URL parameter
  function getClassChoiceFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const classChoice = urlParams.get('classChoice');
    return classChoice;
  }

  // Function to select a student
  function selectStudent(studentDiv) {
    const results = document.getElementsByClassName('resultItem');

    // Remove previous selection
    for (let i = 0; i < results.length; i++) {
      results[i].classList.remove('selected');
    }

    // Apply selection to the clicked student
    studentDiv.classList.add('selected');

    // Add the selected name to the input field
    const familyName = document.getElementById('familyName');
    familyName.value = studentDiv.textContent;
  }
