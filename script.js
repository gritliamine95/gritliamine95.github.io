// Global variables
let level;
let classChoice;
let familyName;
let selectedStudent;

const students = [

{ name: 'محمد أمين الفيلالي', classChoice: 's10', level: '1', score: 19.5, lastColumn: 'محمد الانور' },
  { name: 'ملاك حمام', classChoice: 's10', level: '1', score: 17, lastColumn: 'سامي' },
  { name: 'نورس بنمحفوظ', classChoice: 's10', level: '1', score: 9, lastColumn: 'المنذر' },
  { name: 'شمس الدين القماطي', classChoice: 's10', level: '1', score: 5.5, lastColumn: 'يوسف' },
  { name: 'مجدي باي', classChoice: 's10', level: '1', score: 5, lastColumn: 'محمود' },
  { name: 'يحي رجب', classChoice: 's10', level: '1', score: 14.5, lastColumn: 'عبد الباسط' },
  { name: 'يوسف صالحي', classChoice: 's10', level: '1', score: 7, lastColumn: 'محمد' },
  { name: 'محمد الحبيب المهتلي', classChoice: 's10', level: '1', score: 13.5, lastColumn: 'فوزي' },
  { name: 'سيرين المحمدي', classChoice: 's10', level: '1', score: 5, lastColumn: 'حامد' },
  { name: 'فاطمة علية حسينة', classChoice: 's10', level: '1', score: 18, lastColumn: 'محمد علي' },
  { name: 'فاطمة الزهراء القماطي', classChoice: 's10', level: '1', score: 9, lastColumn: 'احمد' },
  { name: 'فاطمة التاجوري', classChoice: 's10', level: '1', score: 6, lastColumn: 'حسن' },
  { name: 'لميس الاسود', classChoice: 's10', level: '1', score: 19, lastColumn: 'سمير' },
  { name: 'سندة حمام', classChoice: 's10', level: '1', score: 15, lastColumn: 'رضوان' },
  { name: 'نيجار المكاري', classChoice: 's10', level: '1', score: 10, lastColumn: 'محمد' },
  { name: 'يوسف القربي', classChoice: 's10', level: '1', score: 5.5, lastColumn: 'بسام' },
  { name: 'ملاك القابسي', classChoice: 's10', level: '1', score: 11, lastColumn: 'علي' },
  { name: 'مي بنرحومة', classChoice: 's10', level: '1', score: 2.5, lastColumn: 'طارق' },
  { name: 'مرام القصوري', classChoice: 's10', level: '1', score: 8.5, lastColumn: 'فتحي' },
  { name: 'زينب الحجري', classChoice: 's10', level: '1', score: 9.5, lastColumn: 'صلاح الدين' },
  { name: 'حمزة اليزيدي', classChoice: 's10', level: '1', score: 14.5, lastColumn: 'الجيلاني' },
  { name: 'رندلين بننصر', classChoice: 's10', level: '1', score: 14, lastColumn: 'ماهر' },
  { name: 'سليمة الشوشاني', classChoice: 's10', level: '1', score: 12.5, lastColumn: 'حسان' },
  { name: 'رغد بنالكيلاني', classChoice: 's10', level: '1', score: 19.5, lastColumn: 'عصام' },
  { name: 'امنة شويخة', classChoice: 's10', level: '1', score: 6, lastColumn: 'المنجي' },
  { name: 'زيد لشهب', classChoice: 's10', level: '1', score: 17.5, lastColumn: 'محمد' },
  { name: 'اسماء المهذبي', classChoice: 's10', level: '1', score: 16, lastColumn: 'المعز' },
  { name: 'الاء الطرابلسي', classChoice: 's10', level: '1', score: 12.5, lastColumn: 'هشام' },
  { name: 'رانية بنفظل', classChoice: 's10', level: '1', score: 9.5, lastColumn: 'فيصل' },
  { name: 'امان الله الاسود', classChoice: 's10', level: '1', score: 17.5, lastColumn: 'عادل' },
  { name: 'دينا الاندلسي', classChoice: 's10', level: '1', score: 10.5, lastColumn: 'المعز' },
  { name: 'اسراء الطرابلسي', classChoice: 's10', level: '1', score: 11.5, lastColumn: 'هشام' },
  { name: 'حازم بنمحمد', classChoice: 's10', level: '1', score: 18, lastColumn: 'سعيد' },
  { name: 'الاء كحلون', classChoice: 's10', level: '1', score: 17.5, lastColumn: 'محمد' },
  { name: 'اية المؤدب', classChoice: 's10', level: '1', score: 19.5, lastColumn: 'نادر' },
  { name: 'رنا السنوسي', classChoice: 's10', level: '1', score: 12.5, lastColumn: 'نور الدين' },
  { name: 'ادم صالح', classChoice: 's10', level: '1', score: 19.5, lastColumn: 'هشام' },
  { name: 'زينب البرصالي', classChoice: 's13', level: '1', score: 19.5, lastColumn: 'محسن' },
  { name: 'مرام بنابراهيم', classChoice: 's13', level: '1', score: 8, lastColumn: 'الصادق' },
  { name: 'ميساء بنخيرية', classChoice: 's13', level: '1', score: 4.5, lastColumn: 'خالد' },
  { name: 'محمد امين الحري', classChoice: 's13', level: '1', score: 2.5, lastColumn: 'رياض' },
  { name: 'محمد كمال القربي', classChoice: 's13', level: '1', score: 5, lastColumn: 'فتحي' },
  { name: 'محمد بوزيد', classChoice: 's13', level: '1', score: 2.5, lastColumn: 'توفيق' },
  { name: 'علي التليلي', classChoice: 's13', level: '1', score: 7, lastColumn: 'رضا' },
  { name: 'جاد سالم', classChoice: 's13', level: '1', score: 5.5, lastColumn: 'عادل' },
  { name: 'عبد القادر الغربي', classChoice: 's13', level: '1', score: 6, lastColumn: 'عادل' },
  { name: 'شهم بنعلية', classChoice: 's13', level: '1', score: 8.5, lastColumn: 'المهدي' },
  { name: 'زين الدين بنمعاوية', classChoice: 's13', level: '1', score: 17, lastColumn: 'حسام' },
  { name: 'ويام الحجري', classChoice: 's13', level: '1', score: 6, lastColumn: 'زهير' },
  { name: 'انس العويني', classChoice: 's13', level: '1', score: 16, lastColumn: 'رضا' },
  { name: 'يوسف ساسي', classChoice: 's13', level: '1', score: 5, lastColumn: 'سامي' },
  { name: 'ياسين بنعزونة', classChoice: 's13', level: '1', score: 4.5, lastColumn: 'محمد' },
  { name: 'ملاك التليلي', classChoice: 's13', level: '1', score: 8.5, lastColumn: 'محمد' },
  { name: 'يسر بنساسي', classChoice: 's13', level: '1', score: 13.5, lastColumn: 'خالد' },
  { name: 'غفران الشعباني', classChoice: 's13', level: '1', score: 7, lastColumn: 'سامي' },
  { name: 'رنيم المهتلي', classChoice: 's13', level: '1', score: 14, lastColumn: 'لطفي' },
  { name: 'ياسمين اليزيدي', classChoice: 's13', level: '1', score: 8, lastColumn: 'فوزي' },
  { name: 'بلقيس المستور', classChoice: 's13', level: '1', score: 13, lastColumn: 'سليم' },
  { name: 'محمد بنسليمان', classChoice: 's13', level: '1', score: 7, lastColumn: 'مكرم' },
  { name: 'منار تيرة', classChoice: 's13', level: '1', score: 16, lastColumn: 'خميس' },
  { name: 'ريان حوالة', classChoice: 's13', level: '1', score: 15, lastColumn: 'سامي' },
  { name: 'اية بنسلطانة', classChoice: 's13', level: '1', score: 12.5, lastColumn: 'سعيد' },
  { name: 'رتاج التونسي', classChoice: 's13', level: '1', score: 13.5, lastColumn: 'فتحي' },
  { name: 'هديل بنسلطانة', classChoice: 's13', level: '1', score: 7.5, lastColumn: 'محمد' },
  { name: 'اسماء الصفاقسي', classChoice: 's13', level: '1', score: 12, lastColumn: 'حاتم' },
  { name: 'حمزة القاسمي', classChoice: 's13', level: '1', score: 2, lastColumn: 'خالد' },
  { name: 'فرح الحري', classChoice: 's13', level: '1', score: 7.5, lastColumn: 'فؤاد' },
  { name: 'محمد امين النويصر', classChoice: 's13', level: '1', score: 1.5, lastColumn: 'جمال الدين' },
  { name: 'عصام بنعزيزة', classChoice: 's13', level: '1', score: 0, lastColumn: 'عبد الرزاق' },
  { name: 'اية حمام', classChoice: 's13', level: '1', score: 17.5, lastColumn: 'الحبيب' },
  { name: 'زينب المهذبي', classChoice: 's13', level: '1', score: 15, lastColumn: 'محسن' },
  { name: 'ابتهال الصغير', classChoice: 's13', level: '1', score: 12.5, lastColumn: 'النوري' },
  { name: 'شيماء دبيش', classChoice: 's13', level: '1', score: 17, lastColumn: 'شكري' },
  { name: 'الاء المهذبي', classChoice: 's13', level: '1', score: 13.5, lastColumn: 'محسن' },
  { name: 'سارة بوريسة حمام', classChoice: 's13', level: '1', score: 19, lastColumn: 'رفيق' },
  { name: 'روى بنعلية', classChoice: 's13', level: '1', score: 19.5, lastColumn: 'رياض' },

{ name: 'ادم اندريه نوته', classChoice: 's15', level: '1', score: 14.5, lastColumn: 'قابريال نوته' },
{ name: 'امنة بنعلي', classChoice: 's15', level: '1', score: 8, lastColumn: 'سامي' },
{ name: 'اية الاحمر', classChoice: 's15', level: '1', score: 7.5, lastColumn: 'كمال' },
{ name: 'اية بوسامة', classChoice: 's15', level: '1', score: 10.5, lastColumn: 'محسن' },
{ name: 'احمد بوحوش', classChoice: 's15', level: '1', score: 19.5, lastColumn: 'نجيب' },
{ name: 'اسامة النوالي', classChoice: 's15', level: '1', score: 19.5, lastColumn: 'محسن' },
{ name: 'امان الله مشماش', classChoice: 's15', level: '1', score: 2.5, lastColumn: 'محمد علي' },
{ name: 'اماني المهذبي', classChoice: 's15', level: '1', score: 18.5, lastColumn: 'المعز' },
{ name: 'امير الحويشي', classChoice: 's15', level: '1', score: 17, lastColumn: 'سامي' },
{ name: 'اميمة حمحوم', classChoice: 's15', level: '1', score: 6.5, lastColumn: 'احمد' },
{ name: 'اسراء مومني', classChoice: 's15', level: '1', score: 12.5, lastColumn: 'يحي' },
{ name: 'اشراق بحرية', classChoice: 's15', level: '1', score: 10, lastColumn: 'عماد' },
{ name: 'اياد حمام', classChoice: 's15', level: '1', score: 14, lastColumn: 'نور الدين' },
{ name: 'باسم الجبالي', classChoice: 's15', level: '1', score: 6.5, lastColumn: 'حلمي' },
{ name: 'جاسر شوشان', classChoice: 's15', level: '1', score: 7.5, lastColumn: 'صابر' },
{ name: 'حذامي بنمحمد', classChoice: 's15', level: '1', score: 13.5, lastColumn: 'الياس' },
{ name: 'حمادي عياد', classChoice: 's15', level: '1', score: 15, lastColumn: 'حافظ' },
{ name: 'خديجة الغول', classChoice: 's15', level: '1', score: 10, lastColumn: 'محمد' },
{ name: 'دعاء المولدي', classChoice: 's15', level: '1', score: 15, lastColumn: 'حمادي' },
{ name: 'دعاء بنعمر', classChoice: 's15', level: '1', score: 19.5, lastColumn: 'نور الدين' },
{ name: 'رغدة بنعبد الله', classChoice: 's15', level: '1', score: 18.5, lastColumn: 'رمزي' },
{ name: 'رنيم الرياحي', classChoice: 's15', level: '1', score: 16, lastColumn: 'حمدي' },
{ name: 'سليم بنمعاطي', classChoice: 's15', level: '1', score: 14, lastColumn: 'سمير' },
{ name: 'شهد بنالكيلاني', classChoice: 's15', level: '1', score: 14.5, lastColumn: 'نزار' },
{ name: 'شروق بنحزاز', classChoice: 's15', level: '1', score: 5.5, lastColumn: 'سامي' },
{ name: 'ضياء خياري', classChoice: 's15', level: '1', score: 16.5, lastColumn: 'فتحي' },
{ name: 'غفران عبود', classChoice: 's15', level: '1', score: 11.5, lastColumn: 'عبد القادر' },
{ name: 'فادي قاوة', classChoice: 's15', level: '1', score: 18, lastColumn: 'احمد' },
{ name: 'محمد ياسين الاندلسي', classChoice: 's15', level: '1', score: 10.5, lastColumn: 'عماد' },
{ name: 'مريم الزرقني', classChoice: 's15', level: '1', score: 8.5, lastColumn: 'فوزي' },
{ name: 'ملاك المحجوبي', classChoice: 's15', level: '1', score: 16, lastColumn: 'كريم' },
{ name: 'محمد امين بلواعر', classChoice: 's15', level: '1', score: 11.5, lastColumn: 'رضا' },
{ name: 'نور الهدى بنلله', classChoice: 's15', level: '1', score: 16.5, lastColumn: 'صالح' },
{ name: 'وجدي الزيادي', classChoice: 's15', level: '1', score: 5.5, lastColumn: 'فتحي' },
{ name: 'ياسر بكارة', classChoice: 's15', level: '1', score: 15, lastColumn: 'ماهر' },
{ name: 'يوسف بحرية', classChoice: 's15', level: '1', score: 11, lastColumn: 'مكرم' },
{ name: 'يوسف بنالمبروك', classChoice: 's15', level: '1', score: 16.5, lastColumn: 'المعز' },
{ name: 'يوسف مخلوف', classChoice: 's15', level: '1', score: 7.5, lastColumn: 'سمير' },
 
 
{ name: 'امنة الجندوبي', classChoice: '2 sciences 2', level: '2', score: 15.5, lastColumn: 'سامي' },
{ name: 'تقوى بوعود', classChoice: '2 sciences 2', level: '2', score: 18.5, lastColumn: 'فوزي' },
{ name: 'سيرين بلواعر', classChoice: '2 sciences 2', level: '2', score: 16, lastColumn: 'لطفي' },
{ name: 'سهى الصغير', classChoice: '2 sciences 2', level: '2', score: 14, lastColumn: 'سليمان' },
{ name: 'حمدي المهذبي', classChoice: '2 sciences 2', level: '2', score: 14, lastColumn: 'المنجي' },
{ name: 'رنيم بنعزونة', classChoice: '2 sciences 2', level: '2', score: 17, lastColumn: 'فيصل' },
{ name: 'احمد الجميل', classChoice: '2 sciences 2', level: '2', score: 17.5, lastColumn: 'عادل' },
{ name: 'زينب العياري', classChoice: '2 sciences 2', level: '2', score: 17.5, lastColumn: 'عامر' },
{ name: 'تسنيم بنعامر', classChoice: '2 sciences 2', level: '2', score: 18.5, lastColumn: 'نبيل' },
{ name: 'سارة زمزم', classChoice: '2 sciences 2', level: '2', score: 17.5, lastColumn: 'حسين' },
{ name: 'الياس الحري', classChoice: '2 sciences 2', level: '2', score: 13, lastColumn: 'سليم' },
{ name: 'محمد عزيز السعيدي', classChoice: '2 sciences 2', level: '2', score: 14, lastColumn: 'لطفي' },
{ name: 'احسان الحباشة', classChoice: '2 sciences 2', level: '2', score: 18, lastColumn: 'شكري' },
{ name: 'ياسمين بنمحمود', classChoice: '2 sciences 2', level: '2', score: 15, lastColumn: 'شمس الدين' },
{ name: 'شيماء دبيش', classChoice: '2 sciences 2', level: '2', score: 17, lastColumn: 'شكري' },
{ name: 'محمد ياسين العفيف', classChoice: '2 sciences 2', level: '2', score: 18.5, lastColumn: 'محمد الهادي' },
{ name: 'محمد امين التليلي', classChoice: '2 sciences 2', level: '2', score: 19.5, lastColumn: 'معاوية' },
{ name: 'ياسين بنمحفوظ', classChoice: '2 sciences 2', level: '2', score: 17.5, lastColumn: 'منير' },
{ name: 'ياسين الدبيبي', classChoice: '2 sciences 2', level: '2', score: 11.5, lastColumn: 'حاتم' },
{ name: 'ملاك بوسامة', classChoice: '2 sciences 2', level: '2', score: 17, lastColumn: 'محمود' },
{ name: 'ياسمين حمحوم', classChoice: '2 sciences 2', level: '2', score: 17, lastColumn: 'وهبي' },
{ name: 'كريم السعفي', classChoice: '2 sciences 2', level: '2', score: 14.5, lastColumn: 'وحيد' },
{ name: 'يمنى بنالشوشاني', classChoice: '2 sciences 2', level: '2', score: 17, lastColumn: 'هشام' },
{ name: 'يارة الجليلي', classChoice: '2 sciences 2', level: '2', score: 15, lastColumn: 'عبد الغفار' },
{ name: 'ياسمين النجار', classChoice: '2 sciences 2', level: '2', score: 16, lastColumn: 'عبد الحليم' },
{ name: 'اسماء بوعصيدة', classChoice: '2 sciences 2', level: '2', score: 10, lastColumn: 'ابراهيم' },

{ name: 'اسلام ابنالوافي', classChoice: '2 info 2', level: '2', score: 15.5, lastColumn: 'رضا' },
{ name: 'اسامة الحباشة', classChoice: '2 info 2', level: '2', score: 13, lastColumn: 'عبد العزيز' },
{ name: 'بلال بنخيرية', classChoice: '2 info 2', level: '2', score: 14.5, lastColumn: 'انيس' },
{ name: 'عزيز بنمعاوية', classChoice: '2 info 2', level: '2', score: 11.5, lastColumn: 'فتحي' },
{ name: 'بلال بوسامة', classChoice: '2 info 2', level: '2', score: 14.5, lastColumn: 'محمد' },
{ name: 'ريان بنرحيم', classChoice: '2 info 2', level: '2', score: 13, lastColumn: 'فؤاد' },
{ name: 'ايوب السعيدي', classChoice: '2 info 2', level: '2', score: 15.5, lastColumn: 'محمد' },
{ name: 'ريان النويصر', classChoice: '2 info 2', level: '2', score: 13, lastColumn: 'جبران' },
{ name: 'اسامة الكيلاني', classChoice: '2 info 2', level: '2', score: 12, lastColumn: 'نصيب' },
{ name: 'ايوب حامدي', classChoice: '2 info 2', level: '2', score: 13, lastColumn: 'عز الدين' },
{ name: 'حمادي اللافي', classChoice: '2 info 2', level: '2', score: 14.5, lastColumn: 'المنجي' },
{ name: 'وفيق الغول', classChoice: '2 info 2', level: '2', score: 13, lastColumn: 'عادل' },
{ name: 'ايوب بن علية', classChoice: '2 info 2', level: '2', score: 11, lastColumn: 'الهادي' },
{ name: 'خلود السيد', classChoice: '2 info 2', level: '2', score: 15, lastColumn: 'فرحات' },
{ name: 'اسماء بنزبير', classChoice: '2 info 2', level: '2', score: 13, lastColumn: 'ماهر' },
{ name: 'ابراهيم السيد', classChoice: '2 info 2', level: '2', score: 13.5, lastColumn: 'علي' },
{ name: 'حمزة هيشري', classChoice: '2 info 2', level: '2', score: 13.5, lastColumn: 'محمد الهادي' },
{ name: 'صفاء كردوع', classChoice: '2 info 2', level: '2', score: 13.5, lastColumn: 'محمد الصالح' },
{ name: 'تيسير الحباشة', classChoice: '2 info 2', level: '2', score: 14.5, lastColumn: 'عبد الفتاح' },
{ name: 'محمد عزيز مرتيل', classChoice: '2 info 2', level: '2', score: 5.5, lastColumn: 'سفيان' },
{ name: 'محمد الهادي مخلوف', classChoice: '2 info 2', level: '2', score: 15, lastColumn: 'خالد' },
{ name: 'محمد مخلوف', classChoice: '2 info 2', level: '2', score: 15.5, lastColumn: 'ناصر' },
{ name: 'ملكة الشعيلي', classChoice: '2 info 2', level: '2', score: 8.5, lastColumn: 'عبد العزيز' },
{ name: 'مريم بنمجدوبة', classChoice: '2 info 2', level: '2', score: 13.5, lastColumn: 'حسين' },
{ name: 'ملكة بنعبد الله', classChoice: '2 info 2', level: '2', score: 12, lastColumn: 'فيصل' },
{ name: 'قصي السعيدي', classChoice: '2 info 2', level: '2', score: 4.5, lastColumn: 'عادل' },
{ name: 'يوسف الغالي', classChoice: '2 info 2', level: '2', score: 12.5, lastColumn: 'الهادي' },
{ name: 'صفوان المعاوي', classChoice: '2 info 2', level: '2', score: 16.5, lastColumn: 'شكري' },
{ name: 'محمد امين باي', classChoice: '2 info 2', level: '2', score: 6, lastColumn: 'سفيان' },
{ name: 'فادي الحسيني', classChoice: '2 info 2', level: '2', score: 6.5, lastColumn: 'يوسف' },
{ name: 'يحي بنحمدة', classChoice: '2 info 2', level: '2', score: 12.5, lastColumn: 'محمد نجيب' },
{ name: 'علاء الدين العربي', classChoice: '2 info 2', level: '2', score: 12, lastColumn: 'ابراهيم' },
{ name: 'محمود السيد', classChoice: '2 info 2', level: '2', score: 14.5, lastColumn: 'فرحات' },
{ name: 'عمر بوالابيار', classChoice: '2 info 2', level: '2', score: 12, lastColumn: 'محسن' },
{ name: 'محمد حسين بن فضل', classChoice: '2 info 2', level: '2', score: 11, lastColumn: 'زهير' },
{ name: 'ياسمين المهذبي', classChoice: '2 info 2', level: '2', score: 12, lastColumn: 'المعز' }  
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
  const parentName = document.getElementById('parentName').value;
  
  const matchingStudent = students.find(student =>
    student.name.toLowerCase() === familyName.toLowerCase() &&
    student.level === level &&
    student.classChoice === classChoice && student.lastColumn.toLowerCase() === parentName.toLowerCase()
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

	
	