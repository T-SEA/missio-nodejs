/**
 * Sandbox
 */
// var API_KEY = '611c6524e7443d7c9417da79d00a70c9';
// var SECRET_KEY = '183681dd3af7467e9818001dc6a9dbee9ed4b71633994c1a9c2d69603b120557ffcc84ad8ed44e7f88a099abe8740b8830d0e967373349268654536bafe480d057557175cd65477caaffd67ca38cb16d023ffc287fbc4a3a905569396e005b7b9e007b48ddde41fba0c2223f3dc6adddb95beccbc9914908a1925b2bb58f8940';
// var PROFILE_ID = '3E17F15F-470A-44B1-9130-D9CE2711703B';


// var API_KEY = '70ec3dacbf263b64a85e461f0d8d6d20';
// var SECRET_KEY = 'b01add47b48d4476b2d62ef519e52b69d62b4f034b5346459f84d28f0ea2818cb7388611c7ec4940814030753972d3b21e94595d0b7849de98c96b5ee263e57bcb186171436545a7900c0953f4740ce21974a21c427b42f59d23df284dcaf85722ad881ecf3b444486ed98580fe8982e4a095a2ede344b8b9dbce940d388d5cc';
// var PROFILE_ID = '95C211EE-B7AB-49B6-B3AA-C0E278CB934B';



var CyberSource = require('../utils/cybersource');

module.exports = new CyberSource(PROFILE_ID, API_KEY, SECRET_KEY);

