function test(tests) {
  
  function writeResult(message, result) {
    var output = document.createElement("div");
    output.innerHTML = message;
    output.className = "test_result " + result;
    document.body.appendChild(output);
  }
  
  for (testName in tests) {
    try {
      tests[testName]();
      writeResult(testName + " Passed", "passed");
    }
    catch (ex) {
      writeResult(testName + " Failed: " + ex.message, "failed");
    }
  }
}

test.assertEquals = function(expectedValue, actualValue) {
  if (expectedValue !== actualValue) {
    throw new Error("Expected " + expectedValue + " but got " + actualValue);
  }
}