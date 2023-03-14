const courseList = [
  { code: "ACIT 1620", name: "Web Fundamental Technologies" },
  { code: "ACIT 1515", name: "Scripting for IT" },
  { code: "ACIT 1420", name: "Database Systems" },
];

let userNumber = prompt("Enter a Course number:");
while (userNumber.length !== 4 || isNaN(userNumber)) {
  userNumber = prompt("Invalid input. Please enter a Course number:");
}

let isTakingCourse = false;
for (const course of courseList) {
  if (course.code.includes(userNumber)) {
    console.log(`Yes, I am taking the course: ${course.code} - ${course.name}`);
    isTakingCourse = true;
    break;
  }
}

if (!isTakingCourse) {
  const newCourse = { code: `ACIT ${userNumber}`, name: null };
  courseList.push(newCourse);
  console.log(`Successfully added ${newCourse.code} to course list.`);
}
