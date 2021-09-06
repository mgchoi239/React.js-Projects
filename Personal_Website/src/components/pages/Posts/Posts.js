import "./Posts.css";
import PostItem from "./PostItem";
import React from "react";

function Posts() {
  return (
    <div className="posts__container">
      <PostItem
        title="Completed First React.js Project"
        date="Sep 5, 2021"
        p1="Half a year passed since I left the military. Funny how time cognition works; It feels more than a year passed since I left but the objective time hasn’t passed as much. Moreover, knowing that half a year is equivalent to a little less than half of my time in CFC, I realized how elongated time perception was in the military."
        p2="Meanwhile, I received a LASIK surgery a week after the last entry, and it was successful. It’s SMILE LASIK specifically, which is a third-generation vision improvement surgery following LASEK and LASIK. Its minimally invasive approach utilizes penetrating lasers to conduct majority of the operation, minimizing surgical incision area and thereby decreasing side-effects. I remember my parents had LASIK when I was ten and had to stay in their curtained rooms for a week until they were able to return to their normal lives. As for me, it only took me a five-hour nap to return. What surprised me most was that the only side-effect of pain from the first day disappeared on the next day and I retained an eyesight of 1.2 for both eyes since then. Not wearing glasses in the morning still feels awkward but the fact that I can see my face without my glasses and that I no longer have the burden of putting on contacts is great."
        p3="Giving some updates on my new major EMS, it seems double major with EECS is improbable. I initially thought CoE would allow leniency with overlapping courses like L&S, but CoE strictly requires 5 non-overlapping upper division technical courses for each major, which exactly obstructs the leeway I was hoping. Since that requirement annuls the merit of declaring EMS, I decided to pivot into EMS with an EECS minor. That choice decreased coursework burden, and now I am planning to take CS C8, CS 170, CS 186 and Math 110 for the returning Spring 2022."
      />
      <PostItem
        title="Finished Data Structure Course"
        date="Aug 13, 2021"
        p1="3rd quarter has come to an end with the summer semester. The last entry was about self-studying 61A in order to take 61BL but now I have completed 61BL and am planning to take try new things until the end of this year. Overall, the class was very fun though the assignments were occasionally challenging. If it were not for Kaifeng, whom I have met luckily, things could have been drastically different. But with a good partner, all project grades received full mark (+ bonus mark for the final one despite being painful) and we filled each other’s mistakes and weaknesses."
        p2="I am now eligible to change my major to EMS, Engineering Mathematics and Statistics. If applicable, I may do a double major with EECS because it only needs two more courses to fulfill the requirements, but that’s for later. Once I return to Berkeley in 2022 Spring, I will have one or two summer internship opportunities before graduation which may be a risk as an international student and a rising junior without any previous CS related experience. That said, I am hoping to try out an internship while in Korea if any of them are available."
      />
    </div>
  );
}

export default Posts;
