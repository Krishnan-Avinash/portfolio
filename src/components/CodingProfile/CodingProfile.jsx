import React, { useEffect, useState } from "react";
import gfg from "../../assets/gfg2.jpg";
import leetcode from "../../assets/leetcode.png";
import axios from "axios";

const CodingProfile = () => {
  const [leetcodeProfile, setLeetcodeProfile] = useState({});
  const [gfgProfile, setGfgProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [coding, setCoding] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);

  async function getLeetcode() {
    try {
      const leet = await axios.get(
        "https://portfolio-backend-g6av.onrender.com/api/codingProfile/leetcode"
      );
      setLeetcodeProfile(leet.data);
      let stringSessionLeet = JSON.stringify(leet.data);
      sessionStorage.setItem("leet", stringSessionLeet);
    } catch (error) {}
  }

  async function getGFG() {
    try {
      const gfg = await axios.get(
        "https://portfolio-backend-g6av.onrender.com/api/codingProfile/gfg"
      );
      const validJsonString = gfg.data.dataOutput.replace(/'/g, '"');
      const objectData = JSON.parse(validJsonString);
      setGfgProfile(objectData);
      let stringSessionGfg = JSON.stringify(objectData);
      sessionStorage.setItem("gfg", stringSessionGfg);
    } catch (error) {}
  }

  useEffect(() => {
    const sessionLeet = sessionStorage.getItem("leet");
    const sessionGfg = sessionStorage.getItem("gfg");

    if (sessionLeet && sessionGfg) {
      // Parse session storage data
      const parsedLeet = JSON.parse(sessionLeet);
      const parsedGfg = JSON.parse(sessionGfg);

      // Initialize coding and totalQuestions from session storage
      setCoding([
        {
          image: leetcode,
          name: "LeetCode",
          userName: "Avinash_krishnan",
          totalSolved: parsedLeet?.data?.totalSolved,
          easySolved: parsedLeet?.data?.easySolved,
          mediumSolved: parsedLeet?.data?.mediumSolved,
          hardSolved: parsedLeet?.data?.hardSolved,
        },
        {
          image: gfg,
          name: "GeeksForGeeks",
          userName: "avinashkriad3q",
          totalSolved: parsedGfg?.totalSolved,
          easySolved: parsedGfg?.easySolved,
          mediumSolved: parsedGfg?.mediumSolved,
          hardSolved: parsedGfg?.hardSolved,
        },
      ]);
      setTotalQuestions(
        (parsedLeet?.data?.totalSolved || 0) + (parsedGfg?.totalSolved || 0)
      );
      setLoading(false);
    } else {
      // Fetch profiles if session storage is empty
      const fetchProfiles = async () => {
        setLoading(true);
        await Promise.all([getLeetcode(), getGFG()]);
        setLoading(false);
      };
      fetchProfiles();
    }
  }, []);

  useEffect(() => {
    // Update coding state after fetching new profiles
    if (
      Object.keys(leetcodeProfile).length > 0 &&
      Object.keys(gfgProfile).length > 0
    ) {
      setCoding([
        {
          image: leetcode,
          name: "LeetCode",
          userName: "Avinash_krishnan",
          totalSolved: leetcodeProfile.data.totalSolved,
          easySolved: leetcodeProfile.data.easySolved,
          mediumSolved: leetcodeProfile.data.mediumSolved,
          hardSolved: leetcodeProfile.data.hardSolved,
        },
        {
          image: gfg,
          name: "GeeksForGeeks",
          userName: "avinashkriad3q",
          totalSolved: gfgProfile.totalSolved,
          easySolved: gfgProfile.easySolved,
          mediumSolved: gfgProfile.mediumSolved,
          hardSolved: gfgProfile.hardSolved,
        },
      ]);
      setTotalQuestions(
        leetcodeProfile.data.totalSolved + gfgProfile.totalSolved
      );
    }
  }, [leetcodeProfile, gfgProfile]);

  return (
    <div className="coding-parent">
      <div className="coding-top">
        <h1>Coding Profile</h1>
      </div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="coding-profile-display">
          {coding.map((item, index) => (
            <div className="coding-item" key={index}>
              <div className="coding-item-left">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="coding-item-right">
                <div className="detail-container">
                  <h1>UserName</h1>
                  <p>{item.userName}</p>
                </div>
                <div className="detail-container">
                  <h1>Total Solved</h1>
                  <p>{item.totalSolved}</p>
                </div>
                <div className="detail-container">
                  <h1>Easy</h1>
                  <p>{item.easySolved}</p>
                </div>
                <div className="detail-container">
                  <h1>Medium</h1>
                  <p>{item.mediumSolved}</p>
                </div>
                <div className="detail-container">
                  <h1>Hard</h1>
                  <p>{item.hardSolved}</p>
                </div>
              </div>
            </div>
          ))}
          <h1 className="total-solved">
            Total Solved: <span>{totalQuestions}</span>
          </h1>
        </div>
      )}
    </div>
  );
};

export default CodingProfile;
