import React, { useEffect, useState } from "react";
// import gfg from "../../assets/gfg2.jpg";
import leetcode from "../../assets/leetcode.png";
import axios from "axios";

const CodingProfile = () => {
  const [leetcodeProfile, setLeetcodeProfile] = useState({});
  // const [gfgProfile, setGfgProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [coding, setCoding] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);

  async function getLeetcode() {
    try {
      const leet = await axios.get(
        "https://portfolio-backend-g6av.onrender.com/api/codingProfile/leetcode"
      );
      setLeetcodeProfile(leet.data);
    } catch (error) {}
  }

  // async function getGFG() {
  //   try {
  //     const gfg = await axios.get(
  //       "https://portfolio-backend-g6av.onrender.com/api/codingProfile/gfg"
  //     );
  //     setGfgProfile(gfg.data);
  //   } catch (error) {}
  // }

  useEffect(() => {
    const fetchProfiles = async () => {
      setLoading(true);
      await Promise.all([getLeetcode()]);
      setLoading(false);
    };
    fetchProfiles();
  }, []);

  useEffect(() => {
    if (
      Object.keys(leetcodeProfile).length > 0
      // &&
      // Object.keys(gfgProfile).length > 0
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
        // {
        //   image: gfg,
        //   name: "GeeksForGeeks",
        //   userName: "avinashkriad3q",
        //   totalSolved: gfgProfile.data.totalProblemsSolved,
        //   easySolved: gfgProfile.data.Easy,
        //   mediumSolved: gfgProfile.data.Medium,
        //   hardSolved: gfgProfile.data.Hard,
        // },
      ]);
      setTotalQuestions(
        leetcodeProfile.data.totalSolved
        // + gfgProfile.data.totalProblemsSolved
      );
    }
  }, [
    leetcodeProfile,
    //  gfgProfile
  ]);

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
