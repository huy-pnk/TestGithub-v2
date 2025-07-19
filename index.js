// TestGithub Project
// A simple test project

console.log('Hello from TestGithub!');
console.log('This is a test repository created from local folder');

function greet(name) {
    return `Hello, ${name}! Welcome to TestGithub project.`;
}

function getCurrentTime() {
    return new Date().toISOString();
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        greet,
        getCurrentTime
    };
}

// Run if this file is executed directly
if (require.main === module) {
    console.log(greet('Developer'));
    console.log('Current time:', getCurrentTime());
}
