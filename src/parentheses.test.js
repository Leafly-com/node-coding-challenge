// Fix the parentheses so all opening and closing brackets have matching counterparts. 
// The goal is to achieve this by appending parenthesis to the beginning or end of the string. 
// The expected result should be of minimum length needed to give each parenthesis its counterpart. 
// Input will be a string of varying length, only containing '(' and/or ')'.

// Examples:

// Input: ")("
// Output: "()()"

// Input: "))))(()("
// Output: "(((())))(()())"



// Please complete your solution here:
const fixParentheses = (string) => {
  return;
};

describe('fixParentheses tests', function() {
  it('should pass test suite', () => {
    expect(fixParentheses('')).toEqual('');
    expect(fixParentheses('(()')).toEqual('(())');
    expect(fixParentheses(')(()(')).toEqual('()(()())');
    expect(fixParentheses('()))()))(')).toEqual('((((()))()))()');
    expect(fixParentheses('))))(()))(())(((()()')).toEqual('((((())))(()))(())(((()())))');
    expect(fixParentheses(')()(()(())()((())(()))))(())')).toEqual('(()()(()(())()((())(()))))(())');  
  });
});