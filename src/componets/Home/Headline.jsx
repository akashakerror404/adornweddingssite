import React from 'react';

const makePhoneCall = () => {
  const phoneNumber = '7025784463';
  const telLink = `tel:${phoneNumber}`;
  
  // Try to open the default phone app with the tel: link
  window.location.href = telLink;

  // Alternatively, you can use a more generic approach, but it may not work in all cases
  // window.open(`tel:${phoneNumber}`);
};

function Headline() {
  return (
    <div>
      <div className="flex bg-[#ebebed] h-[350px]">
        <div className="w-full p-6 flex justify-center md:pt-20">
          <div className="w-full md:w-[95%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] p-5 md:p-6 bg-opacity-60 rounded-[40px] flex-col md:flex-row">
            <div className="md:flex">
              <div className="md:w-7/12">
                <h1 className="font-Poppins italic md:text-3xl text-3xl md:mb-8 mb-2">Welcome to</h1>
                <h1 className="md:text-6xl text-4xl font-Poppins leading-14 tracking-wide">ADRON WEDDING</h1>
              </div>
              <div className="md:w-5/12">
                <p className="mb-4 text-gray-400 font-Poppins">
                  Our team is dedicated to providing you with not just photographs, but a visual narrative that tells the unique story of your wedding day. We focus on the details, emotions, and candid moments that make your celebration truly exceptional.
                </p>
                <div className="flex justify-center w-full md:justify-start gap-x-4">
                  <div className="px-3 md:px-5 py-1 bg-black rounded-xl flex justify-end items-center gap-3 text-white cursor-pointer" onClick={makePhoneCall}>
                    <div className="w-7 h-7 relative rounded-full flex justify-center">
                      <img className="rounded-full" src="https://static.vecteezy.com/system/resources/previews/023/122/060/non_2x/green-accept-call-icon-answer-call-icon-vector.jpg" alt="Connect Icon" />
                    </div>
                    <div className="text-white text-sm md:text-lg font-bold font-Poppins">
                      Connect
                    </div>
                  </div>
                  <div className="px-3 md:px-5 py-2 bg-white rounded-xl justify-end items-center gap-3 inline-flex text-black cursor-pointer">
                    <div className="w-6 h-6 relative rounded-full justify-center">
                      <img src="https://icones.pro/wp-content/uploads/2021/02/icone-de-fleche-droite-orange.png" alt="Read More Icon" />
                    </div>
                    <div className="text-black text-sm md:text-lg font-bold font-Poppins capitalize leading-normal">
                      Read more
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-gradient-to-r from-[#ebebed] via-blue-200 to-[#ebebed] dark:from-[#ebebed] dark:via-blue-900 dark:to-[#ebebed] h-[2px]" />
    </div>
  );
}

export default Headline;
