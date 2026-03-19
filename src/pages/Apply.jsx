import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaStar, FaCertificate } from "react-icons/fa";

import aiImg from "../assets/ai.png";
import marketingImg from "../assets/market.png";
import webImg from "../assets/web.png";

export default function TrainingSection(){

const [course,setCourse]=useState("")
const [showForm,setShowForm]=useState(false)
const [showCert,setShowCert]=useState(false)
const [chatOpen,setChatOpen]=useState(false)

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [phone,setPhone]=useState("")

const [messages,setMessages]=useState([
{sender:"bot",text:"Hello 👋 Ask about courses"}
])

const [input,setInput]=useState("")
const [reviewIndex,setReviewIndex]=useState(0)

const courses={

"AI / ML Program":{
duration:"3 Months",
certificate:"AI Industry Certificate",
career:"AI Engineer",
image:aiImg
},

"Digital Marketing":{
duration:"2 Months",
certificate:"Google Certification",
career:"Marketing Specialist",
image:marketingImg
},

"Full Stack Development":{
duration:"4 Months",
certificate:"Full Stack Certificate",
career:"Web Developer",
image:webImg
}

}

const reviews=[

{name:"Rahul",text:"Best training institute. Got internship after AI course."},

{name:"Priya",text:"Digital marketing training very practical and useful."},

{name:"Arun",text:"Full stack course helped me build real websites."}

]

useEffect(()=>{

const interval=setInterval(()=>{
setReviewIndex((prev)=>(prev+1)%reviews.length)
},4000)

return ()=>clearInterval(interval)

},[])

const submitApplication=async()=>{

if(!name || !email || !phone || !course){
alert("Fill all fields")
return
}

try{

const res=await fetch("http://127.0.0.1:5000/apply",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
email,
phone,
course
})

})

const data=await res.json()

alert(data.message)

setShowForm(false)

}catch{

alert("Server error")

}

}

const sendMessage=()=>{

if(!input) return

const userMsg={sender:"user",text:input}

let reply="Please contact admin."

const msg=input.toLowerCase()

if(msg.includes("ai"))
reply="AI course duration is 3 months."

if(msg.includes("marketing"))
reply="Digital marketing course duration is 2 months."

if(msg.includes("web"))
reply="Full stack development duration is 4 months."

const botMsg={sender:"bot",text:reply}

setMessages([...messages,userMsg,botMsg])
setInput("")

}

return(

<section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-28 px-6 relative">

<h2 className="text-5xl text-center text-purple-400 mb-16 font-bold">
Professional Training Programs
</h2>

<div className="max-w-4xl mx-auto">

<select
value={course}
onChange={(e)=>setCourse(e.target.value)}
className="w-full p-4 bg-gray-900 border border-gray-700 rounded-xl mb-10"
>

<option value="">Select Course</option>
<option>AI / ML Program</option>
<option>Digital Marketing</option>
<option>Full Stack Development</option>

</select>

{course &&(

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
className="bg-white/10 p-10 rounded-3xl border border-white/20"
>

<img
src={courses[course].image}
className="rounded-xl mb-6"
/>

<p>
Duration :
<span className="text-purple-400">
{courses[course].duration}
</span>
</p>

<p>
Certificate :
<span className="text-yellow-400">
{courses[course].certificate}
</span>
</p>

<p>
Career :
<span className="text-blue-400">
{courses[course].career}
</span>
</p>

<div className="flex gap-4 mt-8">

<button
onClick={()=>setShowForm(true)}
className="bg-purple-600 px-8 py-3 rounded-xl"
>
Apply Now
</button>

<button
onClick={()=>setShowCert(true)}
className="bg-green-600 px-8 py-3 rounded-xl"
>
Claim Certificate
</button>

</div>

</motion.div>

)}

</div>

{/* GOOGLE REVIEWS */}

<div className="max-w-xl mx-auto mt-24">

<h3 className="text-3xl text-center mb-6 text-yellow-400">
⭐⭐⭐⭐⭐ 4.9 Google Rating
</h3>

<motion.div
key={reviewIndex}
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
className="bg-white/10 p-10 rounded-3xl text-center"
>

<div className="flex justify-center text-yellow-400 mb-4">
<FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
</div>

<p className="text-gray-300">
"{reviews[reviewIndex].text}"
</p>

<p className="text-purple-400 mt-4">
{reviews[reviewIndex].name}
</p>

</motion.div>

</div>

{/* APPLY FORM */}

{showForm &&(

<div className="fixed inset-0 bg-black/80 flex items-center justify-center">

<div className="bg-gray-900 p-10 rounded-2xl w-96">

<h3 className="text-purple-400 mb-6">
Apply for {course}
</h3>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full p-3 mb-4 bg-black border rounded"
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full p-3 mb-4 bg-black border rounded"
/>

<input
placeholder="Phone"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
className="w-full p-3 mb-6 bg-black border rounded"
/>

<button
onClick={submitApplication}
className="w-full bg-purple-600 py-3 rounded-xl"
>
Submit Application
</button>

</div>

</div>

)}

{/* CERTIFICATE */}

{showCert &&(

<div className="fixed inset-0 bg-black/80 flex items-center justify-center">

<div className="bg-gray-900 p-10 rounded-2xl w-96 text-center">

<FaCertificate className="text-yellow-400 text-5xl mx-auto mb-4"/>

<input
placeholder="Student ID"
className="w-full p-3 mb-4 bg-black border rounded"
/>

<input
placeholder="Email"
className="w-full p-3 mb-6 bg-black border rounded"
/>

<button className="w-full bg-green-600 py-3 rounded-xl">
Download Certificate
</button>

</div>

</div>

)}

{/* CHATBOT */}

<div className="fixed bottom-6 right-6">

<button
onClick={()=>setChatOpen(!chatOpen)}
className="bg-purple-600 p-4 rounded-full"
>
<FaRobot size={26}/>
</button>

{chatOpen &&(

<div className="mt-4 bg-gray-900 w-80 h-96 rounded-2xl p-4 flex flex-col">

<div className="flex-1 overflow-y-auto">

{messages.map((m,i)=>(

<div
key={i}
className={`mb-2 p-2 rounded ${
m.sender==="bot"
?"bg-gray-700"
:"bg-purple-600 text-right"
}`}
>

{m.text}

</div>

))}

</div>

<div className="flex">

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
className="flex-1 p-2 bg-black border"
placeholder="Ask something..."
/>

<button
onClick={sendMessage}
className="bg-purple-600 px-4"
>
Send
</button>

</div>

</div>

)}

</div>

</section>

)

}