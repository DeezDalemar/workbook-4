let courses = [
   {
      CourseId: "PROG100",
      Title: "Introduction to HTML/CSS/Git",
      Location: "Classroom 7",
      StartDate: "09/08/22",
      Fee: 100.00,
   },
   {
      CourseId: "PROG200",
      Title: "Introduction to JavaScript",
      Location: "Classroom 9",
      StartDate: "11/22/22",
      Fee: 350.00,
   },
   {
      CourseId: "PROG300",
      Title: "Introduction to Java",
      Location: "Classroom 1",
      StartDate: "01/09/23",
      Fee: 50.00,
   },
   {
      CourseId: "PROG400",
      Title: "Introduction to SQL and Databases",
      Location: "Classroom 7",
      StartDate: "03/16/23",
      Fee: 50.00,
   },
   {
      CourseId: "PROJ500",
      Title: "Introduction to Angular",
      Location: "Classroom 1",
      StartDate: "04/25/23",
      Fee: 50.00,
   },
];


function findCourseStartDate(coursesGrouped, courseID) {
    for (const course of coursesGrouped) {
        if (course.CourseId == courseID) {
            console.log(`Course Name: ${course.StartDate}`);
        }
    }
}

function findCourseName(coursesGrouped, courseID) {
   for (const course of coursesGrouped) {
      if (course.CourseId == courseID) {
         console.log(`Starting Date: ${course.Title}`);
      }
   }
}

function findCheapCourses(coursesGrouped) {
    let cheapCourseStorage = [];

    for (const course of coursesGrouped) {
        if (course.Fee <= 50) {
            cheapCourseStorage.push(course.Title);
        }
    }

    console.log("THe courses that are $50 or cheaper are: " + cheapCourseStorage);
}

function checkIfCourseInClass1(coursesGrouped) {
    let coursesInClass1 = []

    for (const course of coursesGrouped) {
        if (course.Location == "Classroom 1") {
            coursesInClass1.push(course.Title)
        }
    }

    console.log("The courses in Class 1 are: " + coursesInClass1);
}

findCheapCourses(courses)
findCourseName(courses, "PROG300")
findCourseStartDate(courses, "PROG300");
checkIfCourseInClass1(courses)



