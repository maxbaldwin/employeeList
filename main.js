// Employees
// Create a two-level prototype chain for creating employees in your business. Start off with an Employee function. Then create two other functions named Clinician, and Operations that have Employee on their prototype chain.
// Departments
// Create a two-level prototype chain for creating departments in your business. Start off with a Department function. Then create two other functions named FieldOffice, and Headquarters that have Department on their prototype chain.
// Requirements
////DONE//// Every employee should have a first and last name.
////DONE//// Every department should have a name.
////DONE//// Every employee should be assigned to either the FieldOffice or Headquarters department. This is a has-a relationship.
// Clinician employees should have a property for their area of medical expertise (e.g. physical therapist, phrenologist, anesthesiologist, etc.)
// Operations employees should have a property for their area of responsibility (e.g. IT, revenue, compliance, etc.)
// Every field office should have a unique city.
// Create a minimum of 4 employees - 2 clinicians, and 2 operations - that have been assigned to a specific department.
// Output the following information to the console for each employee.
// Full name
// Department name
// Expertise/responsibility
// sample output
// Deborah Harris works as a clinician, in the Baltimore field office, and is a phrenologist.
// Michael Slazinski works in operations, in headquarters, and is responsible for compliance.
// Margaret Johnson works as a clinician, in the Indianapolis field office, and is a physical therapist.
//CATEGORIES
function FieldOffice () {
  this.location = "Field Office"
}
function Headquarters () {
  this.location = "Headquarters"
}
function Clinician () {
  this.department = "Clinician"
}
function Finance () {
  this.department = "Finance"
}
function Operations() {
  this.department = "Operations"
}
function Pediatrician () {
  this.expertise = "Pediatrician"
}
function Payroll () {
  this.expertise = "Payroll"
}
function RN () {
  this.expertise = "Registered Nurse"
}
function XRay () {
  this.expertise = "X-ray Technician"
}
function Purchasing () {
  this.expertise = "Purchasing"
}
function Nashville () {
  this.city = "Nashville"
}
function NewOrleans () {
  this.city = "New Orleans"
}
function Hendersonville () {
  this.city = "Hendersonville"
}
//EMPLOYEES
function Employee1 () {
  this.firstName = "Marie",
  this.lastName = "Gordon"
}

Employee1.prototype = new FieldOffice();
Employee1.prototype = new Clinician();
Employee1.prototype = new Pediatrician();
Employee1.prototype = new Nashville();
function Employee2 () {
  this.firstName = "Harold",
  this.lastName = "Taylors"
}
Employee2.prototype = new Headquarters();
Employee2.prototype = new Finance();
Employee2.prototype = new Payroll();
Employee2.prototype = new NewOrleans();
function Employee3 () {
  this.firstName = "Hank",
  this.lastName = "Owenwald"
}
Employee3.prototype = new FieldOffice();
Employee3.prototype = new Clinician();
Employee3.prototype = new RN();
Employee3.prototype = new Hendersonville();
function Employee4 () {
  this.firstName = "Walter",
  this.lastName = "Thomas"
}
Employee4.prototype = new FieldOffice();
Employee4.prototype = new Clinician();
Employee4.prototype = new Hendersonville();
Employee4.prototype = new XRay();
function Employee5 () {
  this.firstName = "Ruth",
  this.lastName = "Gusky"
}
Employee5.prototype = new Headquarters();
Employee5.prototype = new Operations();5
Employee5.prototype = new Purchasing();
Employee5.prototype = new NewOrleans();
function Employee6 () {
  this.firstName = "Terry",
  this.lastName = "Assante"
}
Employee6.prototype = new FieldOffice();
Employee6.prototype = new Clinician();
Employee6.prototype = new Nashville();
Employee6.prototype = new RN();

var emp2 = new Employee2();
var emp3 = new Employee3();
var emp4 = new Employee4();
var emp5 = new Employee5();
var emp6 = new Employee6();

function Clinicians () {
 this.department = "Clinicians";
}

function RN () {
 this.expertise = "RN";
}
RN.prototype = new Clinicians();

function FieldOffice () {
 this.location = "FieldOffice";
}

function Nashville () {
 this.city = "Nashville";
}
Nashville.prototype = new FieldOffice();

function Employee1 () {
 this.firstname = "Debra",
 this.lastName = "Jordan"
}
Employee1.prototype = new Nashville();

var emp1 = new Employee1()
emp1.expertise = new RN();
console.log("EMp1:",emp1);

function headquarters () {
  this.location = "headquarters";
}

function Nashville() {
  this.city = "Nashville";
}

function Employee2 () {
  this.firstname = "Hank", 
  this.lastName = "Owenwald"
}

var emp2 = new Employee2()
emp2.expertise = new Payroll();
console.log("emp2", emp2);


