import React, { useEffect } from 'react'
import Select from "react-select";
// import axios from 'axios';
import GiftDetails from './GiftDetails';
import { useDispatch, useSelector } from 'react-redux';
import { setAge, setGender, setInterests } from '../features/giftSlice';
import store from '../app/store';
import { fetchGifts } from '../features/apiSlice';


function GiftForm() {

  const dispatch = useDispatch(); // Get the dispatch function from the useDispatch hook
  // const giftData = useSelector(state => state.gifts?.data);
  // const status = useSelector(state => state.gifts?.status);
  // const error = useSelector(state => state.gifts?.error);
  const {data, loading, error} = useSelector((state) => state.api);

  useEffect(() => {console.log('useeffect',loading, data)},[loading, data]);

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

    // const [age, setAge] = useState(0)
    // const [gender, setGender] = useState("");
    // const [interests, setInterests] = useState("");
    // const [apiResponse, setApiResponse] = useState("");
    // const [loading, setLoading] = useState(false);
    // const [responseArray, setResponseArray] = useState([]);

    const handleAge = (event) => {
        // setAge(event.target.value);
        dispatch(setAge(event.target.value))
    };

    const handleGender = (event) => {
        // setGender(event.value);
        dispatch(setGender(event.value))
    };

    const handleInterests = (event) => {
        // setInterests(event.value);
        dispatch(setInterests(event.value))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // setLoading(true);
        const input = store.getState().gifts;
        if(input.age <= 0) {
            alert('Age must be positive')
        }
        console.log('Form submitted');
        try {
        console.log("response");
        const request = 'Suggest a list of gift options for a ' + input.gender + ' of age ' + input.age + ' having interests in ' + input.interests;

        dispatch(fetchGifts(request));
        // const response = await axios.post(
        //     'https://api.openai.com/v1/chat/completions',
        //     {
        //       model: 'gpt-3.5-turbo',
        //       messages: [{"role": "user", "content": request}],
        //       // Add other parameters as needed
        //     },
        //     {
        //       headers: {
        //         Authorization: `Bearer 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`,
        //         'Content-Type': 'application/json',
        //       },
        //     }
        //   );
        // const responseString = response.data.choices[0].message.content;
        // const gifts = giftData.choices[0].message.content;
        // setResponseArray(gifts.split("\n"));
        // console.log("response", responseArray);
        // setApiResponse(giftData.choices[0].message.content);
        } catch (e) {
        console.log(error);
        // setApiResponse("Something is going wrong, Please try again.", error);
        }
        // setLoading(false);

    };
  
    // if(loading) {return <h1>Loading...</h1>}
    // {console.log(giftsData, loading)}
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
    {data.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <pre>
            <strong>Gift recommendations:</strong>
            {data.split("\n").map(gift => {
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