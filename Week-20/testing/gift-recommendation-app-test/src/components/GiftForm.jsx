import React, { useState } from 'react'
import Select from "react-select";
import axios from 'axios';
import GiftDetails from './GiftDetails';


function GiftForm() {

    const genderOptions = [
        { value: "female", label: "Female" },
        { value: "male", label: "Male" },
        { value: "other", label: "Other" }
      ];

    const interestOptions = [
        { value: "art", label: "Art" },
        { value: "games", label: "Games" },
        { value: "magic", label: "Magic" },
        { value: "sports", label: "Sports" }
      ];

    const [age, setAge] = useState(0)
    const [gender, setGender] = useState("");
    const [interests, setInterests] = useState("");
    const [apiResponse, setApiResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [responseArray, setResponseArray] = useState([]);

    const handleAge = (event) => {
        setAge(event.target.value);
    };

    const handleGender = (event) => {
        setGender(event.value);
    };

    const handleInterests = (event) => {
        setInterests(event.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        if(age <= 0) {
            alert('Age must be positive')
        }
        if(gender === "") {
          alert('Please select a gender')
        }
        if(interests === "") {
          alert('Please select interests')
        }
        console.log('Form submitted');
        try {
        console.log("response");
        const request = 'Suggest a list of gift options for a ' + gender + ' of age ' + age + ' having interests ' + interests;

        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
              model: 'gpt-3.5-turbo',
              messages: [{"role": "user", "content": request}],
              // Add other parameters as needed
            },
            {
              headers: {
                Authorization: `Bearer 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`,
                'Content-Type': 'application/json',
              },
            }
          );
        const responseString = response.data.choices[0].message.content;
        setResponseArray(responseString.split("\n"));
        console.log("response", responseArray);
        setApiResponse(response.data.choices[0].message.content);
        } catch (e) {
        console.log(e);
        setApiResponse("Something is going wrong, Please try again.", e);
        }
        setLoading(false);

    };

    
  return (
    <div>
        <h1>Gift Recommendation App</h1>
    <div className='giftForm'>
        <form onSubmit={handleSubmit}>
        <label>
            Age:
            <input
            type="number"
            name="age"
            value={age}
            onChange={handleAge}
            required
            />
        </label>
        <label>
            Gender:
            <Select options={genderOptions} onChange={handleGender} required/>
        </label>

        <label>
            Interests:
            <Select options={interestOptions} onChange={handleInterests} required/>
        </label>
        
        <button type="submit">{loading ? "Generating..." : "Generate"}</button>
        </form>
    </div>
    {apiResponse && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <pre>
            <strong>Gift recommendations:</strong>
            {responseArray.map(gift => {
                return (
                    <GiftDetails gift={gift}/>
                );
            })}
          </pre>
        </div>
      )}
    </div>
  )
}

export default GiftForm