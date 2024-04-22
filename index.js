// Step 1: Define the BankBranch class
class BankBranch {
  constructor(branchInfo) {
    // Step 2: Check if an instance already exists
    if (BankBranch.instance) {
      return BankBranch.instance;
    }

    // Step 3: If no instance exists, create a new one
    this.branchInfo = branchInfo;
    BankBranch.instance = this;
  }

  // Step 4: Add methods to the BankBranch class for managing branch-related information
  getBranchInfo() {
    return this.branchInfo;
  }
}

// Step 5: Usage section
// Create instances of the BankBranch class
const branchA = new BankBranch({ name: 'Cape Town branch', address: '123 Beach Rd' });
const branchB = new BankBranch({ name: 'Durban branch', address: '456 Douglas Str' });

// Use the getBranchInfo method to retrieve branch information
console.log(branchA.getBranchInfo()); // Output: { name: 'Cape Town branch', address: '123 Beach Rd' }
console.log(branchB.getBranchInfo()); // Output: { name: 'Cape Town branch', address: '123 Beach Rd' }

// Verify that branchA and branchB are referring to the same instance
console.log(branchA === branchB); // Output: true


