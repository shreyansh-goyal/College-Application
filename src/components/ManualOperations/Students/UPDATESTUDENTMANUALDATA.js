export const inputArrayFields=[
    {name:"Student Name",changeFields:"studentName"},
    {name:"Roll Number",changeFields:"rollNo"},
    {name:"Enrollment Number",changeFields:"enrollmentNo"},
    {name:"Phone Number",changeFields:"phoneNo"},
    {name:"Email ID",changeFields:"emailId"},
    {name:"Father's Name",changeFields:"fatherName"},
    {name:"Father's Phone Number",changeFields:"fatherPhoneNo"},
    {name:"Father's Email Id",changeFields:"fatherEmailId"},
    {name:"Mother's Name",changeFields:"motherName"},
    {name:"Gender",changeFields:"gender"},
    {name:"Aggregate",changeFields:"aggregate"},
    {name:"Active Backlogs",changeFields:"activeBacklogs"},
    {name:"Placed",changeFields:"placed"},
    {name:"Company Name",changeFields:"companyName"},
    {name:"10th Percentage",changeFields:"tenPercentage"},
    {name:"12th Percentage",changeFields:"twelfthPercentage"},
    {name:"Diploma",changeFields:"diploma"},
    {name:"Gap",changeFields:"gap"},
    {name:"Entrance Rank",changeFields:"enteranceRank"},
    {name:"Resume Url",changeFields:"resumeUrl"},
    {name:"Blocked From Drive",changeFields:"blockedFromDrive"},
    {name:"Library ID",changeFields:"libraryId"},
    {name:"Library Fine",changeFields:"libraryFine"},
]
export const selectArrayFields=[
    {
        name:"Branch",options:["CSE","IT","BBA","MBA","ECE","EEE"],changeFields:"branch"
    },
    {
        name:"Year",options:["1st","2nd","3rd","4th"],changeFields:"year"
    },
    {
        name:"Group",options:["G1","G2"],changeFields:"group"
    },
    {
        name:"Semester",options:["1","2","3","4","5","6","7","8"]
    },
    {
        name:"Section",changeFields:"section",options:["A","B"]
    }
]
export const dateArrayField=[
    {name:"Date Of Birth",changeFields:"dob"}
]
export const naturalState={
    studentName:"",
    section:"",
    rollNo:"",
    enrollmentNo:"",
    phoneNo:"",
    emailId:"",
    fatherName:"",
    fatherPhoneNo:"",
    fatherEmailId:"",
    motherName:"",
    gender:"",
    dob:"",
    aggregate:"",
    activeBacklogs:"",
    placed:"",
    companyName:"",
    tenPercentage:"",
    twelfthPercentage:"",
    diploma:"",
    gap:"",
    enteranceRank:"",
    resumeUrl:"",
    blockedFromDrive:"",
    libraryId:"",
    libraryFine:"",
    branch:"",
    year:"",
    group:"",
    semester:""
}