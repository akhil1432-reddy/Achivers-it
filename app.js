
// Scenario 1: Banking Loan Approval Workflow

// Requirement:
// Determine whether a customer is eligible for loan approval.

// Constraints:
const customerAge = 30;
const monthlySalary = 75000;
const creditScore = 780;


// Rules:
// Age >= 21
// Salary >= 50000
// Credit Score >= 750
if(customerAge>=21){
    if(monthlySalary>=50000){
        if(creditScore>=750){
            console.log("Loan Approved");
        }
        else{
            console.log("loan rejected due to less creditScore");
        }

    }
    else{
        console.log("Loan rejected due lo less salary");
    }

    
}
else{
    console.log("Loan rejected due to low age");
}

// Expected:
// Loan Approved
// OR
// Proper rejection reason.

// --------------------------------------------------


// Scenario 2: Corporate System Access Control

// Requirement:
// Allow access to production servers.

// Constraints:
const isEmployee = true;
const isMFAEnabled = true;
const securityTrainingCompleted = true;

// Rules:
// Verify Employee.
// Verify MFA.
// Verify Security Training.
// Then allow access.
if(isEmployee==true){
    if(isMFAEnabled==true){
        if(securityTrainingCompleted==true){
            console.log("access allowed");
        }
        else{
            console.log("access denied");
        }

    }
    else{
        console.log("access denied");
    }

    
}
else{
    console.log("access denied");
}


// ==============================================
// PRODUCTION GRADE CHALLENGE SCENARIOS
// ==============================================


// Scenario 1: E-Commerce Checkout Validation

// Requirement:
// Allow order placement only after all validations pass.

// Constraints:
const isLoggedIn = true;
const cartItems = 3;
const shippingAddressAvailable = true;
const paymentMethodSelected = true;

// Rules:
// User must be logged in.
// Cart must contain at least one item.
// Shipping address must exist.
// Payment method must be selected.
if(isLoggedIn==true){
    if(cartItems>0){
        if(shippingAddressAvailable==true){
            if(paymentMethodSelected==true){
                console.log("order placed successfully");
            }
            else{
                console.log("order get failed due to payment issue");
            }
           
        }
        else{
            console.log("oorder get failed due to shipping address issue");
        }

    }
    else{
        console.log("order get failed due to cartitems less");
    }

    
}
else{
    console.log("order get failed due to login issue");
}
// Expected:
// Order Placed Successfully
// OR
// Appropriate validation error.


// --------------------------------------------------


// Scenario 2: LMS Course Enrollment Validation

// Requirement:
// Allow enrollment into advanced course.

// Constraints:
const studentLoggedIn = true;
const prerequisiteCompleted = true;
const courseSeatsAvailable = true;
const feePaid = false;

// Rules:
// Verify Login.
// Verify Prerequisite.
// Verify Seat Availability.
// Verify Fee Payment.
if(studentLoggedIn==true){
    if(prerequisiteCompleted==true){
        if(courseSeatsAvailable==true){
            if(feePaid==true){
                console.log("Enrollment Successful");
            }
            else{
                console.log("enrollment get failed due to fee issue");
            }
           
        }
        else{
            console.log("enrollment get failed due to seats are not available");
        }

    }
    else{
        console.log("enrollment get failed due to prerequisite failure");
    }

    
}
else{
    console.log("enrollment get failed due to login issue");
}

// Expected:
// Enrollment Successful
// OR
// Exact reason for failure.


// ==============================================
// ADVANCED REAL-TIME SCENARIOS
// ==============================================


// Scenario 1: Hospital Appointment Booking

// Constraints:
const doctorAvailable = true;
const patientRegistered = true;
const insuranceVerified = false;

// Rules:
// Check patient registration.
// Check doctor availability.
// Check insurance verification.
// Then allow appointment booking.
if(patientRegistered==true){
    if(doctorAvailable==true){
        if(insuranceVerified==true){
            console.log("appointment booked");
        }
        else{
            console.log("appointment denied due to insurance info");
        }

    }
    else{
        console.log("appointment denied due to not availabilty of doctor");
    }

    
}
else{
    console.log("appointment denired due to patient registration issue");
}



// --------------------------------------------------


// Scenario 2: Job Application Screening

// Constraints:
const experienceYears = 4;
const skillsMatched = true;
const degreeVerified = true;

// Rules:
// Minimum experience = 3 years.
// Skills must match.
// Degree must be verified.
if(experienceYears>=3){
    if(skillsMatched==true){
        if(degreeVerified==true){
            console.log("eligible for interview");
        }
        else{ 
            console.log("access denied due to degree verification");
        }

    }
    else{
        console.log("access denied due to skills miss matched");
    }

    
}
else{
    console.log("access denied due to less experience");
}
// Expected:
// Eligible for Interview
// OR
// Rejected with proper reason.