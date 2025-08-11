import React, { useState } from "react";

const titles = ["MR.", "MS.", "MRS."];

const countries = ["Bangladesh", "India", "USA", "UK"]; // example list for nationality dropdown
const countryCodeOptions = [
  { code: "+880", label: "Bangladesh" },
  { code: "+91", label: "India" },
  { code: "+1", label: "USA" },
  // add more as needed
];

const TravellerDetails = () => {
  const [activeTab, setActiveTab] = useState("Passenger 1");
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationality, setNationality] = useState("Bangladesh");
  const [frequentFlyer, setFrequentFlyer] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+880");
  const [phone, setPhone] = useState("");
  const [saveToList, setSaveToList] = useState(true);

  // Simple validation states
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const validate = () => {
    setFirstNameError(!firstName.trim());
    setLastNameError(!lastName.trim());
    return firstName.trim() && lastName.trim();
  };

  const handleContinue = () => {
    if (validate()) {
      alert("Form submitted!");
      // Add your submit logic here
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-blue-900 font-semibold text-lg mb-4">Enter Traveller Details</h2>

      {/* Tabs */}
      <div className="flex space-x-2 border-b border-gray-300 mb-6">
        {["Passenger 1", "Adult", "Primary Contact"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-semibold text-sm rounded-t-md ${
              activeTab === tab
                ? "bg-white border border-b-0 border-gray-300 text-blue-900"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Personal Details */}
      <div>
        <h3 className="text-blue-900 font-semibold mb-2">Personal Details</h3>
        <p className="text-gray-500 text-sm mb-4">
          As mentioned on your passport or government approved IDs
        </p>

        {/* Title Selection */}
        <div className="flex space-x-3 mb-6">
          {titles.map((t) => (
            <button
              key={t}
              onClick={() => setTitle(t)}
              className={`border rounded-md px-4 py-2 text-sm font-semibold ${
                title === t ? "bg-white border-blue-700 text-blue-700" : "bg-gray-100 text-gray-600"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="firstName">
              Given Name / First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`w-full border rounded px-3 py-2 ${
                firstNameError ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="First Name"
            />
            {firstNameError && (
              <p className="text-red-600 text-xs mt-1">The first name / given name field is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={`w-full border rounded px-3 py-2 ${
                lastNameError ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Last Name"
            />
            {lastNameError && (
              <p className="text-red-600 text-xs mt-1">The last name field is required</p>
            )}
          </div>
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="nationality">
              Nationality
            </label>
            <select
              id="nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="frequentFlyer">
              Frequent Flyer Number (Optional)
            </label>
            <input
              id="frequentFlyer"
              type="text"
              value={frequentFlyer}
              onChange={(e) => setFrequentFlyer(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Frequent Flyer Number"
            />
          </div>
        </div>
      </div>

   
      <div>
        <h3 className="text-blue-900 font-semibold mb-2">Contact Details</h3>
        <p className="text-gray-500 text-sm mb-4">Receive booking confirmation & updates</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Email"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="phone">
              Phone Number
            </label>
            <div className="flex">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="border border-gray-300 rounded-l px-3 py-2 bg-white"
                aria-label="Country code"
              >
                {countryCodeOptions.map(({ code, label }) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-grow border-t border-b border-r border-gray-300 rounded-r px-3 py-2"
                placeholder="1XXX XXXXXXX"
              />
            </div>
          </div>
        </div>

        <label className="inline-flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            checked={saveToList}
            onChange={() => setSaveToList(!saveToList)}
            className="form-checkbox text-blue-600"
          />
          <span className="text-sm">Save this to my traveler list.</span>
        </label>
      </div>

     
      <button
        onClick={handleContinue}
        className="mt-8 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded"
      >
        Continue
      </button>
    </div>
  );
};

export default TravellerDetails;
