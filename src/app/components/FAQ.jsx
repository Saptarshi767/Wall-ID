import React from 'react';

const FAQ = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-8">FAQ</h1>
      <div className="w-full max-w-3xl">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">how much does r1 cost?</h2>
          <p className="text-gray-300">pricing starts at USD 199 plus taxes and shipping fees.</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">what’s included in the box?</h2>
          <p className="text-gray-300">each order will include an r1 device (no accessories included with purchase). r1 is powered by a rechargeable lithium battery which can be charged with a USB-C charging cable and power adapter (not included).</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">when will I receive my r1?</h2>
          <p className="text-gray-300">for the most updated information about expected shipping windows, please visit our <a href="#" className="text-blue-500 underline">shipping update page</a>.</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">is r1 available in my country/region?</h2>
          <p className="text-gray-300">see the most updated list of countries and regions we currently sell to <a href="#" className="text-blue-500 underline">here</a>. we have plans to offer our products all over the world and will continue to focus on expanding shipping locations as the company grows. stay updated by following us on our social media platforms, joining our <a href="#" className="text-blue-500 underline">community forum</a> server, and viewing our website for the most recent information.</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">what can I do with r1?</h2>
          <p className="text-gray-300">r1 is your personal AI assistant that fits in your pocket. you can press the button and talk to it to access its powerful features, like getting in-depth answers to complex questions, using services like translation or recording, or using the camera to superpower your searches. here’s r1’s <a href="#" className="text-blue-500 underline">user guide</a> for a wide range of everyday use cases.</p>
        </div>
      </div>
      <footer className="text-sm text-gray-500 mt-auto text-center max-w-3xl">
        <p className="mb-2">
          Please remember in using this device that it incorporates the evolving technology of artificial intelligence (including machine learning). Thus, when you use our devices and services, you understand that output may not always be accurate or true. We cannot guarantee that answers, services, or other output from this device will be accurate, reliable, appropriate, or complete. It is your obligation to verify the accuracy and appropriateness of any answers or other output and to use your own human judgment, particularly when it involves matters having a legal or material impact on you, such as, for example, health, medical, legal, education, safety, insurance, financial, housing, or employment matters.
        </p>
        <p>
          OUR DEVICES SHOULD NEVER BE USED TO DIAGNOSE, PREVENT, TREAT, OR CURE ANY HEALTH CONDITIONS OR FOR ANY OTHER MEDICAL PURPOSE. NOR SHOULD YOU RELY ON ANY ANSWERS OR OUTPUT FROM OUR DEVICES RELATED TO, BY WAY OF EXAMPLE, AND INCLUDING, WITHOUT LIMITATION, MEDICAL, HEALTH, LEGAL, EDUCATION, SAFETY, FINANCIAL, HOUSING, INSURANCE, OR EMPLOYMENT MATTERS. WE DISCLAIM ANY RESPONSIBILITIES OR LIABILITIES FOR ANY LOSS OR DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR RELIANCE ON ANY ANSWERS OR OTHER OUTPUT FROM OUR DEVICES, AND YOU ACCEPT AND UNDERSTAND THAT ANY USE OF ANSWERS OR OTHER OUTPUTS FROM OUR SERVICES AND DEVICES IS AT YOUR SOLE RISK, AND YOU WILL NOT RELY ON ANSWERS OR OUTPUT AS A SOLE SOURCE OF TRUE OR FACTUAL INFORMATION OR AS A SUBSTITUTE FOR ANY KIND OF PROFESSIONAL ADVICE.
        </p>
      </footer>
    </div>
  );
};

export default FAQ;
