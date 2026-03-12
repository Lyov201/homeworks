let student = {
    name: "Liana",
    univercity: "AUA",
    group: "bissnes"
};

Object.freeze(student);

student.name = "Ani";
student.group = "data sience";

console.log(student);
