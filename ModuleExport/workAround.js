//import the module using ./employee file path
import Employee from './employee';


// modify the variables such that they are a property on the Employee module.
function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + Employee.getCadre());
  console.log('Tax: ' + Employee.calculateTax());
  console.log('Benefits: ' + Employee.getBenefits());
  console.log('Bonus: ' + Employee.calculateBonus());
  console.log('Reimbursement Eligibility: ' + Employee.reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
