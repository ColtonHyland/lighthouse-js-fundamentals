var age = 16;
var school = "";

const whichSchool  = function (age) {
  if(age < 13){
    school = "Elementary School";
  }else if(13 <= age && age <= 18){
    school = "Secondary School";
  }else if(age > 18){
    school = "Lighthouse Labs";
  }
  return school;
}