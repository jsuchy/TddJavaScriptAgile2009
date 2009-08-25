// Copyright © 2009 James Suchy.
// JsSimpleUnit Copyrights and all included source files are distributed under terms of the GNU LGPL.

function test(tests) {
  var passed = 0;
  var failed = 0 ;
  
  function write(message, passed) {
    var output = document.createElement("div");
    output.innerHTML = message;
    output.className = "test_result";
    output.className += passed ? " passed" : " failed";
    document.body.appendChild(output);
  }
  
  for (testName in tests) {
    try {
      tests[testName]();
      write(testName + " passed", true);
      passed++;
    }
    catch (ex) {
      write(testName + " failed: " + ex.message, false);
      failed++;
    }
  }
  
  write(passed + " tests passed", true);
  write(failed + " tests failed", false);
}

test.assertEquals = function(expectedValue, actualValue) {
  if (expectedValue !== actualValue) {
    throw new Error("Expected " + expectedValue + " but got " + actualValue);
  }
}