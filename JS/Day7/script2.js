let user1 = {
    name : "Atif",
    roll_no : "0005",
    subjects : {
        "Comp Arch": {
            instructor : "Prof. A",
            courseHours : 30,
            MaxMarks : 100,
            MarksObtained : 75
        }, 
        "Networking": {
            instructor : "Prof. B",
            courseHours : 32,
            MaxMarks : 110,
            MarksObtained : 71
        }, 
        "DSA": {
            instructor : "Prof. C",
            courseHours : 34,
            MaxMarks : 120,
            MarksObtained : 70
        },  
        "OS": {
            instructor : "Prof. D",
            courseHours : 35,
            MaxMarks : 130,
            MarksObtained : 78
        }
    }
}


console.log(user1.subjects[1])